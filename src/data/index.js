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
import CrossBrown3 from "../assets/images/Frame 1000005944.svg";
import CrossBrown2 from "../assets/images/Frame 1000005944-1.svg";

export const moduleCards = [
  {
    id: 1,
    img: FinancialServices,
    name: "Financial Services",
    steps: [
      { title: "Choose an API", content: ChooseAPI },
      { title: "Test API Vulnerability", content: TestAPI },
      { title: "Upload API Specification", content: UploadAPI },
      { title: "Evaluate Security Posture", content: EvaluateSecurity },
      { title: "Finish", content: Finish },
    ],
    step1ModalData: {
      topHeading: "Risk findings in APIs",
      topDescription:
        "The findings that we obtain following an evaluation of <br />the APIs are the main emphasis on the right.",
      leftHeading: "Choose an API",
      leftDescription:
        "Lets pick a banking sector example with highlighted ‘Mobile Banking API’ to evaluate.",
      cards: [
        {
          id: 1,
          heading: "Mobile Banking API",
          port: "21016",
          cluster: "finance-cluster",
          nameSpace: "finance cluster",
          gateway: "Kong",
          thread1: 2,
          thread2: 1,
          thread3: 5,
          thread4: 6,
        },
        {
          id: 2,
          heading: "Conversion",
          port: "21017",
          cluster: "finance-cluster",
          nameSpace: "finance cluster",
          gateway: "Tyk",
          thread1: 2,
          thread2: 1,
          thread3: 3,
          thread4: 6,
        },
        {
          id: 3,
          heading: "Mutual Funds",
          port: "52212",
          cluster: "finance-cluster",
          nameSpace: "finance cluster",
          gateway: "Apigee X",
          thread1: 2,
          thread2: 1,
          thread3: 7,
          thread4: 9,
        },
      ],
    },
    step2ModuleData: {
      topHeading: "Risk findings in APIs",
      topDescription:
        "The findings that we obtain following an evaluation of <br />the APIs are the main emphasis on the right.",
      leftHeading: "Choose an API",
      leftDescription:
        "Lets pick a banking sector example with highlighted ‘Mobile Banking API’ to evaluate.",
      cards: [
        {
          id: 1,
          heading: "Expired certificate",
          status: { name: "Critical", icon: CrossBrown3 },
          description: "SSL is vulnerable to a CVE.",
          affectedElements: ["Mobilebanking-fin-1.com +2 more"],
          category: "Network",
          source: "Api fuzzer",
          mitigation:
            "Review the CVE and perform the recommended action(s) for fixing the issue.",
        },
        {
          id: 2,
          heading: "Missing Security Scheme",
          status: { name: "Critical", icon: CrossBrown3 },
          description:
            "Spec analyzer detected that the spec does not define neither a global nor a operation specific security scheme. It is highly recommended that all API operations support a sec...",
          affectedElements: ["Finace-cluster1.com"],
          category: "Api-specifications",
          source: "Api fuzzer",
          mitigation:
            "Make sure all API operations have a security scheme associated and as a good practice add a global security scheme.",
        },
        {
          id: 3,
          heading: "Authentication Issue",
          status: { name: "High", icon: CrossBrown2 },
          description:
            "The fuzzer retrieved meaningful information without being authenticated against an endpoint that required authentication according to the specifications.",
          affectedElements: ["MFinace-cluster2.com"],
          category: "Api-specifications",
          source: "Oas analyser",
          mitigation:
            "Make sure that the server performs all the needed authorization checks.",
        },
      ],
    },
    step3ModuleData: {
      modalAccordian: {
        accordian: [
          {
            title: "API specification analysis through upload/reconstruction",
            content: "conentnt",
          },
          {
            title: "2API specification analysis through upload/reconstruction",
            content: "conentnt",
          },
          {
            title: "3API specification analysis through upload/reconstruction",
            content: "conentnt",
          },
        ],
        title: "Communication",
      },
      topHeading: "We can perform 3 tests on the APIs",
      topDescription:
        " When evaluating the security posture of an API, it is also important to review the API specification. This involves uploading or reconstructing the API specification to determine how the API behaves and what security measures are in place.",
      leftHeading: "Upload API Specification",
      leftDescription:
        "In this scenario, we will upload the API specification of finance-cluster, allowing us to test for discrepancies between the specification and the actual behaviour of the API in run-time.",
    },
    step4ModuleData: {
      topHeading: "Retail",
      topDescription:
        " When evaluating the security posture of an API, it is also important to review the API specification. This involves uploading or reconstructing the API specification to determine how the API behaves and what security measures are in place.",
      leftHeading: "Upload API Specification",
      leftDescription:
        "In this scenario, we will upload the API specification of finance-cluster, allowing us to test for discrepancies between the specification and the actual behaviour of the API in run-time.",
    },
    step5ModuleData: {
      topHeading: "Risk findings in APIs",
      topDescription:
        "The findings that we obtain following an evaluation of <br /> the APIs are the main emphasis on the right.",
      leftHeading: "Choose an API",
      leftDescription:
        "Lets pick a banking sector example with highlighted ‘Mobile Banking API’ to evaluate.",
      firstTextPopUp: {
        heading: "Cirtical privacy/exposure",
        description:
          "User is informed of how Panoptica can secure their API with this info.",
      },
      secondTextPopUp: {
        heading: "Cirtical privacy/exposure",
        description:
          "User is informed of how Panoptica can secure their API with this info.",
      },
    },
  },
  {
    id: 2,
    img: CloudBorn,
    name: "Tech/Cloud-Born",
    steps: [
      { title: "Choose an API", content: ChooseAPI },
      { title: "Test API Vulnerability", content: TestAPI },
      { title: "Upload API Specification", content: UploadAPI },
      { title: "Evaluate Security Posture", content: EvaluateSecurity },
      { title: "Finish", content: Finish },
    ],
    step1ModalData: {
      topHeading: "Tech/Cloud-Born",
      topDescription: "Tech/Cloud-Born",
      leftHeading: "Tech/Cloud-Born",
      leftDescription: "Tech/Cloud-Born",
      cards: [
        {
          id: 1,
          heading: "Mobile Banking API",
          port: "21016",
          cluster: "finance-cluster",
          nameSpace: "finance cluster",
          gateway: "Kong",
          thread1: 2,
          thread2: 1,
          thread3: 5,
          thread4: 6,
        },
        {
          id: 2,
          heading: "Conversion",
          port: "21017",
          cluster: "finance-cluster",
          nameSpace: "finance cluster",
          gateway: "Tyk",
          thread1: 2,
          thread2: 1,
          thread3: 3,
          thread4: 6,
        },
        {
          id: 3,
          heading: "Mutual Funds",
          port: "52212",
          cluster: "finance-cluster",
          nameSpace: "finance cluster",
          gateway: "Apigee X",
          thread1: 2,
          thread2: 1,
          thread3: 7,
          thread4: 9,
        },
      ],
    },
    step2ModuleData: {
      topHeading: "Tech/Cloud-Born",
      topDescription: "Tech/Cloud-Born",
      leftHeading: "Tech/Cloud-Born",
      leftDescription: "Tech/Cloud-Born",
      cards: [
        {
          id: 1,
          heading: "Expired certificate",
          status: { name: "Critical", icon: CrossBrown3 },
          description: "SSL is vulnerable to a CVE.",
          affectedElements: ["Mobilebanking-fin-1.com +2 more"],
          category: "Network",
          source: "Api fuzzer",
          mitigation:
            "Review the CVE and perform the recommended action(s) for fixing the issue.",
        },
        {
          id: 2,
          heading: "Missing Security Scheme",
          status: { name: "Critical", icon: CrossBrown3 },
          description:
            "Spec analyzer detected that the spec does not define neither a global nor a operation specific security scheme. It is highly recommended that all API operations support a sec...",
          affectedElements: ["Finace-cluster1.com"],
          category: "Api-specifications",
          source: "Api fuzzer",
          mitigation:
            "Make sure all API operations have a security scheme associated and as a good practice add a global security scheme.",
        },
        {
          id: 3,
          heading: "Authentication Issue",
          status: { name: "High", icon: CrossBrown2 },
          description:
            "The fuzzer retrieved meaningful information without being authenticated against an endpoint that required authentication according to the specifications.",
          affectedElements: ["MFinace-cluster2.com"],
          category: "Api-specifications",
          source: "Oas analyser",
          mitigation:
            "Make sure that the server performs all the needed authorization checks.",
        },
      ],
    },
    step3ModuleData: {
      modalAccordian: {
        accordian: [
          {
            title: "API specification analysis through upload/reconstruction",
            content: "conentnt",
          },
          {
            title: "2API specification analysis through upload/reconstruction",
            content: "conentnt",
          },
          {
            title: "3API specification analysis through upload/reconstruction",
            content: "conentnt",
          },
        ],
        title: "Communication",
      },
      topHeading: "Tech/Cloud-Born",
      topDescription:
        " When evaluating the security posture of an API, it is also important to review the API specification. This involves uploading or reconstructing the API specification to determine how the API behaves and what security measures are in place.",
      leftHeading: "Upload API Specification",
      leftDescription:
        "In this scenario, we will upload the API specification of finance-cluster, allowing us to test for discrepancies between the specification and the actual behaviour of the API in run-time.",
    },
    step4ModuleData: {
      topHeading: "Retail",
      topDescription:
        " When evaluating the security posture of an API, it is also important to review the API specification. This involves uploading or reconstructing the API specification to determine how the API behaves and what security measures are in place.",
      leftHeading: "Upload API Specification",
      leftDescription:
        "In this scenario, we will upload the API specification of finance-cluster, allowing us to test for discrepancies between the specification and the actual behaviour of the API in run-time.",
    },
    step5ModuleData: {
      topHeading: "Retail",
      topDescription:
        " When evaluating the security posture of an API, it is also important to review the API specification. This involves uploading or reconstructing the API specification to determine how the API behaves and what security measures are in place.",
      leftHeading: "Upload API Specification",
      leftDescription:
        "In this scenario, we will upload the API specification of finance-cluster, allowing us to test for discrepancies between the specification and the actual behaviour of the API in run-time.",
      firstTextPopUp: {
        heading: "Cirtical privacy/exposure",
        description:
          "User is informed of how Panoptica can secure their API with this info.",
      },
      secondTextPopUp: {
        heading: "Cirtical privacy/exposure",
        description:
          "User is informed of how Panoptica can secure their API with this info.",
      },
    },
  },
  {
    id: 3,
    img: Utilities,
    name: "Utilities",
    steps: [
      { title: "Choose an API", content: ChooseAPI },
      { title: "Test API Vulnerability", content: TestAPI },
      { title: "Upload API Specification", content: UploadAPI },
      { title: "Evaluate Security Posture", content: EvaluateSecurity },
      { title: "Finish", content: Finish },
    ],
    step1ModalData: {
      topHeading: "Utilities",
      topDescription: "Utilities",
      leftHeading: "Utilities",
      leftDescription: "Utilities",
      cards: [
        {
          id: 1,
          heading: "Mobile Banking API",
          port: "21016",
          cluster: "finance-cluster",
          nameSpace: "finance cluster",
          gateway: "Kong",
          thread1: 2,
          thread2: 1,
          thread3: 5,
          thread4: 6,
        },
        {
          id: 2,
          heading: "Conversion",
          port: "21017",
          cluster: "finance-cluster",
          nameSpace: "finance cluster",
          gateway: "Tyk",
          thread1: 2,
          thread2: 1,
          thread3: 3,
          thread4: 6,
        },
        {
          id: 3,
          heading: "Mutual Funds",
          port: "52212",
          cluster: "finance-cluster",
          nameSpace: "finance cluster",
          gateway: "Apigee X",
          thread1: 2,
          thread2: 1,
          thread3: 7,
          thread4: 9,
        },
      ],
    },
    step2ModuleData: {
      topHeading: "Utilities",
      topDescription: "Utilities",
      leftHeading: "Utilities",
      leftDescription: "Utilities",
      cards: [
        {
          id: 1,
          heading: "Expired certificate",
          status: { name: "Critical", icon: CrossBrown3 },
          description: "SSL is vulnerable to a CVE.",
          affectedElements: ["Mobilebanking-fin-1.com +2 more"],
          category: "Network",
          source: "Api fuzzer",
          mitigation:
            "Review the CVE and perform the recommended action(s) for fixing the issue.",
        },
        {
          id: 2,
          heading: "Missing Security Scheme",
          status: { name: "Critical", icon: CrossBrown3 },
          description:
            "Spec analyzer detected that the spec does not define neither a global nor a operation specific security scheme. It is highly recommended that all API operations support a sec...",
          affectedElements: ["Finace-cluster1.com"],
          category: "Api-specifications",
          source: "Api fuzzer",
          mitigation:
            "Make sure all API operations have a security scheme associated and as a good practice add a global security scheme.",
        },
        {
          id: 3,
          heading: "Authentication Issue",
          status: { name: "High", icon: CrossBrown2 },
          description:
            "The fuzzer retrieved meaningful information without being authenticated against an endpoint that required authentication according to the specifications.",
          affectedElements: ["MFinace-cluster2.com"],
          category: "Api-specifications",
          source: "Oas analyser",
          mitigation:
            "Make sure that the server performs all the needed authorization checks.",
        },
      ],
    },
    step3ModuleData: {
      modalAccordian: {
        accordian: [
          {
            title: "API specification analysis through upload/reconstruction",
            content: "conentnt",
          },
          {
            title: "2API specification analysis through upload/reconstruction",
            content: "conentnt",
          },
          {
            title: "3API specification analysis through upload/reconstruction",
            content: "conentnt",
          },
        ],
        title: "Communication",
      },
      topHeading: "Utilities",
      topDescription:
        " When evaluating the security posture of an API, it is also important to review the API specification. This involves uploading or reconstructing the API specification to determine how the API behaves and what security measures are in place.",
      leftHeading: "Upload API Specification",
      leftDescription:
        "In this scenario, we will upload the API specification of finance-cluster, allowing us to test for discrepancies between the specification and the actual behaviour of the API in run-time.",
    },
    step4ModuleData: {
      topHeading: "Retail",
      topDescription:
        " When evaluating the security posture of an API, it is also important to review the API specification. This involves uploading or reconstructing the API specification to determine how the API behaves and what security measures are in place.",
      leftHeading: "Upload API Specification",
      leftDescription:
        "In this scenario, we will upload the API specification of finance-cluster, allowing us to test for discrepancies between the specification and the actual behaviour of the API in run-time.",
    },
    step5ModuleData: {
      topHeading: "Retail",
      topDescription:
        " When evaluating the security posture of an API, it is also important to review the API specification. This involves uploading or reconstructing the API specification to determine how the API behaves and what security measures are in place.",
      leftHeading: "Upload API Specification",
      leftDescription:
        "In this scenario, we will upload the API specification of finance-cluster, allowing us to test for discrepancies between the specification and the actual behaviour of the API in run-time.",
      firstTextPopUp: {
        heading: "Cirtical privacy/exposure",
        description:
          "User is informed of how Panoptica can secure their API with this info.",
      },
      secondTextPopUp: {
        heading: "Cirtical privacy/exposure",
        description:
          "User is informed of how Panoptica can secure their API with this info.",
      },
    },
  },
  {
    id: 4,
    img: Transport,
    name: "Transport",
    steps: [
      { title: "Choose an API", content: ChooseAPI },
      { title: "Test API Vulnerability", content: TestAPI },
      { title: "Upload API Specification", content: UploadAPI },
      { title: "Evaluate Security Posture", content: EvaluateSecurity },
      { title: "Finish", content: Finish },
    ],
    step1ModalData: {
      topHeading: "Transport",
      topDescription: "Transport",
      leftHeading: "Transport",
      leftDescription: "Transport",
      cards: [
        {
          id: 1,
          heading: "Mobile Banking API",
          port: "21016",
          cluster: "finance-cluster",
          nameSpace: "finance cluster",
          gateway: "Kong",
          thread1: 2,
          thread2: 1,
          thread3: 5,
          thread4: 6,
        },
        {
          id: 2,
          heading: "Conversion",
          port: "21017",
          cluster: "finance-cluster",
          nameSpace: "finance cluster",
          gateway: "Tyk",
          thread1: 2,
          thread2: 1,
          thread3: 3,
          thread4: 6,
        },
        {
          id: 3,
          heading: "Mutual Funds",
          port: "52212",
          cluster: "finance-cluster",
          nameSpace: "finance cluster",
          gateway: "Apigee X",
          thread1: 2,
          thread2: 1,
          thread3: 7,
          thread4: 9,
        },
      ],
    },
    step2ModuleData: {
      topHeading: "Transport",
      topDescription: "Transport",
      leftHeading: "Transport",
      leftDescription: "Transport",
      cards: [
        {
          id: 1,
          heading: "Expired certificate",
          status: { name: "Critical", icon: CrossBrown3 },
          description: "SSL is vulnerable to a CVE.",
          affectedElements: ["Mobilebanking-fin-1.com +2 more"],
          category: "Network",
          source: "Api fuzzer",
          mitigation:
            "Review the CVE and perform the recommended action(s) for fixing the issue.",
        },
        {
          id: 2,
          heading: "Missing Security Scheme",
          status: { name: "Critical", icon: CrossBrown3 },
          description:
            "Spec analyzer detected that the spec does not define neither a global nor a operation specific security scheme. It is highly recommended that all API operations support a sec...",
          affectedElements: ["Finace-cluster1.com"],
          category: "Api-specifications",
          source: "Api fuzzer",
          mitigation:
            "Make sure all API operations have a security scheme associated and as a good practice add a global security scheme.",
        },
        {
          id: 3,
          heading: "Authentication Issue",
          status: { name: "High", icon: CrossBrown2 },
          description:
            "The fuzzer retrieved meaningful information without being authenticated against an endpoint that required authentication according to the specifications.",
          affectedElements: ["MFinace-cluster2.com"],
          category: "Api-specifications",
          source: "Oas analyser",
          mitigation:
            "Make sure that the server performs all the needed authorization checks.",
        },
      ],
    },
    step3ModuleData: {
      modalAccordian: {
        accordian: [
          {
            title: "API specification analysis through upload/reconstruction",
            content: "conentnt",
          },
          {
            title: "2API specification analysis through upload/reconstruction",
            content: "conentnt",
          },
          {
            title: "3API specification analysis through upload/reconstruction",
            content: "conentnt",
          },
        ],
        title: "Communication",
      },
      topHeading: "Transport",
      topDescription:
        " When evaluating the security posture of an API, it is also important to review the API specification. This involves uploading or reconstructing the API specification to determine how the API behaves and what security measures are in place.",
      leftHeading: "Upload API Specification",
      leftDescription:
        "In this scenario, we will upload the API specification of finance-cluster, allowing us to test for discrepancies between the specification and the actual behaviour of the API in run-time.",
    },
    step4ModuleData: {
      topHeading: "Retail",
      topDescription:
        " When evaluating the security posture of an API, it is also important to review the API specification. This involves uploading or reconstructing the API specification to determine how the API behaves and what security measures are in place.",
      leftHeading: "Upload API Specification",
      leftDescription:
        "In this scenario, we will upload the API specification of finance-cluster, allowing us to test for discrepancies between the specification and the actual behaviour of the API in run-time.",
    },
    step5ModuleData: {
      topHeading: "Retail",
      topDescription:
        " When evaluating the security posture of an API, it is also important to review the API specification. This involves uploading or reconstructing the API specification to determine how the API behaves and what security measures are in place.",
      leftHeading: "Upload API Specification",
      leftDescription:
        "In this scenario, we will upload the API specification of finance-cluster, allowing us to test for discrepancies between the specification and the actual behaviour of the API in run-time.",
      firstTextPopUp: {
        heading: "Cirtical privacy/exposure",
        description:
          "User is informed of how Panoptica can secure their API with this info.",
      },
      secondTextPopUp: {
        heading: "Cirtical privacy/exposure",
        description:
          "User is informed of how Panoptica can secure their API with this info.",
      },
    },
  },
  {
    id: 5,
    img: Retail,
    name: "Retail",
    steps: [
      { title: "Choose an API", content: ChooseAPI },
      { title: "Test API Vulnerability", content: TestAPI },
      { title: "Upload API Specification", content: UploadAPI },
      { title: "Evaluate Security Posture", content: EvaluateSecurity },
      { title: "Finish", content: Finish },
    ],
    step1ModalData: {
      topHeading: "Retail",
      topDescription: "Retail",
      leftHeading: "Retail",
      leftDescription: "Retail",
      cards: [
        {
          id: 1,
          heading: "Mobile Banking API",
          port: "21016",
          cluster: "finance-cluster",
          nameSpace: "finance cluster",
          gateway: "Kong",
          thread1: 2,
          thread2: 1,
          thread3: 5,
          thread4: 6,
        },
        {
          id: 2,
          heading: "Conversion",
          port: "21017",
          cluster: "finance-cluster",
          nameSpace: "finance cluster",
          gateway: "Tyk",
          thread1: 2,
          thread2: 1,
          thread3: 3,
          thread4: 6,
        },
        {
          id: 3,
          heading: "Mutual Funds",
          port: "52212",
          cluster: "finance-cluster",
          nameSpace: "finance cluster",
          gateway: "Apigee X",
          thread1: 2,
          thread2: 1,
          thread3: 7,
          thread4: 9,
        },
      ],
    },
    step2ModuleData: {
      topHeading: "Retail",
      topDescription: "Retail",
      leftHeading: "Retail",
      leftDescription: "Retail",
      cards: [
        {
          id: 1,
          heading: "Expired certificate",
          status: { name: "Critical", icon: CrossBrown3 },
          description: "SSL is vulnerable to a CVE.",
          affectedElements: ["Mobilebanking-fin-1.com +2 more"],
          category: "Network",
          source: "Api fuzzer",
          mitigation:
            "Review the CVE and perform the recommended action(s) for fixing the issue.",
        },
        {
          id: 2,
          heading: "Missing Security Scheme",
          status: { name: "Critical", icon: CrossBrown3 },
          description:
            "Spec analyzer detected that the spec does not define neither a global nor a operation specific security scheme. It is highly recommended that all API operations support a sec...",
          affectedElements: ["Finace-cluster1.com"],
          category: "Api-specifications",
          source: "Api fuzzer",
          mitigation:
            "Make sure all API operations have a security scheme associated and as a good practice add a global security scheme.",
        },
        {
          id: 3,
          heading: "Authentication Issue",
          status: { name: "High", icon: CrossBrown2 },
          description:
            "The fuzzer retrieved meaningful information without being authenticated against an endpoint that required authentication according to the specifications.",
          affectedElements: ["MFinace-cluster2.com"],
          category: "Api-specifications",
          source: "Oas analyser",
          mitigation:
            "Make sure that the server performs all the needed authorization checks.",
        },
      ],
    },
    step3ModuleData: {
      modalAccordian: {
        accordian: [
          {
            title: "API specification analysis through upload/reconstruction",
            content: "conentnt",
          },
          {
            title: "2API specification analysis through upload/reconstruction",
            content: "conentnt",
          },
          {
            title: "3API specification analysis through upload/reconstruction",
            content: "conentnt",
          },
        ],
        title: "Communication",
      },
      topHeading: "Retail",
      topDescription:
        " When evaluating the security posture of an API, it is also important to review the API specification. This involves uploading or reconstructing the API specification to determine how the API behaves and what security measures are in place.",
      leftHeading: "Upload API Specification",
      leftDescription:
        "In this scenario, we will upload the API specification of finance-cluster, allowing us to test for discrepancies between the specification and the actual behaviour of the API in run-time.",
    },
    step4ModuleData: {
      topHeading: "Retail",
      topDescription:
        " When evaluating the security posture of an API, it is also important to review the API specification. This involves uploading or reconstructing the API specification to determine how the API behaves and what security measures are in place.",
      leftHeading: "Upload API Specification",
      leftDescription:
        "In this scenario, we will upload the API specification of finance-cluster, allowing us to test for discrepancies between the specification and the actual behaviour of the API in run-time.",
    },
    step5ModuleData: {
      topHeading: "Retail",
      topDescription:
        " When evaluating the security posture of an API, it is also important to review the API specification. This involves uploading or reconstructing the API specification to determine how the API behaves and what security measures are in place.",
      leftHeading: "Upload API Specification",
      leftDescription:
        "In this scenario, we will upload the API specification of finance-cluster, allowing us to test for discrepancies between the specification and the actual behaviour of the API in run-time.",
      firstTextPopUp: {
        heading: "Cirtical privacy/exposure",
        description:
          "User is informed of how Panoptica can secure their API with this info.",
      },
      secondTextPopUp: {
        heading: "Cirtical privacy/exposure",
        description:
          "User is informed of how Panoptica can secure their API with this info.",
      },
    },
  },
  {
    id: 6,
    img: Manufacturing,
    name: "Manufacturing",
    steps: [
      { title: "Choose an API", content: ChooseAPI },
      { title: "Test API Vulnerability", content: TestAPI },
      { title: "Upload API Specification", content: UploadAPI },
      { title: "Evaluate Security Posture", content: EvaluateSecurity },
      { title: "Finish", content: Finish },
    ],
    step1ModalData: {
      topHeading: "Manufacturing",
      topDescription: "Manufacturing",
      leftHeading: "Manufacturing",
      leftDescription: "Manufacturing",
      cards: [
        {
          id: 1,
          heading: "Mobile Banking API",
          port: "21016",
          cluster: "finance-cluster",
          nameSpace: "finance cluster",
          gateway: "Kong",
          thread1: 2,
          thread2: 1,
          thread3: 5,
          thread4: 6,
        },
        {
          id: 2,
          heading: "Conversion",
          port: "21017",
          cluster: "finance-cluster",
          nameSpace: "finance cluster",
          gateway: "Tyk",
          thread1: 2,
          thread2: 1,
          thread3: 3,
          thread4: 6,
        },
        {
          id: 3,
          heading: "Mutual Funds",
          port: "52212",
          cluster: "finance-cluster",
          nameSpace: "finance cluster",
          gateway: "Apigee X",
          thread1: 2,
          thread2: 1,
          thread3: 7,
          thread4: 9,
        },
      ],
    },
    step2ModuleData: {
      topHeading: "Manufacturing",
      topDescription: "Manufacturing",
      leftHeading: "Manufacturing",
      leftDescription: "Manufacturing",
      cards: [
        {
          id: 1,
          heading: "Expired certificate",
          status: { name: "Critical", icon: CrossBrown3 },
          description: "SSL is vulnerable to a CVE.",
          affectedElements: ["Mobilebanking-fin-1.com +2 more"],
          category: "Network",
          source: "Api fuzzer",
          mitigation:
            "Review the CVE and perform the recommended action(s) for fixing the issue.",
        },
        {
          id: 2,
          heading: "Missing Security Scheme",
          status: { name: "Critical", icon: CrossBrown3 },
          description:
            "Spec analyzer detected that the spec does not define neither a global nor a operation specific security scheme. It is highly recommended that all API operations support a sec...",
          affectedElements: ["Finace-cluster1.com"],
          category: "Api-specifications",
          source: "Api fuzzer",
          mitigation:
            "Make sure all API operations have a security scheme associated and as a good practice add a global security scheme.",
        },
        {
          id: 3,
          heading: "Authentication Issue",
          status: { name: "High", icon: CrossBrown2 },
          description:
            "The fuzzer retrieved meaningful information without being authenticated against an endpoint that required authentication according to the specifications.",
          affectedElements: ["MFinace-cluster2.com"],
          category: "Api-specifications",
          source: "Oas analyser",
          mitigation:
            "Make sure that the server performs all the needed authorization checks.",
        },
      ],
    },
    step3ModuleData: {
      modalAccordian: {
        accordian: [
          {
            title: "API specification analysis through upload/reconstruction",
            content: "conentnt",
          },
          {
            title: "2API specification analysis through upload/reconstruction",
            content: "conentnt",
          },
          {
            title: "3API specification analysis through upload/reconstruction",
            content: "conentnt",
          },
        ],
        title: "Communication",
      },
      topHeading: "Manufacturing",
      topDescription:
        " When evaluating the security posture of an API, it is also important to review the API specification. This involves uploading or reconstructing the API specification to determine how the API behaves and what security measures are in place.",
      leftHeading: "Upload API Specification",
      leftDescription:
        "In this scenario, we will upload the API specification of finance-cluster, allowing us to test for discrepancies between the specification and the actual behaviour of the API in run-time.",
    },
    step4ModuleData: {
      topHeading: "Retail",
      topDescription:
        " When evaluating the security posture of an API, it is also important to review the API specification. This involves uploading or reconstructing the API specification to determine how the API behaves and what security measures are in place.",
      leftHeading: "Upload API Specification",
      leftDescription:
        "In this scenario, we will upload the API specification of finance-cluster, allowing us to test for discrepancies between the specification and the actual behaviour of the API in run-time.",
    },
    step5ModuleData: {
      topHeading: "Retail",
      topDescription:
        " When evaluating the security posture of an API, it is also important to review the API specification. This involves uploading or reconstructing the API specification to determine how the API behaves and what security measures are in place.",
      leftHeading: "Upload API Specification",
      leftDescription:
        "In this scenario, we will upload the API specification of finance-cluster, allowing us to test for discrepancies between the specification and the actual behaviour of the API in run-time.",
      firstTextPopUp: {
        heading: "Cirtical privacy/exposure",
        description:
          "User is informed of how Panoptica can secure their API with this info.",
      },
      secondTextPopUp: {
        heading: "Cirtical privacy/exposure",
        description:
          "User is informed of how Panoptica can secure their API with this info.",
      },
    },
  },
  {
    id: 7,
    img: PublicSector,
    name: "Public Sector High",
    steps: [
      { title: "Choose an API", content: ChooseAPI },
      { title: "Test API Vulnerability", content: TestAPI },
      { title: "Upload API Specification", content: UploadAPI },
      { title: "Evaluate Security Posture", content: EvaluateSecurity },
      { title: "Finish", content: Finish },
    ],
    step1ModalData: {
      topHeading: "Public Sector High",
      topDescription: "Public Sector High",
      leftHeading: "Public Sector High",
      leftDescription: "Public Sector High",
      cards: [
        {
          id: 1,
          heading: "Mobile Banking API",
          port: "21016",
          cluster: "finance-cluster",
          nameSpace: "finance cluster",
          gateway: "Kong",
          thread1: 2,
          thread2: 1,
          thread3: 5,
          thread4: 6,
        },
        {
          id: 2,
          heading: "Conversion",
          port: "21017",
          cluster: "finance-cluster",
          nameSpace: "finance cluster",
          gateway: "Tyk",
          thread1: 2,
          thread2: 1,
          thread3: 3,
          thread4: 6,
        },
        {
          id: 3,
          heading: "Mutual Funds",
          port: "52212",
          cluster: "finance-cluster",
          nameSpace: "finance cluster",
          gateway: "Apigee X",
          thread1: 2,
          thread2: 1,
          thread3: 7,
          thread4: 9,
        },
      ],
    },
    step2ModuleData: {
      topHeading: "Public Sector High",
      topDescription: "Public Sector High",
      leftHeading: "Public Sector High",
      leftDescription: "Public Sector High",
      cards: [
        {
          id: 1,
          heading: "Expired certificate",
          status: { name: "Critical", icon: CrossBrown3 },
          description: "SSL is vulnerable to a CVE.",
          affectedElements: ["Mobilebanking-fin-1.com +2 more"],
          category: "Network",
          source: "Api fuzzer",
          mitigation:
            "Review the CVE and perform the recommended action(s) for fixing the issue.",
        },
        {
          id: 2,
          heading: "Missing Security Scheme",
          status: { name: "Critical", icon: CrossBrown3 },
          description:
            "Spec analyzer detected that the spec does not define neither a global nor a operation specific security scheme. It is highly recommended that all API operations support a sec...",
          affectedElements: ["Finace-cluster1.com"],
          category: "Api-specifications",
          source: "Api fuzzer",
          mitigation:
            "Make sure all API operations have a security scheme associated and as a good practice add a global security scheme.",
        },
        {
          id: 3,
          heading: "Authentication Issue",
          status: { name: "High", icon: CrossBrown2 },
          description:
            "The fuzzer retrieved meaningful information without being authenticated against an endpoint that required authentication according to the specifications.",
          affectedElements: ["MFinace-cluster2.com"],
          category: "Api-specifications",
          source: "Oas analyser",
          mitigation:
            "Make sure that the server performs all the needed authorization checks.",
        },
      ],
    },
    step3ModuleData: {
      modalAccordian: {
        accordian: [
          {
            title: "API specification analysis through upload/reconstruction",
            content: "conentnt",
          },
          {
            title: "2API specification analysis through upload/reconstruction",
            content: "conentnt",
          },
          {
            title: "3API specification analysis through upload/reconstruction",
            content: "conentnt",
          },
        ],
        title: "Communication",
      },
      topHeading: "Public Sector High",
      topDescription:
        " When evaluating the security posture of an API, it is also important to review the API specification. This involves uploading or reconstructing the API specification to determine how the API behaves and what security measures are in place.",
      leftHeading: "Upload API Specification",
      leftDescription:
        "In this scenario, we will upload the API specification of finance-cluster, allowing us to test for discrepancies between the specification and the actual behaviour of the API in run-time.",
    },
    step4ModuleData: {
      topHeading: "Retail",
      topDescription:
        " When evaluating the security posture of an API, it is also important to review the API specification. This involves uploading or reconstructing the API specification to determine how the API behaves and what security measures are in place.",
      leftHeading: "Upload API Specification",
      leftDescription:
        "In this scenario, we will upload the API specification of finance-cluster, allowing us to test for discrepancies between the specification and the actual behaviour of the API in run-time.",
    },
    step5ModuleData: {
      topHeading: "Retail",
      topDescription:
        " When evaluating the security posture of an API, it is also important to review the API specification. This involves uploading or reconstructing the API specification to determine how the API behaves and what security measures are in place.",
      leftHeading: "Upload API Specification",
      leftDescription:
        "In this scenario, we will upload the API specification of finance-cluster, allowing us to test for discrepancies between the specification and the actual behaviour of the API in run-time.",
      firstTextPopUp: {
        heading: "Cirtical privacy/exposure",
        description:
          "User is informed of how Panoptica can secure their API with this info.",
      },
      secondTextPopUp: {
        heading: "Cirtical privacy/exposure",
        description:
          "User is informed of how Panoptica can secure their API with this info.",
      },
    },
  },
  {
    id: 8,
    img: Communication,
    name: "Communication",
    steps: [
      { title: "Choose an API", content: ChooseAPI },
      { title: "Test API Vulnerability", content: TestAPI },
      { title: "Upload API Specification", content: UploadAPI },
      { title: "Evaluate Security Posture", content: EvaluateSecurity },
      { title: "Finish", content: Finish },
    ],
    step1ModalData: {
      topHeading: "Communication",
      topDescription: "Communication",
      leftHeading: "Communication",
      leftDescription: "Communication",
      cards: [
        {
          id: 1,
          heading: "Mobile Banking API",
          port: "21016",
          cluster: "finance-cluster",
          nameSpace: "finance cluster",
          gateway: "Kong",
          thread1: 2,
          thread2: 1,
          thread3: 5,
          thread4: 6,
        },
        {
          id: 2,
          heading: "Conversion",
          port: "21017",
          cluster: "finance-cluster",
          nameSpace: "finance cluster",
          gateway: "Tyk",
          thread1: 2,
          thread2: 1,
          thread3: 3,
          thread4: 6,
        },
        {
          id: 3,
          heading: "Mutual Funds",
          port: "52212",
          cluster: "finance-cluster",
          nameSpace: "finance cluster",
          gateway: "Apigee X",
          thread1: 2,
          thread2: 1,
          thread3: 7,
          thread4: 9,
        },
      ],
    },
    step2ModuleData: {
      topHeading: "Communication",
      topDescription: "Communication",
      leftHeading: "Communication",
      leftDescription: "Communication",
      cards: [
        {
          id: 1,
          heading: "Expired certificate",
          status: { name: "Critical", icon: CrossBrown3 },
          description: "SSL is vulnerable to a CVE.",
          affectedElements: ["Mobilebanking-fin-1.com +2 more"],
          category: "Network",
          source: "Api fuzzer",
          mitigation:
            "Review the CVE and perform the recommended action(s) for fixing the issue.",
        },
        {
          id: 2,
          heading: "Missing Security Scheme",
          status: { name: "Critical", icon: CrossBrown3 },
          description:
            "Spec analyzer detected that the spec does not define neither a global nor a operation specific security scheme. It is highly recommended that all API operations support a sec...",
          affectedElements: ["Finace-cluster1.com"],
          category: "Api-specifications",
          source: "Api fuzzer",
          mitigation:
            "Make sure all API operations have a security scheme associated and as a good practice add a global security scheme.",
        },
        {
          id: 3,
          heading: "Authentication Issue",
          status: { name: "High", icon: CrossBrown2 },
          description:
            "The fuzzer retrieved meaningful information without being authenticated against an endpoint that required authentication according to the specifications.",
          affectedElements: ["MFinace-cluster2.com"],
          category: "Api-specifications",
          source: "Oas analyser",
          mitigation:
            "Make sure that the server performs all the needed authorization checks.",
        },
      ],
    },
    step3ModuleData: {
      modalAccordian: {
        accordian: [
          {
            title: "API specification analysis through upload/reconstruction",
            content: "conentnt",
          },
          {
            title: "2API specification analysis through upload/reconstruction",
            content: "conentnt",
          },
          {
            title: "3API specification analysis through upload/reconstruction",
            content: "conentnt",
          },
        ],
        title: "Communication",
      },
      topHeading: "Communication",
      topDescription:
        " When evaluating the security posture of an API, it is also important to review the API specification. This involves uploading or reconstructing the API specification to determine how the API behaves and what security measures are in place.",
      leftHeading: "Upload API Specification",
      leftDescription:
        "In this scenario, we will upload the API specification of finance-cluster, allowing us to test for discrepancies between the specification and the actual behaviour of the API in run-time.",
    },
    step4ModuleData: {
      topHeading: "Retail",
      topDescription:
        " When evaluating the security posture of an API, it is also important to review the API specification. This involves uploading or reconstructing the API specification to determine how the API behaves and what security measures are in place.",
      leftHeading: "Upload API Specification",
      leftDescription:
        "In this scenario, we will upload the API specification of finance-cluster, allowing us to test for discrepancies between the specification and the actual behaviour of the API in run-time.",
    },
    step5ModuleData: {
      topHeading: "Retail",
      topDescription:
        " When evaluating the security posture of an API, it is also important to review the API specification. This involves uploading or reconstructing the API specification to determine how the API behaves and what security measures are in place.",
      leftHeading: "Upload API Specification",
      leftDescription:
        "In this scenario, we will upload the API specification of finance-cluster, allowing us to test for discrepancies between the specification and the actual behaviour of the API in run-time.",
      firstTextPopUp: {
        heading: "Cirtical privacy/exposure",
        description:
          "User is informed of how Panoptica can secure their API with this info.",
      },
      secondTextPopUp: {
        heading: "Cirtical privacy/exposure",
        description:
          "User is informed of how Panoptica can secure their API with this info.",
      },
    },
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
