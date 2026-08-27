import type {
  AboutHighlight,
  EducationEntry,
  GithubHighlight,
  LearningTopic,
  LocalizedList,
  NavigationItem,
  PersonalInformation,
  SoftSkill,
  TechnicalSkillGroup,
  TimelineEntry,
} from "@/types/portfolio";

/** Identity, contact details and the links used across the whole site. */
export const personalInformation: PersonalInformation = {
  fullName: "Ruthaichanok Kasun",
  brandName: "ruthaichanok",
  role: { en: "Software Developer", th: "นักพัฒนาซอฟต์แวร์" },
  roleLine: "Full-stack / Java · React",
  location: { en: "Nonthaburi, Thailand", th: "นนทบุรี ประเทศไทย" },
  email: "kasun.ruthaichanok@gmail.com",
  githubUrl: "https://github.com/ammmook",
  githubHandle: "github.com/ammmook",
  linkedinUrl: "https://linkedin.com/in/ruthaichanok-kasun-7571873b1",
  resumeUrl: "/resume/Ruthaichanok_Kasun_CV.pdf",
  resumeFileName: "Ruthaichanok_Kasun_CV.pdf",
  introduction: {
    en: "I enjoy building web applications, exploring new technologies, and turning ideas into practical digital experiences.",
    th: "ฉันชอบสร้างเว็บแอปพลิเคชัน ทดลองเทคโนโลยีใหม่ ๆ และเปลี่ยนไอเดียให้กลายเป็นประสบการณ์ดิจิทัลที่ใช้งานได้จริง",
  },
};

/** In-page navigation — each id must match a section id rendered on the home page. */
export const navigationItems: NavigationItem[] = [
  { id: "about", label: { en: "About", th: "เกี่ยวกับ" } },
  { id: "skills", label: { en: "Skills", th: "ทักษะ" } },
  { id: "projects", label: { en: "Projects", th: "ผลงาน" } },
  { id: "experience", label: { en: "Experience", th: "ประสบการณ์" } },
  { id: "education", label: { en: "Education", th: "การศึกษา" } },
  { id: "contact", label: { en: "Contact", th: "ติดต่อ" } },
];

/** The narrative paragraphs of the About section. */
export const aboutParagraphs: LocalizedList = {
  en: [
    "I hold a B.Sc. in Information Technology from Maejo University (First-Class Honours, GPA 3.70), and completed a cooperative education program at MFEC as a Fullstack Developer Intern — where I worked on internal systems with real users and real stakeholders.",
    "My interest sits on the backend and system-design side — OOP, MVC, design patterns and SQL — but I enjoy taking a feature all the way to a usable interface. I care about clean, maintainable code more than clever code.",
    "What I most like to build are tools that remove manual work. Both of my main projects started from the same question: could this step be done automatically instead?",
  ],
  th: [
    "ฉันจบปริญญาตรี วิทยาศาสตรบัณฑิต สาขาเทคโนโลยีสารสนเทศ จากมหาวิทยาลัยแม่โจ้ (เกียรตินิยมอันดับหนึ่ง GPA 3.70) และผ่านโครงการสหกิจศึกษาในตำแหน่ง Fullstack Developer Intern ที่ MFEC ซึ่งเป็นที่ที่ฉันได้ทำงานกับระบบจริงและผู้ใช้จริง",
    "ความสนใจของฉันอยู่ที่ฝั่ง backend และการออกแบบระบบ — OOP, MVC, Design Patterns และ SQL — แต่ก็สนุกกับการทำฟีเจอร์ให้เสร็จจนถึงหน้าจอที่ใช้งานได้จริง ฉันให้ความสำคัญกับโค้ดที่สะอาดและดูแลต่อได้มากกว่าโค้ดที่ฉลาดแต่อ่านยาก",
    "สิ่งที่ฉันชอบสร้างมากที่สุดคือเครื่องมือที่ลดงานที่คนต้องทำซ้ำ ๆ ด้วยมือ ทั้งสองโปรเจกต์หลักของฉันเริ่มจากคำถามเดียวกันว่า ขั้นตอนนี้ทำให้เป็นอัตโนมัติได้ไหม",
  ],
};

