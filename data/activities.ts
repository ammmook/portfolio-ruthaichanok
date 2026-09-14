import type { Activity } from "@/types/portfolio";

/**
 * The activity archive shown at /activities — photos and moments from
 * university, work and workshops. Reached from the experience section only;
 * it is deliberately kept out of the main navigation.
 *
 * Photos are served straight from the shared Google Drive folder through
 * Google's image CDN (`lh3.googleusercontent.com/d/<fileId>=w1600`), so nothing
 * is copied into the repository. A slot without `imageUrl` — or one whose image
 * fails to load — falls back to the generated stripe artwork.
 */
export const activities: Activity[] = [

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
      {
        label: { en: "photo · co-op day 01", th: "ภาพ · สหกิจ 01" },
        hue: 150,
        imageUrl: "https://lh3.googleusercontent.com/d/1dlGApC8QDkHcZvgqC8pUGHSJdOrg4mTw=w1600",
      },
      {
        label: { en: "photo · co-op day 02", th: "ภาพ · สหกิจ 02" },
        hue: 220,
        imageUrl: "https://lh3.googleusercontent.com/d/1RXTNVZP1WtnO2srb80obaB1wlqMPESqi=w1600",
      },
      {
        label: { en: "photo · co-op day 03", th: "ภาพ · สหกิจ 03" },
        hue: 65,
        imageUrl: "https://lh3.googleusercontent.com/d/130ppyUC-gxE_r6dKncWRXwC_R6zIzoKJ=w1600",
      },
      {
        label: { en: "photo · co-op day 04", th: "ภาพ · สหกิจ 04" },
        hue: 35,
        imageUrl: "https://lh3.googleusercontent.com/d/1SVwY2vg0P6rvSROx2eXJ4xcm9NPuUgaK=w1600",
      },
      {
        label: { en: "photo · co-op day 05", th: "ภาพ · สหกิจ 05" },
        hue: 300,
        imageUrl: "https://lh3.googleusercontent.com/d/1FuV7GXv8JdzJN90sfX66pww6QJoFygyz=w1600",
      },
      {
        label: { en: "photo · co-op day 06", th: "ภาพ · สหกิจ 06" },
        hue: 95,
        imageUrl: "https://lh3.googleusercontent.com/d/1jLBqiDMVNel-Vw0nOVepyZk6mwkMqlfa=w1600",
      },
      {
        label: { en: "photo · co-op day 07", th: "ภาพ · สหกิจ 07" },
        hue: 150,
        imageUrl: "https://lh3.googleusercontent.com/d/18t8QBaSN2kwjDg1lxU2TTb4yuINkbTxz=w1600",
      },
      {
        label: { en: "photo · co-op day 08", th: "ภาพ · สหกิจ 08" },
        hue: 220,
        imageUrl: "https://lh3.googleusercontent.com/d/14OrMFGO6INQdyzqiyynRY2SE2lW7h1as=w1600",
      },
      {
        label: { en: "photo · co-op day 09", th: "ภาพ · สหกิจ 09" },
        hue: 65,
        imageUrl: "https://lh3.googleusercontent.com/d/1ehrE5eUjK_ThudzCaV31zKPtBdcGZ3uL=w1600",
      },
      {
        label: { en: "photo · co-op day 10", th: "ภาพ · สหกิจ 10" },
        hue: 35,
        imageUrl: "https://lh3.googleusercontent.com/d/19H_kIuW-G3InBOi0hzgFWo49R_k8LBcP=w1600",
      },
      {
        label: { en: "photo · co-op day 11", th: "ภาพ · สหกิจ 11" },
        hue: 300,
        imageUrl: "https://lh3.googleusercontent.com/d/1KvEtFdd1SA2AJ745VkEwe86-N81X9DPh=w1600",
      },
      {
        label: { en: "photo · co-op day 12", th: "ภาพ · สหกิจ 12" },
        hue: 95,
        imageUrl: "https://lh3.googleusercontent.com/d/11MKLfVf71U7iHL6svv6Grq12dkf5dKS6=w1600",
      },
      {
        label: { en: "photo · co-op day 13", th: "ภาพ · สหกิจ 13" },
        hue: 150,
        imageUrl: "https://lh3.googleusercontent.com/d/1h2P6lhN7PErv-CbWELMQ7XGItY-vdwOj=w1600",
      },
      {
        label: { en: "photo · co-op day 14", th: "ภาพ · สหกิจ 14" },
        hue: 220,
        imageUrl: "https://lh3.googleusercontent.com/d/1bLBTcZvMp7hnBsEyjlNDqgmbr_Unn28f=w1600",
      },
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
      {
        label: { en: "photo · presentation 01", th: "ภาพ · นำเสนอ 01" },
        hue: 300,
        imageUrl: "https://lh3.googleusercontent.com/d/1I3VU50V1_-lfcRNWBzxXDstcrLqUj0D1=w1600",
      },
      {
        label: { en: "photo · presentation 02", th: "ภาพ · นำเสนอ 02" },
        hue: 150,
        imageUrl: "https://lh3.googleusercontent.com/d/1-XBTcJOAeIYVPJBmP2E91F5HbPF3jTNc=w1600",
      },
      {
        label: { en: "photo · presentation 03", th: "ภาพ · นำเสนอ 03" },
        hue: 65,
        imageUrl: "https://lh3.googleusercontent.com/d/18rJqhwGgK9XjnkC4vZE-iPiZW8lF4VlD=w1600",
      },
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
      {
        label: { en: "photo · golang lab", th: "ภาพ · คาบแล็บ Golang" },
        hue: 220,
        imageUrl: "https://lh3.googleusercontent.com/d/1K8n1Nf8XFSqzb40nJcz5ZiSPegetz83B=w1600",
      },
      {
        label: { en: "photo · lecture room", th: "ภาพ · ห้องเรียนรวม" },
        hue: 150,
        imageUrl: "https://lh3.googleusercontent.com/d/1qPDTl37kzfRcoGyLWmOxklO8_a1u3XQX=w1600",
      },
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
      {
        label: { en: "photo · n8n workshop 01", th: "ภาพ · เวิร์กช็อป n8n 01" },
        hue: 35,
        imageUrl: "https://lh3.googleusercontent.com/d/1c7CuYYArvSxtG8CLn6ajlsZoXjSGcueJ=w1600",
      },
      {
        label: { en: "photo · n8n workshop 02", th: "ภาพ · เวิร์กช็อป n8n 02" },
        hue: 150,
        imageUrl: "https://lh3.googleusercontent.com/d/1_CLeK7mDCtRu2vzaSy3Gpq2yTfz89Qs2=w1600",
      },
      {
        label: { en: "photo · n8n workshop 03", th: "ภาพ · เวิร์กช็อป n8n 03" },
        hue: 65,
        imageUrl: "https://lh3.googleusercontent.com/d/1bHvHVpw_SCDtRCNXmwZSj-_1GLfK0VkZ=w1600",
      },
      {
        label: { en: "photo · n8n workshop 04", th: "ภาพ · เวิร์กช็อป n8n 04" },
        hue: 220,
        imageUrl: "https://lh3.googleusercontent.com/d/1g1DYYfhgYipXv0NuU1BDWwW5zTRC1zvh=w1600",
      },
      {
        label: { en: "photo · n8n workshop 05", th: "ภาพ · เวิร์กช็อป n8n 05" },
        hue: 300,
        imageUrl: "https://lh3.googleusercontent.com/d/1PQxAw7znjFYtfRR9y8pY42m-n12oH8c_=w1600",
      },
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
      {
        label: { en: "photo · agile training 01", th: "ภาพ · อบรม Agile 01" },
        hue: 35,
        imageUrl: "https://lh3.googleusercontent.com/d/1t0z7p5ylWbIGHHJgaWovWFYYcXoe9QIi=w1600",
      },
      {
        label: { en: "photo · agile training 02", th: "ภาพ · อบรม Agile 02" },
        hue: 150,
        imageUrl: "https://lh3.googleusercontent.com/d/1hOwGtYrM4Z_SPNFTPSg8MNBSUAsIo_I0=w1600",
      },
      {
        label: { en: "photo · agile training 03", th: "ภาพ · อบรม Agile 03" },
        hue: 65,
        imageUrl: "https://lh3.googleusercontent.com/d/1EQUw4GdqrRDvYGP-9l_5-gvW_JPrZyKt=w1600",
      },
      {
        label: { en: "photo · agile training 04", th: "ภาพ · อบรม Agile 04" },
        hue: 220,
        imageUrl: "https://lh3.googleusercontent.com/d/1VIWV6zkWNjmSLeHPhkH-lJiCjUXeVfZQ=w1600",
      },
      {
        label: { en: "photo · agile training 05", th: "ภาพ · อบรม Agile 05" },
        hue: 300,
        imageUrl: "https://lh3.googleusercontent.com/d/18EyDRadQP-Z8MVBGiUD-9sDcbBX9-vns=w1600",
      },
      {
        label: { en: "photo · agile training 06", th: "ภาพ · อบรม Agile 06" },
        hue: 95,
        imageUrl: "https://lh3.googleusercontent.com/d/1yJrQS1vGGXNUVk3mudjvFEkIs6JHKCi2=w1600",
      },
      {
        label: { en: "photo · agile training 07", th: "ภาพ · อบรม Agile 07" },
        hue: 110,
        imageUrl: "https://lh3.googleusercontent.com/d/1tQPPmxaPs8UwfLCVyPx02Alqls3QSOHN=w1600",
      },
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
      {
        label: { en: "photo · student club 01", th: "ภาพ · สโมสรนักศึกษา 01" },
        hue: 35,
        imageUrl: "https://lh3.googleusercontent.com/d/1NV9v2i5c-q-ad-ksrIjnwL403qRIeG2K=w1600",
      },
      {
        label: { en: "photo · student club 02", th: "ภาพ · สโมสรนักศึกษา 02" },
        hue: 150,
        imageUrl: "https://lh3.googleusercontent.com/d/1M3s_My9IkWCLi_LrQ-py5aRfUkjf5Ucm=w1600",
      },
      {
        label: { en: "photo · student club 03", th: "ภาพ · สโมสรนักศึกษา 03" },
        hue: 65,
        imageUrl: "https://lh3.googleusercontent.com/d/16lwsGYOJyUdTN79ajOwbSRrbY6CxJWXe=w1600",
      },
      {
        label: { en: "photo · student club 04", th: "ภาพ · สโมสรนักศึกษา 04" },
        hue: 220,
        imageUrl: "https://lh3.googleusercontent.com/d/1ONoilYAG5gxkVUpl_McKIzd4gwGLvPtl=w1600",
      },
      {
        label: { en: "photo · student club 05", th: "ภาพ · สโมสรนักศึกษา 05" },
        hue: 300,
        imageUrl: "https://lh3.googleusercontent.com/d/1AgEjVAatSzkepTIgb_WRPQXcGQHmAcRW=w1600",
      },
      {
        label: { en: "photo · student club 06", th: "ภาพ · สโมสรนักศึกษา 06" },
        hue: 95,
        imageUrl: "https://lh3.googleusercontent.com/d/1kdMsI5DI-uNvI7qKgncuDsj5yDTPBuzq=w1600",
      },
      {
        label: { en: "photo · student club 07", th: "ภาพ · สโมสรนักศึกษา 07" },
        hue: 110,
        imageUrl: "https://lh3.googleusercontent.com/d/118BjbSD1kCxg5A4i4s1qQ-XnMsawSWXw=w1600",
      },
      {
        label: { en: "photo · student club 08", th: "ภาพ · สโมสรนักศึกษา 08" },
        hue: 35,
        imageUrl: "https://lh3.googleusercontent.com/d/1rHivVIioexzElPCkaZjwOFn15OZ-AZ31=w1600",
      },
      {
        label: { en: "photo · student club 09", th: "ภาพ · สโมสรนักศึกษา 09" },
        hue: 150,
        imageUrl: "https://lh3.googleusercontent.com/d/11cBax6O8vuZ2cYHGeIYpWU9mBhwkOwsO=w1600",
      },
      {
        label: { en: "photo · student club 10", th: "ภาพ · สโมสรนักศึกษา 10" },
        hue: 65,
        imageUrl: "https://lh3.googleusercontent.com/d/11qzhw02UcfI1hha6abOlv4wUSD89qWJ6=w1600",
      },
      {
        label: { en: "photo · student club 11", th: "ภาพ · สโมสรนักศึกษา 11" },
        hue: 220,
        imageUrl: "https://lh3.googleusercontent.com/d/1jZmXpftUyFpogn6Jyew7W9gRYRgJxECo=w1600",
      },
      {
        label: { en: "photo · student club 12", th: "ภาพ · สโมสรนักศึกษา 12" },
        hue: 300,
        imageUrl: "https://lh3.googleusercontent.com/d/1XGGjhWNBVhzmB4g16LIWUDPJl8tUb6ye=w1600",
      },
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
      {
        label: { en: "photo · flutter workshop 01", th: "ภาพ · เวิร์กช็อป Flutter 01" },
        hue: 35,
        imageUrl: "https://lh3.googleusercontent.com/d/1bVW394bD6JlgTWR0b1cKRrD_6mUtCTiC=w1600",
      },
      {
        label: { en: "photo · flutter workshop 02", th: "ภาพ · เวิร์กช็อป Flutter 02" },
        hue: 150,
        imageUrl: "https://lh3.googleusercontent.com/d/1f-AQpDV4bxfThzXoF9a2wu2Slm3l0Q_j=w1600",
      },
      {
        label: { en: "photo · flutter workshop 03", th: "ภาพ · เวิร์กช็อป Flutter 03" },
        hue: 65,
        imageUrl: "https://lh3.googleusercontent.com/d/1j6C3NoKldyMgQ-hrxeC9vpA3hMEkIxRU=w1600",
      },
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
    id: "camp-2567",
    year: "2024",
    category: { en: "Volunteer", th: "จิตอาสา" },
    hue: 95,
    degrees: 124,
    aspectRatio: "16 / 10",
    revealFrom: "up",
    title: {
      en: "Volunteer Camp — Ban Pang Fueang School",
      th: "ค่ายอาสา — โรงเรียนบ้านปางเฟือง",
    },
    tileTitle: { en: "Volunteer Camp — Ban Pang Fueang School", th: "ค่ายอาสา — โรงเรียนบ้านปางเฟือง" },
    caption: "2024 · Chiang Mai",
    place: { en: "Ban Pang Fueang School · Chiang Mai", th: "โรงเรียนบ้านปางเฟือง · จ.เชียงใหม่" },
    tags: ["Volunteer", "Community", "Teamwork"],
    photos: [
      {
        label: { en: "photo · volunteer camp 01", th: "ภาพ · ค่ายอาสา 01" },
        hue: 95,
        imageUrl: "https://lh3.googleusercontent.com/d/1wvQb3VVLp2xn_CvitbR3UxwG0fY8x51E=w1600",
      },
      {
        label: { en: "photo · volunteer camp 02", th: "ภาพ · ค่ายอาสา 02" },
        hue: 150,
        imageUrl: "https://lh3.googleusercontent.com/d/1pj_E5WhnVOMa5oF1lKjzrrJkcaByS_-D=w1600",
      },
      {
        label: { en: "photo · volunteer camp 03", th: "ภาพ · ค่ายอาสา 03" },
        hue: 65,
        imageUrl: "https://lh3.googleusercontent.com/d/1UNg_dzSE46xvN0OaeJLCyg-GTlb0GIWh=w1600",
      },
      {
        label: { en: "photo · volunteer camp 04", th: "ภาพ · ค่ายอาสา 04" },
        hue: 220,
        imageUrl: "https://lh3.googleusercontent.com/d/1CMAl6cVU5ra7wTJzrOaohRKfjWc-sdvX=w1600",
      },
    ],
    description: {
      en: "A volunteer camp run with my department at Ban Pang Fueang School in Chiang Mai — a few days of activities put on for pupils at a school far from town.",
      th: "ค่ายอาสาที่ไปกับสาขา ที่โรงเรียนบ้านปางเฟือง จังหวัดเชียงใหม่ ใช้เวลาไม่กี่วันจัดกิจกรรมให้น้อง ๆ ในโรงเรียนที่อยู่ห่างไกลจากตัวเมือง",
    },
    highlights: {
      en: [
        "Third volunteer camp with the department, in Chiang Mai",
        "Ran activities with the pupils alongside classmates from the department",
      ],
      th: [
        "ค่ายอาสาครั้งที่สามกับสาขา ที่จังหวัดเชียงใหม่",
        "จัดกิจกรรมให้น้อง ๆ ร่วมกับเพื่อนในสาขา",
      ],
    },
  },

  {
    id: "camp-2566",
    year: "2023",
    category: { en: "Volunteer", th: "จิตอาสา" },
    hue: 65,
    degrees: 118,
    aspectRatio: "1 / 1",
    revealFrom: "up",
    title: {
      en: "Volunteer Camp — Ban San Pong School",
      th: "ค่ายอาสา — โรงเรียนบ้านสันปง",
    },
    tileTitle: { en: "Volunteer Camp — Ban San Pong School", th: "ค่ายอาสา — โรงเรียนบ้านสันปง" },
    caption: "2023 · Chiang Mai",
    place: { en: "Ban San Pong School · Chiang Mai", th: "โรงเรียนบ้านสันปง · จ.เชียงใหม่" },
    tags: ["Volunteer", "Community", "Teamwork"],
    photos: [
      {
        label: { en: "photo · volunteer camp 01", th: "ภาพ · ค่ายอาสา 01" },
        hue: 95,
        imageUrl: "https://lh3.googleusercontent.com/d/1G0KFmIbm4pG1kqrlJ2xIUjnPd62MvYM0=w1600",
      },
      {
        label: { en: "photo · volunteer camp 02", th: "ภาพ · ค่ายอาสา 02" },
        hue: 150,
        imageUrl: "https://lh3.googleusercontent.com/d/1Gk3RWOdTKx3RAxEJ2_wrrX3lQgwLISwx=w1600",
      },
      {
        label: { en: "photo · volunteer camp 03", th: "ภาพ · ค่ายอาสา 03" },
        hue: 65,
        imageUrl: "https://lh3.googleusercontent.com/d/1XEKqm_CVQOJay91RU5yBM5uwLCBbl4ha=w1600",
      },
      {
        label: { en: "photo · volunteer camp 04", th: "ภาพ · ค่ายอาสา 04" },
        hue: 220,
        imageUrl: "https://lh3.googleusercontent.com/d/10GoTzhpRNKxYoLKLoEAz8d_UtDps6Zk4=w1600",
      },
    ],
    description: {
      en: "The second volunteer camp with my department, at Ban San Pong School in Chiang Mai — the same idea as the year before: go out to a remote school and spend the days doing something useful there.",
      th: "ค่ายอาสาครั้งที่สองกับสาขา ที่โรงเรียนบ้านสันปง จังหวัดเชียงใหม่ แนวคิดเหมือนปีก่อน คือออกไปโรงเรียนที่อยู่ห่างไกลแล้วใช้เวลาที่นั่นทำสิ่งที่เป็นประโยชน์",
    },
    highlights: {
      en: [
        "Second volunteer camp with the department, in Chiang Mai",
        "Ran activities with the pupils alongside classmates from the department",
      ],
      th: [
        "ค่ายอาสาครั้งที่สองกับสาขา ที่จังหวัดเชียงใหม่",
        "จัดกิจกรรมให้น้อง ๆ ร่วมกับเพื่อนในสาขา",
      ],
    },
  },
  {
    id: "camp-2565",
    year: "2022",
    category: { en: "Volunteer", th: "จิตอาสา" },
    hue: 35,
    degrees: 112,
    aspectRatio: "16 / 9",
    revealFrom: "left",
    title: {
      en: "Volunteer Camp — Ban Mae Sate School",
      th: "ค่ายอาสา — โรงเรียนบ้านแม่สะเต",
    },
    tileTitle: { en: "Volunteer Camp — Ban Mae Sate School", th: "ค่ายอาสา — โรงเรียนบ้านแม่สะเต" },
    caption: "2022 · Omkoi, Chiang Mai",
    place: { en: "Ban Mae Sate School · Omkoi, Chiang Mai", th: "โรงเรียนบ้านแม่สะเต · อ.อมก๋อย จ.เชียงใหม่" },
    tags: ["Volunteer", "Community", "Teamwork"],
    photos: [
      {
        label: { en: "photo · volunteer camp 01", th: "ภาพ · ค่ายอาสา 01" },
        hue: 95,
        imageUrl: "https://lh3.googleusercontent.com/d/1AnUHXy6GQw78C9ZWyE7CdZjomeC-55qQ=w1600",
      },
      {
        label: { en: "photo · volunteer camp 02", th: "ภาพ · ค่ายอาสา 02" },
        hue: 150,
        imageUrl: "https://lh3.googleusercontent.com/d/1UKQh_A7gsHGG-M3pUsFidY5i_0Tz7S5Q=w1600",
      },
      {
        label: { en: "photo · volunteer camp 03", th: "ภาพ · ค่ายอาสา 03" },
        hue: 65,
        imageUrl: "https://lh3.googleusercontent.com/d/11L88z37ELVtC18FOYSTTRjZDva0IQGE9=w1600",
      },
      {
        label: { en: "photo · volunteer camp 04", th: "ภาพ · ค่ายอาสา 04" },
        hue: 220,
        imageUrl: "https://lh3.googleusercontent.com/d/1fppeGe8ftvLXWV4EOgcAaGRxF8EJZbaI=w1600",
      },
    ],
    description: {
      en: "My first volunteer camp with the department, at Ban Mae Sate School in Omkoi — far enough up the mountain that getting there was most of a day. The first time a university activity meant leaving campus entirely.",
      th: "ค่ายอาสาครั้งแรกกับสาขา ที่โรงเรียนบ้านแม่สะเต อำเภออมก๋อย อยู่บนดอยไกลจนใช้เวลาเดินทางเกือบทั้งวัน เป็นครั้งแรกที่กิจกรรมของมหาวิทยาลัยหมายถึงการออกไปไกลจากรั้วมหาวิทยาลัยจริง ๆ",
    },
    highlights: {
      en: [
        "First volunteer camp with the department, in Omkoi, Chiang Mai",
        "Ran activities with the pupils alongside classmates from the department",
      ],
      th: [
        "ค่ายอาสาครั้งแรกกับสาขา ที่อำเภออมก๋อย จังหวัดเชียงใหม่",
        "จัดกิจกรรมให้น้อง ๆ ร่วมกับเพื่อนในสาขา",
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

/** Every photo that actually has an image, used by the decorative stack. */
export const activityPhotoPool = activities.flatMap((activity) =>
  activity.photos.filter((photo) => photo.imageUrl),
);
