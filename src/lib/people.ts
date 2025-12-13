export interface PersonProps {
  name: string;
  role: string; // PhD Candidate, Postdoc Researcher, Masters Student, etc.
  image?: string; // Reference the items using "/image-name.jpg"
  date?: string; // Date started with the lab (etc. "Jan 2024")
  email: string;
  website?: string;
  linkedin?: string;
  topic?: string; // Topic of study
}

export interface PeopleProps {
  faculty: PersonProps[];
  postdocs: PersonProps[];
  phD: PersonProps[];
  masters: PersonProps[];
  undergrad: PersonProps[];
}

export const People: Record<
  "faculty" | "postdocs" | "phD" | "masters" | "undergrad",
  PersonProps[]
> = {
  faculty: [
    {
      name: "Dr. Farhana H. Zulkernine",
      role: "Lab Director & Professor",
      email: "farhana.zulkernine@queensu.ca",
      image: "/imgs/zulkernine.jpg",
      linkedin: "https://www.linkedin.com/in/farhanazulkernine/",
    },
  ],
  postdocs: [],
  phD: [
    {
      name: "Jing Tao",
      role: "PhD Student",
      date: "Jan 2025",
      email: "student@queensu.ca",
      image: "/imgs/people/jing_tao.jpg",
      topic:
        "Goal oriented dialogue system for information extraction in remote service provisioning.",
    },
    {
      name: "Nafiz Sadman",
      role: "PhD Student",
      date: "Sep 2024",
      email: "student@queensu.ca",
      image: "/imgs/people/nafiz_sadman.png",
      website: "https://nafiz95.github.io/",
      linkedin: "https://www.linkedin.com/in/nafiz-sadman/",
      topic:
        "Explainable AI and rule extraction from multimodal image and text data.",
    },
    {
      name: "Farida Mohamad",
      role: "PhD Student",
      date: "Jan 2024",
      email: "farida.mohamad@queensu.ca",
      image: "/imgs/people/farida_mohamad.jpg",
      linkedin: "https://www.linkedin.com/in/farida-alaaeldin-mostafa/",
      topic:
        "Remote monitoring of vital signs and predictive and prescriptive medical data analytics.",
    },
    {
      name: "Aman Anand",
      role: "PhD Student",
      date: "Sep 2023",
      email: "student@queensu.ca",
      image: "/imgs/people/aman_anand.png",
      website: "https://www.amananand.ca/",
      linkedin: "https://www.linkedin.com/in/aman-anand-phd/",
      topic: "Situation aware human activity monitoring.",
    },
    {
      name: "Amir Eskandari",
      role: "PhD Student",
      date: "Sep 2023",
      email: "student@queensu.ca",
      image: "/imgs/people/amir_eskandari.png",
      website: "https://ameskandari.github.io/",
      linkedin: "https://www.linkedin.com/in/ameskandari/",
      topic:
        "Multimodal graph data analytics for personalized conversational AI in human computer interation.",
    },
    {
      name: "Elyas Rashno",
      role: "PhD Student",
      date: "Sep 2022",
      email: "student@queensu.ca",
      image: "/imgs/people/elyas_rashno.png",
      topic:
        "Multimodal streaming data management and analysis for Triage-bot.",
    },
    {
      name: "Yuhao Chen",
      role: "PhD Student",
      date: "Sep 2021",
      email: "student@queensu.ca",
      image: "/imgs/people/yuhao_chen.jpg",
      topic:
        "Using deep learning for knowledge extraction from unstructure text data.",
    },
  ],
  masters: [],
  undergrad: [],
};

export interface PreviousPersonProps {
  name: string;
  period: string;
  cosupervised?: boolean;
  incomplete?: boolean;
  url?: string;
  funding?: string[];
  project?: boolean;
  eng?: boolean;
  type?: string;
  topic?: string;
}

export interface PreviousPeopleProps {
  faculty: PreviousPersonProps[];
  postdocs: PreviousPersonProps[];
  phD: PreviousPersonProps[];
  masters: PreviousPersonProps[];
  undergrad: PreviousPersonProps[];
  highschool: PreviousPersonProps[];
}

export const PreviousPeople: Record<
  "faculty" | "postdocs" | "phD" | "masters" | "undergrad" | "highschool",
  PreviousPersonProps[]
