interface NewsProps {
  date: string;
  title: string;
  image?: string;
  description?: string;
  featured: boolean;
}

interface EventProps {
  date: string;
  endDate?: string;
  title: string;
  time: string;
  location: string;
  speaker: string;
}

export const upcomingEvents: EventProps[] = [
  {
    date: "April 5, 2026",
    title: "Guest Lecture: AI Ethics in Research",
    time: "2:00 PM - 4:00 PM",
    location: "Goodwin Hall, Room 524",
    speaker: "Dr. Emily Watson, University of Toronto",
  },
  {
    date: "January 12, 2026",
    title: "BAM Lab Research Seminar",
    time: "10:00 AM - 12:00 PM",
    location: "Online (Zoom)",
    speaker: "PhD Candidate Presentations",
  },
  {
    date: "December 20, 2026",
    endDate: "December 22, 2026",
    title: "Workshop on Big Data in Healthcare",
    time: "9:00 AM - 5:00 PM",
    location: "Queen's University Conference Centre",
    speaker: "Multiple Speakers",
  },
  {
    date: "December 7, 2026",
    title: "Industry Partner Showcase",
    time: "1:00 PM - 6:00 PM",
    location: "Innovation Park",
    speaker: "BAM Lab & Industry Partners",
  },
];

export const News: NewsProps[] = [
  {
    date: "Mar 15, 2025",
    title: "Lab receives NSERC Grant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit, lectus a vehicula dapibus, ex diam efficitur felis, eget euismod.",
    featured: true,
  },
  {
    date: "Mar 08, 2025",
    title: "Lab receives NSERC Grant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit, lectus a vehicula dapibus, ex diam efficitur felis, eget euismod.",
    image: "imgs/bamlab_people.png",
    featured: true,
  },
  {
    date: "Mar 15, 2025",
    title: "Lab receives NSERC Grant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nibh eget diam finibus ornare a vitae tellus. Ut tempor.",
    featured: false,
  },
  {
    date: "Mar 15, 2025",
    title: "Lab receives NSERC Grant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis magna accumsan pretium dictum. Mauris posuere felis sit amet nunc ultricies interdum. Nam vel diam.",
    featured: false,
  },
  {
    date: "Mar 15, 2025",
    title: "Lab receives NSERC Grant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend luctus faucibus. Proin eu orci sit amet dui eleifend bibendum vel eget diam. Pellentesque eu.",
    featured: false,
  },
  {
    date: "Mar 15, 2025",
    title: "Lab receives NSERC Grant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula luctus massa non volutpat. In euismod est eu mi iaculis hendrerit. Morbi hendrerit tempor ante.",
    featured: false,
  },
  {
    date: "Mar 15, 2025",
    title: "Lab receives NSERC Grant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac semper tortor. Aliquam eget quam vestibulum, gravida sem non, facilisis dolor. Proin sed erat at.",
    featured: false,
  },
];
