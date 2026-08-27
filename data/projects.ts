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
  { id: "mobile", label: { en: "Mobile", th: "มือถือ" } },
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
    screenshots: [
      {
        label: { en: "ALLOCATION DASHBOARD", th: "แดชบอร์ดการจัดสรรงาน" },
      },
      {
        label: { en: "SKILL MATCH RESULT", th: "ผลการจับคู่ทักษะ" },
      },
      {
        label: { en: "EMPLOYEE EVALUATION FORM", th: "ฟอร์มประเมินพนักงาน" },
      },
      {
        label: { en: "TEAM WORKLOAD VIEW", th: "หน้าดูภาระงานของทีม" },
      },
    ],
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
    repositoryUrl: "https://github.com/ammmook/ProjectMVC_WhatToWear",
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
    screenshots: [
      {
        label: { en: "UPLOAD & CLASSIFY", th: "อัปโหลดและจำแนก" },
      },
      {
        label: { en: "WARDROBE GRID", th: "ตารางตู้เสื้อผ้า" },
      },
      {
        label: { en: "OUTFIT SUGGESTION", th: "คำแนะนำการจัดชุด" },
      },
      {
        label: { en: "STYLE CATEGORY VIEW", th: "หน้าหมวดสไตล์" },
      },
    ],
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
  {
    slug: "work-time-tracker",
    name: {
      en: "Work Time Tracker — Shift & Overtime Calculator",
      th: "Work Time Tracker — ระบบบันทึกเวลาและคำนวณค่าล่วงเวลา",
    },
    shortName: { en: "Work Time Tracker", th: "ระบบบันทึกเวลาทำงาน" },
    year: "2026",
    status: { en: "LIVE", th: "ใช้งานจริง" },
    category: { en: "Web App", th: "เว็บแอป" },
    filters: ["web"],
    hue: 25,
    blurb: {
      en: "Log clock-in and clock-out on a calendar; OT and shift pay are worked out for you.",
      th: "บันทึกเวลาเข้า-ออกงานบนปฏิทิน แล้วระบบคำนวณค่า OT และค่ากะให้อัตโนมัติ",
    },
    tagline: {
      en: "A calendar-first web app for shift workers: record each day of hours and see the month's overtime and shift allowance add up in real time.",
      th: "เว็บแอปที่ใช้ปฏิทินเป็นศูนย์กลางสำหรับคนทำงานเป็นกะ บันทึกชั่วโมงทำงานรายวันแล้วเห็นค่าล่วงเวลาและค่ากะของทั้งเดือนรวมกันแบบเรียลไทม์",
    },
    coverLabel: { en: "CALENDAR", th: "หน้าปฏิทิน" },
    coverImageUrl: "https://avkiohcjeykmmtqklegg.supabase.co/storage/v1/object/public/my-portfolio-pictures/calendar-worker/1_dashboard.png",
    cardImageUrl: "https://avkiohcjeykmmtqklegg.supabase.co/storage/v1/object/public/my-portfolio-pictures/calendar-worker/1_dashboard.png",
    technologies: ["React 19", "Vite", "Tailwind CSS", "Supabase", "PostgreSQL"],
    liveUrl: "https://calendar-worker.vercel.app",
    repositoryUrl: "https://github.com/ammmook/calendar-worker",
    meta: [
      { key: { en: "DATE", th: "ช่วงเวลา" }, value: { en: "Mar 2026 — Aug 2026", th: "มี.ค. 2569 — ส.ค. 2569" } },
      { key: { en: "ROLE", th: "บทบาท" }, value: { en: "Solo Developer", th: "พัฒนาคนเดียว" } },
      { key: { en: "TEAM", th: "ทีม" }, value: { en: "Personal project", th: "โปรเจกต์ส่วนตัว" } },
      { key: { en: "STATUS", th: "สถานะ" }, value: { en: "Live on Vercel", th: "เปิดใช้งานบน Vercel" } },
      { key: { en: "CATEGORY", th: "ประเภท" }, value: { en: "Web App", th: "เว็บแอป" } },
      {
        key: { en: "CONTEXT", th: "บริบท" },
        value: { en: "Built for real day-to-day use", th: "สร้างเพื่อใช้งานจริงในชีวิตประจำวัน" },
      },
    ],
    stack: [
      {
        title: { en: "FRONTEND", th: "ฟรอนต์เอนด์" },
        items: [
          {
            name: "React 19",
            iconSlug: "react",
            role: { en: "UI layer", th: "ชั้นส่วนติดต่อผู้ใช้" },
            usage: {
              en: "Calendar grid, day cells, summary cards and dashboards, all as composable components.",
              th: "ตารางปฏิทิน ช่องวันที่ การ์ดสรุป และแดชบอร์ด สร้างเป็นคอมโพเนนต์ที่ประกอบกันได้",
            },
          },
          {
            name: "Vite",
            iconSlug: "vite",
            role: { en: "Build tool", th: "เครื่องมือ build" },
            usage: {
              en: "Dev server with instant reload and a small production bundle.",
              th: "เซิร์ฟเวอร์สำหรับพัฒนาที่รีโหลดทันที และ bundle สำหรับ production ที่ขนาดเล็ก",
            },
          },
          {
            name: "Tailwind CSS",
            iconSlug: "tailwindcss",
            role: { en: "Styling", th: "การจัดรูปแบบ" },
            usage: {
              en: "Utility classes for a dense calendar that still works on a phone screen.",
              th: "ใช้ utility class เพื่อให้ปฏิทินที่มีข้อมูลแน่นยังใช้งานบนหน้าจอมือถือได้",
            },
          },
          {
            name: "date-fns",
            iconSlug: null,
            role: { en: "Date maths", th: "การคำนวณวันที่" },
            usage: {
              en: "Month boundaries, day iteration and duration arithmetic without timezone surprises.",
              th: "หาขอบเขตของเดือน วนลูปรายวัน และคำนวณช่วงเวลา โดยไม่เจอปัญหาโซนเวลา",
            },
          },
        ],
      },
      {
        title: { en: "BACKEND & DATA", th: "แบ็กเอนด์และข้อมูล" },
        items: [
          {
            name: "Supabase",
            iconSlug: "supabase",
            role: { en: "Backend as a service", th: "แบ็กเอนด์สำเร็จรูป" },
            usage: {
              en: "Auth, row-level security and the data API — no server of my own to run.",
              th: "ระบบยืนยันตัวตน, row-level security และ data API โดยไม่ต้องดูแลเซิร์ฟเวอร์เอง",
            },
          },
          {
            name: "PostgreSQL",
            iconSlug: "postgresql",
            role: { en: "Database", th: "ฐานข้อมูล" },
            usage: {
              en: "Stores work records, leave types and per-user pay rates.",
              th: "เก็บบันทึกการทำงาน ประเภทการลา และอัตราค่าจ้างของผู้ใช้แต่ละคน",
            },
          },
          {
            name: "Vercel",
            iconSlug: "vercel",
            role: { en: "Hosting", th: "โฮสติ้ง" },
            usage: {
              en: "Deploys straight from the main branch.",
              th: "ดีพลอยจากสาขา main โดยตรง",
            },
          },
        ],
      },
    ],
    overviewTitle: {
      en: "Payroll maths that nobody should be doing on paper.",
      th: "การคำนวณค่าแรงที่ไม่ควรต้องนั่งคิดบนกระดาษ",
    },
    overview: {
      en: [
        "Shift workers rarely earn a flat monthly figure. Pay is a base amount plus overtime hours plus a shift allowance that depends on which rotation was worked — and the only reliable record is whatever was written down at the time.",
        "Work Time Tracker turns that record into a calendar. You tap a day, enter clock-in and clock-out, and the app derives worked hours, overtime and shift pay from the rates set once in your profile.",
        "The monthly and yearly views then roll everything up, so at the end of the month the expected pay is already there instead of being reconstructed from memory.",
      ],
      th: [
        "คนทำงานเป็นกะไม่ได้รับเงินเดือนคงที่ รายได้ประกอบด้วยฐานเงินเดือน บวกชั่วโมงล่วงเวลา บวกค่ากะที่ขึ้นกับรอบการทำงาน และหลักฐานเดียวที่เชื่อถือได้คือสิ่งที่จดไว้ตอนนั้น",
        "Work Time Tracker เปลี่ยนบันทึกเหล่านั้นให้เป็นปฏิทิน แตะเลือกวัน กรอกเวลาเข้าและออกงาน แล้วระบบจะคำนวณชั่วโมงทำงาน ค่าล่วงเวลา และค่ากะจากอัตราที่ตั้งไว้ครั้งเดียวในหน้าโปรไฟล์",
        "จากนั้นหน้าสรุปรายเดือนและรายปีจะรวมยอดให้ทั้งหมด สิ้นเดือนจึงรู้ทันทีว่าควรได้รับเท่าไร โดยไม่ต้องมานั่งนึกย้อนหลัง",
      ],
    },
    users: {
      en: "Shift and hourly workers who want to check their own payslip — starting with me.",
      th: "คนทำงานเป็นกะและรายชั่วโมงที่ต้องการตรวจสอบสลิปเงินเดือนของตัวเอง เริ่มจากตัวฉันเอง",
    },
    problemTitle: {
      en: "The numbers only exist in a notebook, and the maths is repeated every month.",
      th: "ตัวเลขมีอยู่แค่ในสมุดจด และต้องคำนวณซ้ำทุกเดือน",
    },
    problems: {
      en: [
        "Hours were tracked in a notes app, so a lost or skipped entry meant a lost day of pay.",
        "Overtime and shift allowance follow different rules, and mixing them up is easy when adding by hand.",
        "There was no way to see a month or a year at a glance, only a list of numbers.",
        "Checking whether the payslip was correct meant redoing the whole calculation.",
      ],
      th: [
        "จดชั่วโมงทำงานไว้ในแอปโน้ต ถ้าลืมจดหรือทำหาย ก็เท่ากับเสียค่าแรงของวันนั้นไป",
        "ค่าล่วงเวลาและค่ากะใช้กฎคนละแบบ เวลาบวกเองด้วยมือจึงสับสนได้ง่าย",
        "ไม่มีมุมมองที่เห็นภาพรวมทั้งเดือนหรือทั้งปี มีแต่รายการตัวเลขเรียงกัน",
        "การตรวจสอบว่าสลิปเงินเดือนถูกต้องหรือไม่ ต้องคำนวณใหม่ทั้งหมดอีกรอบ",
      ],
    },
    goals: [
      {
        number: "01",
        title: { en: "Make recording a day take seconds", th: "ทำให้การบันทึกหนึ่งวันใช้เวลาไม่กี่วินาที" },
        description: {
          en: "If logging is slower than jotting it down, the app will not get used.",
          th: "ถ้าการบันทึกในแอปช้ากว่าการจดใส่กระดาษ สุดท้ายก็จะไม่มีใครใช้",
        },
      },
      {
        number: "02",
        title: { en: "Calculate pay, not just store hours", th: "คำนวณค่าจ้าง ไม่ใช่แค่เก็บชั่วโมง" },
        description: {
          en: "Overtime and shift allowance are derived from configurable rates, not typed in.",
          th: "ค่าล่วงเวลาและค่ากะคำนวณจากอัตราที่ตั้งค่าได้ ไม่ใช่ให้ผู้ใช้พิมพ์เอง",
        },
      },
      {
        number: "03",
        title: { en: "Show the month and the year", th: "แสดงภาพรวมทั้งเดือนและทั้งปี" },
        description: {
          en: "Summaries and charts so patterns in workload and income are visible.",
          th: "มีหน้าสรุปและกราฟ เพื่อให้เห็นแนวโน้มของภาระงานและรายได้",
        },
      },
      {
        number: "04",
        title: { en: "Keep the data private per user", th: "เก็บข้อมูลแยกเป็นรายบุคคล" },
        description: {
          en: "Salary information is sensitive; each account sees only its own rows.",
          th: "ข้อมูลเงินเดือนเป็นเรื่องละเอียดอ่อน แต่ละบัญชีจึงเห็นเฉพาะข้อมูลของตัวเอง",
        },
      },
    ],
    solutionTitle: {
      en: "A calendar as the input surface, Supabase as the whole backend.",
      th: "ใช้ปฏิทินเป็นหน้าจอสำหรับกรอกข้อมูล และใช้ Supabase เป็นแบ็กเอนด์ทั้งหมด",
    },
    solution: {
      en: "The app is a React 19 single-page application built with Vite. A month calendar renders one cell per day; selecting a cell opens an entry for clock-in, clock-out and leave type. Worked hours, overtime and shift allowance are computed from rates stored in the user profile, then persisted to PostgreSQL through Supabase. Authentication and row-level security come from Supabase too, so no custom server sits in the middle — the browser talks to a data API that already knows who the user is. Monthly and yearly dashboards read the same records and roll them into totals and charts.",
      th: "แอปนี้เป็น single-page application ที่เขียนด้วย React 19 และ build ด้วย Vite ปฏิทินรายเดือนจะเรนเดอร์หนึ่งช่องต่อหนึ่งวัน เมื่อเลือกช่องจะเปิดฟอร์มให้กรอกเวลาเข้า เวลาออก และประเภทการลา ชั่วโมงทำงาน ค่าล่วงเวลา และค่ากะคำนวณจากอัตราที่เก็บไว้ในโปรไฟล์ผู้ใช้ แล้วบันทึกลง PostgreSQL ผ่าน Supabase ระบบยืนยันตัวตนและ row-level security ก็มาจาก Supabase เช่นกัน จึงไม่ต้องมีเซิร์ฟเวอร์ของตัวเองคั่นกลาง เบราว์เซอร์คุยกับ data API ที่รู้อยู่แล้วว่าผู้ใช้เป็นใคร ส่วนแดชบอร์ดรายเดือนและรายปีอ่านข้อมูลชุดเดียวกันมาสรุปเป็นยอดรวมและกราฟ",
    },
    flow: [
      {
        number: "01",
        title: { en: "Sign in", th: "เข้าสู่ระบบ" },
        description: {
          en: "Supabase authenticates the user and scopes every query to that account.",
          th: "Supabase ยืนยันตัวตนผู้ใช้ และจำกัดทุกคำสั่งค้นหาให้อยู่ในบัญชีนั้น",
        },
      },
      {
        number: "02",
        title: { en: "Set the rates once", th: "ตั้งค่าอัตราครั้งเดียว" },
        description: {
          en: "Base rate, overtime multiplier and shift allowance live in the profile.",
          th: "อัตราค่าจ้างพื้นฐาน ตัวคูณค่าล่วงเวลา และค่ากะ เก็บอยู่ในหน้าโปรไฟล์",
        },
      },
      {
        number: "03",
        title: { en: "Tap a day", th: "แตะเลือกวัน" },
        description: {
          en: "Enter clock-in, clock-out, or mark the day as leave.",
          th: "กรอกเวลาเข้างาน เวลาออกงาน หรือระบุว่าวันนั้นลา",
        },
      },
      {
        number: "04",
        title: { en: "See the day priced immediately", th: "เห็นยอดของวันนั้นทันที" },
        description: {
          en: "The cell shows hours worked and the amount that day earned.",
          th: "ช่องวันนั้นจะแสดงจำนวนชั่วโมงและจำนวนเงินที่ได้รับ",
        },
      },
      {
        number: "05",
        title: { en: "Read the summary", th: "ดูสรุปผล" },
        description: {
          en: "Monthly totals and a yearly dashboard with charts.",
          th: "ยอดรวมรายเดือน และแดชบอร์ดรายปีพร้อมกราฟ",
        },
      },
    ],
    features: [
      {
        title: { en: "Month calendar with per-day entry", th: "ปฏิทินรายเดือนพร้อมบันทึกรายวัน" },
        description: {
          en: "Every day is a cell showing hours worked and what it paid, so gaps are obvious.",
          th: "ทุกวันเป็นช่องที่แสดงชั่วโมงทำงานและจำนวนเงินที่ได้ ทำให้เห็นวันที่ยังไม่ได้บันทึกชัดเจน",
        },
      },
      {
        title: { en: "Automatic OT and shift pay", th: "คำนวณค่า OT และค่ากะอัตโนมัติ" },
        description: {
          en: "Rates are configured once; the app applies them to every record.",
          th: "ตั้งอัตราไว้ครั้งเดียว แล้วระบบจะนำไปใช้กับทุกบันทึก",
        },
      },
      {
        title: { en: "Leave types", th: "ประเภทการลา" },
        description: {
          en: "Days off are recorded as leave rather than left as missing data.",
          th: "วันหยุดถูกบันทึกเป็นการลา ไม่ใช่ปล่อยให้เป็นข้อมูลที่หายไป",
        },
      },
      {
        title: { en: "Monthly and yearly dashboards", th: "แดชบอร์ดรายเดือนและรายปี" },
        description: {
          en: "Summary cards and charts showing hours and income over time.",
          th: "การ์ดสรุปและกราฟแสดงชั่วโมงทำงานและรายได้ตามช่วงเวลา",
        },
      },
      {
        title: { en: "Thai and English interface", th: "อินเทอร์เฟซภาษาไทยและอังกฤษ" },
        description: {
          en: "Copy is kept in a locale module so both languages stay in sync.",
          th: "ข้อความทั้งหมดเก็บไว้ในโมดูล locale เพื่อให้ทั้งสองภาษาตรงกันเสมอ",
        },
      },
      {
        title: { en: "Skeleton loading states", th: "สถานะโหลดแบบ skeleton" },
        description: {
          en: "The calendar keeps its shape while data arrives instead of jumping.",
          th: "ปฏิทินคงรูปทรงเดิมระหว่างรอข้อมูล แทนที่จะกระโดดไปมา",
        },
      },
    ],
    screenshots: [
      {
        label: { en: "CALENDAR", th: "หน้าปฏิทิน" },
        imageUrl: "https://avkiohcjeykmmtqklegg.supabase.co/storage/v1/object/public/my-portfolio-pictures/calendar-worker/1_dashboard.png",
      },
      {
        label: { en: "YEARLY DASHBOARD — SUMMARY", th: "แดชบอร์ดรายปี — สรุปภาพรวม" },
        imageUrl: "https://avkiohcjeykmmtqklegg.supabase.co/storage/v1/object/public/my-portfolio-pictures/calendar-worker/2_annual_dashboard_sum.png",
      },
      {
        label: { en: "YEARLY DASHBOARD — GRAPHS", th: "แดชบอร์ดรายปี — สรุปกราฟ" },
        imageUrl: "https://avkiohcjeykmmtqklegg.supabase.co/storage/v1/object/public/my-portfolio-pictures/calendar-worker/3_annual_dashboard_graph.png",
      },
    ],
    architecture: [
      {
        number: "01",
        title: { en: "React SPA (Vite)", th: "React SPA (Vite)" },
        description: {
          en: "Components for the calendar, day cell, controls, summaries and charts.",
          th: "คอมโพเนนต์สำหรับปฏิทิน ช่องวัน แถบควบคุม หน้าสรุป และกราฟ",
        },
      },
      {
        number: "02",
        title: { en: "Context providers", th: "Context provider" },
        description: {
          en: "Auth state and loading state are shared through React context rather than prop-drilled.",
          th: "สถานะการเข้าสู่ระบบและสถานะการโหลดใช้ React context ร่วมกัน แทนการส่ง prop ลงไปเป็นชั้น ๆ",
        },
      },
      {
        number: "03",
        title: { en: "Service layer", th: "ชั้นบริการ" },
        description: {
          en: "A single api module wraps every Supabase call, keeping queries out of components.",
          th: "โมดูล api เดียวห่อหุ้มการเรียก Supabase ทั้งหมด ทำให้คำสั่งค้นหาไม่ปะปนอยู่ในคอมโพเนนต์",
        },
      },
      {
        number: "04",
        title: { en: "Supabase + PostgreSQL", th: "Supabase + PostgreSQL" },
        description: {
          en: "Auth, row-level security and storage for work records and profiles.",
          th: "ระบบยืนยันตัวตน row-level security และการจัดเก็บบันทึกการทำงานและโปรไฟล์",
        },
      },
      {
        number: "05",
        title: { en: "Vercel", th: "Vercel" },
        description: {
          en: "Static build deployed continuously from the repository.",
          th: "ดีพลอยไฟล์ static จาก repository อย่างต่อเนื่อง",
        },
      },
    ],
    process: [
      {
        number: "01",
        title: { en: "Started from my own notebook", th: "เริ่มจากสมุดจดของตัวเอง" },
        description: {
          en: "Wrote down the rules I was applying by hand before writing any code.",
          th: "เขียนกฎที่ใช้คำนวณด้วยมือจริง ๆ ออกมาก่อนลงมือเขียนโค้ด",
        },
      },
      {
        number: "02",
        title: { en: "Modelled the data", th: "ออกแบบโครงสร้างข้อมูล" },
        description: {
          en: "One row per worked day, with rates kept on the profile so history stays reproducible.",
          th: "หนึ่งแถวต่อหนึ่งวันทำงาน โดยเก็บอัตราไว้ที่โปรไฟล์เพื่อให้ย้อนดูประวัติแล้วได้ผลเดิม",
        },
      },
      {
        number: "03",
        title: { en: "Built the calendar first", th: "สร้างปฏิทินก่อน" },
        description: {
          en: "The calendar is the product; everything else hangs off it.",
          th: "ปฏิทินคือหัวใจของแอป ส่วนอื่นค่อยต่อยอดจากตรงนี้",
        },
      },
      {
        number: "04",
        title: { en: "Added auth and row-level security", th: "เพิ่มระบบล็อกอินและ row-level security" },
        description: {
          en: "Locked every table down per user before putting real salary data in.",
          th: "ล็อกทุกตารางให้แยกตามผู้ใช้ ก่อนใส่ข้อมูลเงินเดือนจริงลงไป",
        },
      },
      {
        number: "05",
        title: { en: "Layered on summaries", th: "เพิ่มหน้าสรุปทีหลัง" },
        description: {
          en: "Monthly totals, then the yearly dashboard and charts.",
          th: "เริ่มจากยอดรวมรายเดือน แล้วจึงทำแดชบอร์ดรายปีและกราฟ",
        },
      },
      {
        number: "06",
        title: { en: "Shipped and kept using it", th: "ปล่อยใช้งานจริงและใช้ต่อเนื่อง" },
        description: {
          en: "Deployed to Vercel and fixed what got in the way during real month-end use.",
          th: "ดีพลอยขึ้น Vercel แล้วแก้จุดที่ติดขัดตอนสรุปยอดสิ้นเดือนจริง",
        },
      },
    ],
    challenges: [
      {
        challenge: { en: "Shifts that cross midnight.", th: "กะที่ทำงานข้ามเที่ยงคืน" },
        investigation: {
          en: "A clock-out earlier than clock-in produced negative hours for every night shift.",
          th: "เมื่อเวลาออกงานน้อยกว่าเวลาเข้างาน ชั่วโมงทำงานของกะดึกจะติดลบทุกครั้ง",
        },
        solution: {
          en: "Treated the pair as a duration rather than two clock times, rolling the end into the next day when needed.",
          th: "มองเวลาทั้งคู่เป็นช่วงระยะเวลาแทนที่จะเป็นเวลานาฬิกาสองค่า และเลื่อนเวลาสิ้นสุดไปวันถัดไปเมื่อจำเป็น",
        },
        result: {
          en: "Night shifts are priced the same way as day shifts.",
          th: "กะกลางคืนคำนวณค่าจ้างได้ถูกต้องเหมือนกะกลางวัน",
        },
      },
      {
        challenge: {
          en: "Changing a pay rate must not rewrite the past.",
          th: "การเปลี่ยนอัตราค่าจ้างต้องไม่ทำให้ข้อมูลเก่าเปลี่ยนตาม",
        },
        investigation: {
          en: "Deriving old months from the current rate silently changed history after a raise.",
          th: "การคำนวณเดือนเก่าด้วยอัตราปัจจุบัน ทำให้ประวัติเปลี่ยนไปเงียบ ๆ หลังปรับค่าจ้าง",
        },
        solution: {
          en: "Persisted the computed amounts with each record so a summary is a sum, not a recalculation.",
          th: "บันทึกยอดเงินที่คำนวณแล้วไว้กับแต่ละรายการ หน้าสรุปจึงเป็นการบวกยอด ไม่ใช่การคำนวณใหม่",
        },
        result: {
          en: "Past months stay exactly as they were reported.",
          th: "ยอดของเดือนที่ผ่านมาคงเดิมตรงตามที่เคยรายงานไว้",
        },
      },
      {
        challenge: {
          en: "A month grid is a lot of data on a phone.",
          th: "ตารางทั้งเดือนมีข้อมูลเยอะเกินไปสำหรับหน้าจอมือถือ",
        },
        investigation: {
          en: "Hours, pay and leave status all competed for one small cell.",
          th: "ทั้งชั่วโมง ค่าจ้าง และสถานะการลา ต้องแย่งพื้นที่ในช่องเล็ก ๆ ช่องเดียว",
        },
        solution: {
          en: "Kept only hours and a status colour in the cell, and moved detail into the day view and summary cards.",
          th: "ให้ช่องแสดงเฉพาะชั่วโมงและสีบอกสถานะ ส่วนรายละเอียดย้ายไปอยู่ในหน้ารายวันและการ์ดสรุป",
        },
        result: {
          en: "The calendar stays readable at phone width.",
          th: "ปฏิทินยังอ่านง่ายบนความกว้างของหน้าจอมือถือ",
        },
      },
    ],
    results: {
      en: [
        "Live at calendar-worker.vercel.app and used for real monthly pay checks.",
        "Replaced manual notebook tracking with a per-day record that prices itself.",
        "Overtime and shift allowance are derived from configurable rates instead of hand arithmetic.",
        "Monthly and yearly dashboards turned a list of numbers into a readable trend.",
        "Built entirely on Supabase auth and row-level security, with no server of my own to maintain.",
      ],
      th: [
        "เปิดใช้งานจริงที่ calendar-worker.vercel.app และใช้ตรวจสอบค่าแรงทุกเดือน",
        "แทนที่การจดบันทึกในสมุดด้วยข้อมูลรายวันที่คำนวณค่าจ้างให้เอง",
        "ค่าล่วงเวลาและค่ากะคำนวณจากอัตราที่ตั้งค่าได้ แทนการบวกเลขด้วยมือ",
        "แดชบอร์ดรายเดือนและรายปีเปลี่ยนรายการตัวเลขให้กลายเป็นแนวโน้มที่อ่านเข้าใจได้",
        "สร้างบนระบบยืนยันตัวตนและ row-level security ของ Supabase ทั้งหมด จึงไม่ต้องดูแลเซิร์ฟเวอร์เอง",
      ],
    },
    learned: [
      {
        key: { en: "TIME IS HARD", th: "เวลาเป็นเรื่องยาก" },
        description: {
          en: "Durations, midnight crossings and timezones cause more bugs than the business rules do.",
          th: "ช่วงระยะเวลา การข้ามเที่ยงคืน และโซนเวลา ทำให้เกิดบั๊กมากกว่ากฎทางธุรกิจเสียอีก",
        },
      },
      {
        key: { en: "STORE THE RESULT", th: "เก็บผลลัพธ์ไว้" },
        description: {
          en: "Financial records should keep the number that was reported, not recompute it later.",
          th: "ข้อมูลทางการเงินควรเก็บตัวเลขที่เคยรายงานไว้ ไม่ใช่คำนวณใหม่ในภายหลัง",
        },
      },
      {
        key: { en: "MANAGED BACKENDS", th: "แบ็กเอนด์สำเร็จรูป" },
        description: {
          en: "Row-level security let one person ship a multi-user app safely.",
          th: "row-level security ทำให้คนคนเดียวปล่อยแอปที่รองรับผู้ใช้หลายคนได้อย่างปลอดภัย",
        },
      },
      {
        key: { en: "BUILD FOR YOURSELF", th: "สร้างเพื่อใช้เอง" },
        description: {
          en: "Being the user made every scoping decision obvious.",
          th: "การเป็นผู้ใช้เองทำให้ตัดสินใจเรื่องขอบเขตงานได้ชัดเจนทุกครั้ง",
        },
      },
    ],
    future: [
      {
        phase: { en: "CURRENT", th: "ปัจจุบัน" },
        items: {
          en: [
            "Calendar entry",
            "Automatic OT and shift pay",
            "Monthly and yearly dashboards",
            "Thai / English UI",
          ],
          th: [
            "บันทึกผ่านปฏิทิน",
            "คำนวณ OT และค่ากะอัตโนมัติ",
            "แดชบอร์ดรายเดือนและรายปี",
            "อินเทอร์เฟซไทย / อังกฤษ",
          ],
        },
      },
      {
        phase: { en: "NEXT", th: "ถัดไป" },
        items: {
          en: [
            "Export a month to CSV or PDF",
            "Compare the summary against an uploaded payslip",
            "Installable PWA for offline entry",
          ],
          th: [
            "ส่งออกข้อมูลรายเดือนเป็น CSV หรือ PDF",
            "เทียบยอดสรุปกับสลิปเงินเดือนที่อัปโหลด",
            "ทำเป็น PWA ติดตั้งได้เพื่อบันทึกแบบออฟไลน์",
          ],
        },
      },
      {
        phase: { en: "FUTURE", th: "อนาคต" },
        items: {
          en: [
            "Shift-pattern templates for recurring rotations",
            "Team view for a small workplace",
            "Reminders for unrecorded days",
          ],
          th: [
            "เทมเพลตรูปแบบกะสำหรับรอบการทำงานที่ทำซ้ำ",
            "มุมมองสำหรับทีมในที่ทำงานขนาดเล็ก",
            "แจ้งเตือนวันที่ยังไม่ได้บันทึก",
          ],
        },
      },
    ],
  },
  {
    slug: "sleep-health",
    name: {
      en: "Sleep Health — Android Sleep Tracker",
      th: "Sleep Health — แอปบันทึกการนอนบน Android",
    },
    shortName: { en: "Sleep Health", th: "Sleep Health" },
    year: "2026",
    status: { en: "COMPLETED", th: "เสร็จสมบูรณ์" },
    category: { en: "Mobile App", th: "แอปมือถือ" },
    filters: ["mobile"],
    hue: 275,
    blurb: {
      en: "Native Android app that logs sleep, scores efficiency and tracks accumulated sleep debt.",
      th: "แอป Android ที่บันทึกการนอน คำนวณประสิทธิภาพการนอน และติดตามหนี้การนอนที่สะสมไว้",
    },
    tagline: {
      en: "A Java Android app backed by its own Java web service: record bedtime and wake time, get a sleep-efficiency score, a sleep-debt figure, and a daily leaderboard.",
      th: "แอป Android ที่เขียนด้วย Java และมี web service ของตัวเอง บันทึกเวลาเข้านอนและตื่นนอน แล้วได้คะแนนประสิทธิภาพการนอน ค่าหนี้การนอน และกระดานจัดอันดับประจำวัน",
    },
    coverLabel: { en: "APP DASHBOARD SCREENSHOT", th: "ภาพหน้าจอแดชบอร์ดของแอป" },
    technologies: ["Java", "Android SDK", "REST API", "MySQL", "Supabase"],
    liveUrl: "",
    repositoryUrl: "https://github.com/ammmook/Project_Android_SleepHealth",
    meta: [
      { key: { en: "DATE", th: "ช่วงเวลา" }, value: { en: "Sep 2025 — Jan 2026", th: "ก.ย. 2568 — ม.ค. 2569" } },
      {
        key: { en: "ROLE", th: "บทบาท" },
        value: { en: "Android & Web Service Developer", th: "ผู้พัฒนาแอป Android และ Web Service" },
      },
      { key: { en: "TEAM", th: "ทีม" }, value: { en: "Coursework project", th: "โปรเจกต์รายวิชา" } },
      { key: { en: "STATUS", th: "สถานะ" }, value: { en: "Completed", th: "เสร็จสมบูรณ์" } },
      { key: { en: "CATEGORY", th: "ประเภท" }, value: { en: "Mobile App", th: "แอปมือถือ" } },
      { key: { en: "CONTEXT", th: "บริบท" }, value: { en: "Maejo University", th: "มหาวิทยาลัยแม่โจ้" } },
    ],
    stack: [
      {
        title: { en: "MOBILE", th: "แอปมือถือ" },
        items: [
          {
            name: "Java",
            iconSlug: "openjdk",
            role: { en: "App language", th: "ภาษาที่ใช้เขียนแอป" },
            usage: {
              en: "Activities, adapters, models and background tasks — no framework shortcuts.",
              th: "เขียน Activity, Adapter, Model และงานเบื้องหลังเองทั้งหมด ไม่พึ่งเฟรมเวิร์กสำเร็จรูป",
            },
          },
          {
            name: "Android SDK",
            iconSlug: "android",
            role: { en: "Platform", th: "แพลตฟอร์ม" },
            usage: {
              en: "XML layouts, RecyclerView lists, a bottom navigation menu and per-screen activities.",
              th: "เลย์เอาต์ XML, รายการแบบ RecyclerView, เมนูนำทางด้านล่าง และแยก Activity ตามหน้าจอ",
            },
          },
          {
            name: "Android Studio",
            iconSlug: "androidstudio",
            role: { en: "Tooling", th: "เครื่องมือพัฒนา" },
            usage: {
              en: "Gradle build, emulator testing and layout preview.",
              th: "build ด้วย Gradle ทดสอบบน emulator และดูตัวอย่างเลย์เอาต์",
            },
          },
        ],
      },
      {
        title: { en: "SERVICE & DATA", th: "บริการและข้อมูล" },
        items: [
          {
            name: "Java Web Service",
            iconSlug: "openjdk",
            role: { en: "Backend", th: "แบ็กเอนด์" },
            usage: {
              en: "Separate repository holding the sleep-efficiency and sleep-debt calculations.",
              th: "แยกเป็นอีก repository เก็บการคำนวณประสิทธิภาพการนอนและหนี้การนอน",
            },
          },
          {
            name: "REST API",
            iconSlug: null,
            role: { en: "Transport", th: "การรับส่งข้อมูล" },
            usage: {
              en: "JSON over HTTP between the app and the service, wrapped in a single WSManager class.",
              th: "รับส่ง JSON ผ่าน HTTP ระหว่างแอปกับบริการ โดยห่อไว้ในคลาส WSManager เพียงคลาสเดียว",
            },
          },
          {
            name: "MySQL",
            iconSlug: "mysql",
            role: { en: "Database", th: "ฐานข้อมูล" },
            usage: {
              en: "Users and sleep logs, designed and inspected in MySQL Workbench.",
              th: "เก็บผู้ใช้และบันทึกการนอน ออกแบบและตรวจสอบผ่าน MySQL Workbench",
            },
          },
          {
            name: "Supabase",
            iconSlug: "supabase",
            role: { en: "Auxiliary storage", th: "ที่เก็บข้อมูลเสริม" },
            usage: {
              en: "Used for the features that needed data to update without a manual refresh.",
              th: "ใช้กับฟีเจอร์ที่ต้องการให้ข้อมูลอัปเดตโดยไม่ต้องกดรีเฟรชเอง",
            },
          },
        ],
      },
    ],
    overviewTitle: {
      en: "Sleep you can actually measure, not just feel.",
      th: "ทำให้การนอนวัดผลได้ ไม่ใช่แค่ความรู้สึก",
    },
    overview: {
      en: [
        "Most people know they slept badly, but not by how much. Sleep Health takes the two numbers everyone can supply — the time you went to bed and the time you woke up — and turns them into something comparable.",
        "The app calculates a sleep-efficiency score for the night and accumulates a sleep-debt figure against a personal target, so a run of short nights becomes a visible total rather than a vague feeling.",
        "A daily leaderboard ranks users by how well they slept, which turned the assignment from a data-entry form into something people actually opened.",
      ],
      th: [
        "คนส่วนใหญ่รู้ว่าตัวเองนอนไม่พอ แต่ไม่รู้ว่าขาดไปเท่าไร Sleep Health รับตัวเลขสองค่าที่ทุกคนบอกได้ คือเวลาเข้านอนและเวลาตื่น แล้วแปลงเป็นค่าที่เปรียบเทียบกันได้",
        "แอปคำนวณคะแนนประสิทธิภาพการนอนของแต่ละคืน และสะสมเป็นค่าหนี้การนอนเทียบกับเป้าหมายส่วนตัว ทำให้การนอนน้อยติดต่อกันกลายเป็นยอดรวมที่มองเห็นได้ ไม่ใช่แค่ความรู้สึก",
        "กระดานจัดอันดับประจำวันจะเรียงลำดับผู้ใช้ตามคุณภาพการนอน ซึ่งเปลี่ยนงานส่งอาจารย์ที่เป็นแค่ฟอร์มกรอกข้อมูล ให้กลายเป็นแอปที่คนอยากเปิดจริง ๆ",
      ],
    },
    users: {
      en: "Students and anyone with an irregular sleep schedule who wants a number to hold themselves to.",
      th: "นักศึกษาและคนที่นอนไม่เป็นเวลา ซึ่งอยากมีตัวเลขไว้เตือนตัวเอง",
    },
    problemTitle: {
      en: "Sleep apps either need a wearable, or ask you to trust a black box.",
      th: "แอปเกี่ยวกับการนอนมักต้องใช้อุปกรณ์สวมใส่ หรือไม่ก็ให้เชื่อผลลัพธ์แบบกล่องดำ",
    },
    problems: {
      en: [
        "Automatic tracking usually depends on a smartwatch that not every student owns.",
        "Sleeping badly feels bad, but there is no running total to show how far behind you are.",
        "Doing the maths on a phone client alone means the rules are duplicated and drift.",
        "A tracking app with no reason to return gets installed once and forgotten.",
      ],
      th: [
        "การติดตามอัตโนมัติมักต้องใช้สมาร์ตวอตช์ ซึ่งนักศึกษาไม่ได้มีกันทุกคน",
        "การนอนไม่พอทำให้รู้สึกแย่ แต่ไม่มียอดสะสมที่บอกได้ว่าขาดไปมากแค่ไหน",
        "ถ้าคำนวณอยู่ในแอปฝั่งเดียว กฎการคำนวณจะถูกเขียนซ้ำและเพี้ยนไปตามเวลา",
        "แอปติดตามที่ไม่มีเหตุผลให้กลับมาเปิด มักถูกติดตั้งครั้งเดียวแล้วลืม",
      ],
    },
    goals: [
      {
        number: "01",
        title: { en: "Work with manual entry only", th: "ใช้งานได้ด้วยการกรอกข้อมูลเอง" },
        description: {
          en: "Two time pickers should be enough — no wearable required.",
          th: "แค่เลือกเวลาสองค่าก็เพียงพอ ไม่ต้องใช้อุปกรณ์สวมใส่",
        },
      },
      {
        number: "02",
        title: { en: "Turn hours into a score", th: "เปลี่ยนชั่วโมงให้เป็นคะแนน" },
        description: {
          en: "Sleep efficiency and sleep debt give the raw duration meaning.",
          th: "ประสิทธิภาพการนอนและหนี้การนอนทำให้จำนวนชั่วโมงมีความหมายขึ้น",
        },
      },
      {
        number: "03",
        title: { en: "Keep the rules on the server", th: "เก็บกฎการคำนวณไว้ที่เซิร์ฟเวอร์" },
        description: {
          en: "One web service owns the calculation so the app stays a thin client.",
          th: "ให้ web service เดียวเป็นเจ้าของการคำนวณ แอปจึงเป็นเพียง client บาง ๆ",
        },
      },
      {
        number: "04",
        title: { en: "Give people a reason to come back", th: "ให้เหตุผลที่จะกลับมาใช้" },
        description: {
          en: "A daily leaderboard makes logging a habit rather than a chore.",
          th: "กระดานจัดอันดับรายวันทำให้การบันทึกกลายเป็นนิสัย ไม่ใช่ภาระ",
        },
      },
    ],
    solutionTitle: {
      en: "A thin Android client over a Java web service that owns the maths.",
      th: "แอป Android แบบบางที่คุยกับ Java web service ซึ่งเป็นเจ้าของการคำนวณ",
    },
    solution: {
      en: "The Android app is written in Java against the platform SDK: one activity per screen — login, register, dashboard, add sleep, sleep history, ranking and edit profile — with models for user, sleep record and API response. Networking is isolated in a WSManager class and executed off the main thread through task classes, so no screen makes its own HTTP call. Those calls hit a separate Java web service that owns the sleep-efficiency and sleep-debt formulas and reads and writes MySQL. Because the rules live in one place, the phone only renders what the service returns, and the daily leaderboard is a query on the server rather than a computation repeated on every device.",
      th: "แอป Android เขียนด้วย Java บน SDK ของแพลตฟอร์มโดยตรง แยกหนึ่ง Activity ต่อหนึ่งหน้าจอ ได้แก่ เข้าสู่ระบบ สมัครสมาชิก หน้าหลัก บันทึกการนอน ประวัติการนอน อันดับ และแก้ไขโปรไฟล์ พร้อมคลาส model สำหรับผู้ใช้ บันทึกการนอน และผลลัพธ์จาก API ส่วนการเชื่อมต่อเครือข่ายถูกแยกไว้ในคลาส WSManager และทำงานนอกเธรดหลักผ่านคลาส task จึงไม่มีหน้าจอไหนยิง HTTP เอง คำขอเหล่านั้นส่งไปยัง Java web service แยกต่างหากที่เป็นเจ้าของสูตรคำนวณประสิทธิภาพการนอนและหนี้การนอน และอ่านเขียนข้อมูลกับ MySQL เมื่อกฎอยู่ที่เดียว โทรศัพท์จึงมีหน้าที่แค่แสดงผลที่บริการส่งกลับมา และกระดานจัดอันดับก็เป็นการ query บนเซิร์ฟเวอร์ แทนที่จะคำนวณซ้ำในทุกเครื่อง",
    },
    flow: [
      {
        number: "01",
        title: { en: "Register or sign in", th: "สมัครสมาชิกหรือเข้าสู่ระบบ" },
        description: {
          en: "Credentials are checked by the web service, and the session is held in a global app class.",
          th: "web service ตรวจสอบข้อมูลเข้าสู่ระบบ และเก็บ session ไว้ในคลาส global ของแอป",
        },
      },
      {
        number: "02",
        title: { en: "Add a night", th: "เพิ่มการนอนหนึ่งคืน" },
        description: {
          en: "Pick the date, bedtime and wake time.",
          th: "เลือกวันที่ เวลาเข้านอน และเวลาตื่นนอน",
        },
      },
      {
        number: "03",
        title: { en: "The service scores it", th: "บริการคำนวณคะแนน" },
        description: {
          en: "Duration, sleep efficiency and the change in sleep debt come back as JSON.",
          th: "ระยะเวลา ประสิทธิภาพการนอน และการเปลี่ยนแปลงของหนี้การนอน ส่งกลับมาเป็น JSON",
        },
      },
      {
        number: "04",
        title: { en: "Dashboard updates", th: "หน้าหลักอัปเดต" },
        description: {
          en: "The home screen shows the latest night and the accumulated debt.",
          th: "หน้าหลักแสดงการนอนคืนล่าสุดและหนี้การนอนที่สะสมไว้",
        },
      },
      {
        number: "05",
        title: { en: "Compare and review", th: "เปรียบเทียบและย้อนดู" },
        description: {
          en: "Check the daily ranking, or scroll back through the sleep history list.",
          th: "ดูอันดับประจำวัน หรือเลื่อนดูรายการประวัติการนอนย้อนหลัง",
        },
      },
    ],
    features: [
      {
        title: { en: "Manual sleep log", th: "บันทึกการนอนด้วยตนเอง" },
        description: {
          en: "Date, bedtime and wake time — the whole input, no sensors involved.",
          th: "กรอกแค่วันที่ เวลาเข้านอน และเวลาตื่น ไม่ต้องใช้เซ็นเซอร์ใด ๆ",
        },
      },
      {
        title: { en: "Sleep efficiency score", th: "คะแนนประสิทธิภาพการนอน" },
        description: {
          en: "Each night is scored so two nights of the same length are still distinguishable.",
          th: "ให้คะแนนการนอนแต่ละคืน ทำให้สองคืนที่นอนเท่ากันยังแยกความต่างได้",
        },
      },
      {
        title: { en: "Sleep debt tracking", th: "ติดตามหนี้การนอน" },
        description: {
          en: "Shortfalls against a personal target accumulate into a running total.",
          th: "ชั่วโมงที่ขาดจากเป้าหมายส่วนตัวจะสะสมเป็นยอดรวมที่เดินหน้าต่อเนื่อง",
        },
      },
      {
        title: { en: "Daily leaderboard", th: "กระดานจัดอันดับรายวัน" },
        description: {
          en: "A RecyclerView ranking of who slept best today, served by the web service.",
          th: "จัดอันดับผู้ที่นอนดีที่สุดของวันด้วย RecyclerView โดยดึงข้อมูลจาก web service",
        },
      },
      {
        title: { en: "Sleep history", th: "ประวัติการนอน" },
        description: {
          en: "A scrollable list of past nights so a bad week is visible at a glance.",
          th: "รายการเลื่อนดูการนอนย้อนหลัง ทำให้เห็นสัปดาห์ที่นอนไม่พอได้ทันที",
        },
      },
      {
        title: { en: "Editable profile", th: "แก้ไขโปรไฟล์ได้" },
        description: {
          en: "Personal details and sleep target can be changed without re-registering.",
          th: "แก้ไขข้อมูลส่วนตัวและเป้าหมายการนอนได้โดยไม่ต้องสมัครใหม่",
        },
      },
    ],
    screenshots: [
      {
        label: { en: "DASHBOARD", th: "หน้าหลัก" },
      },
      {
        label: { en: "ADD SLEEP", th: "บันทึกการนอน" },
      },
      {
        label: { en: "SLEEP HISTORY", th: "ประวัติการนอน" },
      },
      {
        label: { en: "DAILY RANKING", th: "อันดับประจำวัน" },
      },
    ],
    architecture: [
      {
        number: "01",
        title: { en: "Activities", th: "ชั้น Activity" },
        description: {
          en: "One activity per screen, each responsible only for its own layout and input.",
          th: "หนึ่ง Activity ต่อหนึ่งหน้าจอ แต่ละตัวรับผิดชอบเฉพาะเลย์เอาต์และอินพุตของตัวเอง",
        },
      },
      {
        number: "02",
        title: { en: "Models", th: "ชั้น Model" },
        description: {
          en: "User, sleep record and response classes give the JSON a typed shape.",
          th: "คลาสผู้ใช้ บันทึกการนอน และผลลัพธ์ ทำให้ JSON มีโครงสร้างที่ชัดเจน",
        },
      },
      {
        number: "03",
        title: { en: "WSManager + task classes", th: "WSManager และคลาส task" },
        description: {
          en: "All HTTP goes through one manager, run off the UI thread with a callback back to the screen.",
          th: "การเรียก HTTP ทั้งหมดผ่าน manager ตัวเดียว ทำงานนอกเธรด UI แล้วส่ง callback กลับไปยังหน้าจอ",
        },
      },
      {
        number: "04",
        title: { en: "Java web service", th: "Java web service" },
        description: {
          en: "A separate deployable that owns the sleep formulas and every database query.",
          th: "ระบบที่ดีพลอยแยกต่างหาก เป็นเจ้าของสูตรคำนวณการนอนและคำสั่งค้นหาฐานข้อมูลทั้งหมด",
        },
      },
      {
        number: "05",
        title: { en: "MySQL", th: "MySQL" },
        description: {
          en: "Stores accounts and one row per logged night.",
          th: "เก็บบัญชีผู้ใช้ และหนึ่งแถวต่อการนอนหนึ่งคืนที่บันทึกไว้",
        },
      },
    ],
    process: [
      {
        number: "01",
        title: { en: "Defined the sleep metrics", th: "นิยามตัวชี้วัดการนอน" },
        description: {
          en: "Settled what efficiency and debt actually mean before building a screen.",
          th: "ตกลงให้ชัดว่าประสิทธิภาพการนอนและหนี้การนอนหมายถึงอะไร ก่อนลงมือทำหน้าจอ",
        },
      },
      {
        number: "02",
        title: { en: "Designed the database", th: "ออกแบบฐานข้อมูล" },
        description: {
          en: "Users and sleep logs modelled in MySQL Workbench.",
          th: "ออกแบบตารางผู้ใช้และบันทึกการนอนใน MySQL Workbench",
        },
      },
      {
        number: "03",
        title: { en: "Built the web service first", th: "สร้าง web service ก่อน" },
        description: {
          en: "Endpoints and calculations were working before the app consumed them.",
          th: "ทำ endpoint และการคำนวณให้ใช้งานได้ก่อน แล้วค่อยให้แอปเรียกใช้",
        },
      },
      {
        number: "04",
        title: { en: "Wired the app to the API", th: "เชื่อมแอปเข้ากับ API" },
        description: {
          en: "WSManager and task classes first, then the screens on top of them.",
          th: "ทำ WSManager และคลาส task ก่อน แล้วจึงสร้างหน้าจอต่อยอด",
        },
      },
      {
        number: "05",
        title: { en: "Added the leaderboard", th: "เพิ่มกระดานจัดอันดับ" },
        description: {
          en: "The ranking screen came last, as the feature that makes people log daily.",
          th: "ทำหน้าอันดับเป็นลำดับสุดท้าย เพราะเป็นฟีเจอร์ที่ทำให้คนกลับมาบันทึกทุกวัน",
        },
      },
      {
        number: "06",
        title: { en: "Tested on device and emulator", th: "ทดสอบบนเครื่องจริงและ emulator" },
        description: {
          en: "Checked layouts across screen sizes and handled offline behaviour.",
          th: "ตรวจสอบเลย์เอาต์บนหลายขนาดหน้าจอ และจัดการกรณีไม่มีอินเทอร์เน็ต",
        },
      },
    ],
    challenges: [
      {
        challenge: {
          en: "Network calls on the main thread froze the UI.",
          th: "การเรียกเครือข่ายบนเธรดหลักทำให้หน้าจอค้าง",
        },
        investigation: {
          en: "Android refuses HTTP on the UI thread, and the first screens tried it anyway.",
          th: "Android ไม่อนุญาตให้เรียก HTTP บนเธรด UI แต่หน้าจอแรก ๆ ก็ยังเผลอเรียกอยู่ดี",
        },
        solution: {
          en: "Moved every request into task classes behind WSManager, with a callback delivering the result back to the activity.",
          th: "ย้ายทุกคำขอไปไว้ในคลาส task ที่อยู่หลัง WSManager แล้วส่งผลลัพธ์กลับไปยัง Activity ผ่าน callback",
        },
        result: {
          en: "Screens stay responsive and the networking code lives in one place.",
          th: "หน้าจอไม่ค้าง และโค้ดเชื่อมต่อเครือข่ายรวมอยู่ที่เดียว",
        },
      },
      {
        challenge: {
          en: "Bedtime is usually on the previous calendar day.",
          th: "เวลาเข้านอนมักอยู่ในวันก่อนหน้าตามปฏิทิน",
        },
        investigation: {
          en: "Going to bed at 23:30 and waking at 07:00 produced a negative duration.",
          th: "เข้านอน 23:30 แล้วตื่น 07:00 ทำให้ระยะเวลาที่คำนวณได้ติดลบ",
        },
        solution: {
          en: "Normalised each record into a start and end timestamp on the service side before any arithmetic.",
          th: "แปลงแต่ละรายการให้เป็น timestamp เริ่มต้นและสิ้นสุดที่ฝั่งบริการก่อนคำนวณใด ๆ",
        },
        result: {
          en: "Overnight sleep is measured correctly, and the app never has to reason about dates.",
          th: "คำนวณการนอนข้ามวันได้ถูกต้อง และแอปไม่ต้องยุ่งกับตรรกะเรื่องวันที่เลย",
        },
      },
      {
        challenge: {
          en: "Two data sources for one app.",
          th: "แอปเดียวแต่มีแหล่งข้อมูลสองที่",
        },
        investigation: {
          en: "MySQL held the records, but some views needed to refresh without a manual reload.",
          th: "MySQL เก็บข้อมูลหลัก แต่บางหน้าจอต้องอัปเดตโดยไม่ต้องกดโหลดใหม่",
        },
        solution: {
          en: "Kept MySQL as the source of truth and used Supabase only for the views that needed live updates.",
          th: "ให้ MySQL เป็นแหล่งข้อมูลหลัก และใช้ Supabase เฉพาะหน้าจอที่ต้องอัปเดตแบบสด",
        },
        result: {
          en: "Live updates without splitting the core data across two systems.",
          th: "ได้การอัปเดตแบบสด โดยไม่ต้องแยกข้อมูลหลักไปอยู่สองระบบ",
        },
      },
    ],
    results: {
      en: [
        "Delivered a native Android application in Java with seven screens and a bottom navigation flow.",
        "Built and deployed a companion Java web service holding the sleep-efficiency and sleep-debt logic.",
        "Designed the MySQL schema for accounts and nightly sleep records.",
        "Shipped a daily leaderboard that turned logging into a habit rather than an assignment.",
        "Completed and presented as an Android development coursework project.",
      ],
      th: [
        "ส่งมอบแอป Android แบบ native ที่เขียนด้วย Java มี 7 หน้าจอ พร้อมการนำทางด้านล่าง",
        "สร้างและดีพลอย Java web service คู่กัน ซึ่งเก็บตรรกะประสิทธิภาพการนอนและหนี้การนอน",
        "ออกแบบสคีมา MySQL สำหรับบัญชีผู้ใช้และบันทึกการนอนรายคืน",
        "ทำกระดานจัดอันดับรายวันที่เปลี่ยนการบันทึกให้กลายเป็นนิสัย ไม่ใช่แค่งานส่ง",
        "ทำเสร็จและนำเสนอเป็นโปรเจกต์รายวิชาพัฒนาแอปพลิเคชัน Android",
      ],
    },
    learned: [
      {
        key: { en: "THREADING", th: "การจัดการเธรด" },
        description: {
          en: "On mobile, where work runs matters as much as what the work does.",
          th: "บนมือถือ การที่งานทำงานอยู่บนเธรดไหน สำคัญไม่แพ้ว่างานนั้นทำอะไร",
        },
      },
      {
        key: { en: "ONE OWNER PER RULE", th: "หนึ่งกฎ หนึ่งเจ้าของ" },
        description: {
          en: "Putting the formulas in the service kept the client honest and easy to change.",
          th: "การเก็บสูตรคำนวณไว้ที่บริการ ทำให้แอปฝั่ง client เรียบง่ายและแก้ไขได้ง่าย",
        },
      },
      {
        key: { en: "MOTIVATION IS A FEATURE", th: "แรงจูงใจก็เป็นฟีเจอร์" },
        description: {
          en: "The leaderboard did more for daily use than any of the calculations did.",
          th: "กระดานจัดอันดับช่วยให้คนใช้ทุกวันได้มากกว่าการคำนวณทั้งหมดรวมกัน",
        },
      },
      {
        key: { en: "TWO REPOSITORIES", th: "สองรีโพซิทอรี" },
        description: {
          en: "Splitting app and service made each one simpler, but the API contract had to be agreed first.",
          th: "การแยกแอปกับบริการทำให้แต่ละฝั่งง่ายขึ้น แต่ต้องตกลงสัญญา API ให้ชัดก่อน",
        },
      },
    ],
    future: [
      {
        phase: { en: "CURRENT", th: "ปัจจุบัน" },
        items: {
          en: ["Manual sleep logging", "Efficiency and sleep-debt scoring", "History list", "Daily leaderboard"],
          th: ["บันทึกการนอนด้วยตนเอง", "คำนวณประสิทธิภาพและหนี้การนอน", "รายการประวัติ", "อันดับประจำวัน"],
        },
      },
      {
        phase: { en: "NEXT", th: "ถัดไป" },
        items: {
          en: ["Bedtime reminder notifications", "Weekly trend chart", "Offline entry with sync on reconnect"],
          th: ["แจ้งเตือนเวลาเข้านอน", "กราฟแนวโน้มรายสัปดาห์", "บันทึกแบบออฟไลน์แล้วซิงก์เมื่อกลับมาออนไลน์"],
        },
      },
      {
        phase: { en: "FUTURE", th: "อนาคต" },
        items: {
          en: [
            "Health Connect integration for automatic entries",
            "Rewrite the UI in Kotlin with Jetpack Compose",
            "Personalised sleep-target recommendations",
          ],
          th: [
            "เชื่อมต่อ Health Connect เพื่อบันทึกอัตโนมัติ",
            "เขียน UI ใหม่ด้วย Kotlin และ Jetpack Compose",
            "แนะนำเป้าหมายการนอนที่เหมาะกับแต่ละคน",
          ],
        },
      },
    ],
  },
  {
    slug: "pet-hotel-booking",
    name: {
      en: "Pet Hotel Booking — Go Web Application",
      th: "ระบบจองโรงแรมสัตว์เลี้ยง — เว็บแอปพลิเคชันด้วย Go",
    },
    shortName: { en: "Pet Hotel Booking", th: "ระบบจองโรงแรมสัตว์เลี้ยง" },
    year: "2026",
    status: { en: "COMPLETED", th: "เสร็จสมบูรณ์" },
    category: { en: "Web App", th: "เว็บแอป" },
    filters: ["web"],
    hue: 200,
    blurb: {
      en: "Pet boarding reservations in Go — register pets, book dates, get the stay priced automatically.",
      th: "ระบบจองที่พักสัตว์เลี้ยงด้วยภาษา Go ลงทะเบียนสัตว์เลี้ยง เลือกวันเข้าพัก และคำนวณราคาอัตโนมัติ",
    },
    tagline: {
      en: "My first project in Go: a server-rendered booking system for a pet hotel, with sessions, hashed passwords and date-based cost calculation.",
      th: "โปรเจกต์แรกที่เขียนด้วย Go เป็นระบบจองที่พักสัตว์เลี้ยงแบบเรนเดอร์ฝั่งเซิร์ฟเวอร์ พร้อมระบบ session การเข้ารหัสรหัสผ่าน และการคำนวณค่าที่พักตามจำนวนวัน",
    },
    coverLabel: { en: "BOOKING PAGE SCREENSHOT", th: "ภาพหน้าจอหน้าจองที่พัก" },
    technologies: ["Go", "net/http", "html/template", "MySQL", "gorilla/sessions"],
    liveUrl: "",
    repositoryUrl: "https://github.com/ammmook/go-pet-harmony",
    meta: [
      { key: { en: "DATE", th: "ช่วงเวลา" }, value: { en: "Sep 2025 — Jan 2026", th: "ก.ย. 2568 — ม.ค. 2569" } },
      { key: { en: "ROLE", th: "บทบาท" }, value: { en: "Backend Developer", th: "Backend Developer" } },
      { key: { en: "TEAM", th: "ทีม" }, value: { en: "Pair project (2 people)", th: "ทำเป็นคู่ (2 คน)" } },
      { key: { en: "STATUS", th: "สถานะ" }, value: { en: "Completed", th: "เสร็จสมบูรณ์" } },
      { key: { en: "CATEGORY", th: "ประเภท" }, value: { en: "Web App", th: "เว็บแอป" } },
      { key: { en: "CONTEXT", th: "บริบท" }, value: { en: "First project in Go", th: "โปรเจกต์แรกด้วยภาษา Go" } },
    ],
    stack: [
      {
        title: { en: "BACKEND", th: "แบ็กเอนด์" },
        items: [
          {
            name: "Go",
            iconSlug: "go",
            role: { en: "Language", th: "ภาษาที่ใช้" },
            usage: {
              en: "Controllers, database access and the stay-cost calculation, all in the standard library where possible.",
              th: "เขียน controller การเข้าถึงฐานข้อมูล และการคำนวณค่าที่พัก โดยใช้ standard library เป็นหลัก",
            },
          },
          {
            name: "net/http",
            iconSlug: null,
            role: { en: "Web server", th: "เว็บเซิร์ฟเวอร์" },
            usage: {
              en: "Routing and request handling without a framework, to see what a framework normally hides.",
              th: "จัดการเส้นทางและคำขอโดยไม่ใช้เฟรมเวิร์ก เพื่อให้เห็นสิ่งที่เฟรมเวิร์กมักซ่อนไว้",
            },
          },
          {
            name: "html/template",
            iconSlug: null,
            role: { en: "View rendering", th: "การเรนเดอร์หน้าจอ" },
            usage: {
              en: "Server-rendered pages with shared header and footer partials.",
              th: "เรนเดอร์หน้าเว็บฝั่งเซิร์ฟเวอร์ พร้อมส่วน header และ footer ที่ใช้ร่วมกัน",
            },
          },
          {
            name: "gorilla/sessions",
            iconSlug: null,
            role: { en: "Sessions", th: "การจัดการ session" },
            usage: {
              en: "Cookie-backed sessions so a signed-in owner only sees their own pets.",
              th: "ใช้ session ที่เก็บผ่านคุกกี้ เพื่อให้เจ้าของที่ล็อกอินเห็นเฉพาะสัตว์เลี้ยงของตัวเอง",
            },
          },
          {
            name: "bcrypt",
            iconSlug: null,
            role: { en: "Password hashing", th: "การเข้ารหัสรหัสผ่าน" },
            usage: {
              en: "Passwords are hashed with golang.org/x/crypto rather than stored as text.",
              th: "เข้ารหัสรหัสผ่านด้วย golang.org/x/crypto แทนการเก็บเป็นข้อความธรรมดา",
            },
          },
        ],
      },
      {
        title: { en: "DATA & FRONTEND", th: "ข้อมูลและฟรอนต์เอนด์" },
        items: [
          {
            name: "MySQL",
            iconSlug: "mysql",
            role: { en: "Database", th: "ฐานข้อมูล" },
            usage: {
              en: "Owners, pets and bookings, accessed through go-sql-driver with hand-written queries.",
              th: "เก็บข้อมูลเจ้าของ สัตว์เลี้ยง และการจอง เข้าถึงผ่าน go-sql-driver ด้วยคำสั่ง SQL ที่เขียนเอง",
            },
          },
          {
            name: "HTML",
            iconSlug: "html5",
            role: { en: "Markup", th: "โครงสร้างหน้าเว็บ" },
            usage: {
              en: "Templates for login, pet registration, the pet list, booking and receipt pages.",
              th: "เทมเพลตสำหรับหน้าเข้าสู่ระบบ ลงทะเบียนสัตว์เลี้ยง รายการสัตว์เลี้ยง การจอง และใบเสร็จ",
            },
          },
          {
            name: "CSS",
            iconSlug: "css",
            role: { en: "Styling", th: "การจัดรูปแบบ" },
            usage: {
              en: "A stylesheet per page plus shared header and footer styles.",
              th: "ไฟล์สไตล์แยกตามหน้า พร้อมสไตล์ของ header และ footer ที่ใช้ร่วมกัน",
            },
          },
          {
            name: "JavaScript",
            iconSlug: "javascript",
            role: { en: "Interaction", th: "การโต้ตอบ" },
            usage: {
              en: "Dropdowns and small booking-form behaviours only — the logic stays on the server.",
              th: "ใช้กับ dropdown และการทำงานเล็ก ๆ ในฟอร์มจองเท่านั้น ตรรกะหลักยังอยู่ฝั่งเซิร์ฟเวอร์",
            },
          },
        ],
      },
    ],
    overviewTitle: {
      en: "Learning a language by building something that has to be right.",
      th: "เรียนภาษาใหม่ด้วยการสร้างของที่ต้องถูกต้องจริง ๆ",
    },
    overview: {
      en: [
        "This was my first project written in Go, done with one teammate. Rather than working through tutorials, we picked a domain with real rules: a hotel that boards dogs and cats.",
        "An owner registers an account, adds their pets, picks check-in and check-out dates, and the system prices the stay from the number of nights and issues a receipt.",
        "Deliberately no web framework. Routing, templating, sessions and SQL are all written directly against the standard library and a small set of packages, which is exactly what made it a useful first project.",
      ],
      th: [
        "นี่คือโปรเจกต์แรกที่เขียนด้วยภาษา Go ทำร่วมกับเพื่อนอีกหนึ่งคน แทนที่จะไล่ทำตามบทเรียน เราเลือกโจทย์ที่มีกฎจริง นั่นคือโรงแรมที่รับฝากสุนัขและแมว",
        "เจ้าของสัตว์เลี้ยงสมัครบัญชี เพิ่มข้อมูลสัตว์เลี้ยง เลือกวันเข้าพักและวันออก จากนั้นระบบจะคำนวณค่าที่พักจากจำนวนคืนและออกใบเสร็จให้",
        "ตั้งใจไม่ใช้เว็บเฟรมเวิร์ก ทั้งการจัดเส้นทาง การเรนเดอร์เทมเพลต การจัดการ session และ SQL เขียนตรงกับ standard library และแพ็กเกจเล็ก ๆ ไม่กี่ตัว ซึ่งเป็นเหตุผลที่ทำให้มันเป็นโปรเจกต์แรกที่ได้เรียนรู้จริง",
      ],
    },
    users: {
      en: "Pet owners booking a stay, and the hotel staff who need the reservation and its price on record.",
      th: "เจ้าของสัตว์เลี้ยงที่ต้องการจองที่พัก และพนักงานโรงแรมที่ต้องมีข้อมูลการจองและราคาไว้เป็นหลักฐาน",
    },
    problemTitle: {
      en: "Bookings taken by phone are priced by hand — and priced wrong.",
      th: "การจองทางโทรศัพท์ต้องคิดราคาด้วยมือ และคิดผิดได้ง่าย",
    },
    problems: {
      en: [
        "Pet details are re-dictated on every call instead of being stored once.",
        "Counting nights between two dates by hand is the easiest place to lose money.",
        "Without accounts, there is no way to tie a booking to the right owner.",
        "Nothing is left over afterwards that either side can point to as a record.",
      ],
      th: [
        "ข้อมูลสัตว์เลี้ยงต้องบอกซ้ำทุกครั้งที่โทรมาจอง แทนที่จะบันทึกไว้ครั้งเดียว",
        "การนับจำนวนคืนระหว่างสองวันที่ด้วยมือ เป็นจุดที่ทำให้คิดเงินผิดได้ง่ายที่สุด",
        "ถ้าไม่มีระบบบัญชีผู้ใช้ ก็ผูกการจองเข้ากับเจ้าของที่ถูกต้องไม่ได้",
        "เมื่อจบการจองแล้ว ไม่มีหลักฐานที่ทั้งสองฝ่ายอ้างอิงได้",
      ],
    },
    goals: [
      {
        number: "01",
        title: { en: "Learn Go by shipping, not by reading", th: "เรียน Go จากการทำจริง ไม่ใช่แค่การอ่าน" },
        description: {
          en: "Build a complete flow end to end rather than isolated exercises.",
          th: "สร้างงานที่ครบตั้งแต่ต้นจนจบ แทนการทำแบบฝึกหัดแยกส่วน",
        },
      },
      {
        number: "02",
        title: { en: "Store pets once", th: "เก็บข้อมูลสัตว์เลี้ยงครั้งเดียว" },
        description: {
          en: "Name, type and breed belong to the owner's account, not to a single booking.",
          th: "ชื่อ ประเภท และสายพันธุ์ ผูกกับบัญชีของเจ้าของ ไม่ใช่ผูกกับการจองครั้งเดียว",
        },
      },
      {
        number: "03",
        title: { en: "Price the stay automatically", th: "คำนวณค่าที่พักอัตโนมัติ" },
        description: {
          en: "Cost is derived from check-in and check-out, never typed in by a person.",
          th: "ราคาคำนวณจากวันเข้าพักและวันออก ไม่ให้คนพิมพ์เอง",
        },
      },
      {
        number: "04",
        title: { en: "Keep accounts separated", th: "แยกข้อมูลตามบัญชีผู้ใช้" },
        description: {
          en: "Sessions and hashed passwords, even on a learning project.",
          th: "ใช้ session และเข้ารหัสรหัสผ่าน แม้จะเป็นโปรเจกต์สำหรับฝึกก็ตาม",
        },
      },
    ],
    solutionTitle: {
      en: "Standard-library Go, layered by hand.",
      th: "เขียน Go ด้วย standard library และแบ่งชั้นเอง",
    },
    solution: {
      en: "The application is organised into four folders that each do one job: controllers handle HTTP requests for users, pets, bookings and page rendering; a management layer holds the SQL for each entity; models describe user, pet and booking; and an initializer opens the MySQL connection at startup. Views are Go html/template files with shared header and footer partials, so pages are rendered on the server and the browser only carries small scripts for dropdowns. Sign-in uses gorilla/sessions over cookies with bcrypt-hashed passwords, and the booking controller derives the number of nights from the check-in and check-out dates to calculate the total before writing the reservation and rendering a receipt.",
      th: "โครงสร้างของระบบแบ่งเป็นสี่โฟลเดอร์ที่แต่ละส่วนทำหน้าที่เดียว ได้แก่ controller สำหรับรับคำขอ HTTP ของผู้ใช้ สัตว์เลี้ยง การจอง และการเรนเดอร์หน้าเว็บ, ชั้น management ที่เก็บคำสั่ง SQL ของแต่ละเอนทิตี, model ที่อธิบายผู้ใช้ สัตว์เลี้ยง และการจอง และ initializer ที่เปิดการเชื่อมต่อ MySQL ตอนเริ่มระบบ ส่วนหน้าจอเป็นไฟล์ html/template ของ Go พร้อม header และ footer ที่ใช้ร่วมกัน หน้าเว็บจึงเรนเดอร์ที่ฝั่งเซิร์ฟเวอร์ และเบราว์เซอร์มีเพียงสคริปต์เล็ก ๆ สำหรับ dropdown การเข้าสู่ระบบใช้ gorilla/sessions ผ่านคุกกี้ ร่วมกับรหัสผ่านที่เข้ารหัสด้วย bcrypt และ controller ของการจองจะคำนวณจำนวนคืนจากวันเข้าพักและวันออกเพื่อหาราคารวม ก่อนบันทึกการจองและเรนเดอร์ใบเสร็จ",
    },
    flow: [
      {
        number: "01",
        title: { en: "Register or sign in", th: "สมัครสมาชิกหรือเข้าสู่ระบบ" },
        description: {
          en: "Passwords are hashed with bcrypt and a session cookie is issued.",
          th: "รหัสผ่านถูกเข้ารหัสด้วย bcrypt และออกคุกกี้ session ให้",
        },
      },
      {
        number: "02",
        title: { en: "Register a pet", th: "ลงทะเบียนสัตว์เลี้ยง" },
        description: {
          en: "Name, type and breed are saved against the signed-in owner.",
          th: "บันทึกชื่อ ประเภท และสายพันธุ์ ผูกกับเจ้าของที่ล็อกอินอยู่",
        },
      },
      {
        number: "03",
        title: { en: "Pick check-in and check-out", th: "เลือกวันเข้าพักและวันออก" },
        description: {
          en: "The booking form takes both dates and the pet to be boarded.",
          th: "ฟอร์มจองรับทั้งสองวันที่และสัตว์เลี้ยงที่จะฝาก",
        },
      },
      {
        number: "04",
        title: { en: "The server prices the stay", th: "เซิร์ฟเวอร์คำนวณค่าที่พัก" },
        description: {
          en: "Nights are counted from the date range and multiplied by the nightly rate.",
          th: "นับจำนวนคืนจากช่วงวันที่ แล้วคูณด้วยอัตราค่าที่พักต่อคืน",
        },
      },
      {
        number: "05",
        title: { en: "Receipt page", th: "หน้าใบเสร็จ" },
        description: {
          en: "The confirmed booking is written to MySQL and rendered as a receipt.",
          th: "บันทึกการจองที่ยืนยันแล้วลง MySQL และแสดงผลเป็นใบเสร็จ",
        },
      },
    ],
    features: [
      {
        title: { en: "Owner accounts", th: "บัญชีเจ้าของสัตว์เลี้ยง" },
        description: {
          en: "Registration and login with bcrypt-hashed passwords and cookie sessions.",
          th: "สมัครสมาชิกและเข้าสู่ระบบ พร้อมรหัสผ่านที่เข้ารหัสด้วย bcrypt และ session ผ่านคุกกี้",
        },
      },
      {
        title: { en: "Pet profiles", th: "ข้อมูลสัตว์เลี้ยง" },
        description: {
          en: "Add, list and edit pets so details are entered once and reused.",
          th: "เพิ่ม ดูรายการ และแก้ไขข้อมูลสัตว์เลี้ยง กรอกครั้งเดียวแล้วนำกลับมาใช้ได้",
        },
      },
      {
        title: { en: "Date-range booking", th: "จองตามช่วงวันที่" },
        description: {
          en: "Check-in and check-out selection tied to a specific pet.",
          th: "เลือกวันเข้าพักและวันออก ผูกกับสัตว์เลี้ยงตัวที่ระบุ",
        },
      },
      {
        title: { en: "Automatic cost calculation", th: "คำนวณค่าใช้จ่ายอัตโนมัติ" },
        description: {
          en: "The total follows from the number of nights, so nobody adds it up by hand.",
          th: "ราคารวมคำนวณจากจำนวนคืน จึงไม่มีใครต้องบวกเลขเอง",
        },
      },
      {
        title: { en: "Receipt view", th: "หน้าใบเสร็จ" },
        description: {
          en: "A confirmation page summarising the stay and what it costs.",
          th: "หน้ายืนยันที่สรุปรายละเอียดการเข้าพักและค่าใช้จ่าย",
        },
      },
      {
        title: { en: "Server-rendered pages", th: "หน้าเว็บเรนเดอร์ฝั่งเซิร์ฟเวอร์" },
        description: {
          en: "html/template with shared partials keeps the markup consistent across screens.",
          th: "ใช้ html/template ร่วมกับส่วนที่ใช้ซ้ำ ทำให้โครงสร้างหน้าเว็บสอดคล้องกันทุกหน้า",
        },
      },
    ],
    screenshots: [
      {
        label: { en: "LOGIN", th: "หน้าเข้าสู่ระบบ" },
      },
      {
        label: { en: "PET LIST", th: "รายการสัตว์เลี้ยง" },
      },
      {
        label: { en: "BOOKING FORM", th: "ฟอร์มจอง" },
      },
      {
        label: { en: "RECEIPT", th: "ใบเสร็จ" },
      },
    ],
    architecture: [
      {
        number: "01",
        title: { en: "main.go", th: "main.go" },
        description: {
          en: "Registers routes and starts the net/http server.",
          th: "ลงทะเบียนเส้นทางและเริ่มเซิร์ฟเวอร์ net/http",
        },
      },
      {
        number: "02",
        title: { en: "controller/", th: "controller/" },
        description: {
          en: "One file per concern: user, pet, booking and page rendering.",
          th: "แยกไฟล์ตามหน้าที่ ได้แก่ ผู้ใช้ สัตว์เลี้ยง การจอง และการเรนเดอร์หน้าเว็บ",
        },
      },
      {
        number: "03",
        title: { en: "managementDB/", th: "managementDB/" },
        description: {
          en: "All SQL lives here, keeping queries out of the request handlers.",
          th: "เก็บคำสั่ง SQL ทั้งหมดไว้ที่นี่ ไม่ให้ปะปนอยู่ในตัวจัดการคำขอ",
        },
      },
      {
        number: "04",
        title: { en: "model/", th: "model/" },
        description: {
          en: "User, Pet and Booking structs shared between controllers and queries.",
          th: "struct ของผู้ใช้ สัตว์เลี้ยง และการจอง ใช้ร่วมกันระหว่าง controller และคำสั่งค้นหา",
        },
      },
      {
        number: "05",
        title: { en: "initializers/ + view/", th: "initializers/ และ view/" },
        description: {
          en: "Database connection at startup, and templates plus static assets for the UI.",
          th: "เชื่อมต่อฐานข้อมูลตอนเริ่มระบบ พร้อมเทมเพลตและไฟล์ static สำหรับหน้าจอ",
        },
      },
    ],
    process: [
      {
        number: "01",
        title: { en: "Learned the syntax on the problem", th: "เรียนไวยากรณ์ไปพร้อมกับโจทย์" },
        description: {
          en: "Structs, slices and error handling were picked up while modelling pets and bookings.",
          th: "เรียนรู้ struct, slice และการจัดการ error ไปพร้อมกับการออกแบบข้อมูลสัตว์เลี้ยงและการจอง",
        },
      },
      {
        number: "02",
        title: { en: "Designed the schema", th: "ออกแบบสคีมา" },
        description: {
          en: "Three tables — owners, pets, bookings — modelled in MySQL Workbench.",
          th: "ออกแบบสามตาราง ได้แก่ เจ้าของ สัตว์เลี้ยง และการจอง ใน MySQL Workbench",
        },
      },
      {
        number: "03",
        title: { en: "Built a bare web server", th: "เริ่มจากเว็บเซิร์ฟเวอร์เปล่า" },
        description: {
          en: "Routes and template rendering with net/http before adding any real logic.",
          th: "ทำเส้นทางและการเรนเดอร์เทมเพลตด้วย net/http ก่อนใส่ตรรกะจริง",
        },
      },
      {
        number: "04",
        title: { en: "Added accounts and sessions", th: "เพิ่มบัญชีผู้ใช้และ session" },
        description: {
          en: "Hashing and session cookies so pets could belong to someone.",
          th: "ทำการเข้ารหัสรหัสผ่านและคุกกี้ session เพื่อให้สัตว์เลี้ยงมีเจ้าของ",
        },
      },
      {
        number: "05",
        title: { en: "Implemented booking and pricing", th: "ทำระบบจองและการคิดราคา" },
        description: {
          en: "The date arithmetic was the part that needed the most care.",
          th: "การคำนวณเรื่องวันที่คือส่วนที่ต้องระวังที่สุด",
        },
      },
      {
        number: "06",
        title: { en: "Split the work with a teammate", th: "แบ่งงานกับเพื่อนร่วมทีม" },
        description: {
          en: "Backend and views were divided, then reviewed together through Git.",
          th: "แบ่งงานฝั่งแบ็กเอนด์กับหน้าจอ แล้วรีวิวร่วมกันผ่าน Git",
        },
      },
    ],
    challenges: [
      {
        challenge: {
          en: "Counting nights, not days.",
          th: "ต้องนับจำนวนคืน ไม่ใช่จำนวนวัน",
        },
        investigation: {
          en: "Subtracting two dates gave results that were off by one at the boundaries, and the price followed.",
          th: "การลบวันที่สองค่าให้ผลคลาดเคลื่อนไปหนึ่งที่ขอบเขต และราคาก็ผิดตามไปด้วย",
        },
        solution: {
          en: "Defined a night explicitly as a check-in date to the next check-out date and used Go time arithmetic on normalised dates.",
          th: "นิยาม 1 คืนให้ชัดเจนว่าคือจากวันเข้าพักถึงวันออกถัดไป และคำนวณด้วย time ของ Go บนวันที่ที่ปรับให้เป็นมาตรฐานแล้ว",
        },
        result: {
          en: "The quoted price matches what a person would count.",
          th: "ราคาที่ระบบคิดตรงกับที่คนนับเอง",
        },
      },
      {
        challenge: {
          en: "No framework meant no defaults.",
          th: "ไม่ใช้เฟรมเวิร์กก็ไม่มีค่าเริ่มต้นให้",
        },
        investigation: {
          en: "Routing, template parsing, static files and sessions all had to be wired up by hand.",
          th: "ทั้งการจัดเส้นทาง การอ่านเทมเพลต ไฟล์ static และ session ต้องต่อเองทั้งหมด",
        },
        solution: {
          en: "Split the code into controller, managementDB, model and initializers folders so each concern had one home.",
          th: "แบ่งโค้ดเป็นโฟลเดอร์ controller, managementDB, model และ initializers เพื่อให้แต่ละหน้าที่มีที่อยู่ชัดเจน",
        },
        result: {
          en: "A structure I could still navigate months later, and a clearer idea of what frameworks do for you.",
          th: "ได้โครงสร้างที่กลับมาอ่านอีกหลายเดือนต่อมาก็ยังเข้าใจ และเห็นชัดขึ้นว่าเฟรมเวิร์กช่วยอะไรบ้าง",
        },
      },
      {
        challenge: {
          en: "Two people in one unfamiliar codebase.",
          th: "สองคนทำงานบนโค้ดที่ทั้งคู่ยังไม่คุ้น",
        },
        investigation: {
          en: "Neither of us had written Go before, so conventions were being invented as we went.",
          th: "ทั้งคู่ไม่เคยเขียน Go มาก่อน จึงต้องกำหนดแนวทางกันไปพร้อมกับการทำงาน",
        },
        solution: {
          en: "Agreed the folder layout and the model structs first, then split backend and views along that line.",
          th: "ตกลงโครงสร้างโฟลเดอร์และ struct ของ model ให้ชัดก่อน แล้วจึงแบ่งงานแบ็กเอนด์กับหน้าจอตามนั้น",
        },
        result: {
          en: "Merges stayed small and the two halves fitted together.",
          th: "การรวมโค้ดมีความขัดแย้งน้อย และงานทั้งสองฝั่งประกอบกันได้",
        },
      },
    ],
    results: {
      en: [
        "Delivered a complete server-rendered booking flow in Go without a web framework.",
        "Implemented owner accounts with bcrypt-hashed passwords and cookie-based sessions.",
        "Modelled owners, pets and bookings in MySQL with hand-written queries in a dedicated data layer.",
        "Automated stay pricing from the check-in and check-out date range.",
        "Completed as a pair project and my first working application in Go.",
      ],
      th: [
        "ส่งมอบระบบจองที่ทำงานครบวงจรด้วย Go แบบเรนเดอร์ฝั่งเซิร์ฟเวอร์ โดยไม่ใช้เว็บเฟรมเวิร์ก",
        "ทำระบบบัญชีเจ้าของสัตว์เลี้ยง พร้อมรหัสผ่านที่เข้ารหัสด้วย bcrypt และ session ผ่านคุกกี้",
        "ออกแบบข้อมูลเจ้าของ สัตว์เลี้ยง และการจองบน MySQL พร้อมคำสั่ง SQL ที่เขียนเองในชั้นข้อมูลแยกต่างหาก",
        "คำนวณค่าที่พักอัตโนมัติจากช่วงวันเข้าพักถึงวันออก",
        "ทำเสร็จในรูปแบบโปรเจกต์คู่ และเป็นแอปพลิเคชันแรกที่ใช้งานได้จริงด้วยภาษา Go",
      ],
    },
    learned: [
      {
        key: { en: "GO FUNDAMENTALS", th: "พื้นฐานภาษา Go" },
        description: {
          en: "Explicit error handling changes how you write code once you stop fighting it.",
          th: "การจัดการ error แบบชัดเจนเปลี่ยนวิธีเขียนโค้ด เมื่อเลิกฝืนแล้วก็เขียนได้ลื่นขึ้น",
        },
      },
      {
        key: { en: "NO FRAMEWORK", th: "ไม่ใช้เฟรมเวิร์ก" },
        description: {
          en: "Writing routing and sessions by hand taught me what frameworks are actually solving.",
          th: "การเขียนระบบเส้นทางและ session เอง ทำให้เข้าใจว่าเฟรมเวิร์กแก้ปัญหาอะไรให้เราจริง ๆ",
        },
      },
      {
        key: { en: "DATE LOGIC", th: "ตรรกะเรื่องวันที่" },
        description: {
          en: "Anything priced by duration needs its unit defined before any code is written.",
          th: "อะไรก็ตามที่คิดราคาตามระยะเวลา ต้องนิยามหน่วยให้ชัดก่อนเขียนโค้ด",
        },
      },
      {
        key: { en: "SEPARATION", th: "การแยกหน้าที่" },
        description: {
          en: "Keeping SQL out of the controllers made the project readable for both of us.",
          th: "การไม่ให้ SQL ปะปนอยู่ใน controller ทำให้ทั้งสองคนอ่านโปรเจกต์ได้เข้าใจ",
        },
      },
    ],
    future: [
      {
        phase: { en: "CURRENT", th: "ปัจจุบัน" },
        items: {
          en: ["Owner accounts and sessions", "Pet registration and editing", "Date-range booking", "Automatic pricing and receipt"],
          th: ["บัญชีเจ้าของและระบบ session", "ลงทะเบียนและแก้ไขข้อมูลสัตว์เลี้ยง", "จองตามช่วงวันที่", "คิดราคาอัตโนมัติและออกใบเสร็จ"],
        },
      },
      {
        phase: { en: "NEXT", th: "ถัดไป" },
        items: {
          en: ["Room availability so a date range can be rejected", "Booking history per owner", "Staff view of upcoming stays"],
          th: ["ตรวจสอบห้องว่าง เพื่อปฏิเสธช่วงวันที่ที่เต็มแล้ว", "ประวัติการจองของเจ้าของแต่ละคน", "หน้าจอสำหรับพนักงานดูการเข้าพักที่กำลังจะถึง"],
        },
      },
      {
        phase: { en: "FUTURE", th: "อนาคต" },
        items: {
          en: ["Expose the backend as a JSON API", "Room types with different nightly rates", "Deploy as a container with a managed database"],
          th: ["เปิดแบ็กเอนด์เป็น JSON API", "แยกประเภทห้องพักที่มีราคาต่อคืนต่างกัน", "ดีพลอยเป็นคอนเทนเนอร์พร้อมฐานข้อมูลแบบ managed"],
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
