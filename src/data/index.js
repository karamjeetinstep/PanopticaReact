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
    {img:Media,title:"Choose an API",content:" Accordion content",subTitle:"Slideshow"},
    {img:Media,title:"Test API Vulnerability ",content:" Accordion content",subTitle:"Slideshow"},
    {img:Media,title:"Upload API Specification",content:" Accordion content",subTitle:"Slideshow"},
    {img:Media,title:"Evaluate Security Posture",content:" Accordion content",subTitle:"Slideshow"},
    {img:Media,title:"Finish",content:" Accordion content",subTitle:"Slideshow"},

  ];
export const steps = [
  { title: "Choose an API", content: ChooseAPI },
  { title: "Test API Vulnerability", content: TestAPI },
  { title: "Upload API Specification", content: UploadAPI },
  { title: "Evaluate Security Posture", content: EvaluateSecurity },
  { title: "Finish", content: Finish },
];
