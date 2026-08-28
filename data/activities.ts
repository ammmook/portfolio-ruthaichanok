import type { Activity } from "@/types/portfolio";

/**
 * The activity archive shown at /activities — photos and moments from
 * university, work and workshops. Reached from the experience section only;
 * it is deliberately kept out of the main navigation.
 *
 * `photos[].imageUrl` is empty for now: every slot renders the generated stripe
 * artwork until a real photo is dropped in, exactly like the project covers.
 */
export const activities: Activity[] = [
  {
    id: "graduation",
    year: "2026",
    category: { en: "Achievement", th: "ความสำเร็จ" },
    hue: 150,
    degrees: 118,
    aspectRatio: "16 / 10",
    revealFrom: "left",
    title: {
      en: "First-Class Honours Graduation",
      th: "จบการศึกษาเกียรตินิยมอันดับหนึ่ง",
    },
    tileTitle: {
      en: "First-Class Honours Graduation",
      th: "จบการศึกษาเกียรตินิยมอันดับหนึ่ง",
    },
    caption: "2026 · Maejo University · GPA 3.70",
    place: { en: "Maejo University · Chiang Mai", th: "มหาวิทยาลัยแม่โจ้ · เชียงใหม่" },
    tags: ["B.Sc. IT", "GPA 3.70", "First-Class Honours"],
    photos: [
      { label: { en: "photo · graduation day", th: "ภาพ · วันรับปริญญา" }, hue: 150 },
      { label: { en: "photo · with friends", th: "ภาพ · กับเพื่อน ๆ" }, hue: 65 },
    ],
    description: {
      en: "Four years of Information Technology at Maejo University closed with First-Class Honours and a GPA of 3.70. The degree covered object-oriented programming, database systems, web development and software design patterns — most of which I ended up teaching in labs later on.",
      th: "สี่ปีในสาขาเทคโนโลยีสารสนเทศ มหาวิทยาลัยแม่โจ้ จบด้วยเกียรตินิยมอันดับหนึ่ง เกรดเฉลี่ย 3.70 หลักสูตรครอบคลุมการเขียนโปรแกรมเชิงวัตถุ ระบบฐานข้อมูล การพัฒนาเว็บ และรูปแบบการออกแบบซอฟต์แวร์ ซึ่งหลายวิชาได้กลับไปสอนในคาบแล็บภายหลัง",
    },
    highlights: {
      en: [
        "Graduated with First-Class Honours · GPA 3.70",
        "Senior project: WhatToWear, an AI outfit-matching web app",
      ],
      th: [
        "จบการศึกษาเกียรตินิยมอันดับหนึ่ง · เกรดเฉลี่ย 3.70",
        "โปรเจกต์จบ: WhatToWear เว็บแอปแนะนำการแต่งตัวด้วย AI",
      ],
    },
  },
  {
    id: "uat",
    year: "2026",
    category: { en: "Team Activity", th: "กิจกรรมทีม" },
    hue: 65,
    degrees: 126,
    aspectRatio: "4 / 5",
    revealFrom: "right",
    title: {
      en: "UAT Week with Consultants",
      th: "สัปดาห์ทดสอบ UAT ร่วมกับที่ปรึกษา",
    },
    tileTitle: {
      en: "UAT Week with Consultants",
      th: "สัปดาห์ทดสอบ UAT ร่วมกับที่ปรึกษา",
    },
    caption: "2026 · MFEC",
    place: {
      en: "MFEC Co., Ltd. · Bangkok",
      th: "บริษัท เอ็ม เอฟ อี ซี จำกัด · กรุงเทพฯ",
    },
    tags: ["UAT", "Agile / Scrum", "Stakeholders"],
    photos: [
      { label: { en: "photo · uat session", th: "ภาพ · รอบทดสอบ UAT" }, hue: 65 },
      { label: { en: "photo · handover meeting", th: "ภาพ · ประชุมส่งมอบงาน" }, hue: 150 },
    ],
    description: {
      en: "The last stretch of the co-op: sitting with consultants and stakeholders while they tested the workforce management system, taking notes on every edge case they found, and fixing them between sessions until the system was accepted and handed over.",
      th: "ช่วงท้ายของสหกิจศึกษา ได้นั่งร่วมกับที่ปรึกษาและผู้เกี่ยวข้องขณะทดสอบระบบบริหารกำลังคน จดทุกกรณีขอบที่พบ และแก้ไขระหว่างรอบทดสอบจนระบบผ่านการตรวจรับและส่งมอบได้",
    },
    highlights: {
      en: [
        "System accepted and now used internally for staff reallocation",
        "Learned to write down a bug before defending the code",
      ],
      th: [
        "ระบบผ่านการตรวจรับและถูกใช้จริงภายในองค์กร",
        "ได้เรียนรู้ว่าควรจดบั๊กก่อนจะรีบอธิบายแก้ต่างให้โค้ด",
      ],
    },
  },
  {
    id: "mfec",
    year: "2025",
    category: { en: "Internship", th: "ฝึกงาน" },
    hue: 150,
    degrees: 118,
    aspectRatio: "16 / 9",
    revealFrom: "up",
    title: { en: "MFEC Cooperative Education", th: "สหกิจศึกษาที่ MFEC" },
    tileTitle: { en: "MFEC Cooperative Education", th: "สหกิจศึกษาที่ MFEC" },
    caption: "2025 · MFEC · Bangkok",
    place: {
      en: "MFEC Co., Ltd. · Bangkok",
      th: "บริษัท เอ็ม เอฟ อี ซี จำกัด · กรุงเทพฯ",
    },
    tags: ["Appsmith", "Supabase", "PostgreSQL", "REST APIs"],
    photos: [
      { label: { en: "photo · mfec office", th: "ภาพ · ออฟฟิศ MFEC" }, hue: 150 },
      { label: { en: "photo · team standup", th: "ภาพ · standup ของทีม" }, hue: 65 },
      { label: { en: "photo · first sprint demo", th: "ภาพ · demo sprint แรก" }, hue: 220 },
      { label: { en: "photo · last day", th: "ภาพ · วันสุดท้าย" }, hue: 300 },
    ],
    description: {
      en: "Four months of cooperative education as a Fullstack Developer Intern, building an internal workforce management system that streamlined employee reallocation across teams. Real users, real stakeholders, real sprints — the first time my code had someone else's workday attached to it.",
      th: "สี่เดือนของสหกิจศึกษาในตำแหน่ง Fullstack Developer Intern พัฒนาระบบบริหารกำลังคนภายในองค์กรที่ทำให้การย้ายพนักงานระหว่างทีมง่ายขึ้น มีผู้ใช้จริง ผู้เกี่ยวข้องจริง และ sprint จริง เป็นครั้งแรกที่โค้ดของฉันผูกกับวันทำงานของคนอื่น",
    },
    highlights: {
      en: [
        "Designed relational schemas in SQL for operations and reporting",
        "Daily standups, code review and sprint demos in an Agile team",
        "Delivered and handed over a system still used internally",
      ],
      th: [
        "ออกแบบ schema เชิงสัมพันธ์ด้วย SQL สำหรับงานปฏิบัติการและรายงาน",
        "standup ทุกวัน code review และ sprint demo ในทีม Agile",
        "ส่งมอบระบบที่ยังถูกใช้งานอยู่ภายในองค์กร",
      ],
    },
  },
  {
    id: "senior",
    year: "2025",
    category: { en: "Achievement", th: "ความสำเร็จ" },
    hue: 300,
    degrees: 112,
    aspectRatio: "3 / 4",
    revealFrom: "right",
    title: { en: "Senior Project Presentation", th: "นำเสนอโปรเจกต์จบ" },
    tileTitle: { en: "Senior Project Presentation", th: "นำเสนอโปรเจกต์จบ" },
    caption: "2025 · WhatToWear",
    place: {
      en: "Maejo University · Individual project",
      th: "มหาวิทยาลัยแม่โจ้ · โปรเจกต์เดี่ยว",
    },
    tags: ["Java", "Spring MVC", "MySQL", "CNN Xception"],
    photos: [
      { label: { en: "photo · whattowear demo", th: "ภาพ · เดโม WhatToWear" }, hue: 300 },
      { label: { en: "photo · presentation room", th: "ภาพ · ห้องนำเสนอ" }, hue: 150 },
    ],
    description: {
      en: "Presenting WhatToWear — a Java web application that classifies garments through a CNN Xception image-recognition API and suggests outfits with a rule-based matching engine. A year of work, defended in twenty minutes.",
      th: "นำเสนอ WhatToWear เว็บแอปพลิเคชัน Java ที่จำแนกประเภทเสื้อผ้าด้วย API รู้จำภาพ CNN Xception และแนะนำชุดด้วยเอนจินจับคู่แบบกำหนดกฎ งานหนึ่งปีที่ต้องสรุปให้จบในยี่สิบนาที",
    },
    highlights: {
      en: [
        "Owned the whole stack: Spring MVC, JSP, MySQL and the AI service",
        "Completed and presented as my final-year project",
      ],
      th: [
        "ดูแลงานทั้งหมดเอง ทั้ง Spring MVC, JSP, MySQL และบริการ AI",
        "ทำเสร็จและนำเสนอเป็นโปรเจกต์จบการศึกษา",
      ],
    },
  },
  {
    id: "ta-go",
    year: "2025",
    category: { en: "University", th: "มหาวิทยาลัย" },
    hue: 220,
    degrees: 122,
    aspectRatio: "1 / 1",
    revealFrom: "up",
    title: {
      en: "Teaching Assistant — Golang Lab",
      th: "ผู้ช่วยสอน — คาบแล็บ Golang",
    },
    tileTitle: { en: "TA — Golang Lab", th: "ผู้ช่วยสอน — แล็บ Golang" },
    caption: "2025 · Maejo University",
    place: {
      en: "Maejo University · Faculty of Science",
      th: "มหาวิทยาลัยแม่โจ้ · คณะวิทยาศาสตร์",
    },
    tags: ["Golang", "Lab sessions", "Mentoring"],
    photos: [
      { label: { en: "photo · golang lab", th: "ภาพ · คาบแล็บ Golang" }, hue: 220 },
      { label: { en: "photo · whiteboard", th: "ภาพ · กระดานไวท์บอร์ด" }, hue: 150 },
    ],
    description: {
      en: "Third and last course as a teaching assistant: Golang. Explaining goroutines to a room of students who had only seen Java made me rewrite my own mental model of concurrency from scratch.",
      th: "รายวิชาที่สามและวิชาสุดท้ายในบทบาทผู้ช่วยสอน คือ Golang การอธิบาย goroutine ให้นักศึกษาที่เคยเห็นแค่ Java ทำให้ต้องกลับไปเรียบเรียงความเข้าใจเรื่องการทำงานพร้อมกันของตัวเองใหม่ทั้งหมด",
    },
    highlights: {
      en: [
        "Prepared examples and walked through student code one-on-one",
        "Third of three courses mentored between 2023 and 2025",
      ],
      th: [
        "เตรียมตัวอย่างโค้ดและอธิบายโค้ดของนักศึกษาแบบตัวต่อตัว",
        "เป็นวิชาที่สามจากสามวิชาที่ดูแลระหว่างปี 2566–2568",
      ],
    },
  },
  {
    id: "n8n",
    year: "2025",
    category: { en: "Workshop", th: "เวิร์กช็อป" },
    hue: 95,
    degrees: 130,
    aspectRatio: "1 / 1",
    revealFrom: "up",
    title: { en: "n8n AI Automation Workshop", th: "เวิร์กช็อป n8n AI Automation" },
    tileTitle: { en: "n8n AI Automation", th: "n8n AI Automation" },
    caption: "2025 · n8n",
    place: { en: "Workshop training", th: "การอบรมเชิงปฏิบัติการ" },
    tags: ["n8n", "AI Automation", "Workflows"],
    photos: [
      { label: { en: "photo · n8n workshop", th: "ภาพ · เวิร์กช็อป n8n" }, hue: 95 },
      { label: { en: "photo · workflow board", th: "ภาพ · ผังการทำงาน" }, hue: 150 },
    ],
    description: {
      en: "A hands-on workshop on n8n: wiring AI steps into workflows so a handoff that used to be a message to a colleague becomes a node in a graph. I have used the same idea in side projects since.",
      th: "เวิร์กช็อปลงมือทำเรื่อง n8n ต่อขั้นตอน AI เข้ากับ workflow เพื่อให้การส่งงานที่เคยต้องพิมพ์บอกเพื่อนร่วมงานกลายเป็นโหนดหนึ่งในกราฟ และได้นำแนวคิดนี้ไปใช้ในโปรเจกต์ส่วนตัวต่อ",
    },
    highlights: {
      en: [
        "Built automations that replace manual handoffs",
        "Fed directly into how I design side projects now",
      ],
      th: [
        "สร้างระบบอัตโนมัติที่แทนการส่งงานด้วยมือ",
        "ส่งผลต่อวิธีออกแบบโปรเจกต์ส่วนตัวในตอนนี้",
      ],
    },
  },
  {
    id: "agile",
    year: "2025",
    category: { en: "Workshop", th: "เวิร์กช็อป" },
    hue: 35,
    degrees: 116,
    aspectRatio: "1 / 1",
    revealFrom: "up",
    title: {
      en: "Agile Frameworks & Practices",
      th: "อบรม Agile Frameworks และ Practices",
    },
    tileTitle: { en: "Agile Frameworks", th: "Agile Frameworks" },
    caption: "2025 · Scrum",
    place: {
      en: "Agile Frameworks and Practices training",
      th: "อบรมกรอบการทำงานและแนวปฏิบัติแบบ Agile",
    },
    tags: ["Scrum", "Sprint planning", "Retrospective"],
    photos: [
      { label: { en: "photo · agile training", th: "ภาพ · อบรม Agile" }, hue: 35 },
      { label: { en: "photo · sprint board", th: "ภาพ · บอร์ด sprint" }, hue: 150 },
    ],
    description: {
      en: "Sprint planning, review and retrospective practised in real teams before I met them at work. The retrospective was the part that stuck: a fixed time to say what was slow, without it being anyone's fault.",
      th: "ฝึกการวางแผน sprint การ review และ retrospective ในทีมจริงก่อนจะได้เจอของจริงในที่ทำงาน สิ่งที่ติดตัวที่สุดคือ retrospective การมีเวลาที่กำหนดไว้เพื่อพูดว่าอะไรช้า โดยไม่ต้องหาว่าเป็นความผิดของใคร",
    },
    highlights: {
      en: [
        "Practised the full sprint cycle in a team setting",
        "Carried straight into the Agile/Scrum team at MFEC",
      ],
      th: [
        "ฝึกวงจร sprint แบบครบทั้งกระบวนการในบรรยากาศทีมจริง",
        "นำไปใช้ต่อทันทีในทีม Agile/Scrum ที่ MFEC",
      ],
    },
  },
  {
    id: "club",
    year: "2024",
    category: { en: "Volunteer", th: "จิตอาสา" },
    hue: 65,
    degrees: 124,
    aspectRatio: "16 / 10",
    revealFrom: "left",
    title: {
      en: "Student Club — Budget Officer",
      th: "สโมสรนักศึกษา — ดูแลงบประมาณ",
    },
    tileTitle: { en: "Student Club — Budget Officer", th: "สโมสรนักศึกษา — ดูแลงบประมาณ" },
    caption: "2024 · Faculty of Science",
    place: {
      en: "Faculty of Science Student Club · Maejo University",
      th: "สโมสรนักศึกษาคณะวิทยาศาสตร์ · มหาวิทยาลัยแม่โจ้",
    },
    tags: ["Budget", "Coordination", "Reporting"],
    photos: [
      { label: { en: "photo · club event day", th: "ภาพ · วันจัดกิจกรรม" }, hue: 65 },
      { label: { en: "photo · budget paperwork", th: "ภาพ · เอกสารงบประมาณ" }, hue: 150 },
      { label: { en: "photo · the committee", th: "ภาพ · คณะกรรมการสโมสร" }, hue: 300 },
    ],
    description: {
      en: "Budget Management Officer for the Faculty of Science student club: tracking activity budgets across events and coordinating approvals and reporting with faculty staff. Spreadsheets, receipts and deadlines — a very different kind of debugging.",
      th: "เจ้าหน้าที่ดูแลงบประมาณของสโมสรนักศึกษาคณะวิทยาศาสตร์ ติดตามงบกิจกรรมของแต่ละงาน และประสานงานเรื่องการอนุมัติและการรายงานกับเจ้าหน้าที่คณะ ทั้งสเปรดชีต ใบเสร็จ และกำหนดส่ง เป็นการหาจุดผิดพลาดอีกแบบหนึ่ง",
    },
    highlights: {
      en: [
        "Tracked budgets for a year of student club events",
        "Coordinated approvals and reporting with faculty staff",
      ],
      th: [
        "ติดตามงบประมาณกิจกรรมของสโมสรตลอดหนึ่งปี",
        "ประสานงานเรื่องการอนุมัติและการรายงานกับเจ้าหน้าที่คณะ",
      ],
    },
  },
  {
    id: "flutter",
    year: "2024",
    category: { en: "Workshop", th: "เวิร์กช็อป" },
    hue: 220,
    degrees: 128,
    aspectRatio: "1 / 1",
    revealFrom: "up",
    title: {
      en: "Flutter App Development Workshop",
      th: "เวิร์กช็อปพัฒนาแอปด้วย Flutter",
    },
    tileTitle: { en: "Flutter Workshop", th: "เวิร์กช็อป Flutter" },
    caption: "2024 · Flutter · Dart",
    place: {
      en: "Flutter app-development workshop",
      th: "เวิร์กช็อปพัฒนาแอปด้วย Flutter",
    },
    tags: ["Flutter", "Dart", "Cross-platform"],
    photos: [
      { label: { en: "photo · flutter workshop", th: "ภาพ · เวิร์กช็อป Flutter" }, hue: 220 },
      { label: { en: "photo · first build", th: "ภาพ · บิลด์แรก" }, hue: 150 },
    ],
    description: {
      en: "Building cross-platform interfaces from a single codebase. Coming from Java and JSP, seeing one widget tree render on two platforms was the moment declarative UI finally made sense to me.",
      th: "สร้างหน้าจอที่ใช้ได้หลายแพลตฟอร์มจากโค้ดชุดเดียว มาจากสาย Java และ JSP การเห็น widget tree ชุดเดียวแสดงผลได้สองแพลตฟอร์ม คือจุดที่ทำให้เข้าใจแนวคิด declarative UI จริง ๆ",
    },
    highlights: {
      en: [
        "Shipped a small working app during the workshop",
        "First real exposure to declarative UI",
      ],
      th: [
        "ทำแอปเล็ก ๆ ให้ใช้งานได้จริงภายในเวิร์กช็อป",
        "ได้สัมผัสแนวคิด declarative UI อย่างจริงจังครั้งแรก",
      ],
    },
  },
  {
    id: "ta-web",
    year: "2024",
    category: { en: "University", th: "มหาวิทยาลัย" },
    hue: 150,
    degrees: 120,
    aspectRatio: "4 / 5",
    revealFrom: "right",
    title: {
      en: "Teaching Assistant — Web Development",
      th: "ผู้ช่วยสอน — การพัฒนาเว็บ",
    },
    tileTitle: { en: "TA — Web Development", th: "ผู้ช่วยสอน — การพัฒนาเว็บ" },
    caption: "2024 · Maejo University",
    place: {
      en: "Maejo University · Faculty of Science",
      th: "มหาวิทยาลัยแม่โจ้ · คณะวิทยาศาสตร์",
    },
    tags: ["HTML", "CSS", "JavaScript"],
    photos: [
      { label: { en: "photo · web dev lab", th: "ภาพ · คาบแล็บพัฒนาเว็บ" }, hue: 150 },
      { label: { en: "photo · student demos", th: "ภาพ · นักศึกษานำเสนองาน" }, hue: 220 },
    ],
    description: {
      en: "Second course as a teaching assistant — web development with HTML, CSS and JavaScript. Most questions were not about syntax but about layout, so I spent a term explaining the box model in as many ways as I could find.",
      th: "รายวิชาที่สองในบทบาทผู้ช่วยสอน คือการพัฒนาเว็บด้วย HTML, CSS และ JavaScript คำถามส่วนใหญ่ไม่ใช่เรื่องไวยากรณ์แต่เป็นเรื่องการจัดเลย์เอาต์ จึงใช้เวลาหนึ่งเทอมอธิบาย box model ด้วยทุกวิธีที่หาได้",
    },
    highlights: {
      en: [
        "Mentored students through debugging and clean-code practices",
        "Prepared lab examples every week",
      ],
      th: [
        "ดูแลนักศึกษาเรื่องการหาบั๊กและการเขียนโค้ดให้สะอาด",
        "เตรียมตัวอย่างสำหรับคาบแล็บทุกสัปดาห์",
      ],
    },
  },
  {
    id: "ta-java",
    year: "2023",
    category: { en: "University", th: "มหาวิทยาลัย" },
    hue: 150,
    degrees: 118,
    aspectRatio: "16 / 10",
    revealFrom: "left",
    title: { en: "First TA Cohort — Java OOP", th: "ผู้ช่วยสอนรุ่นแรก — Java OOP" },
    tileTitle: { en: "First TA Cohort — Java OOP", th: "ผู้ช่วยสอนรุ่นแรก — Java OOP" },
    caption: "2023 · Maejo University",
    place: {
      en: "Maejo University · Faculty of Science",
      th: "มหาวิทยาลัยแม่โจ้ · คณะวิทยาศาสตร์",
    },
    tags: ["Java", "OOP", "Mentoring"],
    photos: [
      { label: { en: "photo · first oop lab", th: "ภาพ · คาบแล็บ OOP แรก" }, hue: 150 },
      { label: { en: "photo · lab hours", th: "ภาพ · ชั่วโมงให้คำปรึกษา" }, hue: 65 },
    ],
    description: {
      en: "The first course I assisted: Java and object-oriented programming. Explaining the same concept repeatedly to different people turned out to be the fastest way to find the gaps in my own understanding.",
      th: "วิชาแรกที่ได้เป็นผู้ช่วยสอน คือ Java และการเขียนโปรแกรมเชิงวัตถุ การอธิบายเรื่องเดิมให้คนหลายคนฟังกลายเป็นวิธีที่เร็วที่สุดในการเจอช่องโหว่ความเข้าใจของตัวเอง",
    },
    highlights: {
      en: [
        "Start of two and a half years as a teaching assistant",
        "Covered core OOP concepts, debugging and clean code",
      ],
      th: [
        "จุดเริ่มต้นของการเป็นผู้ช่วยสอนสองปีครึ่ง",
        "ครอบคลุมแนวคิด OOP พื้นฐาน การหาบั๊ก และโค้ดที่สะอาด",
      ],
    },
  },
  {
    id: "sideprojects",
    year: "2023",
    category: { en: "Personal", th: "ส่วนตัว" },
    hue: 300,
    degrees: 112,
    aspectRatio: "4 / 5",
    revealFrom: "right",
    title: { en: "Late-Night Side Projects", th: "โปรเจกต์ส่วนตัวยามค่ำคืน" },
    tileTitle: { en: "Late-Night Side Projects", th: "โปรเจกต์ส่วนตัวยามค่ำคืน" },
    caption: "2023 · github.com/ammmook",
    place: { en: "Chiang Mai · my own desk", th: "เชียงใหม่ · โต๊ะทำงานของตัวเอง" },
    tags: ["Go", "React", "Supabase", "Android"],
    photos: [
      { label: { en: "photo · desk at 2am", th: "ภาพ · โต๊ะทำงานตอนตีสอง" }, hue: 300 },
      { label: { en: "photo · a working build", th: "ภาพ · บิลด์ที่รันได้" }, hue: 150 },
      { label: { en: "photo · the notebook", th: "ภาพ · สมุดจดไอเดีย" }, hue: 65 },
    ],
    description: {
      en: "The projects nobody assigned: a pet hotel booking system in plain Go, a sleep tracker for Android, a commission queue in Next.js, a task manager backed by a Google Sheet. Every one of them started from the same question — could this step be done automatically instead?",
      th: "โปรเจกต์ที่ไม่มีใครสั่งให้ทำ ระบบจองโรงแรมสัตว์เลี้ยงด้วย Go เพียว ๆ แอปบันทึกการนอนบน Android ระบบติดตามคิวงานด้วย Next.js และระบบจัดการงานที่ใช้ Google Sheet เป็นฐานข้อมูล ทุกอันเริ่มจากคำถามเดียวกันว่า ขั้นตอนนี้ทำให้เป็นอัตโนมัติได้ไหม",
    },
    highlights: {
      en: [
        "Six public repositories on github.com/ammmook",
        "Where most of the languages on my CV were actually learned",
      ],
      th: [
        "หกรีโพซิทอรีสาธารณะบน github.com/ammmook",
        "เป็นที่ที่ได้เรียนภาษาส่วนใหญ่ในเรซูเม่จริง ๆ",
      ],
    },
  },
];

/** Activities bucketed by year, newest year first — the shape the archive renders. */
export const activitiesByYear: { year: string; items: Activity[] }[] = activities
  .reduce<{ year: string; items: Activity[] }[]>((groups, activity) => {
    const group = groups.find((candidate) => candidate.year === activity.year);
    if (group) group.items.push(activity);
    else groups.push({ year: activity.year, items: [activity] });
    return groups;
  }, [])
  .sort((a, b) => Number(b.year) - Number(a.year));

/** Inclusive year span of the archive, e.g. "2023 — 2026". */
export const activityYearRange = `${activitiesByYear.at(-1)?.year} — ${activitiesByYear[0]?.year}`;