/** The four small character cards beside the About text. */
export const aboutHighlights: AboutHighlight[] = [
  {
    mark: "◇",
    accent: "primary",
    title: { en: "Problem Solver", th: "แก้ปัญหาเป็นระบบ" },
    description: {
      en: "Breaks large problems into small, shippable pieces.",
      th: "แยกปัญหาใหญ่ให้เป็นชิ้นเล็กที่ทำเสร็จได้จริง",
    },
  },
  {
    mark: "◎",
    accent: "secondary",
    title: { en: "Tech Explorer", th: "ชอบลองเทคโนโลยีใหม่" },
    description: {
      en: "Tries new tools through workshops and side projects.",
      th: "ลองเครื่องมือใหม่ผ่านเวิร์กช็อปและโปรเจกต์ส่วนตัว",
    },
  },
  {
    mark: "▲",
    accent: "primary",
    title: { en: "Builder", th: "ลงมือสร้างจริง" },
    description: {
      en: "Takes projects to a working, deployed state.",
      th: "ทำโปรเจกต์ให้เสร็จจนถึงขั้นใช้งานและ deploy ได้",
    },
  },
  {
    mark: "↻",
    accent: "secondary",
    title: { en: "Continuous Learner", th: "เรียนรู้ต่อเนื่อง" },
    description: {
      en: "Learns from docs, projects and experimentation.",
      th: "เรียนรู้จากเอกสาร โปรเจกต์ และการลองทำจริง",
    },
  },
];

