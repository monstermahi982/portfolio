"use client";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  AnimatedSection,
  AnimatedProjectsSection,
  AnimatedProjectCard,
} from "@/components/AnimatedSection";
import { AnimatedNavbar } from "@/components/AnimatedNavbar";
import ExperienceTimeLine from "@/components/Experience";
import clsx from "clsx";
import { Skill, skills } from "@/lib/utils";
import AnimatedTitleCard from "@/components/AnimationText";

const projects = [
  {
    title: "Ginesys CRM (Indexnine Technology Pvt Ltd)",
    description:
      "Ginesys is CRM software used retail and logitic management solutions.",
    link: "https://indexnine.com/",
    work: [
      "Delivered a scalable CRM web application using Vue.js, NestJS, MongoDB, and TypeScript, with complete ownership of frontend development, deployment, and feature delivery.",
      "Built key modules including Role-Based Access Control (RBAC), customer wallet (with credit/debit notes), and seamless gift voucher redemption via iframe integration.",
      "Achieved ₹2.3 crore in gift voucher sales within 5 months, onboarding 45 organizations and supporting 400–600 daily active users.",
      "Designed responsive UIs and complex data tables using Syncfusion and AG Grid, enhancing usability and operational efficiency.",
      "Created responsive UIs and data grids using Syncfusion and AG Grid, managed application state with Pinia.",
      "Optimized state management and performance using Pinia and TypeScript, ensuring smooth user experience and maintainable codebase.",
    ],
    tags: [
      "TypeScript",
      "Node.js",
      "NestJS",
      "MongoDB",
      "Vuejs",
      "Pinia Store",
      "Syncfusion",
      "AG Grid",
    ],
  },
  {
    title: "Megh Mobile App (Android & iOS)",
    description:
      "Megh Computing provides a real-time, AI-based Video Analytics Solution (VAS) deployed on any platform from edge-to-cloud.",
    link: "https://sentinel-overwatch.com/",
    work: [
      "Developed and deployed a Nuxt.js + Ionic mobile application on the App Store and Play Store, leading a team of 3 developers through feature planning, design discussions, and code reviews.",
      "Built a real-time CCTV analytics system with Google Maps integration for incident tracking and location-aware responses.",
      "Implemented Firebase Push Notifications and Google Login to deliver secure, real-time alerts and user authentication.",
      "Engineered a WebSocket-based infrastructure for real-time video streaming and live location tracking.",
      "Utilized TypeScript and AWS cloud services to ensure scalable, maintainable, and high-performance deployments.",
    ],
    tags: [
      "Javascript",
      "Node.js",
      "NestJS",
      "MongoDB",
      "Vuejs",
      "Nuxt.js",
      "Pinia Store",
      "Ionic",
      "Material-UI",
    ],
  },
  {
    title: "TheHouseMonk Core Software (Monk Tech Labs)",
    description:
      "Monk Tech Labs helps real estate businesses Monetize, Manage & Maintain their rental real estate portfolio.",
    link: "https://www.monkspaces.ai",
    work: [
      "Developed and maintained full-stack web applications using AngularJS, Node.js, and MongoDB with end-to-end feature ownership.",
      "Implemented critical modules such as Deposit Management, Refund Management, and Credit Notes Management to streamline financial workflows.",
      "Integrated InstaMojo Payment Gateway for seamless online transactions and collaborated with a Singapore-based client for custom feature development.",
      "Designed advanced MongoDB Aggregation Pipelines for efficient data filtering, analytics, and reporting.",
      "Managed AWS-based cloud infrastructure, ensuring scalability, performance, and smooth deployment workflows.",
    ],
    tags: [
      "Javascript",
      "Node.js",
      "Angular.js",
      "MongoDB",
      "Bootstrap",
      "AWS",
    ],
  },
];

