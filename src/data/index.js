import FinancialServices from "../assets/images/financial-services-icon 1.svg";
import CloudBorn from "../assets/images/Cloud.svg";
import Utilities from "../assets/images/Utility.svg";
import Transport from "../assets/images/transport.svg";
import Retail from "../assets/images/retail.svg";
import Manufacturing from "../assets/images/manufacture.svg";
import PublicSector from "../assets/images/public sector.svg";
import Communication from "../assets/images/communication.svg";
import ChooseAPI from "../components/EvaluateAPI/ChooseAPI";
import EvaluateSecurity from "../components/EvaluateAPI/EvaluateSecurity";
import Finish from "../components/EvaluateAPI/Finish";
import TestAPI from "../components/EvaluateAPI/TestAPI";
import UploadAPI from "../components/EvaluateAPI/UploadAPI";
import Media from "../assets/images/imges.svg";
import securityIcon from "../assets/images/securityIcon.png";

export const moduleCards = [
  { id: 1, img: FinancialServices, name: "Financial Services" },
  {
    id: 2,
    img: CloudBorn,
    name: "Tech/Cloud-Born",
  },
  {
    id: 3,
    img: Utilities,
    name: "Utilities",
  },
  {
    id: 4,
    img: Transport,
    name: "Transport",
  },
  {
    id: 5,
    img: Retail,
    name: "Retail",
  },
  {
    id: 6,
    img: Manufacturing,
    name: "Manufacturing",
  },
  {
    id: 7,
    img: PublicSector,
    name: "Public Sector High",
  },
  {
    id: 8,
    img: Communication,
    name: "Communication",
  },
];
export const evaluateAPIList = [
  "See Risk Finding in Your APIs",
  "See impacted Cluster, Namespace, and Gateway",
  "Perform some tests to dig deeper",
  "Evaluate Security Posture",
  "See Issue found and mitigation to be taken",
  "Evaluate Your Own API",
];
export const accordian = [
  {
    img: Media,
    title: "Choose an API",
    content: " Accordion content",
    subTitle: "Slideshow",
  },
  {
    img: Media,
    title: "Test API Vulnerability ",
    content: " Accordion content",
    subTitle: "Slideshow",
  },
  {
    img: Media,
    title: "Upload API Specification",
    content: " Accordion content",
    subTitle: "Slideshow",
  },
  {
    img: Media,
    title: "Evaluate Security Posture",
    content: " Accordion content",
    subTitle: "Slideshow",
  },
  {
    img: Media,
    title: "Finish",
    content: " Accordion content",
    subTitle: "Slideshow",
  },
];
export const steps = [
  { title: "Choose an API", content: ChooseAPI },
  { title: "Test API Vulnerability", content: TestAPI },
  { title: "Upload API Specification", content: UploadAPI },
  { title: "Evaluate Security Posture", content: EvaluateSecurity },
  { title: "Finish", content: Finish },
];