/** Technical stack, grouped exactly as in the CV. */
export const technicalSkillGroups: TechnicalSkillGroup[] = [
  {
    title: { en: "PROGRAMMING LANGUAGES", th: "ภาษาโปรแกรม" },
    items: [
      {
        name: "Java",
        iconSlug: "openjdk",
        level: "Proficient",
        category: { en: "Programming Language", th: "ภาษาโปรแกรม" },
        description: {
          en: "My main language — application logic, OOP and backend-oriented projects including my senior project.",
          th: "ภาษาหลักของฉัน ใช้เขียน logic ของแอปพลิเคชัน งาน OOP และโปรเจกต์ฝั่ง backend รวมถึงโปรเจกต์จบ",
        },
      },
      {
        name: "JavaScript",
        iconSlug: "javascript",
        level: "Comfortable",
        category: { en: "Programming Language", th: "ภาษาโปรแกรม" },
        description: {
          en: "Interactive web applications and frontend behaviour; also the language I taught as a TA.",
          th: "ใช้ทำเว็บที่โต้ตอบกับผู้ใช้และพฤติกรรมฝั่ง frontend และเป็นภาษาที่ฉันสอนตอนเป็นผู้ช่วยสอน",
        },
      },
      {
        name: "Python",
        iconSlug: "python",
        level: "Familiar",
        category: { en: "Programming Language", th: "ภาษาโปรแกรม" },
        description: {
          en: "Scripting, data handling and working with machine-learning models.",
          th: "ใช้เขียนสคริปต์ จัดการข้อมูล และทำงานกับโมเดล machine learning",
        },
      },
      {
        name: "Go",
        iconSlug: "go",
        level: "Familiar",
        category: { en: "Programming Language", th: "ภาษาโปรแกรม" },
        description: {
          en: "Learned while mentoring a Golang course — concurrency and simple service code.",
          th: "เรียนรู้ระหว่างเป็นผู้ช่วยสอนวิชา Golang ทั้งเรื่อง concurrency และการเขียน service ง่าย ๆ",
        },
      },
    ],
  },
  {
    title: { en: "BACKEND", th: "แบ็กเอนด์" },
    items: [
      {
        name: "Spring Boot",
        iconSlug: "springboot",
        level: "Comfortable",
        category: { en: "Backend Framework", th: "เฟรมเวิร์ก Backend" },
        description: {
          en: "Building Java services with dependency injection and layered architecture.",
          th: "สร้าง service ด้วย Java โดยใช้ dependency injection และการแบ่งเลเยอร์",
        },
      },
      {
        name: "Spring MVC",
        iconSlug: "spring",
        level: "Proficient",
        category: { en: "Backend Framework", th: "เฟรมเวิร์ก Backend" },
        description: {
          en: "Controller–service–repository structure with JSP views in the WhatToWear app.",
          th: "โครงสร้าง Controller–Service–Repository พร้อมหน้า JSP ในโปรเจกต์ WhatToWear",
        },
      },
      {
        name: "RESTful APIs",
        iconSlug: "openapiinitiative",
        level: "Proficient",
        category: { en: "API Design", th: "การออกแบบ API" },
        description: {
          en: "Designing and consuming REST endpoints between frontend workflows and databases.",
          th: "ออกแบบและเรียกใช้ REST endpoint เพื่อเชื่อมงานฝั่งหน้าเว็บกับฐานข้อมูล",
        },
      },
      {
        name: "Node.js",
        iconSlug: "nodedotjs",
        level: "Familiar",
        category: { en: "Runtime", th: "รันไทม์" },
        description: {
          en: "JavaScript tooling and lightweight server-side work.",
          th: "ใช้กับเครื่องมือฝั่ง JavaScript และงานฝั่งเซิร์ฟเวอร์ขนาดเล็ก",
        },
      },
      {
        name: "OOP & Design Patterns",
        iconSlug: "gradle",
        level: "Proficient",
        category: { en: "Engineering Practice", th: "แนวปฏิบัติการเขียนโปรแกรม" },
        description: {
          en: "Encapsulation, inheritance and common patterns applied to keep code maintainable.",
          th: "ใช้ encapsulation, inheritance และ design pattern ที่พบบ่อย เพื่อให้โค้ดดูแลต่อได้",
        },
      },
    ],
  },
  {
    title: { en: "FRONTEND", th: "ฟรอนต์เอนด์" },
    items: [
      {
        name: "React",
        iconSlug: "react",
        level: "Comfortable",
        category: { en: "Frontend Library", th: "ไลบรารี Frontend" },
        description: {
          en: "Component-based, reusable interfaces with state-driven rendering.",
          th: "สร้าง UI แบบคอมโพเนนต์ที่นำกลับมาใช้ซ้ำได้ และแสดงผลตาม state",
        },
      },
      {
        name: "React + Vite",
        iconSlug: "vite",
        level: "Comfortable",
        category: { en: "Build Tooling", th: "เครื่องมือ Build" },
        description: {
          en: "Fast dev server and build pipeline for React projects.",
          th: "dev server และขั้นตอน build ที่รวดเร็วสำหรับโปรเจกต์ React",
        },
      },
      {
        name: "HTML",
        iconSlug: "html5",
        level: "Proficient",
        category: { en: "Markup", th: "ภาษามาร์กอัป" },
        description: {
          en: "Semantic, accessible document structure.",
          th: "เขียนโครงสร้างเอกสารที่มีความหมายและเข้าถึงได้",
        },
      },
      {
        name: "CSS",
        iconSlug: "css",
        level: "Comfortable",
        category: { en: "Styling", th: "การจัดรูปแบบ" },
        description: {
          en: "Responsive layouts with flexbox and grid.",
          th: "จัดเลย์เอาต์แบบ responsive ด้วย flexbox และ grid",
        },
      },
      {
        name: "Bootstrap",
        iconSlug: "bootstrap",
        level: "Comfortable",
        category: { en: "CSS Framework", th: "เฟรมเวิร์ก CSS" },
        description: {
          en: "Rapid responsive layout for JSP-rendered pages.",
          th: "ทำเลย์เอาต์ responsive ได้เร็วสำหรับหน้าเว็บที่เรนเดอร์ด้วย JSP",
        },
      },
    ],
  },
  {
    title: { en: "DATABASE", th: "ฐานข้อมูล" },
    items: [
      {
        name: "PostgreSQL",
        iconSlug: "postgresql",
        level: "Proficient",
        category: { en: "Relational Database", th: "ฐานข้อมูลเชิงสัมพันธ์" },
        description: {
          en: "Relational schema design and reporting queries on the MFEC internal system.",
          th: "ออกแบบ schema เชิงสัมพันธ์และเขียน query สำหรับรายงานในระบบภายในของ MFEC",
        },
      },
      {
        name: "MySQL",
        iconSlug: "mysql",
        level: "Proficient",
        category: { en: "Relational Database", th: "ฐานข้อมูลเชิงสัมพันธ์" },
        description: {
          en: "Backing store for the WhatToWear matching engine and user data.",
          th: "เก็บข้อมูลผู้ใช้และกฎการจับคู่ชุดของโปรเจกต์ WhatToWear",
        },
      },
      {
        name: "Supabase",
        iconSlug: "supabase",
        level: "Hands-on experience",
        category: { en: "Backend / Database Platform", th: "แพลตฟอร์ม Backend / ฐานข้อมูล" },
        description: {
          en: "Managed PostgreSQL, auth and instant APIs used during my internship.",
          th: "ใช้ PostgreSQL แบบ managed พร้อมระบบ auth และ API สำเร็จรูประหว่างฝึกงาน",
        },
      },
      {
        name: "Oracle",
        iconSlug: null,
        level: "Familiar",
        category: { en: "Relational Database", th: "ฐานข้อมูลเชิงสัมพันธ์" },
        description: {
          en: "Enterprise SQL practice from coursework.",
          th: "ฝึกเขียน SQL ระดับองค์กรจากรายวิชาที่เรียน",
        },
      },
      {
        name: "SQL",
        iconSlug: "mysql",
        level: "Proficient",
        category: { en: "Query Language", th: "ภาษาสืบค้นข้อมูล" },
        description: {
          en: "Joins, aggregation and schema modelling for operations and reporting.",
          th: "ใช้ join, การรวมข้อมูล และออกแบบ schema สำหรับงานปฏิบัติการและการทำรายงาน",
        },
      },
    ],
  },
  {
    title: { en: "TOOLS & DEVELOPMENT", th: "เครื่องมือและการพัฒนา" },
    items: [
      {
        name: "Git / GitHub",
        iconSlug: "github",
        level: "Frequently used",
        category: { en: "Source Control", th: "ระบบควบคุมเวอร์ชัน" },
        description: {
          en: "Branching, pull requests and code review in a team workflow.",
          th: "ทำงานแบบแยก branch ใช้ pull request และ code review ร่วมกับทีม",
        },
      },
      {
        name: "Docker",
        iconSlug: "docker",
        level: "Familiar",
        category: { en: "Containerization", th: "การทำคอนเทนเนอร์" },
        description: {
          en: "Packaging services so they run the same everywhere.",
          th: "แพ็กเกจ service ให้ทำงานเหมือนกันทุกเครื่อง",
        },
      },
      {
        name: "Microsoft Azure",
        iconSlug: null,
        level: "Familiar",
        category: { en: "Cloud", th: "คลาวด์" },
        description: {
          en: "Cloud services explored during internship work.",
          th: "บริการคลาวด์ที่ได้ทดลองใช้ระหว่างการฝึกงาน",
        },
      },
      {
        name: "Postman",
        iconSlug: "postman",
        level: "Frequently used",
        category: { en: "API Testing", th: "การทดสอบ API" },
        description: {
          en: "Verifying endpoints and payloads before wiring the frontend.",
          th: "ตรวจสอบ endpoint และรูปแบบข้อมูลก่อนนำไปต่อกับหน้าเว็บ",
        },
      },
      {
        name: "Maven",
        iconSlug: "apachemaven",
        level: "Comfortable",
        category: { en: "Build Tool", th: "เครื่องมือ Build" },
        description: {
          en: "Dependency and build management for Java projects.",
          th: "จัดการ dependency และการ build ของโปรเจกต์ Java",
        },
      },
      {
        name: "VS Code",
        iconSlug: "vscodium",
        level: "Frequently used",
        category: { en: "Editor", th: "โปรแกรมแก้ไขโค้ด" },
        description: {
          en: "Daily driver, with Visual Studio for .NET-flavoured coursework.",
          th: "ใช้เป็นหลักทุกวัน และใช้ Visual Studio สำหรับรายวิชาสาย .NET",
        },
      },
      {
        name: "Figma",
        iconSlug: "figma",
        level: "Comfortable",
        category: { en: "Design", th: "งานออกแบบ" },
        description: {
          en: "Wireframes and UI layout before development starts.",
          th: "ทำ wireframe และวางเลย์เอาต์ UI ก่อนเริ่มพัฒนา",
        },
      },
      {
        name: "Appsmith",
        iconSlug: "appsmith",
        level: "Hands-on experience",
        category: { en: "Low-Code Platform", th: "แพลตฟอร์ม Low-Code" },
        description: {
          en: "Built the internal workforce allocation tool at MFEC.",
          th: "ใช้สร้างระบบจัดสรรกำลังคนภายในองค์กรที่ MFEC",
        },
      },
      {
        name: "Vercel (CI/CD)",
        iconSlug: "vercel",
        level: "Familiar",
        category: { en: "Deployment", th: "การ Deploy" },
        description: {
          en: "Continuous deployment for frontend projects.",
          th: "ทำ continuous deployment ให้โปรเจกต์ฝั่ง frontend",
        },
      },
      {
        name: "Agile / Scrum + UAT",
        iconSlug: "jira",
        level: "Hands-on experience",
        category: { en: "Process", th: "กระบวนการทำงาน" },
        description: {
          en: "Sprints, standups, code review and user acceptance testing with stakeholders.",
          th: "ทำงานเป็น sprint มี standup, code review และทดสอบ UAT ร่วมกับผู้เกี่ยวข้อง",
        },
      },
    ],
  },
  {
    title: { en: "AI / MACHINE LEARNING", th: "AI / แมชชีนเลิร์นนิง" },
    items: [
      {
        name: "CNN Xception",
        iconSlug: "tensorflow",
        level: "Hands-on experience",
        category: { en: "Image Recognition Model", th: "โมเดลรู้จำภาพ" },
        description: {
          en: "Garment auto-classification in WhatToWear, consumed through an image-recognition API.",
          th: "ใช้จำแนกประเภทเสื้อผ้าอัตโนมัติใน WhatToWear ผ่าน API รู้จำภาพ",
        },
      },
      {
        name: "AI APIs",
        iconSlug: "openaigym",
        level: "Comfortable",
        category: { en: "Integration", th: "การเชื่อมต่อระบบ" },
        description: {
          en: "Calling model endpoints from application code and handling uncertain output.",
          th: "เรียกใช้ endpoint ของโมเดลจากโค้ดแอปพลิเคชัน และจัดการผลลัพธ์ที่ไม่แน่นอน",
        },
      },
      {
        name: "n8n",
        iconSlug: "n8n",
        level: "Familiar",
        category: { en: "AI Automation", th: "ระบบอัตโนมัติด้วย AI" },
        description: {
          en: "Workshop training on automating workflows with AI steps.",
          th: "ผ่านการอบรมเชิงปฏิบัติการเรื่องการทำ workflow อัตโนมัติที่มีขั้นตอน AI",
        },
      },
      {
        name: "Claude Code",
        iconSlug: "claude",
        level: "Frequently used",
        category: { en: "AI Coding Assistant", th: "ผู้ช่วยเขียนโค้ด AI" },
        description: {
          en: "Pair-programming, refactoring and reviewing my own code faster.",
          th: "ใช้ช่วยเขียนโค้ด ปรับโครงสร้าง และรีวิวโค้ดของตัวเองได้เร็วขึ้น",
        },
      },
      {
        name: "Gemini",
        iconSlug: "googlegemini",
        level: "Frequently used",
        category: { en: "AI Assistant", th: "ผู้ช่วย AI" },
        description: {
          en: "Exploring model capabilities and prompt-driven development.",
          th: "ทดลองความสามารถของโมเดลและการพัฒนางานด้วย prompt",
        },
      },
    ],
  },
];

