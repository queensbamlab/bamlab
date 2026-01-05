import {
  Brain,
  Car,
  Eye,
  WifiCog,
  Database,
  Cloud,
  MessageSquareText,
  Network,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Project {
  title: string;
  description: string;
  status: "Active" | "Complete";
  funding: string[];
}

interface Research {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  projects: Project[];
}

const researchAreas: Research[] = [
  {
    id: "cog",
    icon: Brain,
    title: "AI & Cognitive Computing",
    description:
      "Exploring the intersection of human cognition and artificial intelligence to create more intuitive, adaptive, and human-centric systems.",
    projects: [
      {
        title: "When People Talk, Listen Completely",
        description:
          "Investigating advanced auditory processing and natural language understanding models to improve human-AI communication dynamics and empathy in machine listening.",
        status: "Active",
        funding: ["Connected Mind Team Grant"],
      },
      {
        title:
          "Co-creating Intelligent Neuro-Technologies for Healthy Aging (CINTHeA)",
        description:
          "Developing neuro-adaptive technologies to support cognitive health and autonomy in aging populations, utilizing co-design methodologies with older adults.",
        status: "Active",
        funding: ["Connected Mind Team Grant"],
      },
      {
        title:
          "Advancing Machine Perception for Situation-Aware Goal-Oriented Human Machine Interaction",
        description:
          "Enhancing machine perception capabilities to create context-aware systems that effectively collaborate with humans to achieve shared goals in real-world environments.",
        status: "Active",
        funding: ["NSERC Discovery"],
      },
      {
        title: "Triage Bot: An AI-powered Assistive Triage Framework",
        description:
          "An intelligent triage assistant aimed at streamlining patient intake and prioritization during high-demand healthcare scenarios, improving efficiency and patient outcomes.",
        status: "Active",
        funding: ["New Frontiers in Research Fund (NFRF-R)", "NSERC"],
      },
      {
        title:
          "Companion: A Cognitive Voice and Video Assistant Bot for Safe Aging",
        description:
          "A multimodal cognitive assistant providing voice and video support to ensure safety, companionship, and health monitoring for the elderly living independently.",
        status: "Active",
        funding: ["New Frontiers in Research Fund (NFRF-E)", "NSERC"],
      },
      {
        title: "Hierarchical Classification of Images for Online Shopping",
        description:
          "Developed an efficient hierarchical image classification algorithm to automatically categorize clothing items from camera images for e-commerce applications.",
        status: "Complete",
        funding: [],
      },
      {
        title: "Identifying Reportable Diseases for Ministry of Health",
        description:
          "Created a cognitive data analytic and decision support pipeline for classifying noisy medical data to identify reportable critical diseases, using both rule-based and neural network approaches.",
        status: "Complete",
        funding: [],
      },
      {
        title: "Voice-controlled e-commerce application using IBM Watson",
        description:
          "Developed a speech-enabled e-commerce website topology to increase accessibility using IBM Watson speech-to-text API and cloud services.",
        status: "Complete",
        funding: [],
      },
    ],
  },
  {
    id: "nlp",
    icon: MessageSquareText,
    title: "NLP & Text Analytics",
    description:
      "Advanced Natural Language Processing research focusing on summarization, topic modeling, and knowledge extraction from unstructured text.",
    projects: [
      {
        title: "Medical Chat Analysis and Summarization",
        description:
          "A framework to summarize patient-doctor chat transcripts on medical advising platforms, addressing challenges like short responses, noise, and domain-specific terminology to assist doctors.",
        status: "Complete",
        funding: ["YouDoctorsOnline", "Mitacs"],
      },
      {
        title: "Query Expansion for Knowledge Extraction",
        description:
          "Developed a query expansion algorithm with Gnowit to effectively search for matching webpages from large online documents using DataMuse API and word2vec techniques.",
        status: "Complete",
        funding: ["Gnowit", "Mitacs"],
      },
      {
        title: "Clustering Large Text Data (SPARK-PSO)",
        description:
          "Implemented SPARK-PSO, a particle swarm optimization algorithm on Apache Spark, for fast in-memory distributed clustering and analytics of large text datasets.",
        status: "Complete",
        funding: [],
      },
      {
        title: "CAPRI: Complex Activity Pattern Rule Inference",
        description:
          "A system to extract frequent, infrequent, and rare patterns and association rules from semi-structured mainframe log data files containing complex line patterns.",
        status: "Complete",
        funding: [],
      },
      {
        title: "Topic Modeling on Newsgroup Data",
        description:
          "Implemented various models including LSA, LDA, pLSA, and Deep Belief Networks to extract topics from the 20-Newsgroup dataset and classify text data.",
        status: "Complete",
        funding: [],
      },
    ],
  },
  {
    id: "data",
    icon: Database,
    title: "Data Analytics & Health",
    description:
      "Leveraging big data, machine learning, and statistical modeling to solve complex problems in healthcare, education, and social good.",
    projects: [
      {
        title:
          "Leveraging machine learning for competency-based medical education",
        description:
          "A decision-support tool for medical resident assessment, utilizing machine learning to track progress and promotion readiness in competency-based education frameworks.",
        status: "Active",
        funding: ["Queen’s Annual Multidisciplinary DOR Health Sciences RG"],
      },
      {
        title:
          "Developing an AI-Based Tool for Optimizing Disability Accessibility",
        description:
          "Leveraging AI to analyze and optimize pedestrian infrastructure in marginalized neighborhoods, ensuring equitable accessibility for people with disabilities.",
        status: "Active",
        funding: ["Connected Mind Seed Grant"],
      },
      {
        title: "Diagnosing Hypertension from Medical Records",
        description:
          "Developed a neural network model to predict hypertension from structured patient health records, achieving approximately 82% accuracy.",
        status: "Complete",
        funding: [],
      },
      {
        title: "Data Analytics for Chronic Low Back Pain Diagnosis",
        description:
          "Created a tool implementing a pipeline with cTAKES and ensemble learning to extract knowledge from doctor's notes and diagnose chronic low back pain.",
        status: "Complete",
        funding: [],
      },
      {
        title: "Discovering and Diagnosing PTSD from Clinical Notes",
        description:
          "Applied NLP and text mining to Electronic Medical Records (EMR) to identify PTSD cases in military veterans, analyzing prevalence, care quality, and suicide risk.",
        status: "Complete",
        funding: ["IBM", "Mitacs", "CIMVHR"],
      },
      {
        title: "Electronic Medical Records and CPCSSN Analysis",
        description:
          "Conducted research on the CPCSSN database of 1.6 million anonymized patient records to enable large-scale studies on primary care trends and disease diagnosis.",
        status: "Complete",
        funding: [],
      },
      {
        title: "Stock Market Prediction with Hybrid Models",
        description:
          "Implemented a three-component Proposed Hybrid Model (PHM) and compared it with BPNN, ARIMA, and ESM for daily stock index prediction.",
        status: "Complete",
        funding: [],
      },
    ],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Big Data & Cloud Systems",
    description:
      "Architecting scalable cloud infrastructure and streaming analytics frameworks for high-velocity data management.",
    projects: [
      {
        title: "Multilevel Streaming Data Analytics Infrastructure",
        description:
          "Designed a multi-level architecture for high-speed real-time streaming data analytics, integrating in-memory storage to enable complex ML without choking the pipeline.",
        status: "Complete",
        funding: ["IBM", "SOSCIP", "Gnowit"],
      },
      {
        title: "BiNARY: Big Data Integration Framework",
        description:
          "Created a framework for distributed management of multiple hybrid back-end data sources, facilitating integration and ad-hoc querying of big data.",
        status: "Complete",
        funding: [],
      },
      {
        title: "Graph Data Management and Analytics",
        description:
          "Developed multi-cluster large graph data management strategies for online analytical processing, distributed data linking, and real-time community detection.",
        status: "Complete",
        funding: [],
      },
      {
        title: "CLAaaS: Cloud-based Analytics-as-a-Service",
        description:
          "Designed a cloud architecture providing role-based access to a data analytics visualization platform, enabling custom workflow definition without local tool installation.",
        status: "Complete",
        funding: [],
      },
    ],
  },
  {
    id: "vis",
    icon: Eye,
    title: "Computer Vision",
    description:
      "Developing algorithms for perception, recognition, and analysis of visual data, with applications in healthcare and biometrics.",
    projects: [
      {
        title: "Remote Patient Blood Glucose Monitoring using rPPG",
        description:
          "Developing non-invasive blood glucose monitoring solutions using remote photoplethysmography (rPPG) and computer vision for improved patient care.",
        status: "Active",
        funding: ["Mitacs Accelerator"],
      },
      {
        title: "Measuring Biometric Data from Mobile Phone Video (Veyetals)",
        description:
          "Developed a remote video-based biometric system (Veyetals) using smartphone video to measure heart rate, HRV, stress, and BP, plus contactless temperature sensing.",
        status: "Complete",
        funding: ["Markitech", "YourDoctorsOnline", "Mitacs"],
      },
      {
        title: "Vehicle Detection using Computer Vision",
        description:
          "Implemented and compared deep learning models (YOLO and YOLOv3) for detecting vehicles like cars and trucks to ensure road safety for self-driving cars.",
        status: "Complete",
        funding: [],
      },
      {
        title: "Video Object Tracking (POD)",
        description:
          "Leveraged YOLOv2 architecture with a 2-D recurrent LSTM to implement a predictive video object detector and tracker (POD).",
        status: "Complete",
        funding: [],
      },
      {
        title: "Spheroid Detection",
        description:
          "Focused on the detection and measurement of spheroids, a model for cancer cell study, using computer vision techniques.",
        status: "Complete",
        funding: [],
      },
    ],
  },
  {
    id: "car",
    icon: Car,
    title: "Autonomous Systems",
    description:
      "Researching V2X communication, autonomous navigation, and intelligent transportation systems for smart cities.",
    projects: [
      {
        title: "V2V and V2I Data Transfer for Autonomous Vehicles",
        description:
          "Extracting key features from vehicular data (V2V and V2I) using deep learning to enhance pattern extraction and communication in smart city paradigms.",
        status: "Complete",
        funding: ["CUTRIC", "Mitacs"],
      },
      {
        title: "Autonomous Cars with Video and Ultrasonic Sensors",
        description:
          "Constructed autonomous model cars using Raspberry Pi and Arduino, training them with Deep Learning (camera) and Ultrasonic sensors to navigate tracks autonomously.",
        status: "Complete",
        funding: [],
      },
      {
        title: "Autonomous Car Tracking with Evolutionary Computing",
        description:
          "Used evolutionary computing with feed-forward neural networks to train a simulated vehicle to navigate a track at maximum speed without collisions.",
        status: "Complete",
        funding: [],
      },
    ],
  },
  {
    id: "iot",
    icon: Network,
    title: "IoT & Wearables",
    description:
      "Building intelligent frameworks for the Internet of Things, including wearable sensors for health monitoring and safety.",
    projects: [
      {
        title: "Fall Detection using Wearable Sensors",
        description:
          "Implemented a deep learning model trained on the MobiAct dataset and deployed it in a streaming IoT framework for real-time fall detection using MetaMotion R sensors.",
        status: "Complete",
        funding: ["CUTRIC"], // Assuming CUTRIC based on previous context, or none if not specified. Text said "Ajerla et al". Step 34 had CUTRIC. keeping it.
      },
    ],
  },
];

export default researchAreas;
