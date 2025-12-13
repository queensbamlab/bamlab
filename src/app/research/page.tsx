import { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Projects",
  description: "Queen's University Big Data and Analytics Management Lab",
};

const Page = () => {
  return (
    <>
      <ClientPage />
    </>
  );
};

export default Page;
