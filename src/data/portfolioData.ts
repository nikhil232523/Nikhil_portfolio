export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Python' | 'Java' | 'DBMS' | 'DSA' | string;
  description: string;
  image?: string;
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
  technologies: string[];
  metrics: string;
  codeSnippet?: string;
  codeLanguage?: string;
  isFromGitHub?: boolean;
  stars?: number;
  forks?: number;
  updatedAt?: string;
}

export interface LanguageSkill {
  name: string;
  nativeScript: string;
  proficiency: string;
  speak: boolean;
  understand: boolean;
  read: boolean;
  write: boolean;
  notes: string;
}

export interface EducationMilestone {
  period: string;
  degree: string;
  institution: string;
  location: string;
  score?: string;
  status: string;
  description: string;
  keySubjects: string[];
}

export interface PortfolioData {
  name: string;
  fullName: string;
  tagline: string;
  headline: string;
  email: string;
  phone: string;
  dob: string;
  age: number;
  location: string;
  college: string;
  semester: string;
  branch: string;
  degree: string;
  linkedInUrl: string;
  githubUrl: string;
  bio: string;
  summaryPoints: string[];
}

export const initialPortfolioData: PortfolioData = {
  name: "Nikhil M.K.",
  fullName: "Nikhil Mookken Kurian",
  tagline: "Information Science & Engineering Student @ Atria Institute of Technology",
  headline: "Aspiring Software Engineer | Python, Java, DBMS & DSA Specialist",
  email: "nikhilkurian.mookken@gmail.com",
  phone: "+91 7204015416",
  dob: "23/05/2005",
  age: 21,
  location: "Bengaluru, Karnataka, India",
  college: "Atria Institute of Technology",
  semester: "5th Semester",
  branch: "Information Science & Engineering (ISE)",
  degree: "Bachelor of Engineering (B.E.)",
  linkedInUrl: "https://linkedin.com/in/nikhil-mk-ise",
  githubUrl: "https://github.com/nikhil-mk",
  bio: "5th-semester Information Science and Engineering student at Atria Institute of Technology, Bangalore. Passionate about architecting efficient algorithms, clean object-oriented systems in Java & Python, and relational database schemas with high data integrity. Multilingual communicator fluent across 5 Indian languages, combining analytical rigour with strong cross-functional teamwork.",
  summaryPoints: [
    "5th Sem Information Science & Engineering at Atria Institute of Technology, Bengaluru",
    "Core competencies in Data Structures & Algorithms, Relational DBMS (SQL), Java & Python",
    "Multilingual proficiency: English, Hindi, Malayalam, Tamil, and Kannada",
    "Actively preparing for software development internships and competitive engineering roles"
  ]
};

export const coreSkillsData = [
  {
    category: "Programming Languages",
    description: "Production and algorithmic syntax with object-oriented & procedural foundations",
    skills: [
      { name: "Python", level: "Advanced", experience: "Data processing, script automation, algorithm prototyping, Flask/Django basics" },
      { name: "Java", level: "Advanced", experience: "Object-Oriented Programming (OOP), Multithreading, Collections Framework, JDBC" },
      { name: "C / C++", level: "Intermediate", experience: "Pointers, memory management, low-level data structure implementations" },
      { name: "SQL", level: "Advanced", experience: "Complex joins, indexing, query optimization, triggers, stored procedures" }
    ]
  },
  {
    category: "Data Structures & Algorithms",
    description: "Deep theoretical foundation and practical optimization in time & space complexities",
    skills: [
      { name: "Linear Structures", level: "Mastered", experience: "Arrays, Singly/Doubly Linked Lists, Stacks, Queues, Deques" },
      { name: "Non-Linear Structures", level: "Mastered", experience: "Binary Search Trees (BST), AVL Trees, Heaps, Graph Adjacency" },
      { name: "Algorithmic Paradigms", level: "Proficient", experience: "Dynamic Programming, Greedy Algorithms, Divide & Conquer, Backtracking" },
      { name: "Graph & Traversal", level: "Proficient", experience: "Dijkstra's, BFS, DFS, Topological Sorting, Kruskal's / Prim's MST" }
    ]
  },
  {
    category: "Database Management Systems (DBMS)",
    description: "Relational database design, ACID compliance, and query performance tuning",
    skills: [
      { name: "Relational Schema Design", level: "Advanced", experience: "Entity-Relationship (ER) modeling, 1NF to BCNF normalization" },
      { name: "MySQL & PostgreSQL", level: "Advanced", experience: "Foreign key constraints, indexing strategies, transaction isolation levels" },
      { name: "Database Connectivity", level: "Proficient", experience: "Java Database Connectivity (JDBC), connection pools, prepared statements" },
      { name: "Query Optimization", level: "Proficient", experience: "EXPLAIN query plans, index scanning vs sequential scan, subquery unnesting" }
    ]
  },
  {
    category: "ISE Core Fundamentals & Tools",
    description: "Foundational computer science principles from the VTU ISE curriculum",
    skills: [
      { name: "Operating Systems", level: "Core", experience: "Process scheduling, deadlocks, virtual memory, paging & segmentation" },
      { name: "Computer Networks", level: "Core", experience: "OSI & TCP/IP stack, routing protocols, sockets, HTTP/HTTPS" },
      { name: "Version Control & Git", level: "Proficient", experience: "Branching strategies, Git rebase, pull requests, collaborative workflows" },
      { name: "Linux & Developer Tools", level: "Proficient", experience: "Bash shell scripting, VS Code, IntelliJ IDEA, postman API testing" }
    ]
  }
];

