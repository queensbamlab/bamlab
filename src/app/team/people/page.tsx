import { Metadata } from "next";

import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Our People",
  description: "Queen's University Big Data and Analytics Management Lab",
};

const PeoplePage = () => {
  return (
    <>
      <ClientPage />
    </>
  );
};

export default PeoplePage;