> = {
  faculty: [],
  postdocs: [
    {
      name: "Hasan Zafari",
      period: "2018-2022",
      funding: ["Mitacs", "CIMVHR", "IBM", "Pfizer"],
      topic: "Using Advanced Analytics to Understand PTSD (UAAUP)",
    },
    {
      name: "Haruna Isah",
      period: "2017-2019",
      funding: ["SOSCIP", "Gnowit", "IBM"],
      topic:
        "A Multilevel Streaming Data Analytics Infrastructure for Predictive Analytics",
    },
  ],
  phD: [
    {
      name: "Ahmed Harby",
      period: "2020-2025",
      topic:
        "Distributed cloud-based knowledge graph architecture, management and querying.",
    },
    {
      name: "Mojtaba Moattari",
      period: "2020-2024",
      incomplete: true,
      topic:
        "Machine cognition using multimodal asynchronous data stream processing and concept learning.",
    },
    {
      name: "Donghao Qiao",
      period: "2019-2023",
      topic: "Pattern learning from video data for autonomous vehicles.",
    },
    {
      name: "Sazia Mahfuz",
      period: "2017-2023",
      topic: "A smart data profiling framework.",
    },
    {
      name: "Ftoon Kedwan",
      period: "2017-2019",
      cosupervised: true,
      incomplete: true,
      topic: "A hybrid knowledge management doctoral student framework.",
    },
    {
      name: "Tarek Ahmed",
      period: "2016",
      cosupervised: true,
      incomplete: true,
      topic:
        "Proactive autoscaling of resources for steam processing engines in the cloud.",
    },
    {
      name: "Rizwan Mian",
      period: "2012-2014",
      cosupervised: true,
      topic:
        "Determining cost-effective resource configurations for executing data-intensive workloads in public clouds.",
    },
  ],
  masters: [
    {
      name: "Jacqueline Chan",
      period: "2021-2025",
      topic: "Authentication and password based security.",
    },
    {
      name: "Nafiz Sadman",
      period: "2022-2024",
      topic: "Security and authentication of user data for Triage-bot.",
    },
    {
      name: "Jackson Cai",
      period: "2023-2024",
      topic:
        "Analysis of medical structured and unstructured data for disease analysis and prediction.",
    },
    {
      name: "Zihan Zhang",
      period: "2023-2024",
      topic:
        "Analyzing radar point cloud data and video data for human activity recognition.",
    },
    {
      name: "Drishti Sharma",
      period: "2023-2024",
      project: true,
      topic:
        "Developing a dialogue system for a chat bot for medical triage system.",
    },
    {
      name: "Vidhi Kokel",
      period: "2022-2023",
      eng: true,
      topic:
        "Analysis of medical structured and unstructured data for a study on Osteoarthritis funded by Pfizer.",
    },
    {
      name: "Ruikang Luo",
      period: "2021-2023",
      cosupervised: true,
      topic:
        "Automatic caption generation using multimodal video and text data.",
    },
    {
      name: "Ian Pepin",
      period: "2021-2023",
      cosupervised: true,
      topic: "Security and privacy for medical informatics on the cloud.",
    },
    {
      name: "Sam Baranek",
      period: "2021-2023",
      cosupervised: true,
      topic:
        "Facial image analytics for identity verification and emotion recognition.",
    },
    {
      name: "Haoran Qi",
      period: "2021-2023",
      project: true,
      topic: "Human activity recognition using wearable sensors.",
    },
    {
      name: "Vignesh Rao",
      period: "2021-2023",
      project: true,
      cosupervised: true,
      topic: "Autonomous Vehicular Sensor Data Analytics.",
    },
    {
      name: "Austin Carthy",
      period: "2021-2023",
      topic: "Detecting cyber threats in emails.",
    },
    {
      name: "Zili Lou",
      period: "2020-2023",
      topic: "Email categorization and automatic email response composition.",
    },
    {
      name: "Calen Irwin",
      period: "2020-2023",
      topic: "Vehicular sensor data classification for anomaly detection.",
    },
    {
      name: "Martin Woo",
      period: "2020-2022",
      topic:
        "	Hierarchical clustering of data patterns from streaming IoT sensors for human activity recognition.",
    },
    {
      name: "Amtul Haq Ayesha",
      period: "2020-2022",
      topic:
        "Video and sensor based biometric data measurement using AI techniques.",
    },
    {
      name: "Karen Batch",
      period: "2019-2022",
      cosupervised: true,
      topic:
        "Annotated radiology text reports analytics for studying cancer metastasis.",
    },
    {
      name: "Yuhao Chen",
      period: "2019-2021",
      topic: "A Three-phase Intelligent Question answering system.",
    },
    {
      name: "Isaac Hogan",
      period: "2019-2021",
      cosupervised: true,
      topic: "Activity recognition from skeleton video data.",
    },
    {
      name: "Prithila Angkan",
      period: "Summer 2020",
      eng: true,
      topic: "Human activity recognition using video of skeleton data.",
    },
    {
      name: "Junaid Charaniya",
      period: "2019-2020",
      eng: true,
      topic:
        "Clustering streaming IoT human activity data from sensor devices.",
    },
    {
      name: "Mohammed Hamadah Gasmallah",
      period: "2018-2020",
      cosupervised: true,
      topic: "An Analysis of Motion Smoothness in Video Object Detection.",
    },
    {
      name: "Jason Lam",
      period: "2018-2020",
      topic: "Deep Learning for Legal and Medical Text Analytics.",
    },
    {
      name: "Tariq Abughofa",
      period: "2016-2018",
      topic: "Dynamic graph processing with streaming data.",
    },
    {
      name: "Chanderdhar Sharma",
      period: "2017-2018",
      project: true,
      topic: "Unstructured text mining and topic modeling.",
    },
    {
      name: "Niventhini Indrajith",
      period: "2017-2018",
      project: true,
      topic: "Text mining for disease diagnostic.",
    },
    {
      name: "Mandeep Kandhari",
      period: "2017-2018",
      eng: true,
      topic: "An intelligent human-machine voice interaction system.",
    },
    {
      name: "Dharmitha Ajerla",
      period: "2017-2018",
      project: true,
      topic:
        "An edge computing framework for fall detection using wearable sensor devices.",
    },
    {
      name: "Dev Shah",
      period: "2017-2018",
      project: true,
      topic: "Stock market prediction.",
    },
    {
      name: "Hadeel Alghamdi",
      period: "2017-2018",
      project: true,
      cosupervised: true,
      topic: "Distributed DBMS in WINGS workflow management system.",
    },
    {
      name: "Kireet Bhat",
      period: "2016-2017",
      project: true,
      topic: "Extending Spark for cloud-based big data analytics.",
    },
    {
      name: "Azadeh Eftekhari",
      period: "2013-2016",
      cosupervised: true,
      topic:
        "Binary: A framework for Big data Integration for ad-hoc Querying.",
    },
    {
      name: "Mastoureh Hasanezhad",
      period: "2012-2014",
      cosupervised: true,
      topic: "Managing long-running queries using query progress.",
    },
  ],
  undergrad: [
    {
      name: "Alan Chen",
      period: "2024-2025",
      topic: "Skeleton-based Human Activity Recognition.",
    },
    {
      name: "Wanting Huang",
      period: "2024-2025",
      topic:
        "A personalized conversational bot leveraged by a backend storage infrastructure.",
    },
    {
      name: "Zhimu Wang",
      period: "2023-2024",
      topic:
        "Comparing open source large language models in summarizing medical text data.",
    },
    {
      name: "Ruoshi Xia",
      period: "2023-2024",
      topic: "Human activity recognition using video data.",
    },
    {
      name: "Josh Otten",
      period: "2022-2023",
      topic:
        "Face recognition and advanced feature extraction from video data.",
    },
    {
      name: "Jing Tao",
      period: "2022-2023",
      topic: "Medical data analytics with advanced annotation tools.",
    },
    {
      name: "Somiona Tian",
      period: "2022-2023",
      topic: "Medical data analytics with advanced annotation tools.",
    },
    {
      name: "Wanqing Li",
      period: "2022-2023",
      topic: "	Emotion detection from video data.",
    },
    {
      name: "Feiting Yang",
      period: "2022-2023",
      topic:
        "Noise reduction from rPPG data for face video based vital sign measurement.",
    },
  ],
  highschool: [],
};
