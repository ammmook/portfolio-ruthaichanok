/**
 * Interface copy that does not belong to a specific portfolio entry:
 * section titles, button labels and helper sentences.
 * Portfolio content itself lives in `data/portfolio.ts` and `data/projects.ts`.
 */
export const uiTranslations = {
  nav: {
    languageLabel: { en: "EN / ไทย", th: "ไทย / EN" },
    switchToLight: { en: "Switch to light mode", th: "เปลี่ยนเป็นโหมดสว่าง" },
    switchToDark: { en: "Switch to dark mode", th: "เปลี่ยนเป็นโหมดมืด" },
    openMenu: { en: "Open menu", th: "เปิดเมนู" },
    closeMenu: { en: "Close menu", th: "ปิดเมนู" },
    resume: { en: "RESUME ↓", th: "เรซูเม่ ↓" },
  },
  hero: {
    greeting: { en: "HELLO, I'M", th: "ยินดีที่ได้รู้จัก — ฉันคือ" },
    viewProjects: { en: "View Projects", th: "ดูผลงาน" },
    downloadResume: { en: "Download Resume", th: "ดาวน์โหลดเรซูเม่" },
  },
  about: {
    label: { en: "02 — ABOUT", th: "02 — เกี่ยวกับฉัน" },
    heading: {
      en: "A developer who likes to finish what she starts.",
      th: "นักพัฒนาที่ชอบทำสิ่งที่เริ่มไว้ให้เสร็จ",
    },
    currentlyLearningLabel: { en: "CURRENTLY LEARNING", th: "กำลังเรียนรู้" },
    currentlyLearning: {
      en: "Deeper Spring Boot patterns · cloud deployment on Azure · AI automation with n8n · Flutter",
      th: "Spring Boot เชิงลึก · การ deploy บน Azure · ระบบอัตโนมัติด้วย AI ผ่าน n8n · Flutter",
    },
    careerGoalLabel: { en: "CAREER GOAL", th: "เป้าหมายในสายอาชีพ" },
    careerGoal: {
      en: "Grow into a backend / full-stack developer who owns a system from design to deployment, in a team that takes code review and mentoring seriously.",
      th: "เติบโตเป็น backend / full-stack developer ที่ดูแลระบบได้ตั้งแต่ออกแบบจนถึง deploy ในทีมที่ให้ความสำคัญกับ code review และการสอนงาน",
    },
  },
  skills: {
    label: { en: "03 — TECHNICAL SKILLS", th: "03 — ทักษะทางเทคนิค" },
    heading: {
      en: "Technologies I've actually built with.",
      th: "เทคโนโลยีที่ฉันใช้สร้างงานจริง",
    },
    description: {
      en: "No progress bars — a percentage doesn't say anything useful. Hover (or tap) a technology to see how comfortable I am with it and where I've used it.",
      th: "ไม่มี progress bar เพราะเปอร์เซ็นต์ไม่ได้สะท้อนความสามารถจริง แตะหรือชี้ที่แต่ละรายการเพื่อดูระดับความชำนาญและที่ที่เคยใช้งาน",
    },
  },
  softSkills: {
    label: { en: "04 — SOFT SKILLS", th: "04 — ทักษะการทำงาน" },
    heading: { en: "How I work.", th: "วิธีการทำงานของฉัน" },
    description: {
      en: "This section is about working style and personality — deliberately kept separate from the technical stack above.",
      th: "ส่วนนี้เป็นเรื่องวิธีทำงานและบุคลิก แยกออกจากทักษะทางเทคนิคด้านบนอย่างตั้งใจ",
    },
  },
  projects: {
    label: { en: "05 — PROJECTS", th: "05 — ผลงาน" },
    heading: {
      en: "Things I built, and how I built them.",
      th: "สิ่งที่ฉันสร้าง และวิธีที่ฉันสร้างมัน",
    },
    description: {
      en: "Swipe or use the arrows to browse. Click a card for the full case study.",
      th: "เลื่อนซ้าย–ขวาหรือใช้ปุ่มลูกศรเพื่อดูทั้งหมด กดที่การ์ดเพื่ออ่านรายละเอียดเต็ม",
    },
    viewProject: { en: "View Project", th: "ดูโปรเจกต์" },
    previous: { en: "Previous project", th: "โปรเจกต์ก่อนหน้า" },
    next: { en: "Next project", th: "โปรเจกต์ถัดไป" },
    footnote: {
      en: "Only real, completed projects are listed. More at",
      th: "แสดงเฉพาะโปรเจกต์จริงที่ทำเสร็จแล้ว ดูเพิ่มเติมได้ที่",
    },
  },
  experience: {
    label: { en: "06 — EXPERIENCE", th: "06 — ประสบการณ์" },
    heading: { en: "Where I've worked.", th: "ที่ที่ฉันเคยทำงาน" },
    description: {
      en: "Work, internship and teaching experience — most recent first.",
      th: "ประสบการณ์ทำงาน ฝึกงาน และการเป็นผู้ช่วยสอน เรียงจากล่าสุด",
    },
    viewActivities: {
      en: "View photos & activities",
      th: "ดูรูปภาพ / ประสบการณ์ที่เคยทำมา",
    },
    viewActivitiesHint: {
      en: "Photos and moments from labs, workshops and the co-op.",
      th: "รูปภาพและช่วงเวลาจากคาบแล็บ เวิร์กช็อป และสหกิจศึกษา",
    },
  },
  education: {
    label: { en: "07 — EDUCATION", th: "07 — การศึกษา" },
    heading: { en: "What I studied.", th: "สิ่งที่ฉันเรียนมา" },
    description: {
      en: "Formal education — degree, faculty, coursework and final project.",
      th: "การศึกษาในระบบ — วุฒิ คณะ รายวิชาที่เรียน และโปรเจกต์จบ",
    },
    additionalLabel: { en: "ADDITIONAL LEARNING", th: "การเรียนรู้เพิ่มเติม" },
    additionalHeading: {
      en: "Learned outside the curriculum.",
      th: "เรียนรู้เพิ่มเติมนอกหลักสูตร",
    },
    additionalDescription: {
      en: "Skills picked up through workshops, side projects and self-study alongside the degree — not part of the formal program.",
      th: "ทักษะที่ได้จากเวิร์กช็อป โปรเจกต์ส่วนตัว และการเรียนรู้ด้วยตัวเองระหว่างเรียน ซึ่งไม่ได้อยู่ในหลักสูตร",
    },
  },
  github: {
    label: { en: "08 — GITHUB / CODING", th: "08 — GITHUB / การเขียนโค้ด" },
    heading: { en: "On GitHub.", th: "บน GitHub" },
    noteLabel: { en: "NOTE", th: "หมายเหตุ" },
    note: {
      en: "Repository names and descriptions here are placeholders — send me the real repos and I'll pin them.",
      th: "ชื่อและคำอธิบาย repository ในส่วนนี้เป็นตัวอย่าง สามารถแทนที่ด้วย repository จริงได้ภายหลัง",
    },
  },
  resume: {
    label: { en: "09 — RESUME", th: "09 — เรซูเม่" },
    heading: {
      en: "Want to know more about my experience?",
      th: "อยากรู้เพิ่มเกี่ยวกับประสบการณ์ของฉันไหม",
    },
    description: {
      en: "The full CV has education, experience and the complete technical list.",
      th: "เรซูเม่ฉบับเต็มมีข้อมูลการศึกษา ประสบการณ์ และรายการทักษะทั้งหมด",
    },
    view: { en: "View Resume", th: "ดูเรซูเม่" },
    download: { en: "Download Resume ↓", th: "ดาวน์โหลดเรซูเม่ ↓" },
  },
  contact: {
    label: { en: "10 — CONTACT", th: "10 — ติดต่อ" },
    heading: { en: "Let's Work Together", th: "มาร่วมงานกันไหม" },
    description: {
      en: "Have an idea, a role, or just want to connect? I'm open to junior developer positions — backend or full-stack.",
      th: "มีไอเดีย ตำแหน่งงาน หรืออยากทักทาย ส่งข้อความมาได้เลย ฉันเปิดรับโอกาสในตำแหน่ง junior developer ทั้งสาย backend และ full-stack",
    },
    emailMe: { en: "Email Me", th: "ส่งอีเมลถึงฉัน" },
    viewGithub: { en: "View GitHub", th: "ดู GitHub" },
    connectLinkedin: { en: "Connect on LinkedIn", th: "เชื่อมต่อบน LinkedIn" },
  },
  footer: {
    rights: { en: "© 2026 Ruthaichanok Kasun", th: "© 2026 ฤทัยชนก กสุน" },
    tagline: {
      en: "Nonthaburi, Thailand · Built with care",
      th: "นนทบุรี ประเทศไทย · สร้างอย่างตั้งใจ",
    },
  },
  caseStudy: {
    backToProjects: { en: "← All projects", th: "← กลับไปหน้าผลงาน" },
    nextProject: { en: "Next", th: "ถัดไป" },
    overviewLabel: { en: "01 — PROJECT OVERVIEW", th: "01 — ภาพรวมโปรเจกต์" },
    liveDemo: { en: "Live Demo ↗", th: "ดูตัวอย่างจริง ↗" },
    github: { en: "GitHub ↗", th: "GitHub ↗" },
    stackLabel: { en: "02 — TECH STACK", th: "02 — เทคโนโลยีที่ใช้" },
    stackHeading: { en: "What it's built with.", th: "สร้างขึ้นด้วยอะไรบ้าง" },
    stackDescription: {
      en: "Everything this project runs on, grouped by layer.",
      th: "ทุกเทคโนโลยีที่โปรเจกต์นี้ใช้ จัดกลุ่มตามเลเยอร์",
    },
    overviewSectionLabel: { en: "03 — OVERVIEW", th: "03 — ภาพรวม" },
    usersLabel: { en: "WHO USES IT", th: "ใครคือผู้ใช้งาน" },
    problemLabel: { en: "04 — PROBLEM", th: "04 — ปัญหา" },
    goalLabel: { en: "05 — GOAL", th: "05 — เป้าหมาย" },
    goalHeading: {
      en: "What the project had to achieve.",
      th: "สิ่งที่โปรเจกต์นี้ต้องทำให้ได้",
    },
    solutionLabel: { en: "06 — SOLUTION", th: "06 — แนวทางแก้ปัญหา" },
    featuresLabel: { en: "07 — FEATURES", th: "07 — ฟีเจอร์" },
    featuresHeading: { en: "Key features.", th: "ฟีเจอร์หลัก" },
    screenshotsLabel: { en: "08 — UI SCREENSHOTS", th: "08 — ภาพหน้าจอ" },
    screenshotsHeading: { en: "The interface.", th: "หน้าตาของระบบ" },
    scrollHint: { en: "scroll horizontally →", th: "เลื่อนดูทางขวา →" },
    architectureLabel: {
      en: "09 — DESIGN & ARCHITECTURE",
      th: "09 — การออกแบบและสถาปัตยกรรม",
    },
    architectureHeading: {
      en: "How the system fits together.",
      th: "ระบบทำงานร่วมกันอย่างไร",
    },
    processLabel: { en: "10 — DEVELOPMENT PROCESS", th: "10 — ขั้นตอนการพัฒนา" },
    processHeading: { en: "From plan to deployment.", th: "ตั้งแต่วางแผนจนถึง deploy" },
    challengesLabel: { en: "11 — CHALLENGES", th: "11 — ความท้าทาย" },
    challengesHeading: {
      en: "What went wrong, and what I did.",
      th: "อะไรที่ไม่เป็นไปตามแผน และฉันแก้อย่างไร",
    },
    challengeTag: { en: "CHALLENGE", th: "ความท้าทาย" },
    investigationTag: { en: "INVESTIGATION", th: "การวิเคราะห์" },
    solutionTag: { en: "SOLUTION", th: "วิธีแก้" },
    resultTag: { en: "RESULT", th: "ผลลัพธ์" },
    resultsLabel: { en: "12 — RESULT", th: "12 — ผลลัพธ์" },
    resultsHeading: {
      en: "What the project delivered.",
      th: "สิ่งที่โปรเจกต์นี้ส่งมอบ",
    },
    resultsNote: {
      en: "No usage metrics are shown — none were measured, so none are invented.",
      th: "ไม่มีตัวเลขสถิติการใช้งาน เพราะไม่ได้เก็บวัดไว้จริง จึงไม่ใส่ตัวเลขที่ไม่มีที่มา",
    },
    learnedLabel: { en: "13 — WHAT I LEARNED", th: "13 — สิ่งที่ได้เรียนรู้" },
    learnedHeading: { en: "Takeaways.", th: "บทเรียนที่ได้" },
    futureLabel: { en: "14 — FUTURE IMPROVEMENTS", th: "14 — การพัฒนาต่อ" },
    futureHeading: { en: "Roadmap.", th: "แผนในอนาคต" },
  },
  activities: {
    label: { en: "ACTIVITY ARCHIVE", th: "คลังกิจกรรม" },
    heading: { en: "Activities", th: "กิจกรรม" },
    description: {
      en: "A collection of activities, experiences and memorable moments along the way — labs I taught in, workshops I sat in, and the systems I helped hand over.",
      th: "รวมกิจกรรม ประสบการณ์ และช่วงเวลาที่น่าจดจำระหว่างทาง ทั้งคาบแล็บที่ได้สอน เวิร์กช็อปที่ได้เข้าร่วม และระบบที่ได้ส่งมอบ",
    },
    countUnit: { en: "activities", th: "กิจกรรม" },
    moments: { en: "MOMENTS", th: "ช่วงเวลา" },
    stackHint: { en: "hover — fan out", th: "ชี้เมาส์ — คลี่ออก" },
    photoCount: { en: "PHOTOS", th: "ภาพ" },
    backToExperience: { en: "← Back to experience", th: "← กลับไปหน้าประสบการณ์" },
    closeDetail: { en: "All activities", th: "กิจกรรมทั้งหมด" },
    previousActivity: { en: "Previous activity", th: "กิจกรรมก่อนหน้า" },
    nextActivity: { en: "Next activity", th: "กิจกรรมถัดไป" },
    detailsLabel: { en: "DETAILS", th: "รายละเอียด" },
    yearLabel: { en: "YEAR", th: "ปี" },
    placeLabel: { en: "PLACE", th: "สถานที่" },
    photoNote: {
      en: "Photo slots are placeholders for now — the layout is ready for the real images.",
      th: "ช่องภาพยังเป็นภาพตัวอย่าง เลย์เอาต์พร้อมใส่รูปจริงได้ทันที",
    },
  },
} as const;