export const languagesData: LanguageSkill[] = [
  {
    name: "English",
    nativeScript: "English",
    proficiency: "Full Professional Proficiency",
    speak: true,
    understand: true,
    read: true,
    write: true,
    notes: "Primary medium of technical education, technical documentation, professional presentations, and engineering communication."
  },
  {
    name: "Hindi",
    nativeScript: "हिन्दी",
    proficiency: "Full Professional Working",
    speak: true,
    understand: true,
    read: true,
    write: true,
    notes: "Fluent verbal communication, complete reading and writing capability for national teamwork and interstate collaboration."
  },
  {
    name: "Malayalam",
    nativeScript: "മലയാളം",
    proficiency: "Native / Mother Tongue",
    speak: true,
    understand: true,
    read: false,
    write: false,
    notes: "Native spoken fluency and total auditory comprehension, effortless everyday conversation."
  },
  {
    name: "Tamil",
    nativeScript: "தமிழ்",
    proficiency: "Conversational Fluency",
    speak: true,
    understand: true,
    read: false,
    write: false,
    notes: "Strong conversational speaking and natural listening comprehension across south Indian professional and peer circles."
  },
  {
    name: "Kannada",
    nativeScript: "ಕನ್ನಡ",
    proficiency: "Conversational & Regional Working",
    speak: true,
    understand: true,
    read: false,
    write: false,
    notes: "Active conversational grasp and regional comprehension, seamlessly engaging in Bangalore's local tech ecosystem."
  }
];

export const projectsData: Project[] = [
  {
    id: "atria-fest-event-management",
    title: "Atria Fest & Event Management System",
    tagline: "Comprehensive college fest coordination, event scheduling, and participant registration portal",
    category: "DBMS & Fullstack",
    description: "An end-to-end fest and event management platform developed for Atria Institute of Technology. Features automated participant registration, multi-category event scheduling (technical, cultural, sports), volunteer/coordinator allocation, ticket verification, and a high-integrity relational database.",
    githubUrl: "https://github.com/nikhil-mk/atria-fest-and-event-management",
    liveUrl: "https://github.com/nikhil-mk/atria-fest-and-event-management",
    highlights: [
      "Engineered normalized relational database schema managing events, venues, participants, and scoring criteria",
      "Constructed automated registration engine preventing overlapping slot schedules for participants",
      "Implemented role-based administrative portal for department coordinators and faculty leads",
      "Secured transactional participant records with relational foreign key constraints and ACID consistency"
    ],
    technologies: ["Python / Java", "DBMS (MySQL)", "Relational Schema", "Event Logistics", "Git"],
    metrics: "Single source of truth for Atria campus fest coordination"
  }
];

export const educationTimeline: EducationMilestone[] = [
  {
    period: "2023 — 2027 (Current)",
    degree: "Bachelor of Engineering (B.E.) — Information Science & Engineering",
    institution: "Atria Institute of Technology",
    location: "Anandnagar, Hebbal, Bengaluru, Karnataka",
    status: "Currently in 5th Semester",
    description: "Pursuing undergraduate degree affiliated with Visvesvaraya Technological University (VTU) and approved by AICTE. Focus on algorithmic computational theory, relational database systems, computer systems architecture, and software engineering methodologies.",
    keySubjects: [
      "Data Structures & Algorithms (DSA)",
      "Database Management Systems (DBMS)",
      "Object-Oriented Programming (Java / Python)",
      "Operating Systems & Process Scheduling",
      "Computer Networks & Data Communications",
      "Design & Analysis of Algorithms (DAA)",
      "Software Engineering & Agile Concepts",
      "Discrete Mathematical Structures"
    ]
  },
  {
    period: "2021 — 2023",
    degree: "Pre-University Education (11th & 12th / Science)",
    institution: "CMR PU College",
    location: "Bengaluru, Karnataka",
    status: "Completed with Distinction",
    description: "Pre-University course in Science with core subjects in Physics, Chemistry, Mathematics, and Computer Science (PCMC), cultivating strong analytical foundations.",
    keySubjects: ["Mathematics", "Physics", "Chemistry", "Computer Science"]
  },
  {
    period: "Up to 2021",
    degree: "Secondary School Education (Class 10 - CBSE)",
    institution: "Kendriya Vidyalaya (K.V.), MEG & Centre",
    location: "St. John's Church Road, Bengaluru",
    status: "Completed with Distinction",
    description: "Completed secondary schooling under the Central Board of Secondary Education (CBSE) at Kendriya Vidyalaya MEG Centre, building fundamental scholastic and extracurricular excellence.",
    keySubjects: ["Mathematics", "Science", "Social Science", "English", "Hindi"]
  }
];

export const certificationsData = [
  {
    title: "Python (Basic to Advanced Problem Solving)",
    issuer: "HackerRank & Skill Verification",
    year: "2025",
    description: "Certified proficiency in Python data structures, list comprehensions, generators, and algorithm implementations."
  },
  {
    title: "Java Object-Oriented Programming",
    issuer: "Academic & Developer Assessment",
    year: "2024",
    description: "Covering classes, encapsulation, polymorphism, inheritance, exception handling, and JDBC connectivity."
  },
  {
    title: "SQL & Relational Database Design",
    issuer: "DBMS VTU Laboratory Distinction",
    year: "2024",
    description: "Practical mastery of complex SQL queries, multi-table joins, subqueries, triggers, and ER modeling."
  },
  {
    title: "Data Structures & Algorithms in Practice",
    issuer: "Competitive Programming / LeetCode",
    year: "2025",
    description: "Active problem solving covering array manipulations, graph traversals, tree balancing, and binary search."
  }
];
