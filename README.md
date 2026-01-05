# Big Data & Analytics Management (BAM) Lab Website

Official website for Queen's University's BAM Laboratory, directed by [Dr. Farhana H. Zulkernine](https://www.linkedin.com/in/farhanazulkernine/).

This project is built using [Next.js](https://nextjs.org/) (React), [Tailwind CSS](https://tailwindcss.com/) for styling, and [Shadcn UI](https://ui.shadcn.com/) components. It is statically generated and deployed to GitHub Pages.

## 🚀 Getting Started

To run the project locally, ensure you have **Node.js** (v18+) and **PNPM** installed.

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Build for Production (Optional)

To test the production build locally:

```bash
pnpm build
pnpm start
```

---

## 📂 Managing System Data

The website's content is **not** stored in a database. Instead, it uses structured TypeScript files to manage data easily without needing a backend.

All data files are located in `src/lib/`.

| File Path                 | Description                                                    |
| ------------------------- | -------------------------------------------------------------- |
| `src/lib/people.ts`       | Manage Faculty, PhDs, Postdocs, and Alumni lists.              |
| `src/lib/news.ts`         | Add/Edit "Latest News" items and Upcoming Events.              |
| `src/lib/research.ts`     | Define Research Areas and Projects.                            |
| `src/lib/publications.ts` | Manage the list of publications (Conferences, Journals, etc.). |
| `src/lib/wiki.ts`         | Manage links and resources for the Wiki page.                  |
| `src/lib/site-config.ts`  | General site settings (Nav items, Footer info).                |

### How to Update Content

1. Open the relevant file in `src/lib/`.
2. Add a new object to the array or modify existing fields.
3. Save the file.
4. If the dev server is running, the changes will reflect immediately.

### Managing Assets

Static assets are stored in the `public/` directory.

#### 📸 Images (`public/imgs/`)

- **People:** Store headshots in `public/imgs/people/`.
- **Logos:** Store sponsor or partner logos in `public/imgs/logos/`.
- **General:** Store other site images in `public/imgs/`.
- **Reference:** `/imgs/people/john_doe.jpg`

#### 📄 Papers (`public/papers/`)

- Store PDF files for publications here.
- **Reference:** `/papers/paper_name.pdf`

#### 📚 Wiki Files (`public/wiki/`)

- Store templates, handbooks, and other resources for the internal Wiki here.
- **Reference:** `/wiki/template_name.docx` (Note: some legacy code might not need the leading slash, check specific usage)

**Important:** Assets in the `public/` folder are served at the root URL.

---

## 🌍 Deployment

This website uses **GitHub Actions** to automatically build and deploy to GitHub Pages.

### How to Deploy

You simply need to **push your changes to the `main` branch**.

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Updated lab news and publications"
   ```
2. Push to GitHub:
   ```bash
   git push origin main
   ```

### What happens next?

1. The GitHub Action defined in `.github/workflows/nextjs.yml` will trigger.
2. It will install dependencies, build the static site, and export it to the `./out` folder.
3. The content is then deployed to the `gh-pages` environment automatically.

**Note:** Ensure your repository Settings > Pages is set to deploy from **GitHub Actions**, not a branch.