const persnal_projects = [
  {
    title: "NeoTrack (Expense Tracker App)",
    description:
      "A full-stack expense tracker built with Next.js (Pages Router), MongoDB, and Tailwind CSS. It allows users to manage their expenses, banks, and categorize spending with tags.",
    link: "https://github.com/monstermahi982/expense-tracker",
    projectLink: "https://expense.maheshgaikwad.site",
    work: [
      "Built a full-stack expense tracking platform using Next.js (Pages Router), MongoDB Atlas, and Tailwind CSS, allowing users to manage expenses, banks, and categorize spending with tags.",
      "Implemented secure authentication with JWT for user login and route protection, and managed global auth state using Zustand or React Context.",
      "Developed CRUD functionality for banks and expenses, including inline editing, filters (month/year/bank), and detailed monthly/yearly summaries.",
      "Enabled tag-based expense grouping to help users filter and analyze spending categories such as Food, Travel, etc.",
      "Utilized modern UI components with shadcn/ui and Lucide Icons to deliver a responsive and intuitive user experience.",
    ],
    tags: [
      "TypeScript",
      "React.js",
      "NestJS",
      "MongoDB",
      "Zustand",
      "Tailwind CSS",
      "Shadcn/ui",
    ],
  },
  {
    title: "Modular Chat Application – Real-Time Communication SDK",
    description:
      "A fully-featured real-time chat application built as a reusable web component, enabling seamless integration into any frontend framework such as React, Angular, Vue, or plain JavaScript. Designed to enhance communication with rich features and AI integration.",
    link: "https://github.com/monstermahi982/chat-plug",
    projectLink: "https://chatplug.maheshgaikwad.site",
    work: [
      "Developed a full-stack chat system using NestJS, Vue.js, and MongoDB with real-time capabilities via Socket.IO, supporting both one-to-one and group chats.",
      "Implemented advanced messaging features including @mentions in group chats, file attachments, voice message recording, and user presence (online/offline).",
      "Integrated real-time media communication with video calling, audio calling, and screen sharing functionalities using WebRTC and Socket.IO.",
      "Packaged the chat module as a reusable npm web component, allowing easy plug-and-play integration into any framework (React, Angular, Vue, etc.).",
      "Enhanced communication with AI-powered support, integrating Google Gemini API for contextual smart replies and chatbot conversations.",
    ],
    tags: ["NestJS", "Vue.js", "MongoDB", "Socket.IO", "Gemini API"],
  },
  {
    title: "Cinema Seats – Scalable Event-Based Ticketing Platform (movie booking app)",
    description:
      "A role-based movie ticket booking platform built with a microservice-inspired architecture using Kafka for distributed seat generation and booking. The system supports Admin, Vendor, and User roles with tailored access and workflows.",
    link: "https://github.com/monstermahi982/cinema-seats",
    projectLink: "https://cinema-seats.maheshgaikwad.site",
    work: [
      "Developed a full-stack movie booking system with user authentication and role-based access for Admins, Vendors, and Users using Next.js and NestJS.",
      "Enabled Admins to manage movies, Vendors to create show timings for listed movies, and Users to book tickets based on available shows.",
      "Integrated Kafka message queues to generate seat allocations asynchronously when a new show is created, ensuring high scalability and decoupled services.",
      "Implemented robust booking logic using event-driven architecture to handle concurrent ticket reservations efficiently without data conflicts.",
      "Used MongoDB for flexible schema design, storing users, shows, theaters, bookings, and seat maps with real-time updates.",
    ],
    tags: ["NestJS", "Next.js", "MongoDB", "Kafka", "Tailwind Css"],
  },
  {
    title: "City App (Freelance)",
    description:
      "This city app provides features to explore the city, local attractions, and weather forecast and markets.",
    work: [
      "Developed a city-focused e-commerce application showcasing vendors, local products, tourist attractions, and marketplaces, with dynamic admin panel control.",
      "Integrated Google Maps to enable location-based vendor discovery, real-time navigation, and geolocation features.",
      "Implemented a booking engine with calendar scheduling and secure payments via PhonePe Payment Gateway.",
      "Used Redux for efficient state management and built responsive frontend interfaces with Next.js for fast performance and SEO optimization.",
      "Deployed and maintained cloud infrastructure using Google Cloud Platform (GCP), Vercel, and Cloud Run to ensure high availability and scalability.",
    ],
    tags: [
      "Typescript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "React.js",
      "Nest.js",
      "Redux",
      "Tailwind CSS",
    ],
  },
];

