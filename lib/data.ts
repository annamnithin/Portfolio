export const profile = {
  name: "Nithin Annam",
  nameJa: "ニティン",
  title: "Full Stack Developer",
  tagline: "Crafting software with patience, balance, and care.",
  location: "Based in India / USA",
  email: "nithinsiva71@gmail.com",
  phone: "+1 786-790-5658",
  linkedin: "https://www.linkedin.com/in/nithin-annam/",
}

export type EducationStage = {
  id: string
  school: string
  kanji: string
  romaji: string
  period: string
  grade: string
  achievement?: string
  scene: "school" | "juniorCollege" | "institute" | "university"
  caption: string
}

export const education: EducationStage[] = [
  {
    id: "school",
    school: "S.T.B.E.M High School",
    kanji: "学び",
    romaji: "Manabi — to learn",
    period: "2000-2012",
    grade: "9.7 G.P.A",
    achievement: "School second in SSC Public Exams",
    scene: "school",
    caption: "A quiet child reading beneath a maple tree as the leaves let go.",
  },
  {
    id: "juniorCollege",
    school: "Narayana Junior College",
    kanji: "友情",
    romaji: "Yūjō — friendship",
    period: "2000-2012",
    grade: "9.7 G.P.A",
    scene: "juniorCollege",
    caption: "Years of playing freely with friends under blossoming skies.",
  },
  {
    id: "institute",
    school: "SRK Institute of Technology",
    kanji: "集中",
    romaji: "Shūchū — focus",
    period: "2000-2012",
    grade: "9.7 G.P.A",
    achievement: "Best Outgoing Student",
    scene: "institute",
    caption: "Late nights at the screen, its glow lighting the way forward.",
  },
  {
    id: "university",
    school: "University at Buffalo",
    kanji: "飛躍",
    romaji: "Hiyaku — to take flight",
    period: "2022-2023",
    grade: "3.8 G.P.A",
    scene: "university",
    caption: "Stepping through the gate into a wider world.",
  },
]

export type Project = {
  id: string
  name: string
  client: string
  role: string
  period: string
  description: string[]
  tech: string[]
}

export const projects: Project[] = [
  {
    id: "1",
    name: "Enterprise Chat Bot",
    client: "EY",
    role: "Full Stack Developer",
    period: "Jan 2020 – Aug 2020",
    description: [
      "Designed and implemented an enterprise-wide chat bot using Python and Azure's cognitive services to resolve employee queries.",
      "Architected to effectively use Azure cloud services, handling a threshold of 200 concurrent users.",
    ],
    tech: ["Azure Web Services", "Bot Framework API", "Azure Cloud", "Angular", "Python"],
  },
  {
    id: "2",
    name: "Retail Management",
    client: "Personal Project",
    role: "Full Stack Developer",
    period: "Mar 2020 – May 2020",
    description: [
      "Windows application handling retail management: sale control, inventory management, accounting, and human resources.",
      "Designed with an ASP.NET three-layered architecture.",
    ],
    tech: ["C#", "WPF", "SQL Server", "GitHub", "MVC API"],
  },
  {
    id: "3",
    name: "Cash Application",
    client: "Infosys",
    role: "Backend Developer",
    period: "Oct 2019 – Dec 2019",
    description: [
      "Python application identifying patterns to extract required data from daily bank transactions and reconcile with master data to clear payments.",
      "Received client appreciation for an effective application that automated the work of 6 employees.",
    ],
    tech: ["Python", "Automation Anywhere"],
  },
  {
    id: "4",
    name: "PayRoll",
    client: "Infosys",
    role: "Database Developer",
    period: "Nov 2018 – Feb 2019",
    description: [
      "Developed a database layer automating payment reconciliation of salary components for employees across 24 countries.",
      "Automated the work of 4 employees and was recognized for ramping up the project quickly.",
    ],
    tech: ["C#", "SQL Server", "Internal Tool"],
  },
]
