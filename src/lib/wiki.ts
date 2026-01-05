import {
  FileText,
  MessageSquare,
  BookOpen,
  GraduationCap,
  Server,
  Users,
  Shield,
} from "lucide-react";

export const templates = [
  {
    title: "PhD Breadth Proposal Template",
    description:
      "Should preferably before starting school or early after starting",
    file: "/wiki/breadth_proposal_template.docx",
    format: "docx",
    updated: "2025-12",
  },
  {
    title: "PhD Topic Proposal Template",
    description: "Standard PhD topic proposal",
    file: "/wiki/TopicProposal_Template.docx",
    format: "docx",
    updated: "2025-12",
  },
  {
    title: "MSc Research Thesis Sample",
    description: "Standard MSc Thesis",
    file: "/wiki/sample_thesis_MSc.pdf",
    format: "pdf",
    updated: "2025-12",
  },
  {
    title: "CISC/COGS 499 Project Proposal Template",
    description: "Should be submitted by the end of October.",
    samples: [
      { title: "Sample CISC 500", file: "/wiki/Project_Proposal_500.docx" },
      { title: "Sample CISC 499", file: "/wiki/Project_Proposal_499.docx" },
    ],
    file: "/wiki/proposal499.docx",
    format: "docx",
    updated: "2025-12",
  },
  {
    title: "QSC CISC/COGS 499 Project Poster Template",
    description: "Should be submitted by March 22.",
    samples: [
      {
        title: "Sample 1",
        file: "/wiki/sample_poster1.pptx",
      },
      { title: "Sample 2", file: "/wiki/sample_poster2.pptx" },
    ],
    file: "/wiki/QSC_Poster_Template_24x36.pptx",
    format: "pptx",
    updated: "2025-12",
  },
  {
    title: "CISC/COGS 499 Project Agreement Form",
    description: "Should be signed and submitted by end of November.",
    file: "/wiki/project_agreement499.docx",
    format: "docx",
    updated: "2025-12",
  },
  {
    title: "CISC/COGS 499 Project Report Template",
    description: "Should be submitted by the end of Winter term.",
    file: "/wiki/report499.docx",
    format: "docx",
    updated: "2025-12",
  },
  {
    title: "Sample MSc Project Report",
    description: "Standard MSc Report",
    format: "pdf",
    file: "/wiki/Sample_MSc_Project.pdf",
    updated: "2025-12",
  },
  {
    title: "Sample Capstone (CISC 500) Report",
    description: "Standard undergraduate capstone project report.",
    file: "/wiki/Sample_499_Report.pdf",
    format: "pdf",
    updated: "2025-12",
  },
];

export const communicationTools = [
  {
    name: "Slack",
    description:
      "We use Slack as the group and individual communication tool. Log in to queensbam (invite only).",
    workspace: "queensbam",
    icon: MessageSquare,
    link: "http://queensbam.slack.com/",
    channels: ["#general"],
  },
  {
    name: "Microsoft Teams",
    description:
      "Use institutional log in and enter your Queen's net ID and password, then look for the BAM Lab Teams group.",
    workspace: "BAM Lab",
    icon: Users,
    link: "https://www.queensu.ca/its/microsoft-office-365/teams",
    channels: ["General", "Weekly Meetings", "Project Channels"],
  },
];

export const handbooks = [
  {
    title: "BAM Lab Handbook",
    description:
      "Comprehensive guide to lab policies, expectations, and procedures",
    pages: 45,
    icon: BookOpen,
  },
  {
    title: "Writing Guide",
    description:
      "Best practices for academic writing, paper structure, and common pitfalls",
    pages: 28,
    icon: FileText,
  },
  {
    title: "Computing Resources Guide",
    description:
      "How to access and use lab servers, GPU clusters, and cloud resources",
    pages: 32,
    icon: Server,
  },
  {
    title: "Graduate Student Handbook",
    description:
      "Queen's School of Computing graduate program requirements and milestones",
    pages: 60,
    icon: GraduationCap,
  },
  {
    title: "Research Ethics Guide",
    description:
      "Guidelines for ethical research, data handling, and human subjects research",
    pages: 24,
    link: "https://www.cs.queensu.ca/graduate/phd/comprehensive.php",
    icon: Shield,
  },
];

export const quickLinks = [
  {
    name: "Queen's Library",
    url: "https://library.queensu.ca/",
    description: "Access journals and databases",
  },
  {
    name: "Overleaf",
    url: "https://www.overleaf.com/",
    description: "Collaborative LaTeX editor",
  },
  {
    name: "GitHub Organization",
    url: "https://github.com/queensbamlab",
    description: "BAM Lab code repositories",
  },
  {
    name: "Queen's VPN",
    url: "https://login.proxy.queensu.ca/public/proxystart.html",
    description: "Remote access to campus resources",
  },
];

export const computingResources = [
  {
    name: "BAM GPU Cluster",
    specs: "8x NVIDIA A100 80GB, 256GB RAM per node",
    access: "SSH with Queen's credentials",
    status: "Online",
  },
  {
    name: "Cloud Credits",
    specs: "AWS, GCP, and Azure research credits available",
    access: "Request through Professor Zulkernine",
    status: "Available",
  },
  {
    name: "Lab Workstations",
    specs: "RTX 4090, 64GB RAM, dedicated for lab members",
    access: "Physical access in Goodwin Hall",
    status: "Online",
  },
];
