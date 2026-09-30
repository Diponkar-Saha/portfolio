export type Project = {
  title: string; tag: string; year: string; desc: string; stack: string[];
  image?: string;   // e.g. "/projects/troyee-enterprise.png" (screenshot public/projects/ e rakho)
  live?: string;    // live site link
  source?: string;  // GitHub link
};

export const profile = {
  name: "Diponkar Saha",
  role: "Software Developer",
  location: "Panthapath, Dhaka",
  email: "diponkarsaha9988@gmail.com",
  phone: "01798501356",
  github: "https://github.com/Diponkar-Saha",
  leetcode: "https://leetcode.com/u/diponkar/",
  cv: "/Diponkar_Saha_Resume.pdf", // public/ e rakho
  photo: "/photo.jpg",             // public/ e rakho
  headlineA: "Full stack developer",
  headlineB: "building ERP, inventory and HR software.",
  summary:
    "I am a full stack developer with 4+ years of experience building ERP, inventory and HR systems with ASP.NET Core, Angular and React.js.",
};

export const stats = [
  { value: "4+", label: "Years experience", note: "Shipping since 2022" },
  { value: "5+", label: "Enterprise projects", note: "ERP, inventory, HR" },
  { value: "100+", label: "Concurrent users", note: "Served in production" },
  { value: "2", label: "Advanced courses", note: "Completed at Dev Skill" },
];

export const projects: Project[] = [
  { title: "Troyee Enterprise", tag: "ERP", year: "2023",
    desc: "Accounts, inventory and manufacturing in one system, with journal entries, reconciliation and financial reports automated.",
    stack: ["ASP.NET", "Angular", "MSSQL", "RDLC"] },
  { title: "Troyee VAT Management", tag: "Accounting", year: "2023",
    desc: "Purchases, sales, stock, ledgers and VAT returns with statements, for businesses that must stay VAT-compliant.",
    stack: ["ASP.NET", "Angular", "MSSQL", "Crystal Reports"] },
  { title: "TroyeeHrm", tag: "HR", year: "2024",
    desc: "Employee management, payroll and performance evaluation in a single HR platform.",
    stack: ["ASP.NET Core", "Clean Architecture", "Bootstrap", "MSSQL"] },
  { title: "Robotics Lab Management", tag: "Web app", year: "2024",
    desc: "Runs a robotics lab: authentication, inventory, equipment, lab scheduling and messaging, with Swagger API docs.",
    stack: ["ASP.NET Core", "React.js", "Identity", "Unit Tests"] },
  { title: "ResumeBuilder", tag: "Web app", year: "2024",
    desc: "Log in, pick a CV template, fill in your details and experience, and get a finished resume.",
    stack: ["ASP.NET Core", "Docker", "Identity", "MSSQL"] },
];

export const skills = [
  { group: "Frontend", items: ["Angular", "React.js", "Bootstrap", "HTML5", "CSS3", "TypeScript"] },
  { group: "Backend", items: ["ASP.NET Core", "Node.js", "Web API", "REST", "Entity Framework", "LINQ"] },
  { group: "Data", items: ["MS SQL Server", "PostgreSQL", "MongoDB", "Redis"] },
  { group: "DevOps and tools", items: ["Docker", "AWS", "GitHub", "Unit Tests", "Worker Service"] },
  { group: "Languages", items: ["C#", "JavaScript", "TypeScript", "Kotlin", "C++"] },
  { group: "Architecture", items: ["Clean Architecture", "MVC", "Repository Pattern", "Dependency Injection", "SOLID"] },
];

export const experience = [
  { company: "Best Business Bond Limited", role: "Software Developer", period: "Oct 2022 to present",
    points: ["Build enterprise software for accounting, inventory and manufacturing.",
      "Study workflows with users and turn them into requirements and working solutions.",
      "Track inventory, stock, production and profitability; roll out ERP and production systems."] },
  { company: "Best Business Bond Limited", role: "Software Developer (Intern)", period: "Mar 2022 to Sep 2022",
    points: ["Ran requirement analysis for new applications.",
      "Reviewed and debugged code, handled system integration.",
      "Worked with foreign clients to understand their daily tasks."] },
];

export const education = [
  { title: "B.Sc. in Computer Science", place: "Gono University, Savar, Dhaka", period: "Dec 2017 to Feb 2022", grade: "CGPA 3.46" },
  { title: "HSC", place: "Hajigong Model College, Chandpur", period: "2015 to 2017", grade: "GPA 3.65" },
];

export const training = [
  { title: "Professional Programming with C#", place: "Dev Skill",
    desc: "OOP, SOLID principles, Git, ADO.NET, Entity Framework and advanced C# features." },
  { title: "Full Stack ASP.NET Core MVC Web Development", place: "Dev Skill",
    desc: "ASP.NET Core, OOP, cloud computing, unit testing, Docker, AWS and Web API." },
];
