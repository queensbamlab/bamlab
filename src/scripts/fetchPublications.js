import fs from "fs";

// CONFIGURATION
// ------------------------------------------------------------------
// Replace with your email to get faster response times (OpenAlex "Polite Pool")
const USER_EMAIL = "martin@calicode.dev";
const AUTHOR_ID = "a5063480277";
// ------------------------------------------------------------------

const BASE_URL = "https://api.openalex.org/works";

/**
 * Formats an author's name to "Lastname, F."
 * @param {string} name - The full name (e.g., "Farhana Zulkernine")
 * @returns {string} - Formatted name (e.g., "Zulkernine, F.")
 */
function formatAuthorName(name) {
  if (!name) return "";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0];

  const lastName = parts[parts.length - 1];
  const firstInitial = parts[0].charAt(0);
  return `${lastName}, ${firstInitial}.`;
}

/**
 * Maps OpenAlex type to our Publication schema type.
 * @param {string} venueName - The venue name
 * @param {string} sourceType - The type of the source (journal, conference, etc.)
 * @returns {string} - "Journal" | "Conference" |  "Book" | "Book Chapter"
 */
function mapPublicationType(venueName = "", sourceType = "") {
  // Check for ArXiv
  if (venueName && venueName.toLowerCase().includes("arxiv")) {
    return "Preprint";
  }

  // Check for Conference in venue name
  if (venueName && venueName.toLowerCase().includes("conference")) {
    return "Conference";
  }

  // Map OpenAlex types
  switch (sourceType) {
    case "journal-article":
      return "Journal";
    case "proceedings-article":
      return "Conference";
    case "preprint":
      return "Preprint";
    case "book":
      return "Book";
    case "book-chapter":
      return "Book Chapter";
    default:
      return "Other";
  }
}

/**
 * Fetches data from OpenAlex and cleans it up.
 */
import path from "path";

// Function to read the existing publications from the TS file
function readExistingPublications() {
  const filePath = path.join(__dirname, "../lib/publications.ts");
  if (!fs.existsSync(filePath)) {
    console.error("❌ publications.ts not found!");
    return [];
  }

  const content = fs.readFileSync(filePath, "utf-8");

  // Regex to extract the array content inside `export const Publications: PublicationProps[] = [...]`
  const match = content.match(
    /export const Publications: PublicationProps\[\] = \[\s*([\s\S]*?)\s*\];/
  );

  if (!match) {
    console.error("❌ Could not find the Publications array in the file.");
    return [];
  }

  // This is a bit risky but we're parsing the JS object array string into JSON if possible,
  // or we can just keep the raw content and manualy parse IDs for deduplication.
  // Given we just need to check for existence, regexing for IDs is safer than evaling code.
  const idMatches = content.matchAll(/id:\s*"([^"]+)"/g);
  const existingIds = new Set();
  for (const m of idMatches) {
    existingIds.add(m[1]);
  }

  return { content, existingIds, filePath };
}

/**
 * Fetches data from OpenAlex and merges with existing data.
 */
async function fetchAndPopulate() {
  try {
    const {
      content: fileContent,
      existingIds,
      filePath,
    } = readExistingPublications();
    if (!fileContent) return;

    console.log(
      `📡 Connecting to OpenAlex API... searching for recent works by author "${AUTHOR_ID}"`
    );

    // Fetch only the 10 most recent
    const params = new URLSearchParams({
      filter: `author.id:${AUTHOR_ID}`,
      mailto: USER_EMAIL,
      sort: "publication_year:desc",
      per_page: 10,
    });

    const url = `${BASE_URL}?${params.toString()}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const fetchedWorks = data.results;

    // Filter out works that already exist
    const newWorks = fetchedWorks.filter((work) => !existingIds.has(work.id));

    if (newWorks.length === 0) {
      console.log("✅ No new publications found.");
      return;
    }

    console.log(`✨ Found ${newWorks.length} new publications.`);

    // Map new works to strings
    const newEntriesString = newWorks
      .map((work) => {
        let venueName =
          work.primary_location?.source?.display_name ||
          work.primary_location?.raw_source_name ||
          "Unknown Venue";

        const sourceType =
          work.primary_location?.source?.type ||
          work.primary_location?.raw_type;
        const type = mapPublicationType(venueName, sourceType);

        if (type === "Preprint" && venueName === "Unknown Venue") {
          venueName = "Preprint";
        }

        // Format as valid TS object string
        return `  {
    id: "${work.id}",
    year: ${work.publication_year},
    title: ${JSON.stringify(work.title)},
    authors: ${JSON.stringify(
      work.authorships.map((a) => formatAuthorName(a.author.display_name))
    )},
    venue: ${JSON.stringify(venueName)},
    type: "${type}",
    link: ${
      work.primary_location?.landing_page_url
        ? `"${work.primary_location.landing_page_url}"`
        : "undefined"
    },
    pdf: ${
      work.primary_location?.pdf_url
        ? `"${work.primary_location.pdf_url}"`
        : "undefined"
    },
  },`;
      })
      .join("\n");

    // Insert new entries at the start of the array
    const updatedContent = fileContent.replace(
      "export const Publications: PublicationProps[] = [",
      `export const Publications: PublicationProps[] = [\n${newEntriesString}`
    );

    fs.writeFileSync(filePath, updatedContent);
    console.log(
      `📂 Added ${newWorks.length} new publications to "src/lib/publications.ts"`
    );
  } catch (error) {
    console.error("❌ Failed to fetch publications:", error.message);
  }
}

// Run the function
fetchAndPopulate();
