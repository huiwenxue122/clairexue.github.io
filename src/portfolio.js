/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Claire's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Claire Xue Portfolio",
    type: "website",
    url: "clairexue.me",
  },
};

//Home Page
const greeting = {
  title: "Claire Xue",
  logo_name: "Claire Xue",
  nickname: "Huiwen惠文 Xue薛",
  subTitle: "Applied AI Engineer ",
  introParagraph:
    "Building high-performance ML systems and scalable AI backends. I'm passionate about making AI work reliably in production.",
  resumeLink:
    "https://drive.google.com/file/d/1W1Zn_GglEhYV1myTyAi8NtoGWXSfFEq3/view?usp=drive_link",
  portfolio_repository: "https://github.com/huiwenxue122",
  githubProfile: "https://github.com/huiwenxue122",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/huiwenxue122",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/claire22",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:clairexuework@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/clairebear012202/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indian Institute of Information Technology Kurnool",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "http://iiitk.ac.in",
    },
    {
      title: "Indiana University Bloomington",
      subtitle: "M.S. in Computer Science",
      logo_path: "iu_logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://www.indiana.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  /*subtitle: "Internship, Research Experience and Hackathon",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  */
  header_image_path: "hackthon.jpg",
  sections: [
    {
      title: "Hackathon",
      work: true,
      experiences: [
        {
          title: "Stellar AI Treasury: Multi-Agent Quant Platform",
          company: "Winner, Stellar x EasyA Hackathon",
          company_url: "https://github.com/huiwenxue122/Stellar-AI-Treasury",
          logo_path: "ste.png",
          duration: "Oct 2025",
          location: "Boston",
          description:
            "Autonomous Multi-Agent System: Built a collaborative Python framework using GPT-4o to execute 10+ quantitative strategies (LSTM, RL).\n\nOn-Chain Risk Control: Developed 570+ lines of Rust (Soroban) smart contracts featuring multi-signature auth and automated circuit breakers (VaR, Sharpe).\n\nReal-time Transparency: Integrated Horizon API and Streamlit to visualize live ROI and agent decision-making logic.\n\nStack: Python, Rust (Soroban), GPT-4o, Reinforcement Learning, Streamlit.",
          github_url: "https://github.com/huiwenxue122/Stellar-AI-Treasury",
          demo_url: "https://www.youtube.com/watch?v=Oo2z6eTNao8",
          color: "#000000",
        },
        {
          title: "MeetingFlowAI: Multi-Agent Sales Automation",
          company: "IBM watsonx Hackathon",
          company_url: "https://github.com/huiwenxue122/MeetingFlowAI",
          logo_path: "lablab.png",
          duration: "Nov 2025",
          location: "",
          description:
            "Enterprise Orchestration: Engineered a multi-agent architecture using IBM Granite 13B models to automate post-meeting workflows, reducing 15 minutes of admin work to 2 minutes.\n\nSystem Integration: Developed a master orchestrator to coordinate specialized sub-agents for Sales Intelligence and automated Salesforce CRM updates via the watsonx Orchestrate SDK.\n\nEnd-to-End Delivery: Built a React-based frontend with real-time event listeners and Watson Chat Widget integration for seamless human-AI interaction.\n\nStack: IBM Granite, watsonx Orchestrate, React, Salesforce API, Node.js.",
          github_url: "https://github.com/huiwenxue122/MeetingFlowAI",
          demo_url:
            "https://lablab.ai/ai-hackathons/agentic-ai-hackathon-ibm-watsonx-orchestrate/salesflow-ai/meetingflowai",
          color: "#000000",
        },
      ],
    },
    {
      title: "Experience",
      experiences: [
        {
          title: "Machine Learning Research Engineer",
          company: "Brown University - lee.ai Lab",
          company_url: "#",
          logo_path: "brown.png",
          duration: "Nov 2024 – Aug 2025",
          location: "Providence, RI",
          description:
            "Model Reproduction: Successfully reproduced a complex sequence-modeling framework, ensuring the results matched the original paper's benchmarks.\n\nData Handling: Gained hands-on experience in processing and cleaning large-scale sequence data for neural network training.\n\nCollaboration: Presented findings in weekly Lab Meetings, discussing implementation challenges and data-driven insights with the research team.",
          color: "#000000",
        },
        {
          title: "Teaching Assistant",
          company: "Brown University School of Engineering",
          company_url: "#",
          logo_path: "brown.png",
          duration: "Sept 2024 – Dec 2025",
          location: "Providence, RI",
          description:
            "Mentorship: Supported 50+ students in engineering courses, helping them troubleshoot coding assignments in Python and MATLAB and theoretical concepts.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internship",
      experiences: [
        {
          title: "Consulting Analyst",
          company: "Meritco Services",
          company_url: "#",
          logo_path: "jiu.png",
          duration: "Mar 2022 – June 2022",
          location: "China",
          description:
            "Tech-Sector Strategy: Conducted primary and secondary research for high-growth Technology & Internet clients, processing complex datasets to support strategic decision-making.\n\nData-Driven Insights: Synthesized large-scale industry data and literature reviews into actionable executive presentations, identifying key market trends and competitive advantages.\n\nDecision Optimization: Improved project delivery efficiency by translating qualitative findings into structured frameworks, facilitating data-backed pivots in team strategy.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  tagline:
    "My research focuses on three pillars of modern AI Engineering: Infrastructure Optimization, Knowledge Evolution, and Feature-Driven Precision.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "acoustic-feature-classification",
      name: "Acoustic Feature Classification System",
      createdAt: "2023-07-02T00:00:00Z",
      description:
        "Developed a high-precision ML framework for acoustic pattern recognition, achieving 99.73% accuracy through advanced feature fusion.",
      url:
        "https://www.researchgate.net/publication/376166223_Effective_acoustic_parameters_for_automatic_classification_of_performed_and_synthesized_Guzheng_music",
    },
    {
      id: "gnn-distributed-optimizer",
      name: "GNN-based Distributed System Optimizer",
      createdAt: "2023-02-27T00:00:00Z",
      description:
        "Proposed a novel Graph Neural Network (GNN) framework to optimize the training of billion-parameter models across regionally distributed computing systems. By intelligently mapping model layers to hardware nodes, the system improved training efficiency by over 20%.",
      url: "https://arxiv.org/abs/2302.13741",
    },
    {
      id: "self-escalation-llms",
      name: "Self-Escalation Learning for LLMs",
      createdAt: "2023-04-01T00:00:00Z",
      description:
        "Developed a novel training framework that enables Natural Language Generation (NLG) models to autonomously learn up-to-date knowledge without requiring additional external datasets. By implementing a dual-model self-escalation process, this work achieved stable performance improvements across seven natural language processing tasks without altering the model architecture.",
      url: "https://www.mdpi.com/2076-3417/13/8/4758",
    },
    {
      id: "vector-level-augmentation-nlu",
      name: "Vector-Level Data Augmentation for NLU",
      createdAt: "2022-12-12T00:00:00Z",
      description:
        "Engineered Random Position Noise (RPN), a novel data augmentation algorithm that operates directly at the word vector (embedding) level to enhance Natural Language Understanding (NLU). Unlike traditional methods, RPN improves model robustness without requiring gradient updates during sample generation, making it highly efficient for large-scale datasets.",
      url: "https://arxiv.org/abs/2212.05961",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Profile.JPG",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Los Angeles, CA / Boston, Massachusetts",
    locality: "Los Angeles",
    country: "USA",
    region: "California",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/search/Los+Angeles+CA",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

// What I Do — Technical Stack (homepage). Row1: AI/ML; Row2 left=Tools, right=MLOps, below=Programming.
const technicalStack = {
  categories: [
    {
      title: "AI/ML Stack",
      subsections: [
        {
          label: "Frameworks & Training",
          items: ["PyTorch", "TensorFlow", "CUDA", "Jupyter Notebooks"],
        },
        {
          label: "LLMs & APIs",
          items: [
            "LangChain",
            "LangGraph",
            "OpenAI API",
            "FAISS",
            "Hugging Face",
            "RAG",
            "OpenAI SDK",
          ],
        },
        {
          label: "Data & Libraries",
          items: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
        },
      ],
    },
    {
      title: "Tools & Development",
      subsections: [
        {
          label: "APIs & Backend",
          items: ["Fast API", "REST API"],
        },
        {
          label: "Frontend & UI",
          items: ["React", "HTML/CSS", "Streamlit"],
        },
        {
          label: "Other Tools & Practices",
          items: ["OpenCV", "SDLC", "Agile"],
        },
      ],
    },
    {
      title: "MLOps & Cloud",
      subsections: [
        {
          label: "Cloud Platforms",
          items: ["AWS"],
        },
        {
          label: "DevOps & Infra",
          items: ["Docker", "CI/CD", "Git", "Linux"],
        },
      ],
    },
    {
      title: "Programming",
      subsections: [
        {
          label: null,
          items: [
            "Python",
            "C",
            "C++",
            "Rust",
            "SQL",
            "MATLAB",
            "JavaScript",
            "TypeScript",
          ],
        },
      ],
    },
  ],
};

// What I Do — Education (homepage)
const whatIDoEducation = {
  entries: [
    {
      school: "Brown University",
      period: "Sept 2024 – May 2026",
      degree: "M.S. in Electrical and Computer Engineering",
      gpa: "GPA: 4.0 / 4.0",
      highlights: [
        'Harvard University Exchange Scholar: Selected for cross-registration in "Startups from Idea to Exit" (ENG-SCI 30): Analyzed product-market fit and exit strategies for early-stage tech ventures.',
        "Technical Coursework: Machine Learning, Reintegrating AI, Computer Vision, Coordinated Mobile Robotics, 3D Photography Systems",
        "Interdisciplinary Studies: Engaged in Geopolitics and Capitalism in Europe, developing a macro-perspective on global market structures and regulatory environments.",
      ],
    },
    {
      school: "Soochow University",
      period: "Sept 2020 – June 2024",
      degree: "B.E. in Measurement, Control Technology and Instrument",
      gpa: "GPA: 3.7 / 4.0",
      highlights: [
        "Honors: MCM Honorable Mention (2023), National EDA(Electronic Design Automation) Competition 2nd Prize (2023).",
        "Focus: Precision engineering and signal processing, providing the hardware-level intuition for high-fidelity AI applications.",
      ],
    },
  ],
};

// What I Do — Personal introduction (homepage)
const personalIntro = {
  title: "A bit about me",
  content:
    "Beyond the terminal, I am a multi-instrumentalist (Guitar & Guzheng古筝) and a dedicated practitioner of calligraphy. My passion for structured patterns extends to linguistics: I am trilingual in Mandarin, English, and currently mastering French. I believe that the discipline of traditional arts and the logic of language learning deeply inform my approach to building intuitive and culturally-aware AI systems.",
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  technicalStack,
  whatIDoEducation,
  personalIntro,
};