const getRandomColorClass = () => {
  const colors = [
    "hover:bg-teal-500",
    "hover:bg-blue-500",
    "hover:bg-red-500",
    "hover:bg-green-500",
    "hover:bg-yellow-500",
    "hover:bg-purple-500",
    "hover:bg-pink-500",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:px-40">
      <AnimatedNavbar />
      <div className="container mx-auto px-4 py-8 mt-20">
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <div className="md:flex gap-10">
              <h2 className="text-xl md:text-3xl font-bold mb-4">
                Senior Software Engineer
              </h2>
              <div>
                <AnimatedTitleCard />
              </div>
            </div>
            <p className="text-muted-foreground mb-6 text-sm md:text-base">
              Passionate software engineer with expertise in full-stack
              development, specializing in Node.js, React, and Vue.js. Committed
              to writing clean, efficient code and building scalable
              applications that deliver exceptional user experiences.
            </p>
            <div className="flex gap-4">
              <Button
                asChild
                className="bg-plumdark text-white hover:bg-red-900"
              >
                <a href="#contact">Contact Me</a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-2 border-plumdark"
              >
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end items-center">
            <Avatar className="h-32 w-32 md:h-60 md:w-60">
              <AvatarImage
                src="/images/mahesh_profile.jpeg"
                alt="Mahesh Gaikwad"
              />
              <AvatarFallback>MG</AvatarFallback>
            </Avatar>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mb-16" delay={0.2}>
          <h2 className="text-2xl font-bold mb-6">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup: Skill, index: number) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-3">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className={clsx(
                          "hover:scale-150 cursor-pointer transition duration-300 hover:text-white",
                          getRandomColorClass()
                        )}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="mb-16" id="experience" delay={0.3}>
          <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
          <ExperienceTimeLine />
        </AnimatedSection>

        <AnimatedProjectsSection className="mb-16" id="projects">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <div className="grid grid-cols-1 space-y-5">
            {projects.map((project, index) => (
              <AnimatedProjectCard key={index}>
                <Card className="h-full flex flex-col">
                  <CardContent className="pt-6 flex-grow">
                    <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className={clsx(
                            "hover:scale-150 cursor-pointer transition duration-300 hover:text-white",
                            getRandomColorClass()
                          )}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <ul className="list-disc mx-5 my-3 space-y-2 text-sm text-neutral-500">
                      {project.work?.map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedProjectCard>
            ))}
          </div>
        </AnimatedProjectsSection>

        <AnimatedProjectsSection className="mb-16" id="projects">
          <h2 className="text-2xl font-bold mb-6">Personal Projects</h2>
          <div className="grid grid-cols-1 space-y-5">
            {persnal_projects.map((project, index) => (
              <AnimatedProjectCard key={index}>
                <Card className="h-full flex flex-col">
                  <CardContent className="pt-6 flex-grow">
                    <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className={clsx(
                            "hover:scale-150 cursor-pointer transition duration-300 hover:text-white",
                            getRandomColorClass()
                          )}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <ul className="list-disc space-y-2 mx-5 my-3 text-sm text-neutral-500">
                      {project.work?.map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <div className="flex gap-5">
                      {project.link && (
                        <div className="mt-auto">
                          <Button variant="outline" asChild size="sm">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View on GitHub
                            </a>
                          </Button>
                        </div>
                      )}
                      {project.projectLink && (
                        <div className="mt-auto">
                          <button className="p-[3px] relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                            <div className="px-8 py-1  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                              <a
                                href={project.projectLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Live Demo
                              </a>
                            </div>
                          </button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedProjectCard>
            ))}
          </div>
        </AnimatedProjectsSection>

        <AnimatedSection className="mb-16" id="contact" delay={0.5}>
          <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <a
                  href="tel:+919370963976"
                  target="_blank"
                  className="flex flex-col items-center p-4 hover:bg-muted rounded-lg transition-colors"
                >
                  <Phone className="h-8 w-8 mb-2" />
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-sm text-muted-foreground">
                    +91 9370963976
                  </p>
                </a>
                <a
                  href="mailto:maheshgaikwad8892@gmail.com"
                  target="_blank"
                  className="flex flex-col items-center p-4 hover:bg-muted rounded-lg transition-colors"
                >
                  <Mail className="h-8 w-8 mb-2" />
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    maheshgaikwad8892@gmail.com
                  </p>
                </a>
                <a
                  href="https://github.com/monstermahi982"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 hover:bg-muted rounded-lg transition-colors"
                >
                  <Github className="h-8 w-8 mb-2" />
                  <h3 className="font-medium">GitHub</h3>
                  <p className="text-sm text-muted-foreground">
                    monstermahi982
                  </p>
                </a>
                <a
                  href="https://www.linkedin.com/in/maheshgaikwad26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 hover:bg-muted rounded-lg transition-colors"
                >
                  <Linkedin className="h-8 w-8 mb-2" />
                  <h3 className="font-medium">LinkedIn</h3>
                  <p className="text-sm text-muted-foreground">
                    maheshgaikwad26
                  </p>
                </a>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <footer className="text-center text-muted-foreground py-8 border-t">
          <p>
            © {new Date().getFullYear()} Mahesh Gaikwad. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
