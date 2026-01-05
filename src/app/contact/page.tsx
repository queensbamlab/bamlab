import { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Queen's University Big Data and Analytics Management Lab",
};

const ContactPage = () => {
  return (
    <>
      <ClientPage />
    </>
  );
};

export default ContactPage;
