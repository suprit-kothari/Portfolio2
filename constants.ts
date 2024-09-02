export const METADATA = {
  title: "Portfolio | Suprit Kothari",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  siteUrl: "https:// /",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "About",
    ref: "about2",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I'm a Programmer",
  "I'm a Tech Enthusiast",
  "I'm a Web Developer",
  "I design and develop things",
];

export const EMAIL = "supritkothari08@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/supritkothari/",
  github: "https://github.com/suprit-kothari",
  instagram: "https://www.instagram.com/supritk_01/",
  twitter: "https://twitter.com/shiniz07",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "P2P Transaction Using Blockchain",
    image: "/projects/P2P.png",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "React-based web application for a Direct Benefit Transfer (DBT) system.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://github.com/M4STERR0SH1/P2P_Transaction_using_Blockchain",
    tech: ["react", "solidity", "css"],
  },
  {
    name: "Predict Stock Market",
    image: "/projects/stock.png",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "Utilizing machine learning to predict stock market trends and make informed investment decisions.",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://github.com/M4STERR0SH1/Predict-Stock-Market",
    tech: ["python","machine"],
  },
  {
    name: "Malware Detection using Machine learning Algorithms",
    image: "/projects/dlt-website.jpg",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "Comparative analysis of several Machine Learning algorithms.",
    gradient: ["#245B57", "#004741"],
    url: "https://github.com/M4STERR0SH1/MalwareDetection-Using-ML",
    tech: ["machine", "python"],
  },
  // {
  //   name: "DL Unify",
  //   image: "/projects/dl-unify.jpg",
  //   blurImage: "/projects/blur/dl-unify-blur.jpg",
  //   description: "Built the application from zero to production 🚀",
  //   gradient: ["#003052", "#167187"],
  //   url: "https://dlunify.dltlabs.com/",
  //   tech: ["tailwind", "angular", "gsap", "figma"],
  // },
];

export const SKILLS = {
  tech: [
    "c++",
    "javascript",
    "python",
    "java",
    "solidity",
    "typescript",
  ],
  tech2: [
    "react",
    "nodejs",
    "css",
    "git",
    "mysql",
    "tableau",
  ],
  soft: ["leadership", "problem", "time", "communication"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge", 
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Axxela Research & Analytics",
    size: ItemSize.SMALL,
    subtitle: "Derivatives Trader",
    image: "/timeline/density.png",
    slideImage: "/timeline/density.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Affinity Steps",
    size: ItemSize.SMALL,
    subtitle:"Automation Developer",
    image: "/timeline/affinity.png",
    slideImage: "/timeline/affinity.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Density Exchange",
    size: ItemSize.SMALL,
    subtitle: "Capital Market Analyst",
    image: "/timeline/density.png",
    slideImage: "/timeline/density.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "- Made a Language Translation API and several other projects related to ML. <br><br> - Created this portfolio website. <br><br> - Learned Node.js and other Web-Dev Languages.<br>",
    size: ItemSize.SMALL,
    slideImage: "/timeline/portfolio.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Techon Dater Systems Pvt. Ltd.",
    size: ItemSize.SMALL,
    subtitle: "Web Developer Intern",
    image: "/timeline/techon.png",
    slideImage: "/timeline/techon.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "7H Pro",
    size: ItemSize.SMALL,
    subtitle: "PHP Web Developer",
    image: "/timeline/techon.png",
    slideImage: "/timeline/techon.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "- Started exploring AI and ML, So basically Data Science. <br><br> - Created another Image Encryption project but this time using Chaos Maps.  <br>",
    size: ItemSize.SMALL,
    slideImage: "/timeline/P2P.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  
  {
    type: NodeTypes.CHECKPOINT,
    title: "Frontrow",
    size: ItemSize.SMALL,
    subtitle: "Product Management",
    image: "/timeline/techon.png",
    slideImage: "/timeline/techon.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: " - Learned DSA and DAA. <br><br> - Learned Python, Pandas, Numpy, MATLAB and R.<br>",
    size: ItemSize.SMALL,
    slideImage: "/timeline/code.gif",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "- Learned about Cloud technologies. <br><br> - Created a project for Image Encryption using advanced AES technique. <br><br>",
    size: ItemSize.SMALL,
    slideImage: "/timeline/cloud.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2020",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "- Learned Basics of Programming. <br><br> - Learned Investing in Stocks and Cryptocurrencies. <br>",
    size: ItemSize.SMALL,
    slideImage: "/timeline/basic.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "- Started my Undergrad degree(B.Tech in CSE with specialization info sec) from VIT, Vellore. <br><br> - Graduated from MDS Public School, Udaipur",
    size: ItemSize.SMALL,
    slideImage: "/timeline/college.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