/** Working style — deliberately separate from the technical stack. */
export const softSkills: SoftSkill[] = [
  {
    mark: "◇",
    name: { en: "Problem Solving", th: "การแก้ปัญหา" },
    description: {
      en: "Able to break complex problems into smaller, manageable tasks — and to sit with a bug long enough to understand it.",
      th: "แยกปัญหาที่ซับซ้อนออกเป็นงานย่อยที่จัดการได้ และอดทนกับบั๊กนานพอที่จะเข้าใจต้นเหตุจริง ๆ",
    },
  },
  {
    mark: "◌",
    name: { en: "Communication", th: "การสื่อสาร" },
    description: {
      en: "Communicate ideas and technical information clearly, to developers and to non-technical stakeholders.",
      th: "สื่อสารไอเดียและเรื่องเทคนิคได้ชัดเจน ทั้งกับนักพัฒนาและผู้ที่ไม่ได้สายเทคนิค",
    },
  },
  {
    mark: "◈",
    name: { en: "Teamwork & Collaboration", th: "การทำงานเป็นทีม" },
    description: {
      en: "Comfortable in Agile teams: sprints, standups, code review, and asking early instead of guessing.",
      th: "ทำงานในทีม Agile ได้ดี ทั้ง sprint, standup, code review และถามตั้งแต่เนิ่น ๆ แทนที่จะเดา",
    },
  },
  {
    mark: "↻",
    name: { en: "Adaptability", th: "การปรับตัว" },
    description: {
      en: "Able to adapt to new technologies and changing requirements — low-code, new frameworks, new domains.",
      th: "ปรับตัวกับเทคโนโลยีใหม่และความต้องการที่เปลี่ยนได้ ทั้ง low-code เฟรมเวิร์กใหม่ และโดเมนงานใหม่",
    },
  },
  {
    mark: "◇",
    name: { en: "Analytical Thinking", th: "การคิดวิเคราะห์" },
    description: {
      en: "Trace a requirement to data and behaviour before writing code, so the solution fits the real workflow.",
      th: "ไล่ความต้องการไปจนถึงข้อมูลและพฤติกรรมของระบบก่อนเขียนโค้ด เพื่อให้คำตอบตรงกับงานจริง",
    },
  },
  {
    mark: "◷",
    name: { en: "Time Management", th: "การบริหารเวลา" },
    description: {
      en: "Organize tasks and prioritize work according to deadlines across study, teaching and internship at once.",
      th: "จัดลำดับความสำคัญของงานตามกำหนดส่ง แม้ต้องทำทั้งเรียน สอน และฝึกงานไปพร้อมกัน",
    },
  },
  {
    mark: "◦",
    name: { en: "Attention to Detail", th: "ความละเอียดรอบคอบ" },
    description: {
      en: "Care about naming, edge cases and consistency — the parts that decide whether code survives handover.",
      th: "ใส่ใจการตั้งชื่อ กรณีขอบ และความสม่ำเสมอ ซึ่งเป็นสิ่งที่ทำให้โค้ดส่งต่อให้คนอื่นได้",
    },
  },
  {
    mark: "△",
    name: { en: "Self-Learning", th: "การเรียนรู้ด้วยตนเอง" },
    description: {
      en: "Enjoy learning through documentation, workshops and building things that did not exist yesterday.",
      th: "สนุกกับการเรียนรู้จากเอกสาร เวิร์กช็อป และการลงมือสร้างสิ่งที่ยังไม่เคยมี",
    },
  },
];

