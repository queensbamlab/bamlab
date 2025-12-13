import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import {
  PreviousPeople,
  PreviousPeopleProps,
  People,
  PeopleProps,
} from "./people";

import { Publications } from "./publications";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function chunkAlternating(items: string[]) {
  const result = [];
  let i = 0;
  let toggle = true;

  while (i < items.length) {
    const chunkSize = toggle ? 3 : 2;
    result.push(items.slice(i, i + chunkSize));
    i += chunkSize;
    toggle = !toggle;
  }

  return result;
}

export function splitIntoTwoRows(items: string[]) {
  const midpoint = Math.ceil(items.length / 2);
  return [items.slice(0, midpoint), items.slice(midpoint)];
}

function normalize(name: string): string {
  return name.toLowerCase().trim();
}

export function getAllLabMemberNames(
  currentPeople: PeopleProps,
  alumni: PreviousPeopleProps
): Set<string> {
  const currentArrays = Object.values(currentPeople);
  const alumniArrays = Object.values(alumni);
  const allMembers = [...currentArrays, ...alumniArrays].flat();
  const names = allMembers.map((member) => normalize(member.name));

  return new Set(names);
}

export async function getPublications() {
  const labMemberSet = getAllLabMemberNames(
    People as PeopleProps,
    PreviousPeople as PreviousPeopleProps
  );

  const processedData = Publications.map((pub) => ({
    ...pub,
    enrichedAuthors: pub.authors.map((authorName) => {
      const isMember = Array.from(labMemberSet).some((memberFullName) => {
        // 1. Get the last name of the lab member (e.g. "Smith" from "Jane Smith")
        const memberLastName = memberFullName.split(" ").pop();

        // 2. Check if that last name appears in the publication author string
        // (e.g. check if "Smith" is inside "Smith, J.")
        return authorName.toLowerCase().includes(memberLastName!);
      });

      return {
        name: authorName,
        isLabMember: isMember,
      };
    }),
  }));
  return processedData;
}

export function parseRawCitation(text: string) {
  let clean = text.trim();

  // 1. EXTRACT LINK (URL or DOI)
  const linkMatch = clean.match(/(https?:\/\/[^\s]+|doi\.org[^\s]+)/);
  const link = linkMatch ? linkMatch[0] : "";
  if (link) clean = clean.replace(link, "").trim();

  // 2. EXTRACT YEAR
  // Look for (2025) or (2025). at the end
  const yearMatch = clean.match(/\((\d{4})\)/);
  const year = yearMatch ? parseInt(yearMatch[1]) : new Date().getFullYear();
  if (yearMatch) clean = clean.replace(yearMatch[0], "").trim();

  // Remove trailing period after year removal (e.g. "Venue. (2025)." -> "Venue.")
  clean = clean.replace(/\.$/, "");

  // 3. THE SMART SPLIT (The Logic Fix)
  // We want to split by ". " BUT we need to be careful.
  // Strategy:
  // A. Check for "et al." explicitly. This is a hard boundary between Authors and Title.
  // B. If found, split there first.

  let authorsStr = "";
  let restOfString = "";

  if (clean.includes("et al.")) {
    // Split on "et al."
    const parts = clean.split("et al.");
    authorsStr = parts[0];
    // parts[1] is now " Title. Venue"
    restOfString = parts.slice(1).join("et al.").trim();
  } else {
    // If no "et al", we have to guess the split.
    // Authors usually have the most commas.
    // Let's split by ". " and assume the first chunk is authors.
    const parts = clean.split(". ");
    authorsStr = parts[0];
    restOfString = parts.slice(1).join(". ").trim();
  }

  // 4. SEPARATE TITLE FROM VENUE
  // Now "restOfString" contains "Title. Venue"
  // We split by ". " again.
  // Usually: Title comes first. Venue comes last.

  let title = "";
  let venue = "";

  // Split restOfString by ". "
  // However, we must ignore dots inside common acronyms if possible.
  // Simple heuristic: The Venue is usually the LAST segment.
  const titleVenueSegments = restOfString.split(". ");

  if (titleVenueSegments.length >= 2) {
    // Last part is Venue, everything before is Title
    venue = titleVenueSegments.pop() || ""; // Take the last one
    title = titleVenueSegments.join(". "); // Join the rest back as Title
  } else {
    // Only one part? It's likely the Title, and Venue is missing or implicit.
    title = restOfString;
    venue = "";
  }

  // 5. CLEAN UP AUTHORS
  // Remove trailing commas/dots from the split
  authorsStr = authorsStr.trim().replace(/[.,]$/, "");

  let processedAuthors: string[] = [];

  if (authorsStr.includes(".,")) {
    // Format: "Last, I., Last, I."
    processedAuthors = authorsStr
      .split(".,")
      .map((a) => {
        let name = a.trim();
        // Add dot back to initial if missing
        if (name.length > 0 && !name.endsWith(".")) name += ".";
        return name;
      })
      .filter((a) => a.length > 2);
  } else {
    // Format: "Last I, Last I" (Less common but possible)
    processedAuthors = authorsStr.split(",").map((a) => a.trim());
  }

  // 6. INFER TYPE
  let type = "Conference";
  const vLower = venue.toLowerCase();
  if (
    vLower.includes("journal") ||
    vLower.includes("discov") ||
    vLower.includes("trans") ||
    vLower.includes("vol")
  )
    type = "Journal";
  if (vLower.includes("book")) type = "Book";

  return {
    title,
    authors: processedAuthors,
    venue,
    year,
    type,
    link,
  };
}
