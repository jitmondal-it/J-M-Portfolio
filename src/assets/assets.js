import {
  FaLightbulb,
  FaPaintBrush,
  FaServer,
  FaDatabase,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import { FaStripe } from "react-icons/fa6"; // Stripe icon is in fa6

export const assets = {
  profileImg: "/j-pic.jpeg",
};

export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Creative Problem Solver",
    description:
      "I enjoy solving complex problems and building practical solutions using modern technologies.",
  },
  {
    icon: FaPaintBrush,
    title: "Design Oriented",
    description:
      "I care about clean design and smooth user experiences while building web applications.",
    color: "text-pink",
  },
  
  
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform currently under development featuring product management, authentication, and cart functionality.",
    image: "/project-2.jpg", // make sure this image exists in public folder
    tech: [
      "React (Frontend)",
      "Spring Boot (Backend)",
      "PostgreSQL (Database)",
      "REST API",
      "JWT Auth",
    ],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "https://j-m-portfolio-tau.vercel.app/",
    code: "https://github.com/jitmondal-it/ecommerce-project",
  },
  {
  title: "HireSphere - Job Portal",
  description:
    "A full-stack job portal platform that connects job seekers and recruiters, featuring job posting, job search, talent discovery, applications, profiles, and secure JWT-based authentication.",
  image: "/Project-3.png", // make sure this image exists in public folder
  tech: [
    "React (Frontend)",
    "Tailwind CSS",
    "Mantine UI",
    "Spring Boot (Backend)",
    "MongoDB (Database)",
    "REST API",
    "JWT Authentication",
    "Axios",
  ],
  //icons: [FaReact, FaJava, FaDatabase],
  demo: "#",
  code: "https://github.com/jitmondal-it/HireSphere",
},
  
];

export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Building responsive and dynamic user interfaces using modern frontend technologies.",
    tags: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description:
      "Developing scalable RESTful APIs and backend services using Java and Spring Boot.",
    tags: ["Java", "Spring Boot", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Database Management",
    icon: FaDatabase,
    description:
      "Designing and managing relational and NoSQL databases for performance and reliability.",
    tags: ["PostgreSQL", "MongoDB", "SQL", "Database Design"],
  },
  {
    title: "Problem Solving",
    icon: FaLightbulb,
    description:
      "Strengthening analytical thinking through Data Structures and Algorithms practice.",
    tags: ["DSA", "LeetCode", "OOP", "Git & GitHub"],
  },
];