/** Work, internship and teaching experience — most recent first. */
export const workExperiences: TimelineEntry[] = [
  {
    id: "mfec-intern",
    period: { en: "NOV 2025 — MAR 2026", th: "พ.ย. 2568 — มี.ค. 2569" },
    title: { en: "Fullstack Developer Intern", th: "นักศึกษาฝึกงาน Fullstack Developer" },
    organization: {
      en: "MFEC Co., Ltd. · Bangkok · Cooperative Education",
      th: "บริษัท เอ็ม เอฟ อี ซี จำกัด · กรุงเทพฯ · สหกิจศึกษา",
    },
    bullets: {
      en: [
        "Developed an internal workforce management system that streamlined employee reallocation across teams, reducing manual coordination effort for project engineers and team leads.",
        "Designed and consumed RESTful APIs integrating frontend workflows with a Supabase PostgreSQL backend, modelling relational schemas in SQL for operations and reporting.",
        "Collaborated with consultants and stakeholders through UAT in an Agile/Scrum team — sprints, standups and code review.",
      ],
      th: [
        "พัฒนาระบบบริหารกำลังคนภายในองค์กร ที่ช่วยให้การย้ายพนักงานระหว่างทีมทำได้ง่ายขึ้น และลดงานประสานงานด้วยมือของ project engineer และหัวหน้าทีม",
        "ออกแบบและเรียกใช้ RESTful API เพื่อเชื่อมงานฝั่งหน้าเว็บกับฐานข้อมูล Supabase PostgreSQL พร้อมออกแบบ schema เชิงสัมพันธ์ด้วย SQL สำหรับงานปฏิบัติการและรายงาน",
        "ทำงานร่วมกับที่ปรึกษาและผู้เกี่ยวข้องผ่านการทดสอบ UAT ในทีมแบบ Agile/Scrum ทั้ง sprint, standup และ code review",
      ],
    },
    highlights: {
      en: ["Delivered and handed over a system now used internally for staff reallocation."],
      th: ["ส่งมอบระบบที่ถูกนำไปใช้จริงภายในองค์กรสำหรับการจัดสรรกำลังคน"],
    },
    technologies: ["Appsmith", "Supabase", "PostgreSQL", "REST APIs", "SQL", "Agile / Scrum"],
  },
  {
    id: "maejo-ta",
    period: { en: "JUN 2023 — OCT 2025", th: "มิ.ย. 2566 — ต.ค. 2568" },
    title: { en: "Teaching Assistant", th: "ผู้ช่วยสอน" },
    organization: {
      en: "Maejo University · Faculty of Science · Chiang Mai",
      th: "มหาวิทยาลัยแม่โจ้ · คณะวิทยาศาสตร์ · เชียงใหม่",
    },
    bullets: {
      en: [
        "Mentored students across 3 courses — Java OOP, Golang, and Web Development with HTML/CSS/JavaScript — covering core concepts, debugging and clean-code practices.",
        "Prepared examples and walked through student code one-on-one during lab sessions.",
      ],
      th: [
        "ดูแลนักศึกษาใน 3 รายวิชา ได้แก่ Java OOP, Golang และการพัฒนาเว็บด้วย HTML/CSS/JavaScript ทั้งแนวคิดพื้นฐาน การหาบั๊ก และการเขียนโค้ดให้สะอาด",
        "เตรียมตัวอย่างโค้ดและอธิบายโค้ดของนักศึกษาแบบตัวต่อตัวในคาบปฏิบัติการ",
      ],
    },
    highlights: {
      en: [
        "Explaining a concept repeatedly to different people turned out to be the fastest way to find the gaps in my own understanding.",
      ],
      th: [
        "การอธิบายเรื่องเดิมให้คนหลายคนฟัง กลายเป็นวิธีที่เร็วที่สุดในการเจอช่องโหว่ความเข้าใจของตัวเอง",
      ],
    },
    technologies: ["Java / OOP", "Golang", "HTML / CSS / JS"],
  },
  {
    id: "senior-project",
    period: { en: "NOV 2024 — OCT 2025", th: "พ.ย. 2567 — ต.ค. 2568" },
    title: {
      en: "Senior Project Developer — WhatToWear",
      th: "ผู้พัฒนาโปรเจกต์จบ — WhatToWear",
    },
    organization: {
      en: "Maejo University · Individual project",
      th: "มหาวิทยาลัยแม่โจ้ · โปรเจกต์เดี่ยว",
    },
    bullets: {
      en: [
        "Built an end-to-end Java web application that classifies garments with a CNN Xception image-recognition API and suggests outfits through a rule-based matching engine.",
        "Owned the whole stack: Spring MVC architecture, JSP views, MySQL schema and the AI service integration.",
      ],
      th: [
        "สร้างเว็บแอปพลิเคชันด้วย Java ตั้งแต่ต้นจนจบ ที่จำแนกประเภทเสื้อผ้าด้วย API รู้จำภาพ CNN Xception และแนะนำชุดผ่านเอนจินจับคู่แบบกำหนดกฎ",
        "ดูแลงานทั้งหมดเอง ทั้งสถาปัตยกรรม Spring MVC, หน้า JSP, schema ของ MySQL และการเชื่อมต่อกับบริการ AI",
      ],
    },
    highlights: {
      en: ["Completed and presented as my final-year project."],
      th: ["ทำเสร็จและนำเสนอเป็นโปรเจกต์จบการศึกษา"],
    },
    technologies: ["Java", "Spring MVC", "JSP", "MySQL", "CNN Xception"],
  },
  {
    id: "student-club",
    period: { en: "2024 — 2025", th: "2567 — 2568" },
    title: { en: "Budget Management Officer", th: "เจ้าหน้าที่ดูแลงบประมาณ" },
    organization: {
      en: "Faculty of Science Student Club · Maejo University",
      th: "สโมสรนักศึกษาคณะวิทยาศาสตร์ · มหาวิทยาลัยแม่โจ้",
    },
    bullets: {
      en: [
        "Managed and tracked activity budgets for student club events, coordinating with faculty staff on approvals and reporting.",
      ],
      th: [
        "ดูแลและติดตามงบประมาณกิจกรรมของสโมสรนักศึกษา ประสานงานกับเจ้าหน้าที่คณะเรื่องการอนุมัติและการรายงาน",
      ],
    },
    highlights: { en: [], th: [] },
    technologies: [],
  },
];

