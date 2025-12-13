import { Metadata } from "next";
import ClientPage from "./page.client";
import { getPublications } from "@/lib/utils";

export const metadata: Metadata = {
  title: "BAM Lab | Queen's University",
  description: "Queen's University Big Data and Analytics Management Lab",
};

export default async function Home() {
  const publications = await getPublications();
  return (
    <>
      <ClientPage publications={publications.slice(0, 4)} />
    </>
  );
}
