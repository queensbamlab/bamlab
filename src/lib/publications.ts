export const notableVenues: string[] = [
  "CSUR",
  "IEEE Access",
  "IEEE TETCI",
  "Radiology",
  "SIGKDD",
  "ICDM",
  "ICMLA",
  "ICDE",
  "BIBM",
];

export interface PublicationProps {
  year: number;
  title: string;
  authors: string[];
  venue: string;
  specialIssue?: string;
  type: "Journal" | "Conference" | "Workshop" | "Book" | "Book Chapter";
  workshop?: string;
  award?: string;
  abstract?: string;
  link?: string;
}

export const Publications: PublicationProps[] = [
  {
    year: 2025,
    title:
      "Depth-guided self-supervised human keypoint detection via cross-modal distillation",
    authors: ["Anand, A.", "Rashno, E.", "Eskandari, A.", "Zulkernine, F."],
    venue: "International Conference on Machine Vision",
    type: "Conference",
    link: "https://arxiv.org/abs/2410.14700",
  },
  {
    year: 2025,
    title:
      "CNN-CCA: A Deep Learning Approach for Anomaly Detection in Metro Rail Sensor Time-Series Data",
    authors: [
      "Rao, V.",
      "Eskandari, A.",
      "Zulkernine, F.",
      "Helwa, M.",
      "Beach, D.",
    ],
    venue: "Machine Learning with Applications",
    type: "Journal",
  },
  {
    title:
      "A two-phase hybrid clustering framework exploring transitional activities in HAR",
    authors: ["Woo, M.", "Abdulsalam, H.M.", "Zulkernine, F.", "Harby, A.A."],
    venue: "Discover Artificial Intelligence",
    year: 2025,
    type: "Journal",
    link: "https://doi.org/10.1007/s44163-025-00503-6",
  },
  {
    year: 2025,
    title: "Transformer-based human action recognition using skeleton heatmap",
    authors: ["Teng, A.", "Anand, A.", "Zulkernine, F."],
    venue:
      "International Conference on Current and Future Trends of Information and Communication Technologies in Healthcare (ITCH)",
    workshop:
      "International Workshop on Internet of Things (IoT) in Healthcare Data Analytics (IoTHDA)",
    type: "Workshop",
  },
  {
    title:
      "Examining Feasibility and Efficacy of Traditional Stream Clustering Algorithms on Complex Human Activity Recognition Data",

    authors: ["Woo, M.", "Zulkernine, F.", "Abdulsalam, H.M.", "Harby, A.A."],
    venue:
      "IEEE Annual Computers, Software, and Applications Conference (COMPSAC)",
    year: 2023,
    type: "Conference",
    link: "https://doi.org/10.1109/COMPSAC57700.2023.00046",
  },
  {
    year: 2024,
    title:
      "CoBEVFusion Cooperative Perception with LiDAR-Camera Bird's Eye View Fusion",
    authors: ["Qiao, D.", "Zulkernine, F.", "Anand, A."],
    venue:
      "International Conference on Digital Image Computing: Techniques and Applications (DICTA)",
    type: "Conference",
  },
  {
    title: "Architecture for an Autonomic Web Services Environment",
    year: 2005,
    venue: "International Conference on Enterprise Information Systems (ICEIS)",
    workshop:
      "Workshop on Web Services and Model-Driven Enterprise Information Systems (WSMDEIS)",
    authors: [
      "Tian, W.",
      "Zulkernine, F.",
      "Zebedee, J.",
      "Powley, W.",
      "Martin, P.",
    ],
    type: "Workshop",
    link: "",
  },
  {
    title:
      "Conceptual Framework for a Comprehensive Service Management Middleware",
    year: 2007,
    venue: "IEEE Advanced Information on Networking and Applications (AINA)",
    workshop:
      "Workshop on Service Oriented Architectures in Converging Networked Environments (SOCNE)",
    authors: ["Zulkernine, F.", "Martin, P."],
    type: "Workshop",
    link: "",
  },
  {
    title: "Reputation-Enhanced QoS-based Web Services Discovery",
    year: 2007,
    venue: "IEEE International Conference on Web Services (ICWS)",
    authors: ["Xu, Z.", "Martin, P.", "Powley, W.", ", Zulkernine, F."],
    type: "Conference",
    link: "",
  },
  {
    title:
      "A Middleware Solution to Monitoring Composite Web Services-based Processes",
    year: 2008,
    venue: "IEEE International Conference on Web Services (ICWS)",
    workshop: "Workshop on Service Intelligence and Computing (SIC)",
    authors: ["Zulkernine, F.", "Martin, P.", ", Wilson, K"],
    type: "Workshop",
    link: "",
  },
  {
    title:
      "A Constraint-Driven Business Object Model for Service-Based Business Processes",
    year: 2012,
    venue: "IEEE International Conference on Web Services (ICWS)",
    authors: [
      "Zulkernine, F.",
      "Bertoli, P.",
      "Pistore, M.",
      "Friesen, A.",
      "Lemcke, J.",
      "Thimmel, B.",
      "Von Geisau, O.",
    ],
    type: "Conference",
    link: "",
  },
  {
    title: "Towards a Training Oriented Adaptive Decision Support System",
    year: 2012,
    venue: "IEEE International Conference on Data Engineering (ICDE)",
    workshop:
      "Workshop on Data-Driven Decision Guidance and Support System (DGSS)",
    authors: [
      "Zulkernine, F.",
      "Martin, P.",
      "Soltani, S.",
      "Powley, W.",
      "Mankovski, S.",
      "Addleman, M.",
    ],
    type: "Workshop",
    link: "",
  },
  {
    title:
      "Estimating Costs of Data-intensive Workload Execution in Public Clouds",
    year: 2012,
    venue: "ACM/IFIP/USENIX International Middleware Conference",
    workshop:
      "International Workshop on Middleware for Grids, Clouds and e-Science (MGC)",
    authors: [
      "Mian, R.",
      "Martin, P.",
      "Zulkernine, F.",
      "Vazquez-Poletti, J.L.",
    ],
    type: "Workshop",
    link: "",
  },
  {
    title:
      "Towards building performance models for data-intensive workloads in public clouds",
    year: 2013,
    venue:
      "ACM/SPEC International Conference on Performance Engineering (ICPE)",
    authors: [
      "Mian R.",
      "Martin, P.",
      "Zulkernine, F.",
      "Vazquez-Poletti, J.L.",
    ],
    type: "Conference",
    link: "",
  },
  {
    title:
      "Towards Cloud-based Analytics-as-a-Service (CLAaaS)  for Big Data Analytics in the Cloud",
    year: 2013,
    venue: "IEEE Conference on Big Data (IEEE BigData)",
    authors: [
      "Zulkernine, F.",
      "Martin, P.",
      "Zou, Y.",
      "Bauer, M.",
      "Gwadry-Sridhar, F.",
      "Aboulnaga, A.",
    ],
    type: "Conference",
    link: "",
  },
  {
    title: "CAPRI: A Tool for Mining Complex Line Patterns in Large Log Data",
    year: 2013,
    venue:
      "International SIGKDD workshop on Big Data, Streams and Heterogeneous Source Mining (BigMine)",
    workshop: "ACM Knowledge Discovery and Data Mining (KDD) Workshop",
    authors: [
      "Zulkernine, F.",
      "Martin, P.",
      "Powley, W.",
      "Soltani, S.",
      "Mankovski, S.",
      "Addleman, M.",
    ],
    type: "Workshop",
    link: "",
  },
  {
    title: "AaaS: Confluence of Big Data, Cloud Computing and SaaS",
    year: 2013,
    venue: "Conference of the Center for Advanced Studies (CASCON)",
    authors: [
      "Martin, P.",
      "Zulkernine, F.",
      "Khalifa, S.",
      "Eftekhari, A.",
      "Ashtiani, B.",
      "Rope, D.",
      "McRoberts, M.",
      "Statchuck, C.",
    ],
    type: "Conference",
    link: "",
  },
  {
    title:
      "Proactive Auto-scaling of Resources for Stream Processing Engines in the Cloud",
    year: 2016,
    venue: "Conference of the Center for Advanced Studies (CASCON)",
    authors: ["Ahmed, T.", "Zulkernine, F.", "Cordy, J."],
    type: "Conference",
    link: "",
  },
  {
    title:
      "ArchiGen: A Conceptual Form Design Tool Using an Evolutionary Computing Approach",
    year: 2016,
    venue: "Conference of the Center for Advanced Studies (CASCON)",
    authors: ["Chan, A.", "Zulkernine, F."],
    type: "Conference",
    link: "",
  },
  {
    title:
      "Predicting Movie Box Office Profitability: A Neural Network Approach",
    year: 2016,
    venue:
      "PIEEE International Conference on Machine Learning and Applications (ICMLA)",
    workshop:
      "Workshop on Machine Learning Algorithms Systems and Applications",
    authors: ["Rhee, T.", "Zulkernine, F."],
    type: "Workshop",
    link: "",
  },
  {
    title: "Using Machine Learning to Predict Hypertension from Big Data",
    year: 2016,
    venue:
      "IEEE Symposium on Computational Intelligence (SSCI) in Healthcare and e-health (CICARE)",
    authors: ["Lafreniere, D.", "Zulkernine, F.", "Barber, D.", "Martin, K."],
    type: "Conference",
    link: "",
  },
  {
    title: "BINARY: A Framework for Big Data Integration for Ad-hoc Querying",
    year: 2016,
    venue: "IEEE International Conference on Big Data (IEEE BigData)",
    workshop: "Workshop on Scalable Cloud  Data Management",
    authors: ["Eftekhari, A.", "Zulkernine, F.", "Martin, P"],
    type: "Workshop",
    link: "",
  },
  {
    title:
      "Training Navigation to  Virtual Autonomous Race Cars Using NeuroEvolution",
    year: 2017,
    venue: "High Performance Computing Symposium (HPCS)",
    authors: ["Song, G.", "Vollebregt, M.", "Zulkernine, F."],
    type: "Conference",
    link: "",
  },
  {
    title:
      "Implementation of a Particle Swarm Optimization Clustering Algorithm in Apache Spark for High Dimensional Data",
    year: 2017,
    venue: "High Performance Computing Symposium (HPCS)",
    authors: ["Sherar, M.", "Bhat, K.", "Zulkernine, F."],
    type: "Conference",
    link: "",
  },
  {
    title:
      "Particle Swarm Optimization for Large-Scale Clustering on Apache Spark",
    year: 2017,
    venue:
      "IEEE Symposium on Computational Intelligence (SSCI) in Swarm Intelligence Symposium (SIS)",
    authors: ["Sherar, M.", "Zulkernine, F."],
    type: "Conference",
    link: "",
  },
  {
    title: "Lexa: A Tool for Detecting Dyslexia through Auditory Processing",
    year: 2017,
    venue:
      "IEEE Symposium on Computational Intelligence (SSCI) in Robotic Rehabilitation and Assistive Technologies (CIR2AT)",
    authors: ["Poole, A.", "Zulkernine, F.", "Aylward, C."],
    type: "Conference",
    link: "",
  },
  {
    title: "Online Graph Processing with Spark Streaming",
    year: 2017,
    venue: "IEEE International Conference on Big Data (IEEE BigData)",
    workshop:
      "Workshop on Benchmarking, Performance Tuning and Optimization for Big Data Applications",
    authors: ["Abughofa, T.", "Zulkernine, F."],
    type: "Workshop",
    link: "",
  },
  {
    title:
      "Leveraging Distributed Big Data Storage Support in CLAaaS for WINGS Workflow Management System",
    year: 2017,
    venue: "IEEE International Conference on Big Data (IEEE BigData)",
    workshop: "Workshop on Scalable Cloud Data Management (SCDM)",
    authors: ["Alghamdi, H.", "Zulkernine, F.", "Martin, P."],
    type: "Workshop",
    link: "",
  },
  {
    title: "Towards Building a Hybrid Model for Predicting Stock Indexes",
    year: 2017,
    venue: "IEEE International Conference on Big Data (IEEE BigData)",
    workshop: "Workshop on Big Data for Economic and Business Forecasting",
    authors: ["Creighton, J.", "Zulkernine, F."],
    type: "Workshop",
    link: "",
  },
  {
    title:
      "The use of Virtual Reality in Enhancing Interdisciplinary Research and Education.",
    year: 2018,
    venue:
      "International Multi-Conference on Society, Cybernetics and Informatics (IMSCI)",
    authors: ["Leung, T.", "Zulkernine, F.", "Isah, H."],
    type: "Conference",
    link: "",
  },
  {
    title:
      "Development of a Generalized Text Mining Framework for Characterizing Low Back Pain in Primary Care: A Pilot Study",
    year: 2018,
    venue:
      "International Conference on Intelligent Biology and Medicine (ICIBM)",
    authors: [
      "Rajaram, A.",
      "Judd, M.",
      "Zulkernine, F.",
      "Barber, D.",
      "Wolfrom, B.",
    ],
    type: "Conference",
    link: "",
  },
  {
    title:
      "Detecting Low Back Pain Using Text Processing and Machine Learning Approaches",
    year: 2018,
    venue:
      "International Conference on Database and Expert Systems Applications (DEXA)",
    workshop:
      "International Workshop on Biological Knowledge Discovery from Data (BIOKDD)",
    authors: [
      "Judd, M.",
      "Zulkernine, F.",
      "Wolfram, B.",
      "Rajaram, A.",
      "Barber, D.",
    ],
    type: "Workshop",
    link: "",
  },
  {
    title: "Sprouter: Dynamic Graph Processing over Data Streams at Scale",
    year: 2018,
    venue:
      "International Conference on Database and Expert Systems Applications",
    authors: ["Abughofa, T.", "Zulkernine, F."],
    type: "Conference",
    link: "",
  },
  {
    title: "Fall Detection from Physical Activity Monitoring Data",
    year: 2018,
    workshop:
      "International SIGKDD workshop on Big Data, Streams and Heterogeneous Source Mining (BigMine)",
    venue:
      "International Conference on Knowledge Discovery and Data Mining (KDD)",
    authors: ["Ajerla, D.", "Mahfuz, S.", "Zulkernine, F."],
    type: "Workshop",
    link: "",
  },
  {
    title: "Predictive Video Object Detector",
    year: 2018,
    venue:
      "IEEE Annual Information Technology, Electronics and Mobile Communication Conference (IEMCON)",
    authors: ["Gasmallah, M.", "Zulkernine, F."],
    type: "Conference",
    link: "",
  },
  {
    title:
      "A voice operated e-commerce application using IBM Watson speech recognition tools",
    year: 2018,
    venue:
      "IEEE Annual Information Technology, Electronics and Mobile Communication Conference (IEMCON)",
    authors: ["Kandhari, M.", "Isah, H.", "Zulkernine, F."],
    type: "Conference",
    link: "",
  },
  {
    title:
      "Detecting Irregular Patterns in IOT Streaming Data for Fall Detection",
    year: 2018,
    venue:
      "IEEE Annual Information Technology, Electronics and Mobile Communication Conference (IEMCON)",
    authors: ["Mahfuz, S.", "Isah, H.", "Zulkernine, F.", "Nicholls, P."],
    type: "Conference",
    link: "",
  },
  {
    title:
      "Content-based File Type Identification Using Machine Learning and Spark In-memory Data Analytics Framework",
    year: 2018,
    venue: "International Conference on Electrical and Computer Engineering",
    authors: ["Bhat, K.", "Lam, J.", "Zulkernine, F."],
    type: "Conference",
    link: "",
  },
  {
    title: "A Comparative Study of LSTM and DNN for Stock Market Forecasting",
    year: 2018,
    venue: "IEEE International Conference on Big Data (IEEE BigData)",
    authors: ["Shah, D.", "Campbell, W.", "Zulkernine, F."],
    type: "Conference",
    link: "",
  },
  {
    title: "Predicting the Effects of News Sentiments on the Stock Market",
    year: 2018,
    venue: "IEEE International Conference on Big Data (IEEE BigData)",
    workshop: "Big Data for Financial News and Data",
    authors: ["Shah, D.", "Isah, H.", "Zulkernine, F"],
    type: "Workshop",
    link: "",
  },
  {
    title: "A scalable and robust framework for data stream ingestion",
    year: 2018,
    venue: "IEEE International Conference on Big Data",
    authors: ["Isah, H.", "Zulkernine, F."],
    type: "Conference",
    link: "",
  },
  {
    title: "Fully End-To-End Super-Resolved Bone Age Estimation",
    year: 2019,
    venue: "Canadian Artificial Intelligence conference (Can-AI)",
    authors: [
      "Gasmallah, M.",
      "Zulkernine, F.",
      "Rivest, F.",
      "Mousavi, P.",
      "Sedghi, A.",
    ],
    type: "Conference",
    link: "",
  },
  {
    title: "Xu: An Automated Query Expansion and Optimization Tool",
    year: 2019,
    venue:
      "IEEE International Computer Software and Applications Conference (COMPSAC)",
    authors: ["Gallant, M.", "Isah, H.", "Zulkernine, F"],
    type: "Conference",
    link: "",
  },
  {
    title:
      "A Scalable Framework for Multilevel Streaming Data Analytics using Deep Learning",
    year: 2019,
    venue:
      "IEEE International Computer Software and Applications Conference (COMPSAC)",
    workshop: "Deep Analysis of Data-Driven Applications (DADA)",
    authors: ["Ge, S.", "Isah, H.", "Zulkernine, F.", "Khan, S."],
    type: "Workshop",
    link: "",
  },
  {
    title:
      "Image Object Detection Facilitates the Study of Fucosylation in Multicellular Tumour Spheroids",
    year: 2019,
    venue:
      "IEEE International Conference on Computational Intelligence in Bioinformatics and Computational Biology",
    authors: [
      "Kalaydina, R.",
      "Zhou, H.",
      "Wojaczek, A.",
      "Zulkernine, F.",
      "Gasmallah, M.",
      "Szewczuk, M.",
    ],
    type: "Conference",
    link: "",
  },
  {
    title:
      "Weakly Supervised Text Classification for Assisting Patient Data Processing",
    year: 2019,
    venue:
      "Annual conference hosted by the Canadian Institute for Military and Veteran Health Research (CIMVHR)",
    authors: ["Zafari, H.", "Zulkernine, F.", "Singer, A.", "Kosowan, L"],
    type: "Conference",
    link: "",
  },
  {
    title: "Identifying Patients with PTSD using Deep Learning",
    year: 2019,
    venue:
      "Annual conference hosted by the Canadian Institute for Military and Veteran Health Research (CIMVHR)",
    authors: ["Lam, J.", "Zulkernine, F.", "Singer, A.", "Kosowan, L."],
    type: "Conference",
    link: "",
  },
  {
    title:
      "Diagnosing PTSD Using Electronic Medical Records from Canadian Primary Care Data",
    year: 2019,
    venue: "IEEE Networking, Systems, and Security (NSyS)",
    authors: [
      "Kaczmarek, E.",
      "Salgo, A.,",
      "Zafari, H.",
      "Zulkernine, F.",
      "Singer, A.",
    ],
    type: "Conference",
    link: "",
  },
  {
    title: "Computer Vision for Prostate Cancer Spheroids Detection",
    year: 2019,
    venue:
      "IEEE SSCI symposium on Computational Intelligence in Health Care (CICARE)",
    authors: [
      "Wojaczek, A.",
      "Kalaydina, R. V.",
      "Gasmallah, M.",
      "Zulkernine, F.",
      "Szewczuk, M.",
    ],
    type: "Conference",
    link: "",
  },
  {
    title:
      "A Voice Interactive Multilingual Student Support System using IBM Watson",
    year: 2019,
    venue:
      "IEEE International Conference of Machine Learning Applications (ICMLA)",
    specialIssue: "Special Session on Education",
    authors: ["Raltson, K.", "Chen, Y.", "Isah, H.", "Zulkernine, F."],
    type: "Conference",
    link: "",
  },

  {
    title: "Smart Phone Based Human Activity Recognition",
    year: 2019,
    venue:
      "IEEE International Conference of Machine Learning Applications (ICMLA)",
    specialIssue: "Special Session on Machine Learning in Health",
    authors: ["Chen, H.", "Mahfuz, S.", "Zulkernine, F.", "Nicholls, P."],
    type: "Conference",
    link: "",
  },
  {
    title: "Using natural language processing to predict splenomegaly from ",
    year: 2020,
    venue: "Annual IMNO Symposium presented by Imaging Network Ontario (ImNO)",
    authors: [
      "Batch, K.",
      "Lupton, K.",
      "Sun, S.",
      "Gangai, N.",
      "Cho, J.",
      "Gazit, L.",
      "Nguyen, H.",
      "Zulkernine, F.",
      "Do, R.",
      "Simpson, A.",
    ],
    type: "Conference",
  },
  {
    title:
      "Facial expression recognition using a simplified convolutional neural network model",
    year: 2020,
    venue:
      " International Conference on Communications, Signal Processing, and their Applications (ICCSPA)",
    authors: [
      "Kandeel, A.",
      "Rahmanian, M.",
      "Zulkernine, F.",
      "Abbas, H.",
      "Hassanein, H.",
    ],
    type: "Conference",
  },
  {
    title:
      "Determining Worker Type from Legal Text Data using Machine Learning",
    year: 2020,
    venue:
      "IEEE International Conference on Pervasive and Intelligent Computation (PICom)",
    authors: ["Yin, Y.", "Zulkernine, F.", "Dahan, S."],
    type: "Conference",
    award: "Best Student",
    link: "",
  },
  {
    title:
      "Effects of Pre-trained Word Embeddings on Text-based Deception Detection",
    year: 2020,
    venue:
      "IEEE International Conference on Pervasive and Intelligent Computation (PICom)",
    authors: ["Nam, D.", "Yasmin, J.", "Zulkernine, F."],
    type: "Conference",
  },
  {
    title: "Towards a natural language query processing system",
    year: 2020,
    venue:
      "International Conference on Big Data Analytics and Practices (IBDAP)",
    authors: ["Montgomery, C.", "Isah, H.", "Zulkernine, F."],
    type: "Conference",
  },
  {
    title: "A big data lake for multilevel streaming data analytics",
    year: 2020,
    venue:
      "International Conference on Big Data Analytics and Practices (IBDAP)",
    authors: ["Liu, R.", "Isah, H.", "Zulkernine, F."],
    type: "Conference",
  },
  {
    title: "Vision-based Vehicle Detection and Distance Estimation",
    year: 2020,
    venue: "IEEE Symposium Series of Computational Intelligence (SSCI)",
    authors: ["Qiao, D.", "Zulkernine, F."],
    type: "Conference",
  },
  {
    title: "Predicting Chronic Obstructive Pulmonary Disease from EMR data",
    year: 2020,
    venue:
      "IEEE International Conference on Computational Intelligence in Bioinformatics and Computational Biology (CIBCB)",
    authors: [
      "Zafari, H.",
      "Langlois, S.",
      "Zulkernine, F.",
      "Kosowan, L.",
      "Singer, A.",
    ],
    type: "Conference",
  },
  {
    title:
      "Dilated Squeeze-and-Excitation U-Net for Fetal Ultrasound Image Segmentation",
    year: 2020,
    venue:
      "IEEE International Conference on Computational Intelligence in Bioinformatics and Computational Biology (CIBCB)",
    authors: ["Qiao, D.", "Zulkernine, F."],
    type: "Conference",
  },
  {
    title:
      "An Adapter for IBM Streams and Apache Spark to Facilitate Multi-level Data Analytics",
    year: 2020,
    venue: "IEEE IEMCON",
    authors: ["Shi, Y.", "Mahfuz, S.", "Zulkernine, F.", "Nicolls, P."],
    type: "Conference",
  },
  {
    title:
      "Intelligent Transportation System: Managing Pandemic Induced Threats to the People and Economy",
    year: 2020,
    venue: "IEEE International Conference on Smart City and Informatization",
    authors: ["Trivedi, P.", "Zulkernine, F."],
    type: "Conference",
  },
  {
    title:
      "Componentry Analysis of Intelligent Transportation Systems in Smart Cities towards a Connected Future",
    year: 2020,
    venue: "IEEE International Conference on Smart City",
    authors: ["Trivedi, P.", "Zulkernine, F."],
    type: "Conference",
  },
  {
    title:
      "Measuring Heart Rate and Heart Rate Variability with Smartphone Camera",
    year: 2021,
    venue: "International Conference on Mobile Data Management (MDM)",
    authors: [
      "Qiao, D.",
      "Zulkernine, F.",
      "Masroor, R.",
      "Rasool, R.",
      "Jaffar, N.",
    ],
    type: "Conference",
  },
  {
    title: "Incremental Community Detection in Distributed Dynamic Graph",
    year: 2021,
    venue:
      "IEEE International Conference on Big Data Computing Service and Applications (BigDataService)",
    authors: ["Abughofa, T.", "Harby, A.", "Zulkernine, F.", "Isah, H."],
    type: "Conference",
    award: "Best Paper",
  },
  {
    title: "Chatsum: An Intelligent Medical Chat Summarization Tool",
    year: 2021,
    venue:
      "IEEE-EMBS International Conference on Biomedical and Health Informatics (IEEE BHI)",
    authors: ["Zafari, H.", "Zulkernine, F."],
    type: "Conference",
  },
  {
    title:
      "Characterizing Post-traumatic Stress Disorder in Primary Care Using Electronic Medical Records: a retrospective cross-sectional study",
    year: 2021,
    venue:
      "Annual North American Primary Care Research Group Conference (NAPCRG)",
    authors: [
      "Singer, A.",
      "Kosowan, L.",
      "Muthumuni, D.",
      "Katz, A.",
      "Zafari, H.",
      "Zulkernine, F.",
      "Sareen, J.",
      "Richardson. J. D.",
      "Wong, S.",
      "Queenan, J.",
      "Wolfrom, B.",
      "Williamson, T",
    ],
    type: "Conference",
  },
  {
    title:
      "Understanding Post-Traumatic Stress Disorder Using Electronic Medical Records",
    year: 2021,
    venue: "CFPC Annual Family Medicine Forum",
    authors: [
      "Muthumuni, D.",
      "Kosowan, L.",
      "Singer, A.",
      "Zafari H.",
      "Zulkernine, F.",
    ],
    type: "Conference",
  },
  {
    year: 2021,
    title: "Detection of Similar Legal Cases on Personal Injury",
    authors: ["Lam, J.", "Chen,Y.", "Zulkernine, F.", "Dahan, S."],
    venue: "IEEE International Conference on Data Mining",
    workshop:
      "International Workshop on Mining and Learning in the Legal Domain (MLLD)",
    award: "Best Paper",
    type: "Workshop",
  },
  {
    year: 2021,
    title:
      "BIRD-QA: A BERT-based Information Retrieval Approach to Domain Specific Question Answering",
    authors: ["Chen,Y.", "Zulkernine, F."],
    venue: "IEEE International Conference on Big Data (IEEE BigData)",
    workshop:
      "IEEE Workshop on Human-in-the-Loop Methods and Future of Work in BigData (IEEE HMData)",
    type: "Workshop",
  },
  {
    year: 2021,
    title: "Predicting the Length of Stay of COVID-19 Patients in Hospitals",
    authors: ["Fu, Z.", "Fu, Jia.", "Gu, X.", "Moattari, M.", "Zulkernine, F."],
    venue:
      "IEEE International Conference on Bioinformatics and Biomedicine (BIBM)",
    type: "Conference",
  },
  {
    year: 2021,
    title: "Heart Rate Monitoring using PPG with Smartphone Camera",
    authors: ["Ayesha, A.", "Qiao, D.", "Zulkernine, F."],
    venue:
      "IEEE International Conference on Bioinformatics and Biomedicine (BIBM)",
    type: "Workshop",
    workshop:
      "IEEE BIBM Workshop on Artificial Intelligence Techniques for BioMedicine and HealthCare",
  },
  {
    year: 2021,
    title: "FireWarn: Recognizing Fire Hazards Using Computer Vision",
    authors: [
      "Hogan, I.",
      "Qiao, D.",
      "Luo, R.",
      "Moattari, M.",
      "Carthy, A.",
      "Rivest, F.",
      "Zulkernine, F.",
      "Brenton. M.",
    ],
    venue: "IEEE CogMI",
    type: "Conference",
    award: "Best Student Paper",
  },
  {
    year: 2021,
    title:
      "Drivable Area Detection Using Feature Pyramid Networks for Autonomous Driving",
    authors: ["Qiao, D.", "Zulkernine, F."],
    venue: "IEEE International Conference on Big Data",
    type: "Conference",
  },
  {
    year: 2025,
    title:
      "SDA-GRIN for adaptive spatial-temporal multivariate time series imputation",
    authors: ["Eskandari, A.", "Anand, A.", "Sharma, D.", "Zulkernine, F."],
    venue:
      "IEEE Annual Computers, Software, and Applications Conference (COMPSAC)",
    workshop:
      "International Workshop on Deep Analysis of Data-Driven Applications (DADA)",
    type: "Workshop",
  },
  {
    year: 2025,
    title:
      "Towards a voice-adaptive LLM-based conversation bot for enhanced user interaction",
    authors: [
      "Eskandari, A.",
      "Monir, T.",
      "Zulkernine, F.",
      "Morningstar, M.",
      "Poppenk, J.",
      "Herrmann, B.",
    ],
    venue:
      "IEEE Annual Computers, Software, and Applications Conference (COMPSAC)",
    workshop: "DIGI-HEALTH 2025 Workshop",
    type: "Workshop",
  },

  {
    year: 2024,
    title:
      "YOLO-I3D: Optimizing Inflated 3D Models for Real-Time Human Activity Recognition",
    authors: ["Luo, R.", "Anand, A.", "Zulkernine, F.", "Rivest, F."],
    venue: "Journal of Imaging",
    type: "Journal",
    link: "https://doi.org/10.3390/jimaging10110269",
  },
  {
    year: 2024,
    title: "Survey: Transformer-based Models in Data Modality Conversion",
    authors: ["Rashno, E.", "Eskandari, A.", "Anand, A.", "Zulkernine, F."],
    venue: "ACM Computing Surveys",
    type: "Journal",
  },
  {
    year: 2021,
    title:
      "Natural Language Processing of Large-Scale Structured Radiology Reports to Identify Oncologic Patients With or Without Splenomegaly over a Ten-Year Period",
    authors: [
      "Sun, S.",
      "Lupton, K.",
      "Batch, K.",
      "Nguyen, H.",
      "Gazit, L.",
      "Gangai, N.",
      "Cho, J.",
      "Nicholas, K.",
      "Zulkernine, F.",
      "Sevilimedu, V.",
      "Simpson, A.",
      "Do, R.",
    ],
    venue: "JCO Clinical Cancer Informatics",
    type: "Journal",
  },
  {
    year: 2021,
    title: "ReViSe: Remote Vital Signs Measurement Using Smartphone Camera",
    authors: [
      "Qiao, D.",
      "Ayesha, A.",
      "Zulkernine, F.",
      "Masroor, R.",
      "Jaffar, N.",
    ],
    venue: "IEEE Transactions on Emerging Topics in Computational Intelligence",
    specialIssue:
      "Special Issue on Computational Intelligence to Edge AI for Ubiquitous IoT Systems",
    type: "Journal",
  },
  {
    year: 2021,
    title: "Text Encoding Models for Medical Data Analytics",
    authors: ["Zafari, H.", "Zulkernine, F.", "Kosowan, L.", "Singer, A."],
    venue: "Expert Systems With Applications",
    type: "Journal",
  },
  {
    year: 2021,
    title:
      "Automated Assessment of EMR Data for COPD Screening Using Machine Learning Algorithms",
    authors: [
      "Zafari, H.",
      "Kosowan, L.",
      "Zulkernine, F.",
      "Langlois, S.",
      "Singer, A.",
    ],
    venue: "Journal of Bio-systems",
    type: "Journal",
  },
  {
    year: 2021,
    title:
      "Diagnosing Post-Traumatic Stress Disorder (PTSD) using Electronic Medical Record (EMR) Data: A Retrospective Observational Study",
    authors: ["Zafari, H.", "Kosowan, L.", "Zulkernine, F.", "Singer, A."],
    venue: "Health Informatics Journal",
    type: "Journal",
  },
  {
    year: 2021,
    title:
      "Patterns of Metastatic Disease in Patients with Cancer Derived from Natural Language Processing of Structured CT Radiology Reports over a Ten-Year Period",
    authors: [
      "Do, R.",
      "Lupton, K.",
      "Andrieu, P.C.",
      "Luthra, A.",
      "Taya, M.",
      "Batch, K.",
      "Nguyen, H.",
      "Rahurkar, P.",
      "Gazit, L.",
      "Nicholas, K.",
      "Fong, C.",
      "Gangai, N.",
      "Schultz, N.",
      "Zulkernine, F.",
      "Sevilimedu, V.",
      "Juluru, K.",
      "Simpson, A.",
      "Hricak, H.",
    ],
    venue: "Radiology",
    type: "Journal",
  },
  {
    year: 2021,
    title: "Text Encoding Models for Medical Data Analytics",
    authors: ["Zafari, H.", "Zulkernine, F.", "Kosowan, L.", "Singer, A."],
    venue: "Expert Systems With Applications",
    type: "Journal",
    link: "/#",
  },
  {
    year: 2021,
    title:
      "Hierarchical Classification of Fashion Images Using Branching Convolutional Neural Networks",
    authors: ["Kolisnik, B.", "Hogan, I.", "Zulkernine, F."],
    venue: "Expert Systems With Applications",
    type: "Journal",
  },
  {
    year: 2020,
    title:
      "Computational Methods for Identification of PTSD in Health System Data: Protocol for a Scoping Review",
    authors: ["Kosowan, L.", "Singer, A.", "Zafari, H.", "Zulkernine, F."],
    venue: "OSF",
    type: "Journal",
    link: "https://osf.io/ry362/overview",
  },
  {
    year: 2020,
    title:
      "Impact of fucosylation on self-assembly of prostate and breast tumor spheroids by using cyclo-RGDfK(TPP) peptide and image object detection",
    authors: [
      "Kalaydina, RV.",
      "Zhou, H.",
      "Markvicheva, E.",
      "Burov, S.",
      "Zulkernine, F.",
      "Szewczuk, M.",
    ],
    venue: "OncoTargets and Therapy",
    type: "Journal",
  },
  {
    year: 2019,
    title:
      "Processing Real Time Data Streams: A Survey of Streaming Data Processing Engines",
    authors: [
      "Isah, H.",
      "Abughofa, T.",
      "Mahfuz, S.",
      "Ajerla D.",
      "Zulkernine F.",
    ],
    venue: "IEEE Access",
    type: "Journal",
  },
  {
    year: 2019,
    title: "A Real-time Patient Monitoring Framework for Fall Detection",
    authors: ["Ajerla, D.", "Mahfuz, S.", "Zulkernine, F."],
    venue: "Wireless Communications and Mobile Computing",
    specialIssue:
      "Special Issue on Mobile Technologies and Sensor Networks in Healthcare Environments (MSHE)",
    type: "Journal",
    link: "https://doi.org/10.1155/2019/9507938",
  },
  {
    year: 2019,
    title: "Stock Market Analysis: Achievements and Progress",
    authors: ["Shah, D.", "Zulkernine, F."],
    venue: "International Journal of Financial Studies",
    type: "Journal",
  },
  {
    year: 2019,
    title:
      "The Use of Virtual Reality in Enhancing Interdisciplinary Research and Education",
    authors: ["Leung, T.", "Zulkernine, F.", "Isah, H."],
    venue: "Journal of Systemics, Cybernetics and Informatics",
    type: "Journal",
    link: "http://www.iiisci.org/journal/sci/issue.asp?is=ISS1806",
  },
  {
    year: 2014,
    title:
      "Cost-Effective Resource Configurations for Multi-tenant Database Systems in Public Clouds",
    authors: [
      "Mian, R.",
      "Martin, P.",
      "Zulkernine, F.",
      "Vazquez-Poletti, J.L.",
    ],
    venue: "International Journal of Cloud Applications and Computing (IJCAC)",
    type: "Journal",
  },
  {
    year: 2010,
    title:
      "An Adaptive and Intelligent SLA Negotiation System for Web Services",
    authors: ["Zulkernine, F.", "Martin, P."],
    venue: "IEEE Transactions on Services Computing",
    type: "Journal",
  },
  {
    year: 2009,
    title:
      "A Design Theory Approach to Building Strategic Net-based Customer Service Systems",
    authors: [
      "Brohman, M.K.",
      "Piccoli, G.",
      "Martin, P.",
      "Zulkernine, F.",
      "Parasuraman, A.",
      "Watson, R.",
    ],
    venue: "Decision Sciences Journal",
    specialIssue:
      "Special Topic Forum: Advancing Decision Making in Service Innovation",
    award: "Best Article (Nominated)",
    type: "Journal",
  },
  {
    year: 2008,
    title:
      "An Autonomic Web Services Environment using a Reflective and Database-Oriented Approach",
    authors: [
      "Zulkernine, F.",
      "Powley, W.",
      "Tian, W.",
      "Martin, P.",
      "Xu, T.",
      "Zebedee, J.",
    ],
    venue: "Ubiquitous Computing and Communication Journal",
    specialIssue:
      "Special Issue on Autonomic Computing Systems and Applications",
    type: "Journal",
  },
  {
    year: 2009,
    title:
      "Web Services-Based Composite Business Process Management - Service Level Agreement Negotiation and Monitoring: Concepts, Methodologies and Current Practices towards Innovation",
    authors: ["Zulkernine, F."],
    venue: "VDM Verlag",
    type: "Book",
    link: "https://www.amazon.ca/Services-Based-Composite-Business-Process-Management/dp/3639201272",
  },
  {
    year: 2020,
    title:
      '"Using Deep Learning with Canadian Primary Care Data for Disease Diagnosis"',
    authors: [
      "Lam, J.",
      "Kosowan, L.",
      "Zafari, H.",
      "Peeler, W.",
      "Gasmallah, M.",
      "Zulkernine, F.",
      "Singer, A.",
    ],
    venue:
      "Deep Learning for Biomedical Data Analysis: Techniques, Approaches and Application, part 3",
    type: "Book Chapter",
  },
  {
    year: 2009,
    title: '"Web Services Management: Towards Efficient Web Data Access"',
    authors: ["Zulkernine, F.", "Martin, P.", "(Eds.) Kelley G."],
    venue:
      "Selected Readings on Information Technology Management: Contemporary Issues, Information Science Reference",
    type: "Book Chapter",
  },
  {
    year: 2009,
    title: '"Web Services Management: Towards Efficient Web Data Access"',
    authors: [
      "Zulkernine, F.",
      "Martin, P.",
      "Powley, W.",
      "(Eds.) Denko, M.",
      "Yang, L.",
      "Zhang, Y.",
    ],
    venue: "Autonomic Computing and Networking, part 2",
    type: "Book Chapter",
  },
  {
    year: 2006,
    title: '"Web Services Management: Towards Efficient Web Data Access"',
    authors: [
      "Zulkernine, F.",
      "Martin, P.",
      "(Eds.) Vakali, A.",
      "Pallis, G.",
    ],
    venue: "Web Data Management Practices: Emerging Techniques and Technologies",
    type: "Book Chapter",
  },
];