/** Formal education. */
export const educationHistory: EducationEntry[] = [
  {
    id: "maejo-bsc",
    period: { en: "JUL 2022 — MAR 2026", th: "ก.ค. 2565 — มี.ค. 2569" },
    title: {
      en: "B.Sc. in Information Technology",
      th: "วิทยาศาสตรบัณฑิต สาขาเทคโนโลยีสารสนเทศ",
    },
    organization: {
      en: "Maejo University · Faculty of Science · Chiang Mai",
      th: "มหาวิทยาลัยแม่โจ้ · คณะวิทยาศาสตร์ · เชียงใหม่",
    },
    bullets: {
      en: [
        "Relevant coursework: Object-Oriented Programming, Web Development, Database Systems, Software Design Patterns, Data Structures.",
        "Senior project: WhatToWear — outfit-matching web app with AI garment recognition (CNN Xception).",
      ],
      th: [
        "รายวิชาที่เกี่ยวข้อง: การเขียนโปรแกรมเชิงวัตถุ, การพัฒนาเว็บ, ระบบฐานข้อมูล, รูปแบบการออกแบบซอฟต์แวร์, โครงสร้างข้อมูล",
        "โปรเจกต์จบ: WhatToWear เว็บแอปแนะนำการแต่งตัว พร้อมระบบรู้จำเสื้อผ้าด้วย AI (CNN Xception)",
      ],
    },
    highlights: {
      en: ["Graduated with First-Class Honours · GPA 3.70"],
      th: ["จบการศึกษาเกียรตินิยมอันดับหนึ่ง · เกรดเฉลี่ย 3.70"],
    },
    technologies: ["Java", "Web Development", "Databases", "Design Patterns"],
  },
  {
    id: "high-school",
    period: { en: "MAY 2016 — MAR 2022", th: "พ.ค. 2559 — มี.ค. 2565" },
    title: { en: "Science–Math Program", th: "แผนการเรียนวิทยาศาสตร์–คณิตศาสตร์" },
    organization: {
      en: "Chalermkwansatree School · Phitsanulok",
      th: "โรงเรียนเฉลิมขวัญสตรี · พิษณุโลก",
    },
    bullets: {
      en: ["Science and mathematics track; first contact with programming."],
      th: ["สายวิทยาศาสตร์–คณิตศาสตร์ และเป็นจุดเริ่มต้นของการเขียนโปรแกรม"],
    },
    highlights: { en: ["GPA 3.23"], th: ["เกรดเฉลี่ย 3.23"] },
    technologies: [],
  },
];