export const filter = [
  {
    name: "Category",
    checkbox: [
      { name: "API Security", id: 1, length: 4 },
      { name: "Kubernetes", id: 2, length: 2 },
      { name: "Serverless", id: 3, length: 3 },
      { name: "Attack Path", id: 4, length: 3 },
      { name: "Compliance", id: 5, length: 3 },
    ],
  },
  {
    name: "Industry Type",
    checkbox: [
      { name: "AFinancial Services", id: 6, length: 2 },
      { name: "Tech/Cloud-Born", id: 7, length: 1 },
      { name: "Transport", id: 8, length: 2 },
      { name: "Retail", id: 9, length: 1 },
      { name: "Manufacturing", id: 10, length: 1 },
      { name: "Public Sector High", id: 11, length: 1 },
      { name: "Communication", id: 12, length: 1 },
    ],
  },
  {
    name: "Job Role",
    checkbox: [
      { name: "Analyst", id: 13, length: 4 },
      { name: "Data Scientist", id: 14, length: 4 },
    ],
  },
];
export const instantPovCards = [
  {
    name: "API Security",
    id: 1,
    cards: [
      {
        img: securityIcon,
        heading: "Evaluate security posture of an API",
        description:
          " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
        time: "5:12 min demo",
      },
      {
        img: securityIcon,
        heading: "Evaluate security posture of an API",
        description:
          " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
        time: "5:12 min demo",
      },
      {
        img: securityIcon,
        heading: "Evaluate security posture of an API",
        description:
          " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
        time: "5:12 min demo",
      },
      {
        img: securityIcon,
        heading: "Evaluate security posture of an API",
        description:
          " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
        time: "5:12 min demo",
      },
    ],
  },
  {
    id: 2,
    name: "Kubernetes",
    cards: [
      {
        img: securityIcon,
        heading: "Kubernetes",
        description:
          " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
        time: "5:12 min demo",
      },
      {
        img: securityIcon,
        heading: "Kubernetes",
        description:
          " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
        time: "5:12 min demo",
      },
    ],
  },
  {
    id: 3,
    name: "Serverless",
    cards: [
      {
        img: securityIcon,
        heading: "Serverless",
        description:
          " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
        time: "5:12 min demo",
      },
      {
        img: securityIcon,
        heading: "Serverless",
        description:
          " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
        time: "5:12 min demo",
      },
      {
        img: securityIcon,
        heading: "Serverless",
        description:
          " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
        time: "5:12 min demo",
      },
    ],
  },
  {
    id: 4,
    name: "Attack Path",
    cards: [
      {
        img: securityIcon,
        heading: "Attack Path",
        description:
          " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
        time: "5:12 min demo",
      },
      {
        img: securityIcon,
        heading: "Attack Path",
        description:
          " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
        time: "5:12 min demo",
      },
      {
        img: securityIcon,
        heading: "Attack Path",
        description:
          " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
        time: "5:12 min demo",
      },
    ],
  },
  {
    id: 5,
    name: "Compliance",
    cards: [
      {
        img: securityIcon,
        heading: "Compliance",
        description:
          " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
        time: "5:12 min demo",
      },
      {
        img: securityIcon,
        heading: "Compliance",
        description:
          " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
        time: "5:12 min demo",
      },
      {
        img: securityIcon,
        heading: "Compliance",
        description:
          " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
        time: "5:12 min demo",
      },
    ],
  },
  {
    id: 6,
    name: "AFinancial Services",
    cards: [
      {
        img: securityIcon,
        heading: "AFinancial Services",
        description:
          " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
        time: "5:12 min demo",
      },
      {
        img: securityIcon,
        heading: "AFinancial Services",
        description:
          " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
        time: "5:12 min demo",
      },
    ],
  },
  {
    id: 7,
    name: "Tech/Cloud-Born",
    cards: [
      {
        img: securityIcon,
        heading: "Tech/Cloud-Born",
        description:
          " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
        time: "5:12 min demo",
      },
    ],
  },
  {
    id: 8,
    name: "Transport",
    cards: [
      {
        img: securityIcon,
        heading: "Transport",
        description:
          " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
        time: "5:12 min demo",
      },
      {
        img: securityIcon,
        heading: "Transport",
        description:
          " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
        time: "5:12 min demo",
      },
    ],
  },
  {
    id: 9,
    name: "Retail",
    cards: [
      {
        img: securityIcon,
        heading: "Retail",
        description:
          " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
        time: "5:12 min demo",
      },
    ],
  },
  {
    id: 10,
    name: "Manufacturing",
    cards: [
      {
        img: securityIcon,
        heading: "Manufacturing",
        description:
          " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
        time: "5:12 min demo",
      },
    ],
  },
  {
    id: 11,
    name: "Public Sector High",
    cards: [
      {
        img: securityIcon,
        heading: "Public Sector High",
        description:
          " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
        time: "5:12 min demo",
      },
    ],
  },
  {
    id: 12,
    name: "Communication",
    cards: [
      {
        img: securityIcon,
        heading: "Communication",
        description:
          " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
        time: "5:12 min demo",
      },
    ],
  },
  {
    id: 13,
    name: "Analyst",
    cards: [
      {
        img: securityIcon,
        heading: "Analyst",
        description:
          " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
        time: "5:12 min demo",
      },
      {
        img: securityIcon,
        heading: "Analyst",
        description:
          " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
        time: "5:12 min demo",
      },
      {
        img: securityIcon,
        heading: "Analyst",
        description:
          " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
        time: "5:12 min demo",
      },
      {
        img: securityIcon,
        heading: "Analyst",
        description:
          " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
        time: "5:12 min demo",
      },
    ],
  },
  {
    id: 14,
    name: "Data Scientist",
    cards: [
      {
        img: securityIcon,
        heading: "Data Scientist",
        description:
          " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
        time: "5:12 min demo",
      },
      {
        img: securityIcon,
        heading: "Data Scientist",
        description:
          " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
        time: "5:12 min demo",
      },
      {
        img: securityIcon,
        heading: "Data Scientist",
        description:
          " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
        time: "5:12 min demo",
      },
      {
        img: securityIcon,
        heading: "Data Scientist",
        description:
          " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
        time: "5:12 min demo",
      },
    ],
  },
];
export const modalData = [
  {id:1,
    heading: "Mobile Banking API",
    port: "21016",
    cluster: "finance-cluster",
    nameSpace: "finance cluster",
    gateway: "Kong",
    thread1:2,
    thread2:1,
    thread3:5,
    thread4:6,
  },
  {id:2,
    heading: "Conversion",
    port: "21017",
    cluster: "finance-cluster",
    nameSpace: "finance cluster",
    gateway: "Tyk",
    thread1:2,
    thread2:1,
    thread3:3,
    thread4:6,
  },
  {id:3,
    heading: "Mutual Funds",
    port: "52212",
    cluster: "finance-cluster",
    nameSpace: "finance cluster",
    gateway: "Apigee X",
    thread1:2,
    thread2:1,
    thread3:7,
    thread4:9,
  },
];

export const congatulationCard = [
  {
    img: securityIcon,
    heading: "Perform BFLA attack and analyse in Panoptica",
    description:
      " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
    time: "3:23 min",
  },
  {
    img: securityIcon,
    heading: "Perform BFLA attack and analyse in Panoptica",
    description:
      " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
    time: "3:23 min",
  },
  {
    img: securityIcon,
    heading: "Perform BFLA attack and analyse in Panoptica",
    description:
      " Monitoring APIs and related security risks across multi-cloud environments requires comprehensive visibility and continuous API discovery.",
    time: "3:23 min",
  },
];
