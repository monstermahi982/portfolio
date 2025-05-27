import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type TimelineItem = {
  name: string;
  position: string;
  date: string;
  image: string;
  location: string;
  stack: { name: string; icon: string }[];
};

export const timeline: TimelineItem[] = [
  {
    name: "Indexnine Technologies Pvt Ltd",
    position: "Frontend Developer",
    date: "May, 2024 - Present",
    image: "/images/indexnine_logo.png",
    location: "Pune, India",
    stack: [
      { name: "Vue.js", icon: "/icons/Vue.js.png" },
      { name: "NestJS", icon: "/icons/nest.png" },
      { name: "MongoDB", icon: "/icons/mongo.png" },
      { name: "TypeScript", icon: "/icons/typescript.png" },
    ],
  },
  {
    name: "Megh Computing Pvt Ltd",
    position: "Full Stack Developer",
    date: "April, 2023 - May, 2025",
    image: "/images/megh_computing.png",
    location: "Bangalore, India",
    stack: [
      { name: "Nuxt.js", icon: "/icons/nuxt.png" },
      { name: "Ionic", icon: "/icons/ionic.png" },
      { name: "NestJs", icon: "/icons/nest.png" },
      { name: "MongoDB", icon: "/icons/mongo.png" },
      { name: "Golang", icon: "/icons/go.png" },
      { name: "AWS", icon: "/icons/aws.png" },
    ],
  },
  {
    name: "Monk Tech Labs",
    position: "Full Stack Developer",
    date: "Jan, 2022 - Apr, 2023",
    image: "/images/monk.png",
    location: "Bangalore, India",
    stack: [
      { name: "Angular", icon: "/icons/angular.png" },
      { name: "Nodejs", icon: "/icons/node.png" },
      { name: "MongoDB", icon: "/icons/mongo.png" },
      { name: "AWS", icon: "/icons/aws.png" },
    ],
  },
];

export type Skill = {
  category: string;
  items: string[];
};

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: [
      "Vue.js",
      "Nuxt.js",
      "Angular",
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "NestJS", "MongoDB", "PostgreSQL", "Golang"],
  },
  {
    category: "DevOps",
    items: [
      "Docker",
      "Kubernetes",
      "AWS",
      "CI/CD",
      "Git",
      "GitHub Actions",
      "Microservices",
    ],
  },
  {
    category: "AI Tools",
    items: [
      "Cursor",
      "ChatGpt",
      "Claude",
      "Gemini",
      "Loveable",
      "Perplexity",
      "Bolt.new",
    ],
  },
];