/** Self-study and workshop topics shown under the education timeline. */
export const additionalLearning: LearningTopic[] = [
  {
    iconSlug: "react",
    initials: "WD",
    name: { en: "Web Development", th: "การพัฒนาเว็บ" },
    description: {
      en: "Learned and practiced building responsive web applications with React, Vite and modern CSS layout.",
      th: "เรียนรู้และฝึกสร้างเว็บแอปแบบ responsive ด้วย React, Vite และการจัดเลย์เอาต์ CSS สมัยใหม่",
    },
  },
  {
    iconSlug: "tensorflow",
    initials: "ML",
    name: { en: "Machine Learning", th: "แมชชีนเลิร์นนิง" },
    description: {
      en: "Explored image classification and deep-learning concepts while integrating a CNN Xception model.",
      th: "ศึกษาการจำแนกภาพและแนวคิด deep learning ระหว่างเชื่อมต่อโมเดล CNN Xception",
    },
  },
  {
    iconSlug: "docker",
    initials: "CD",
    name: { en: "Cloud & Deployment", th: "คลาวด์และการ Deploy" },
    description: {
      en: "Practiced deploying services with Docker, Vercel CI/CD and Microsoft Azure cloud services.",
      th: "ฝึก deploy service ด้วย Docker, Vercel CI/CD และบริการคลาวด์ของ Microsoft Azure",
    },
  },
  {
    iconSlug: "n8n",
    initials: "AI",
    name: { en: "AI Automation", th: "ระบบอัตโนมัติด้วย AI" },
    description: {
      en: "Workshop training on n8n — automating workflows with AI steps instead of manual handoffs.",
      th: "อบรมเชิงปฏิบัติการเรื่อง n8n ทำ workflow อัตโนมัติที่มีขั้นตอน AI แทนการส่งงานด้วยมือ",
    },
  },
  {
    iconSlug: "flutter",
    initials: "MD",
    name: { en: "Mobile Development", th: "การพัฒนาแอปมือถือ" },
    description: {
      en: "Flutter app-development workshop; building cross-platform interfaces from one codebase.",
      th: "เวิร์กช็อปพัฒนาแอปด้วย Flutter สร้างหน้าจอที่ใช้ได้หลายแพลตฟอร์มจากโค้ดชุดเดียว",
    },
  },
  {
    iconSlug: "jira",
    initials: "AG",
    name: { en: "Agile Practice", th: "การทำงานแบบ Agile" },
    description: {
      en: "Agile Frameworks and Practices training — sprint planning, review and retrospective in real teams.",
      th: "อบรมกรอบการทำงานแบบ Agile ทั้งการวางแผน sprint, review และ retrospective ในทีมจริง",
    },
  },
  {
    iconSlug: "postman",
    initials: "AP",
    name: { en: "API Development", th: "การพัฒนา API" },
    description: {
      en: "Designing and testing RESTful endpoints with Postman before wiring them into a frontend.",
      th: "ออกแบบและทดสอบ RESTful endpoint ด้วย Postman ก่อนนำไปเชื่อมกับหน้าเว็บ",
    },
  },
  {
    iconSlug: "claude",
    initials: "AI",
    name: { en: "AI Coding Tools", th: "เครื่องมือเขียนโค้ดด้วย AI" },
    description: {
      en: "Using Claude Code and Gemini to review, refactor and reason about my own code faster.",
      th: "ใช้ Claude Code และ Gemini ช่วยรีวิว ปรับโครงสร้าง และทำความเข้าใจโค้ดของตัวเองได้เร็วขึ้น",
    },
  },
];

