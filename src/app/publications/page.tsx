import { Metadata } from "next";
import { getPublications } from "@/lib/utils";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Publications",
};

const Page = async () => {
  const publications = await getPublications();

  return (
    <>
      <ClientPage publications={publications} />
    </>
  );
};

export default Page;
