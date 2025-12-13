export const director: {
  full_title: string;
  first_name: string;
  full_name: string;
  email: string;
} = {
  full_title: "Dr. Farhana H. Zulkernine",
  first_name: "Farhana",
  full_name: "Farhana H. Zulkernine",
  email: "farhana.zulkernine@queensu.ca",
};

export const directorAwards: { year: number; name: string }[] = [
  {
    year: 2024,
    name: "Fellow, Association for Computing Machinery (ACM)",
  },
  {
    year: 2023,
    name: "Best Paper Award, NeurIPS Conference",
  },
  {
    year: 2020,
    name: "Outstanding Faculty Research Award, University Name",
  },
  {
    year: 2015,
    name: "Sloan Research Fellowship",
  },
];

interface Conferences {
  title: string;
  workshop?: string;
  workshop_url?: string;
  conference: string;
  conference_url: string;
  date: string;
  location: string;
}
export const directorConferences: Conferences[] = [
  {
    title: "Workshop Chair",
    workshop: "Internet of Things in Healthcare Data Analytics (IoTHDA)",
    workshop_url: "https://cs-conferences.acadiau.ca/icth-25/workshops.html",
    conference:
      "International Conference on Current and Future Trends in Information and Communication Technologies in Healthcare (ICTH)",
    conference_url: "https://cs-conferences.acadiau.ca/icth-25/",
    date: "October 28-30, 2025",
    location: "Istanbul, Türkiye",
  },
  {
    title: "Track Chair",
    workshop: "Big Data and Analytics",
    workshop_url: "https://cs-conferences.acadiau.ca/ant-25/#workshop_approved",
    conference:
      "International Conference on Ambient Systems, Networks and Technologies (ANT)",
    conference_url: "https://cs-conferences.acadiau.ca/ant-25/",
    date: "April 22-24, 2025",
    location: "Patras, Greece",
  },
  {
    title: "Program Chair",
    conference:
      "Canadian Artificial Intelligence Association (CAIAC) Conference",
    conference_url: "https://www.caiac.ca/en/conferences/canadianai-2023/home",
    date: "June 5-9, 2023",
    location: "Montréal, Canada",
  },
  {
    title: "Program Chair",
    conference: "IEEE International Conference on Digital Health (ICDH)",
    conference_url: "https://conferences.computer.org/icdh/2022/",
    date: "July 11-15, 2022",
    location: "Barcelona, Spain",
  },
  {
    title: "Program Chair",
    conference: "IEEE International Conference on Digital Health (ICDH)",
    conference_url: "https://conferences.computer.org/icdh/2021/",
    date: "September 5-11, 2021",
    location: "Virtual",
  },
  {
    title: "Program Chair",
    conference: "IBM International Conference CASCON X EVOKE",
    conference_url:
      "https://www-40.ibm.com/ibm/cas/canada/newsletter/202201.pdf",
    date: "November 22-25, 2021",
    location: "Virtual",
  },
];

export const directorInterests = [
  "Streaming Data Management",
  "Streaming Data Analytics",
  "Artificial Intelligence",
  "Deep Learning",
  "Decision Support Systems (DSS)",
  "Cognitive Computing",
  "Knowledge Mangement Systems",
  "Cloud and Services Computing",
];

export const directorApplications = [
  "Medical Information Systems",
  "Wearable Health Monitors",
  "Autonomous Vehicles",
  "Smart Cities",
  "Medical/Law/Financial Analytics",
];

export const directorMembership = [
  "CAIAC",
  "SOSCIP Scientific Committee ",
  "PEO",
  "Queen's Conflicts Analytics Lab",
  "IEEE Computer Society",
  "INSTICC",
];