/** Repository cards in the GitHub section. */
export const githubHighlights: GithubHighlight[] = [
  {
    repository: "ProjectMVC_WhatToWear",
    url: "https://github.com/ammmook/ProjectMVC_WhatToWear",
    languageLabel: "Java",
    languageColor: "var(--color-accent-2)",
    description: {
      en: "Outfit-matching web app — Java, Spring MVC, JSP, MySQL, with a CNN Xception image-recognition API.",
      th: "เว็บแอปแนะนำการแต่งตัว พัฒนาด้วย Java, Spring MVC, JSP, MySQL และ API รู้จำภาพ CNN Xception",
    },
  },
  {
    repository: "calendar-worker",
    url: "https://github.com/ammmook/calendar-worker",
    languageLabel: "JavaScript",
    languageColor: "oklch(0.82 0.16 95)",
    description: {
      en: "Work Time Tracker — React 19 and Supabase app that calculates overtime and shift pay from a calendar.",
      th: "Work Time Tracker แอป React 19 และ Supabase ที่คำนวณค่าล่วงเวลาและค่ากะจากปฏิทิน",
    },
  },
  {
    repository: "Project_Android_SleepHealth",
    url: "https://github.com/ammmook/Project_Android_SleepHealth",
    languageLabel: "Java",
    languageColor: "var(--color-accent-2)",
    description: {
      en: "Native Android sleep tracker in Java, paired with its own Java web service and a MySQL database.",
      th: "แอปบันทึกการนอนบน Android แบบ native เขียนด้วย Java คู่กับ Java web service และฐานข้อมูล MySQL",
    },
  },
  {
    repository: "go-pet-harmony",
    url: "https://github.com/ammmook/go-pet-harmony",
    languageLabel: "Go",
    languageColor: "oklch(0.72 0.12 220)",
    description: {
      en: "Pet hotel booking system written in Go with net/http, html/template, sessions and MySQL — no framework.",
      th: "ระบบจองโรงแรมสัตว์เลี้ยงที่เขียนด้วย Go ใช้ net/http, html/template, session และ MySQL โดยไม่ใช้เฟรมเวิร์ก",
    },
  },
];
