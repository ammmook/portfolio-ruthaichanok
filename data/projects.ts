import type { LocalizedText, Project } from "@/types/portfolio";
import { personalInformation } from "@/data/portfolio";

export interface ProjectFilter {
  /** "all" shows every project; other ids are matched against `Project.filters`. */
  id: string;
  label: LocalizedText;
}

/** Filter chips above the project carousel. */
export const projectFilters: ProjectFilter[] = [
  { id: "all", label: { en: "All", th: "ทั้งหมด" } },
  { id: "web", label: { en: "Web", th: "เว็บ" } },
  { id: "ai", label: { en: "AI / ML", th: "AI / ML" } },
  { id: "internal", label: { en: "Internal", th: "ระบบภายใน" } },
];

/**
 * Every project shown on the home page and in `/projects/[slug]`.
 * Adding a project here is enough — no component needs to change.
 */
export const portfolioProjects: Project[] = [
  {
    slug: "workforce-allocation",
    name: {
      en: "Employee Evaluation & Workforce Allocation System",
      th: "ระบบประเมินพนักงานและจัดสรรกำลังคน",
    },
    shortName: {
      en: "Workforce Allocation System",
      th: "ระบบจัดสรรกำลังคน",
    },
    year: "2026",
    status: { en: "COMPLETED", th: "เสร็จสมบูรณ์" },
    category: { en: "Internal Tool", th: "ระบบภายในองค์กร" },
    filters: ["web", "internal"],
    hue: 150,
    blurb: {
      en: "Finds underutilized staff with matching skills and reallocates them to busy teams.",
      th: "ค้นหาพนักงานที่ยังมีเวลาว่างและมีทักษะตรงกัน เพื่อย้ายไปช่วยทีมที่งานหนัก",
    },
    tagline: {
      en: "Internal tool that finds underutilized staff with the right skills and reallocates them to high-workload teams.",
      th: "เครื่องมือภายในองค์กรที่ช่วยหาพนักงานซึ่งยังมีกำลังเหลือและมีทักษะตรงความต้องการ แล้วจัดสรรไปยังทีมที่มีภาระงานสูง",
    },
    coverLabel: { en: "DASHBOARD SCREENSHOT", th: "ภาพหน้าจอแดชบอร์ด" },
    technologies: ["Appsmith", "Supabase", "PostgreSQL", "REST APIs", "SQL"],
    liveUrl: "",
    repositoryUrl: personalInformation.githubUrl,
    meta: [
      { key: { en: "DATE", th: "ช่วงเวลา" }, value: { en: "Nov 2025 — Mar 2026", th: "พ.ย. 2568 — มี.ค. 2569" } },
      { key: { en: "ROLE", th: "บทบาท" }, value: { en: "Full-stack Developer", th: "Full-stack Developer" } },
      { key: { en: "TEAM", th: "ทีม" }, value: { en: "Agile team at MFEC", th: "ทีม Agile ที่ MFEC" } },
      { key: { en: "STATUS", th: "สถานะ" }, value: { en: "Completed", th: "เสร็จสมบูรณ์" } },
      { key: { en: "CATEGORY", th: "ประเภท" }, value: { en: "Internal Tool · Web", th: "ระบบภายใน · เว็บ" } },
      { key: { en: "CONTEXT", th: "บริบท" }, value: { en: "Cooperative education", th: "สหกิจศึกษา" } },
    ],
    stack: [
      {
        title: { en: "FRONTEND / PLATFORM", th: "หน้าเว็บ / แพลตฟอร์ม" },
        items: [
          {
            name: "Appsmith",
            iconSlug: "appsmith",
            role: { en: "UI layer", th: "ชั้นแสดงผล" },
            usage: {
              en: "Used to build every screen of the tool — allocation dashboard, evaluation forms and workload views — with queries bound directly to widgets.",
              th: "ใช้สร้างทุกหน้าจอของระบบ ทั้งแดชบอร์ดจัดสรรงาน ฟอร์มประเมิน และหน้าดูภาระงาน โดยผูก query เข้ากับ widget โดยตรง",
            },
          },
          {
            name: "JavaScript",
            iconSlug: "javascript",
            role: { en: "Interaction logic", th: "ตรรกะการโต้ตอบ" },
            usage: {
              en: "Used inside Appsmith for field validation, conditional display and shaping query results before they reach a widget.",
              th: "ใช้ภายใน Appsmith เพื่อตรวจสอบข้อมูล แสดงผลตามเงื่อนไข และจัดรูปแบบผลลัพธ์ก่อนส่งเข้า widget",
            },
          },
        ],
      },
      {
        title: { en: "BACKEND / API", th: "แบ็กเอนด์ / API" },
        items: [
          {
            name: "RESTful APIs",
            iconSlug: "openapiinitiative",
            role: { en: "Integration", th: "การเชื่อมต่อ" },
            usage: {
              en: "Designed and consumed the endpoints that connect frontend workflows to the backend, so allocation decisions are written back consistently.",
              th: "ออกแบบและเรียกใช้ endpoint ที่เชื่อมงานฝั่งหน้าเว็บกับ backend เพื่อให้การตัดสินใจจัดสรรงานถูกบันทึกกลับอย่างสม่ำเสมอ",
            },
          },
          {
            name: "Postman",
            iconSlug: "postman",
            role: { en: "API testing", th: "การทดสอบ API" },
            usage: {
              en: "Used to verify every endpoint and payload shape before wiring it into the interface.",
              th: "ใช้ตรวจสอบทุก endpoint และรูปแบบข้อมูลก่อนนำไปต่อกับหน้าจอ",
            },
          },
        ],
      },
      {
        title: { en: "DATABASE", th: "ฐานข้อมูล" },
        items: [
          {
            name: "Supabase",
            iconSlug: "supabase",
            role: { en: "Backend platform", th: "แพลตฟอร์ม Backend" },
            usage: {
              en: "Provided the managed PostgreSQL instance and instant APIs the application reads and writes through.",
              th: "ให้บริการ PostgreSQL แบบ managed และ API สำเร็จรูปที่ระบบใช้อ่านและเขียนข้อมูล",
            },
          },
          {
            name: "PostgreSQL",
            iconSlug: "postgresql",
            role: { en: "Data store", th: "ที่เก็บข้อมูล" },
            usage: {
              en: "Holds employees, skills, teams, workload and evaluation records in the relational schema I modelled.",
              th: "เก็บข้อมูลพนักงาน ทักษะ ทีม ภาระงาน และผลการประเมิน ตาม schema เชิงสัมพันธ์ที่ฉันออกแบบ",
            },
          },
          {
            name: "SQL",
            iconSlug: "mysql",
            role: { en: "Queries & reporting", th: "คิวรีและรายงาน" },
            usage: {
              en: "Used for the joins and aggregations behind skill matching, utilisation figures and reporting views.",
              th: "ใช้เขียน join และการรวมข้อมูลที่อยู่เบื้องหลังการจับคู่ทักษะ ตัวเลขการใช้กำลังคน และหน้ารายงาน",
            },
          },
        ],
      },
      {
        title: { en: "PROCESS", th: "กระบวนการ" },
        items: [
          {
            name: "Agile / Scrum",
            iconSlug: "jira",
            role: { en: "Delivery process", th: "กระบวนการส่งมอบงาน" },
            usage: {
              en: "Sprints, standups and code review with the MFEC team; requirements refined between iterations.",
              th: "ทำงานเป็น sprint มี standup และ code review ร่วมกับทีม MFEC พร้อมปรับความต้องการระหว่างรอบการพัฒนา",
            },
          },
          {
            name: "Git",
            iconSlug: "git",
            role: { en: "Source control", th: "ควบคุมเวอร์ชัน" },
            usage: {
              en: "Branch-per-feature workflow with pull requests reviewed before merge.",
              th: "แยก branch ต่อฟีเจอร์ และใช้ pull request ที่ผ่านการรีวิวก่อน merge",
            },
          },
          {
            name: "UAT",
            iconSlug: null,
            role: { en: "Validation", th: "การตรวจรับ" },
            usage: {
              en: "Ran user acceptance testing sessions with consultants and stakeholders and fixed what they found.",
              th: "จัดการทดสอบ UAT ร่วมกับที่ปรึกษาและผู้เกี่ยวข้อง และแก้ไขตามสิ่งที่พบ",
            },
          },
        ],
      },
    ],
    overviewTitle: {
      en: "An internal system for evaluating employees and moving effort where it is needed.",
      th: "ระบบภายในสำหรับประเมินพนักงานและย้ายกำลังคนไปยังจุดที่ต้องการ",
    },
    overview: {
      en: [
        "Built during my cooperative education program at MFEC, this is an internal web application that combines employee evaluation with workforce allocation. Instead of coordinating staff movement over chat and spreadsheets, team leads work from one place that already knows who has capacity and which skills they hold.",
        "It was developed on Appsmith as the low-code layer over a Supabase PostgreSQL database, with RESTful APIs connecting frontend workflows to the relational schema I modelled for both operations and reporting.",
      ],
      th: [
        "พัฒนาระหว่างโครงการสหกิจศึกษาที่ MFEC เป็นเว็บแอปพลิเคชันภายในที่รวมการประเมินพนักงานเข้ากับการจัดสรรกำลังคน แทนที่หัวหน้าทีมจะต้องประสานงานผ่านแชทและสเปรดชีต ทุกอย่างอยู่ในที่เดียวที่รู้อยู่แล้วว่าใครมีเวลาว่างและมีทักษะอะไร",
        "ระบบสร้างบน Appsmith ในฐานะเลเยอร์ low-code ที่ทำงานบนฐานข้อมูล Supabase PostgreSQL โดยมี RESTful API เชื่อมงานฝั่งหน้าเว็บกับ schema เชิงสัมพันธ์ที่ฉันออกแบบไว้ทั้งสำหรับงานปฏิบัติการและการทำรายงาน",
      ],
    },
    users: {
      en: "Project engineers (PE) and team leads who need to reallocate people between teams, plus stakeholders who review evaluation data.",
      th: "Project engineer (PE) และหัวหน้าทีมที่ต้องย้ายกำลังคนระหว่างทีม รวมถึงผู้เกี่ยวข้องที่ต้องดูข้อมูลผลการประเมิน",
    },
    problemTitle: {
      en: "Reallocating people was a manual, invisible process.",
      th: "การย้ายกำลังคนเป็นงานที่ทำด้วยมือและมองไม่เห็นภาพรวม",
    },
    problems: {
      en: [
        "Deciding who could move to a busier team required asking around — capacity was not visible anywhere.",
        "Skill information lived in separate documents, so matching a person to a need meant reading rather than querying.",
        "Evaluation records and allocation decisions were disconnected, making it hard to justify a move with data.",
      ],
      th: [
        "การตัดสินใจว่าใครย้ายไปช่วยทีมที่งานหนักได้ ต้องอาศัยการไล่ถามคน เพราะไม่มีที่ไหนแสดงกำลังคนที่เหลืออยู่",
        "ข้อมูลทักษะกระจายอยู่ในเอกสารหลายไฟล์ การจับคู่คนกับงานจึงต้องนั่งอ่านแทนที่จะค้นหาได้",
        "ข้อมูลการประเมินกับการตัดสินใจจัดสรรงานไม่เชื่อมกัน ทำให้อธิบายเหตุผลด้วยข้อมูลได้ยาก",
      ],
    },
    goals: [
      {
        number: "01",
        title: { en: "Make capacity visible", th: "ทำให้เห็นกำลังคนที่เหลือ" },
        description: {
          en: "Show utilisation so underused staff can be spotted without asking around.",
          th: "แสดงอัตราการใช้กำลังคน เพื่อให้เห็นคนที่ยังว่างโดยไม่ต้องไล่ถาม",
        },
      },
      {
        number: "02",
        title: { en: "Match by skill", th: "จับคู่ด้วยทักษะ" },
        description: {
          en: "Find people whose competencies fit the work a department actually needs.",
          th: "หาคนที่มีทักษะตรงกับงานที่แผนกนั้นต้องการจริง ๆ",
        },
      },
      {
        number: "03",
        title: { en: "Reduce coordination effort", th: "ลดงานประสานงาน" },
        description: {
          en: "Cut the manual back-and-forth for PE and team leads.",
          th: "ลดการติดต่อกลับไปกลับมาด้วยมือของ PE และหัวหน้าทีม",
        },
      },
      {
        number: "04",
        title: { en: "Keep one source of truth", th: "มีแหล่งข้อมูลเดียว" },
        description: {
          en: "Evaluation and allocation data in one relational schema.",
          th: "เก็บข้อมูลการประเมินและการจัดสรรงานไว้ใน schema เดียวกัน",
        },
      },
    ],
    solutionTitle: {
      en: "A skill-matching mechanism on top of one relational source of truth.",
      th: "กลไกจับคู่ทักษะที่ทำงานบนฐานข้อมูลชุดเดียว",
    },
    solution: {
      en: "I modelled employees, skills, teams and workload as related tables, then built a matching mechanism that identifies underutilized staff holding the competencies a high-workload department requires. The Appsmith interface surfaces the shortlist and lets a lead act on it, writing the decision back through REST endpoints so the record stays consistent.",
      th: "ฉันออกแบบตารางพนักงาน ทักษะ ทีม และภาระงานให้สัมพันธ์กัน แล้วสร้างกลไกจับคู่ที่ระบุพนักงานซึ่งยังมีกำลังเหลือและมีทักษะตรงกับแผนกที่งานหนัก หน้าจอ Appsmith จะแสดงรายชื่อที่คัดมาแล้วให้หัวหน้าทีมตัดสินใจ และบันทึกผลกลับผ่าน REST endpoint เพื่อให้ข้อมูลตรงกันเสมอ",
    },
    flow: [
      {
        number: "01",
        title: { en: "Problem", th: "ปัญหา" },
        description: { en: "Manual reallocation, invisible capacity.", th: "ย้ายคนด้วยมือ มองไม่เห็นกำลังคนที่เหลือ" },
      },
      {
        number: "02",
        title: { en: "Research", th: "เก็บข้อมูล" },
        description: { en: "Interviews with PE and leads during sprints.", th: "สัมภาษณ์ PE และหัวหน้าทีมระหว่าง sprint" },
      },
      {
        number: "03",
        title: { en: "Design", th: "ออกแบบ" },
        description: { en: "Relational schema + screen flow.", th: "ออกแบบ schema และลำดับหน้าจอ" },
      },
      {
        number: "04",
        title: { en: "Development", th: "พัฒนา" },
        description: { en: "Appsmith UI, REST APIs, SQL.", th: "สร้างหน้าจอ Appsmith, REST API และ SQL" },
      },
      {
        number: "05",
        title: { en: "Solution", th: "ผลลัพธ์" },
        description: { en: "Skill-matched allocation in one tool.", th: "จัดสรรงานตามทักษะได้ในเครื่องมือเดียว" },
      },
    ],
    features: [
      {
        title: { en: "Skill Matching", th: "การจับคู่ทักษะ" },
        description: {
          en: "Identifies underutilized staff whose competencies match a high-workload department and proposes them for reallocation.",
          th: "ระบุพนักงานที่ยังมีกำลังเหลือและมีทักษะตรงกับแผนกที่งานหนัก แล้วเสนอชื่อสำหรับการย้ายงาน",
        },
      },
      {
        title: { en: "Employee Evaluation", th: "การประเมินพนักงาน" },
        description: {
          en: "Structured evaluation records stored alongside skills, so decisions reference real data.",
          th: "เก็บผลการประเมินอย่างมีโครงสร้างคู่กับข้อมูลทักษะ เพื่อให้การตัดสินใจอ้างอิงข้อมูลจริง",
        },
      },
      {
        title: { en: "Workload Balancing View", th: "หน้าดูสมดุลภาระงาน" },
        description: {
          en: "Compares effort across teams so leads can see where support is needed.",
          th: "เปรียบเทียบภาระงานระหว่างทีม เพื่อให้เห็นว่าทีมไหนต้องการความช่วยเหลือ",
        },
      },
      {
        title: { en: "Reporting Queries", th: "คิวรีสำหรับรายงาน" },
        description: {
          en: "SQL views over the relational schema for operations and reporting needs.",
          th: "สร้าง SQL view บน schema เชิงสัมพันธ์สำหรับงานปฏิบัติการและการทำรายงาน",
        },
      },
    ],
    screenshots: {
      en: ["ALLOCATION DASHBOARD", "SKILL MATCH RESULT", "EMPLOYEE EVALUATION FORM", "TEAM WORKLOAD VIEW"],
      th: ["แดชบอร์ดการจัดสรรงาน", "ผลการจับคู่ทักษะ", "ฟอร์มประเมินพนักงาน", "หน้าดูภาระงานของทีม"],
    },
    architecture: [
      {
        number: "01",
        title: { en: "Presentation — Appsmith", th: "ชั้นแสดงผล — Appsmith" },
        description: {
          en: "Low-code UI with queries bound to widgets; JavaScript for interaction logic and validation.",
          th: "หน้าจอแบบ low-code ที่ผูก query กับ widget และใช้ JavaScript สำหรับตรรกะการโต้ตอบและการตรวจสอบข้อมูล",
        },
      },
      {
        number: "02",
        title: { en: "API layer — REST", th: "ชั้น API — REST" },
        description: {
          en: "RESTful endpoints connect frontend workflows to the backend; requests verified in Postman before binding.",
          th: "RESTful endpoint เชื่อมงานฝั่งหน้าเว็บกับ backend โดยตรวจสอบคำขอด้วย Postman ก่อนนำไปผูกกับหน้าจอ",
        },
      },
      {
        number: "03",
        title: { en: "Data — Supabase PostgreSQL", th: "ชั้นข้อมูล — Supabase PostgreSQL" },
        description: {
          en: "Relational schema for employees, skills, teams, workload and evaluations, with SQL views for reporting.",
          th: "schema เชิงสัมพันธ์สำหรับพนักงาน ทักษะ ทีม ภาระงาน และผลประเมิน พร้อม SQL view สำหรับรายงาน",
        },
      },
      {
        number: "04",
        title: { en: "Matching logic", th: "ตรรกะการจับคู่" },
        description: {
          en: "Skill and utilisation criteria evaluated against the schema to produce a reallocation shortlist.",
          th: "ประเมินเงื่อนไขด้านทักษะและการใช้กำลังคนกับข้อมูลใน schema เพื่อสร้างรายชื่อผู้ที่เหมาะจะย้ายงาน",
        },
      },
    ],
    process: [
      {
        number: "01",
        title: { en: "Planning", th: "วางแผน" },
        description: { en: "Requirements with PE and consultants.", th: "เก็บความต้องการร่วมกับ PE และที่ปรึกษา" },
      },
      {
        number: "02",
        title: { en: "UI / UX Design", th: "ออกแบบ UI / UX" },
        description: { en: "Screen flow and wireframes.", th: "ออกแบบลำดับหน้าจอและ wireframe" },
      },
      {
        number: "03",
        title: { en: "Data Modelling", th: "ออกแบบข้อมูล" },
        description: { en: "Relational schema in SQL.", th: "ออกแบบ schema เชิงสัมพันธ์ด้วย SQL" },
      },
      {
        number: "04",
        title: { en: "Development", th: "พัฒนา" },
        description: { en: "Appsmith screens and queries.", th: "สร้างหน้าจอและ query ใน Appsmith" },
      },
      {
        number: "05",
        title: { en: "Integration", th: "เชื่อมต่อระบบ" },
        description: { en: "REST APIs to Supabase.", th: "เชื่อม REST API เข้ากับ Supabase" },
      },
      {
        number: "06",
        title: { en: "UAT", th: "ทดสอบ UAT" },
        description: { en: "Testing with stakeholders.", th: "ทดสอบร่วมกับผู้เกี่ยวข้อง" },
      },
      {
        number: "07",
        title: { en: "Handover", th: "ส่งมอบ" },
        description: { en: "Internal deployment and docs.", th: "ติดตั้งใช้งานภายในพร้อมเอกสาร" },
      },
    ],
    challenges: [
      {
        challenge: {
          en: 'Defining what "underutilized" means in data, not opinion.',
          th: "นิยามคำว่า “มีกำลังเหลือ” ด้วยข้อมูล ไม่ใช่ความรู้สึก",
        },
        investigation: {
          en: "Talked through real reallocation cases with PE and leads to find which signals they actually trusted.",
          th: "คุยเคสการย้ายงานจริงกับ PE และหัวหน้าทีม เพื่อดูว่าพวกเขาเชื่อสัญญาณอะไรบ้าง",
        },
        solution: {
          en: "Encoded utilisation and skill criteria into queryable fields instead of leaving it to judgement.",
          th: "แปลงเกณฑ์การใช้กำลังคนและทักษะให้เป็นฟิลด์ที่ค้นหาได้ แทนที่จะปล่อยให้เป็นดุลยพินิจ",
        },
        result: {
          en: "The shortlist became explainable — a lead can see why a person was suggested.",
          th: "รายชื่อที่เสนออธิบายได้ หัวหน้าทีมเห็นเหตุผลว่าทำไมถึงแนะนำคนนี้",
        },
      },
      {
        challenge: {
          en: "Working inside low-code constraints while keeping logic maintainable.",
          th: "ทำงานภายใต้ข้อจำกัดของ low-code แต่ยังต้องดูแลตรรกะได้",
        },
        investigation: {
          en: "Some rules were awkward to express in Appsmith widgets alone.",
          th: "กฎบางข้อเขียนใน widget ของ Appsmith อย่างเดียวแล้วอ่านยาก",
        },
        solution: {
          en: "Pushed data-heavy logic down into SQL and REST responses, keeping the UI layer thin.",
          th: "ย้ายตรรกะที่เกี่ยวกับข้อมูลจำนวนมากลงไปที่ SQL และผลลัพธ์ของ REST เพื่อให้ชั้น UI บางที่สุด",
        },
        result: {
          en: "Fewer places to change when a rule changes.",
          th: "เมื่อกฎเปลี่ยน ก็มีจุดที่ต้องแก้น้อยลง",
        },
      },
      {
        challenge: {
          en: "Requirements shifting between sprints.",
          th: "ความต้องการเปลี่ยนระหว่าง sprint",
        },
        investigation: {
          en: "Stakeholder feedback during standups and UAT changed the evaluation fields.",
          th: "ความเห็นจากผู้เกี่ยวข้องใน standup และ UAT ทำให้ฟิลด์การประเมินเปลี่ยน",
        },
        solution: {
          en: "Kept the schema normalised so new fields did not require reworking screens.",
          th: "ออกแบบ schema ให้ normalize ไว้ เพื่อให้การเพิ่มฟิลด์ไม่ต้องรื้อหน้าจอ",
        },
        result: {
          en: "Changes landed within the sprint rather than after it.",
          th: "การแก้ไขเสร็จภายใน sprint แทนที่จะค้างไปรอบถัดไป",
        },
      },
    ],
    results: {
      en: [
        "Delivered a working internal workforce management system used to streamline employee reallocation across teams.",
        "Reduced manual coordination effort for project engineers and team leads.",
        "Designed and consumed RESTful APIs integrating frontend workflows with a Supabase PostgreSQL backend.",
        "Modelled relational schemas in SQL supporting both operations and reporting.",
        "Passed user acceptance testing with consultants and stakeholders.",
      ],
      th: [
        "ส่งมอบระบบบริหารกำลังคนภายในที่ใช้งานได้จริง ช่วยให้การย้ายพนักงานระหว่างทีมราบรื่นขึ้น",
        "ลดงานประสานงานด้วยมือของ project engineer และหัวหน้าทีม",
        "ออกแบบและเรียกใช้ RESTful API เชื่อมงานฝั่งหน้าเว็บกับฐานข้อมูล Supabase PostgreSQL",
        "ออกแบบ schema เชิงสัมพันธ์ด้วย SQL รองรับทั้งงานปฏิบัติการและการทำรายงาน",
        "ผ่านการทดสอบ UAT ร่วมกับที่ปรึกษาและผู้เกี่ยวข้อง",
      ],
    },
    learned: [
      {
        key: { en: "DATA MODELLING", th: "การออกแบบข้อมูล" },
        description: {
          en: "A good schema removes most of the complexity from the interface layer.",
          th: "schema ที่ดีช่วยลดความซับซ้อนของชั้นหน้าจอไปได้เกือบทั้งหมด",
        },
      },
      {
        key: { en: "STAKEHOLDERS", th: "ผู้เกี่ยวข้อง" },
        description: {
          en: "The requirement people say out loud is rarely the whole requirement — UAT surfaces the rest.",
          th: "ความต้องการที่คนพูดออกมามักไม่ใช่ทั้งหมด ส่วนที่เหลือจะโผล่ตอน UAT",
        },
      },
      {
        key: { en: "LOW-CODE", th: "Low-Code" },
        description: {
          en: "Low-code speeds delivery, but only if business logic stays out of the widgets.",
          th: "low-code ช่วยให้ส่งงานเร็วขึ้น แต่ต้องไม่เอาตรรกะธุรกิจไปฝังไว้ใน widget",
        },
      },
      {
        key: { en: "AGILE IN PRACTICE", th: "Agile ในทางปฏิบัติ" },
        description: {
          en: "Standups and code review are where mistakes get caught cheaply.",
          th: "standup และ code review คือจุดที่จับข้อผิดพลาดได้ด้วยต้นทุนต่ำที่สุด",
        },
      },
    ],
    future: [
      {
        phase: { en: "CURRENT", th: "ปัจจุบัน" },
        items: {
          en: ["Skill-matched reallocation", "Evaluation records", "Reporting queries"],
          th: ["จัดสรรงานตามทักษะ", "บันทึกผลการประเมิน", "คิวรีสำหรับรายงาน"],
        },
      },
      {
        phase: { en: "NEXT", th: "ถัดไป" },
        items: {
          en: ["Allocation history and audit trail", "Notification when a match appears", "Role-based permissions"],
          th: ["ประวัติการจัดสรรและ audit trail", "แจ้งเตือนเมื่อพบคนที่ตรงเงื่อนไข", "สิทธิ์การใช้งานตามบทบาท"],
        },
      },
      {
        phase: { en: "FUTURE", th: "อนาคต" },
        items: {
          en: [
            "Forecast workload from project pipeline",
            "Move core logic to a Spring Boot service",
            "Analytics on reallocation outcomes",
          ],
          th: [
            "คาดการณ์ภาระงานจากโปรเจกต์ที่กำลังจะเข้ามา",
            "ย้ายตรรกะหลักไปเป็น service บน Spring Boot",
            "วิเคราะห์ผลลัพธ์ของการจัดสรรงาน",
          ],
        },
      },
    ],
  },
  {
    slug: "whattowear",
    name: {
      en: "WhatToWear — Match Style For You",
      th: "WhatToWear — จับคู่สไตล์ให้คุณ",
    },
    shortName: { en: "WhatToWear", th: "WhatToWear" },
    year: "2025",
    status: { en: "COMPLETED", th: "เสร็จสมบูรณ์" },
    category: { en: "AI / ML · Web App", th: "AI / ML · เว็บแอป" },
    filters: ["web", "ai"],
    hue: 65,
    blurb: {
      en: "AI classifies your garments from a photo, then a rule engine suggests outfits.",
      th: "AI จำแนกเสื้อผ้าจากรูปถ่าย แล้วเอนจินกฎจะแนะนำชุดให้",
    },
    tagline: {
      en: "Web app that classifies your garments with an AI image-recognition model and suggests outfits by style category.",
      th: "เว็บแอปที่จำแนกเสื้อผ้าด้วยโมเดลรู้จำภาพ AI แล้วแนะนำชุดตามหมวดสไตล์",
    },
    coverLabel: { en: "OUTFIT RESULT SCREENSHOT", th: "ภาพหน้าจอผลลัพธ์การจัดชุด" },
    technologies: ["Java", "Spring MVC", "JSP", "MySQL", "CNN Xception"],
    liveUrl: "",
    repositoryUrl: personalInformation.githubUrl,
    meta: [
      { key: { en: "DATE", th: "ช่วงเวลา" }, value: { en: "Nov 2024 — Oct 2025", th: "พ.ย. 2567 — ต.ค. 2568" } },
      { key: { en: "ROLE", th: "บทบาท" }, value: { en: "Full-stack Developer", th: "Full-stack Developer" } },
      { key: { en: "TEAM", th: "ทีม" }, value: { en: "Senior project", th: "โปรเจกต์จบเดี่ยว" } },
      { key: { en: "STATUS", th: "สถานะ" }, value: { en: "Completed", th: "เสร็จสมบูรณ์" } },
      { key: { en: "CATEGORY", th: "ประเภท" }, value: { en: "AI / ML · Web App", th: "AI / ML · เว็บแอป" } },
      { key: { en: "CONTEXT", th: "บริบท" }, value: { en: "Maejo University", th: "มหาวิทยาลัยแม่โจ้" } },
    ],
    stack: [
      {
        title: { en: "BACKEND", th: "แบ็กเอนด์" },
        items: [
          {
            name: "Java",
            iconSlug: "openjdk",
            role: { en: "Core language", th: "ภาษาหลัก" },
            usage: {
              en: "The whole application server is written in Java — matching rules, wardrobe logic and the client that calls the recognition API.",
              th: "ทั้งฝั่งเซิร์ฟเวอร์เขียนด้วย Java ทั้งกฎการจับคู่ ตรรกะตู้เสื้อผ้า และตัวเรียก API รู้จำภาพ",
            },
          },
          {
            name: "Spring MVC",
            iconSlug: "spring",
            role: { en: "Architecture", th: "สถาปัตยกรรม" },
            usage: {
              en: "Structures the app into controller, service and repository layers so the AI integration and matching engine stay separated.",
              th: "แบ่งระบบเป็นชั้น controller, service และ repository เพื่อให้การเชื่อม AI กับเอนจินจับคู่แยกออกจากกัน",
            },
          },
          {
            name: "RESTful APIs",
            iconSlug: "openapiinitiative",
            role: { en: "AI integration", th: "การเชื่อมต่อ AI" },
            usage: {
              en: "The garment photo is posted to the classification endpoint and the returned class becomes the stored garment type.",
              th: "ส่งรูปเสื้อผ้าไปยัง endpoint สำหรับจำแนกภาพ แล้วนำผลลัพธ์ที่ได้มาบันทึกเป็นประเภทของเสื้อผ้า",
            },
          },
        ],
      },
      {
        title: { en: "FRONTEND", th: "ฟรอนต์เอนด์" },
        items: [
          {
            name: "JSP",
            iconSlug: null,
            role: { en: "View layer", th: "ชั้นแสดงผล" },
            usage: {
              en: "Server-renders the upload, wardrobe and outfit-suggestion pages from data prepared by the controllers.",
              th: "เรนเดอร์หน้าอัปโหลด หน้าตู้เสื้อผ้า และหน้าแนะนำชุดจากข้อมูลที่ controller เตรียมไว้",
            },
          },
          {
            name: "HTML",
            iconSlug: "html5",
            role: { en: "Markup", th: "โครงสร้างหน้าเว็บ" },
            usage: {
              en: "Semantic structure for the wardrobe grid and outfit result pages.",
              th: "โครงสร้างที่สื่อความหมายสำหรับตารางเสื้อผ้าและหน้าแสดงผลการจัดชุด",
            },
          },
          {
            name: "CSS",
            iconSlug: "css",
            role: { en: "Styling", th: "การจัดรูปแบบ" },
            usage: {
              en: "Layout for the garment grid and the outfit cards per style category.",
              th: "จัดเลย์เอาต์ตารางเสื้อผ้าและการ์ดชุดแยกตามหมวดสไตล์",
            },
          },
          {
            name: "Bootstrap",
            iconSlug: "bootstrap",
            role: { en: "UI framework", th: "เฟรมเวิร์ก UI" },
            usage: {
              en: "Gave the JSP pages a responsive grid quickly so effort could go into the matching logic.",
              th: "ช่วยให้หน้า JSP มีระบบ grid แบบ responsive ได้เร็ว เพื่อทุ่มเวลาไปกับตรรกะการจับคู่",
            },
          },
        ],
      },
      {
        title: { en: "DATABASE", th: "ฐานข้อมูล" },
        items: [
          {
            name: "MySQL",
            iconSlug: "mysql",
            role: { en: "Data store", th: "ที่เก็บข้อมูล" },
            usage: {
              en: "Stores users, garments, their classified attributes and the rules the matching engine reads.",
              th: "เก็บข้อมูลผู้ใช้ เสื้อผ้า คุณลักษณะที่จำแนกได้ และกฎที่เอนจินจับคู่ใช้อ่าน",
            },
          },
        ],
      },
      {
        title: { en: "AI", th: "AI" },
        items: [
          {
            name: "CNN Xception",
            iconSlug: "tensorflow",
            role: { en: "Garment classification", th: "การจำแนกเสื้อผ้า" },
            usage: {
              en: "Classifies an uploaded garment photo into a type, removing the manual wardrobe data entry that makes these apps fail.",
              th: "จำแนกประเภทเสื้อผ้าจากรูปที่อัปโหลด ตัดงานกรอกข้อมูลตู้เสื้อผ้าด้วยมือซึ่งเป็นสาเหตุที่แอปแบบนี้มักถูกเลิกใช้",
            },
          },
          {
            name: "Python",
            iconSlug: "python",
            role: { en: "Model service", th: "บริการโมเดล" },
            usage: {
              en: "The image-recognition service that wraps the model and exposes it to the Java application over HTTP.",
              th: "บริการรู้จำภาพที่ห่อหุ้มโมเดลไว้ และเปิดให้แอป Java เรียกใช้ผ่าน HTTP",
            },
          },
        ],
      },
    ],
    overviewTitle: {
      en: "Getting dressed, treated as a matching problem.",
      th: "มองการแต่งตัวให้เป็นปัญหาการจับคู่",
    },
    overview: {
      en: [
        "WhatToWear is an end-to-end web application that suggests customized outfits from the clothes a user actually owns. The user uploads a photo of a garment; an AI image-recognition API built on a CNN Xception model classifies it, so nothing has to be catalogued by hand.",
        "On top of that catalogue, a rule-based matching engine composes outfits across three style categories — Casual, Semi-Formal and Formal — backed by MySQL and served through Spring MVC with JSP views. It was my senior project and the place where I learned most about connecting a model to a real application.",
      ],
      th: [
        "WhatToWear เป็นเว็บแอปพลิเคชันครบวงจรที่แนะนำชุดจากเสื้อผ้าที่ผู้ใช้มีอยู่จริง ผู้ใช้เพียงอัปโหลดรูปเสื้อผ้า แล้ว API รู้จำภาพที่สร้างบนโมเดล CNN Xception จะจำแนกประเภทให้ โดยไม่ต้องกรอกข้อมูลเอง",
        "จากข้อมูลตู้เสื้อผ้านั้น เอนจินจับคู่แบบกำหนดกฎจะจัดชุดออกมาเป็นสามหมวดสไตล์ ได้แก่ Casual, Semi-Formal และ Formal โดยมี MySQL อยู่เบื้องหลังและให้บริการผ่าน Spring MVC พร้อมหน้า JSP นี่คือโปรเจกต์จบของฉัน และเป็นงานที่ได้เรียนรู้เรื่องการเชื่อมโมเดลเข้ากับแอปจริงมากที่สุด",
      ],
    },
    users: {
      en: "People who own plenty of clothes but decide slowly — and anyone who does not want to type in every item of their wardrobe by hand.",
      th: "คนที่มีเสื้อผ้าเยอะแต่ตัดสินใจนาน และคนที่ไม่อยากกรอกข้อมูลเสื้อผ้าทุกชิ้นด้วยตัวเอง",
    },
    problemTitle: {
      en: "Wardrobe apps ask for the one thing nobody wants to do: manual data entry.",
      th: "แอปจัดการตู้เสื้อผ้ามักขอสิ่งที่ไม่มีใครอยากทำ นั่นคือการกรอกข้อมูลเอง",
    },
    problems: {
      en: [
        "Cataloguing a wardrobe by hand is tedious enough that most people abandon it after a few items.",
        "Choosing an outfit means holding style rules in your head — what pairs with what, and what suits the occasion.",
        "Existing suggestions are generic; they ignore what the user actually owns.",
      ],
      th: [
        "การบันทึกเสื้อผ้าทีละชิ้นด้วยมือน่าเบื่อมากจนคนส่วนใหญ่เลิกทำหลังจากใส่ไปไม่กี่ชิ้น",
        "การเลือกชุดต้องจำกฎการแต่งตัวไว้ในหัว ว่าอะไรเข้ากับอะไร และแบบไหนเหมาะกับโอกาสใด",
        "คำแนะนำที่มีอยู่มักกว้างเกินไป และไม่ได้อ้างอิงจากเสื้อผ้าที่ผู้ใช้มีจริง",
      ],
    },
    goals: [
      {
        number: "01",
        title: { en: "Remove manual entry", th: "ตัดการกรอกข้อมูลด้วยมือ" },
        description: {
          en: "Classify garments automatically from a photo.",
          th: "จำแนกประเภทเสื้อผ้าจากรูปโดยอัตโนมัติ",
        },
      },
      {
        number: "02",
        title: { en: "Suggest from real wardrobe", th: "แนะนำจากเสื้อผ้าที่มีจริง" },
        description: {
          en: "Compose outfits only from items the user owns.",
          th: "จัดชุดจากเสื้อผ้าที่ผู้ใช้มีอยู่เท่านั้น",
        },
      },
      {
        number: "03",
        title: { en: "Respect the occasion", th: "คำนึงถึงโอกาส" },
        description: {
          en: "Separate suggestions by style category.",
          th: "แยกคำแนะนำตามหมวดสไตล์",
        },
      },
      {
        number: "04",
        title: { en: "Keep it usable end to end", th: "ใช้งานได้ครบตั้งแต่ต้นจนจบ" },
        description: {
          en: "Upload, classify, store and suggest in one flow.",
          th: "อัปโหลด จำแนก จัดเก็บ และแนะนำชุด จบในขั้นตอนเดียว",
        },
      },
    ],
    solutionTitle: {
      en: "An image-recognition API for input, a rule-based engine for output.",
      th: "ใช้ API รู้จำภาพรับข้อมูลเข้า และเอนจินกฎสร้างผลลัพธ์",
    },
    solution: {
      en: "The application delegates recognition to a CNN Xception image-classification API: an upload returns a garment type, which is stored in MySQL as structured wardrobe data. A rule-based matching engine then combines items into outfits across Casual, Semi-Formal and Formal categories, so results are explainable rather than a black box. Spring MVC keeps controller, service and data layers separate, with JSP rendering the views.",
      th: "ระบบส่งงานการรู้จำภาพให้ API จำแนกภาพ CNN Xception เมื่ออัปโหลดรูปจะได้ประเภทเสื้อผ้ากลับมา แล้วบันทึกลง MySQL เป็นข้อมูลตู้เสื้อผ้าที่มีโครงสร้าง จากนั้นเอนจินจับคู่แบบกำหนดกฎจะประกอบเป็นชุดในหมวด Casual, Semi-Formal และ Formal ทำให้ผลลัพธ์อธิบายได้ ไม่ใช่กล่องดำ โดย Spring MVC แยกชั้น controller, service และข้อมูลออกจากกัน และใช้ JSP เรนเดอร์หน้าจอ",
    },
    flow: [
      {
        number: "01",
        title: { en: "Problem", th: "ปัญหา" },
        description: { en: "Manual entry, slow decisions.", th: "ต้องกรอกข้อมูลเอง และตัดสินใจช้า" },
      },
      {
        number: "02",
        title: { en: "Research", th: "ศึกษาข้อมูล" },
        description: { en: "Model options and style rules.", th: "เปรียบเทียบโมเดลและรวบรวมกฎการแต่งตัว" },
      },
      {
        number: "03",
        title: { en: "Design", th: "ออกแบบ" },
        description: { en: "Wardrobe schema and screens.", th: "ออกแบบ schema ตู้เสื้อผ้าและหน้าจอ" },
      },
      {
        number: "04",
        title: { en: "Development", th: "พัฒนา" },
        description: { en: "Spring MVC, JSP, MySQL, API.", th: "พัฒนาด้วย Spring MVC, JSP, MySQL และ API" },
      },
      {
        number: "05",
        title: { en: "Solution", th: "ผลลัพธ์" },
        description: {
          en: "Auto-classified wardrobe with matched outfits.",
          th: "ตู้เสื้อผ้าที่จำแนกอัตโนมัติพร้อมชุดที่จับคู่ให้",
        },
      },
    ],
    features: [
      {
        title: { en: "AI Garment Classification", th: "จำแนกเสื้อผ้าด้วย AI" },
        description: {
          en: "Upload a photo and the CNN Xception API identifies the garment type — no manual data entry.",
          th: "อัปโหลดรูปแล้ว API CNN Xception จะระบุประเภทเสื้อผ้าให้ โดยไม่ต้องกรอกข้อมูลเอง",
        },
      },
      {
        title: { en: "Digital Wardrobe", th: "ตู้เสื้อผ้าดิจิทัล" },
        description: {
          en: "Classified items stored in MySQL as structured, queryable wardrobe data.",
          th: "เก็บเสื้อผ้าที่จำแนกแล้วไว้ใน MySQL เป็นข้อมูลที่มีโครงสร้างและค้นหาได้",
        },
      },
      {
        title: { en: "Rule-Based Outfit Matching", th: "จับคู่ชุดด้วยกฎ" },
        description: {
          en: "Combines items into outfits across Casual, Semi-Formal and Formal categories using explicit style rules.",
          th: "ประกอบเสื้อผ้าเป็นชุดในหมวด Casual, Semi-Formal และ Formal ด้วยกฎการแต่งตัวที่เขียนไว้ชัดเจน",
        },
      },
      {
        title: { en: "Style Category Browsing", th: "เลือกดูตามหมวดสไตล์" },
        description: {
          en: "Browse suggestions by occasion rather than scrolling one long list.",
          th: "ดูคำแนะนำตามโอกาสการใช้งาน แทนการเลื่อนดูรายการยาว ๆ",
        },
      },
    ],
    screenshots: {
      en: ["UPLOAD & CLASSIFY", "WARDROBE GRID", "OUTFIT SUGGESTION", "STYLE CATEGORY VIEW"],
      th: ["อัปโหลดและจำแนก", "ตารางตู้เสื้อผ้า", "คำแนะนำการจัดชุด", "หน้าหมวดสไตล์"],
    },
    architecture: [
      {
        number: "01",
        title: { en: "View — JSP + Bootstrap", th: "ชั้นแสดงผล — JSP + Bootstrap" },
        description: {
          en: "Server-rendered pages for upload, wardrobe and suggestion screens.",
          th: "หน้าเว็บที่เรนเดอร์จากเซิร์ฟเวอร์ สำหรับหน้าอัปโหลด ตู้เสื้อผ้า และคำแนะนำ",
        },
      },
      {
        number: "02",
        title: { en: "Controller / Service — Spring MVC", th: "Controller / Service — Spring MVC" },
        description: {
          en: "Request handling, validation, and orchestration between the API client and the matching engine.",
          th: "จัดการคำขอ ตรวจสอบข้อมูล และประสานงานระหว่างตัวเรียก API กับเอนจินจับคู่",
        },
      },
      {
        number: "03",
        title: { en: "AI service — CNN Xception API", th: "บริการ AI — CNN Xception API" },
        description: {
          en: "Image posted to the recognition endpoint; the returned class becomes the garment type.",
          th: "ส่งรูปไปยัง endpoint รู้จำภาพ แล้วนำคลาสที่ได้มาเป็นประเภทของเสื้อผ้า",
        },
      },
      {
        number: "04",
        title: { en: "Matching engine", th: "เอนจินจับคู่" },
        description: {
          en: "Rules over garment types and attributes produce outfits per style category.",
          th: "ใช้กฎบนประเภทและคุณลักษณะของเสื้อผ้าเพื่อสร้างชุดในแต่ละหมวดสไตล์",
        },
      },
      {
        number: "05",
        title: { en: "Data — MySQL", th: "ชั้นข้อมูล — MySQL" },
        description: {
          en: "Users, garments, attributes and matching rules in a relational schema.",
          th: "เก็บผู้ใช้ เสื้อผ้า คุณลักษณะ และกฎการจับคู่ไว้ใน schema เชิงสัมพันธ์",
        },
      },
    ],
    process: [
      {
        number: "01",
        title: { en: "Planning", th: "วางแผน" },
        description: {
          en: "Scope and requirements for senior project.",
          th: "กำหนดขอบเขตและความต้องการของโปรเจกต์จบ",
        },
      },
      {
        number: "02",
        title: { en: "UI / UX Design", th: "ออกแบบ UI / UX" },
        description: {
          en: "Wireframes for upload and suggestion flow.",
          th: "ทำ wireframe สำหรับขั้นตอนอัปโหลดและการแนะนำชุด",
        },
      },
      {
        number: "03",
        title: { en: "AI Integration", th: "เชื่อมต่อ AI" },
        description: { en: "Xception classification API.", th: "เชื่อม API จำแนกภาพ Xception" },
      },
      {
        number: "04",
        title: { en: "Backend", th: "แบ็กเอนด์" },
        description: { en: "Spring MVC layers and MySQL schema.", th: "สร้างชั้น Spring MVC และ schema ของ MySQL" },
      },
      {
        number: "05",
        title: { en: "Frontend", th: "ฟรอนต์เอนด์" },
        description: { en: "JSP views and Bootstrap layout.", th: "ทำหน้า JSP และเลย์เอาต์ด้วย Bootstrap" },
      },
      {
        number: "06",
        title: { en: "Testing", th: "ทดสอบ" },
        description: {
          en: "Classification accuracy and rule checks.",
          th: "ตรวจความแม่นยำของการจำแนกและความถูกต้องของกฎ",
        },
      },
      {
        number: "07",
        title: { en: "Presentation", th: "นำเสนอ" },
        description: { en: "Project defence and documentation.", th: "สอบป้องกันโปรเจกต์และจัดทำเอกสาร" },
      },
    ],
    challenges: [
      {
        challenge: {
          en: "The model returns a guess, not a fact.",
          th: "โมเดลให้คำตอบที่เป็นการคาดเดา ไม่ใช่ข้อเท็จจริง",
        },
        investigation: {
          en: "Some garments came back with a confident but wrong class, especially in poor lighting.",
          th: "เสื้อผ้าบางชิ้นถูกจำแนกผิดทั้งที่ค่าความมั่นใจสูง โดยเฉพาะเมื่อแสงไม่ดี",
        },
        solution: {
          en: "Treated classification as a suggestion the user can correct, and stored the corrected value as the truth.",
          th: "ถือว่าผลการจำแนกเป็นเพียงข้อเสนอที่ผู้ใช้แก้ไขได้ และบันทึกค่าที่แก้แล้วเป็นข้อมูลจริง",
        },
        result: {
          en: "Wrong predictions no longer poison the wardrobe data.",
          th: "การทำนายผิดไม่ทำให้ข้อมูลตู้เสื้อผ้าเสียหายอีกต่อไป",
        },
      },
      {
        challenge: {
          en: "Encoding style rules that people apply intuitively.",
          th: "แปลงกฎการแต่งตัวที่คนใช้โดยสัญชาตญาณให้เป็นโค้ด",
        },
        investigation: {
          en: "Wrote out how items combine per occasion and where the ambiguity actually sits.",
          th: "เขียนออกมาว่าเสื้อผ้าแต่ละแบบเข้ากันอย่างไรในแต่ละโอกาส และจุดไหนที่กำกวมจริง ๆ",
        },
        solution: {
          en: "Split matching into three explicit categories — Casual, Semi-Formal, Formal — with rules per category.",
          th: "แบ่งการจับคู่เป็นสามหมวดชัดเจน คือ Casual, Semi-Formal และ Formal พร้อมกฎของแต่ละหมวด",
        },
        result: {
          en: "Suggestions became explainable and easy to adjust.",
          th: "คำแนะนำอธิบายได้และปรับแก้ได้ง่าย",
        },
      },
      {
        challenge: {
          en: "Connecting a Python-based model service to a Java application.",
          th: "เชื่อมบริการโมเดลที่เขียนด้วย Python เข้ากับแอป Java",
        },
        investigation: {
          en: "Different runtimes, different data shapes.",
          th: "รันไทม์คนละแบบ และรูปแบบข้อมูลไม่เหมือนกัน",
        },
        solution: {
          en: "Kept the boundary as a REST call with a narrow contract and handled failures gracefully.",
          th: "กำหนดขอบเขตให้เป็นการเรียก REST ที่มีสัญญาข้อมูลแคบ ๆ และจัดการกรณีผิดพลาดอย่างเรียบร้อย",
        },
        result: {
          en: "Each side could change without breaking the other.",
          th: "ทั้งสองฝั่งเปลี่ยนแปลงได้โดยไม่พังอีกฝั่ง",
        },
      },
    ],
    results: {
      en: [
        "Delivered an end-to-end web application for customized outfit suggestions.",
        "Integrated a CNN Xception image-recognition API to auto-classify garments, removing manual data entry.",
        "Implemented a rule-based matching engine across 3 style categories: Casual, Semi-Formal and Formal.",
        "Backed the application with MySQL and a Spring MVC architecture with JSP views.",
        "Completed and presented as my senior project.",
      ],
      th: [
        "ส่งมอบเว็บแอปพลิเคชันครบวงจรสำหรับแนะนำการจัดชุด",
        "เชื่อมต่อ API รู้จำภาพ CNN Xception เพื่อจำแนกเสื้อผ้าอัตโนมัติ ตัดขั้นตอนกรอกข้อมูลด้วยมือ",
        "พัฒนาเอนจินจับคู่แบบกำหนดกฎครอบคลุม 3 หมวดสไตล์ ได้แก่ Casual, Semi-Formal และ Formal",
        "ใช้ MySQL เป็นฐานข้อมูล ร่วมกับสถาปัตยกรรม Spring MVC และหน้า JSP",
        "ทำเสร็จและนำเสนอเป็นโปรเจกต์จบการศึกษา",
      ],
    },
    learned: [
      {
        key: { en: "AI IN PRODUCTS", th: "AI ในผลิตภัณฑ์" },
        description: {
          en: "A model output is probabilistic — the application design has to leave room for it to be wrong.",
          th: "ผลลัพธ์ของโมเดลเป็นความน่าจะเป็น การออกแบบระบบจึงต้องเผื่อกรณีที่มันผิด",
        },
      },
      {
        key: { en: "ARCHITECTURE", th: "สถาปัตยกรรม" },
        description: {
          en: "Spring MVC layering made the codebase navigable months later.",
          th: "การแบ่งชั้นแบบ Spring MVC ทำให้กลับมาอ่านโค้ดอีกหลายเดือนต่อมาได้ไม่ยาก",
        },
      },
      {
        key: { en: "SCOPE", th: "ขอบเขตงาน" },
        description: {
          en: "Three well-defined style categories beat an open-ended rule set that never ships.",
          th: "สามหมวดสไตล์ที่นิยามชัดเจน ดีกว่าชุดกฎที่เปิดกว้างจนทำไม่เสร็จ",
        },
      },
      {
        key: { en: "INTEGRATION", th: "การเชื่อมต่อระบบ" },
        description: {
          en: "A narrow API contract is the cheapest way to join two ecosystems.",
          th: "สัญญา API ที่แคบและชัดเจนคือวิธีที่ประหยัดที่สุดในการเชื่อมสองระบบเข้าด้วยกัน",
        },
      },
    ],
    future: [
      {
        phase: { en: "CURRENT", th: "ปัจจุบัน" },
        items: {
          en: ["AI garment classification", "Digital wardrobe", "Rule-based matching in 3 categories"],
          th: ["จำแนกเสื้อผ้าด้วย AI", "ตู้เสื้อผ้าดิจิทัล", "จับคู่ด้วยกฎใน 3 หมวด"],
        },
      },
      {
        phase: { en: "NEXT", th: "ถัดไป" },
        items: {
          en: ["User feedback loop to improve suggestions", "Weather-aware recommendations", "Mobile-first redesign"],
          th: ["รับความเห็นผู้ใช้เพื่อปรับปรุงคำแนะนำ", "แนะนำชุดตามสภาพอากาศ", "ออกแบบใหม่โดยเริ่มจากมือถือ"],
        },
      },
      {
        phase: { en: "FUTURE", th: "อนาคต" },
        items: {
          en: [
            "Retrain classification on user-corrected data",
            "Colour-harmony matching",
            "Rebuild backend on Spring Boot with a React frontend",
          ],
          th: [
            "เทรนโมเดลใหม่จากข้อมูลที่ผู้ใช้แก้ไข",
            "จับคู่ตามความกลมกลืนของสี",
            "เขียน backend ใหม่ด้วย Spring Boot และใช้ React เป็น frontend",
          ],
        },
      },
    ],
  },
];

/** Look up a project by its URL slug. */
export function findProjectBySlug(slug: string): Project | undefined {
  return portfolioProjects.find((project) => project.slug === slug);
}

/** The project shown as "next" at the bottom of a case study. */
export function findNextProject(slug: string): Project {
  const currentIndex = portfolioProjects.findIndex((project) => project.slug === slug);
  return portfolioProjects[(currentIndex + 1) % portfolioProjects.length];
}
