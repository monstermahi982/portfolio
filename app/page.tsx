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
    title: "Nutanix",
    description:
      "Nutanix is a cloud computing software company that provides hyper-converged infrastructure (HCI) solutions.",
    link: "https://nutanix.com/",
    work: [
      "Delivered a scalable LMS web application using Vue.js, Nodejs, MongoDB, Postgres with complete ownership of full stack development, deployment, and feature delivery.",
      "Built key modules including Dashboard redesign, Surveys feature.",
      "Achieved ₹2.3 crore in gift voucher sales within 5 months, onboarding 45 organizations and supporting 400–600 daily active users.",
      "Designed responsive UIs and complex data tables using Syncfusion and AG Grid, enhancing usability and operational efficiency.",
      "Created responsive UIs and data grids using Syncfusion and AG Grid, managed application state with Pinia.",
      "Optimized state management and performance using Pinia and TypeScript, ensuring smooth user experience and maintainable codebase.",
    ],
    tags: [
      "Javascript",
      "Node.js",
      "MongoDB",
      "Postgres",
      "Vuejs",
      "Vuex Store",
      "Vuetify",
    ],
  },
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
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-background to-secondary/20">
      <AnimatedNavbar />
      <div className="container mx-auto px-4 py-12 md:px-8 lg:px-16 mt-16 max-w-6xl">
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1 space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Senior Software Engineer
              </h2>
              <div className="h-12">
                 <AnimatedTitleCard />
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Passionate software engineer with expertise in full-stack
              development, specializing in Node.js, React, and Vue.js. Committed
              to writing clean, efficient code and building scalable
              applications that deliver exceptional user experiences.
            </p>
            <div className="flex gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="#contact">Contact Me</a>
              </Button>
              <Button
                variant="outline"
                asChild
                size="lg"
                className="border-2 hover:bg-secondary/50 transition-all duration-300"
              >
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 blur-3xl rounded-full" />
            <Avatar className="h-48 w-48 md:h-80 md:w-80 border-4 border-background shadow-2xl relative z-10">
              <AvatarImage
                src="/images/mahesh_profile.jpeg"
                alt="Mahesh Gaikwad"
                className="object-cover"
              />
              <AvatarFallback className="text-4xl">MG</AvatarFallback>
            </Avatar>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mb-24" delay={0.2}>
          <h2 className="text-3xl font-bold mb-8 text-center">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup: Skill, index: number) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-muted/60 bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-4 text-lg text-primary">{skillGroup.category}</h3>
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

        <AnimatedSection className="mb-24" id="experience" delay={0.3}>
          <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
          <ExperienceTimeLine />
        </AnimatedSection>

        <AnimatedProjectsSection className="mb-24" id="projects">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <AnimatedProjectCard key={index}>
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 border-muted/60 bg-card/50 backdrop-blur-sm group">
                  <CardContent className="p-8 flex-grow">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                        <h3 className="font-bold text-2xl group-hover:text-primary transition-colors">{project.title}</h3>
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                        )}
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
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
                    <ul className="space-y-3 text-muted-foreground">
                      {project.work?.map((item: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedProjectCard>
            ))}
          </div>
        </AnimatedProjectsSection>

        <AnimatedProjectsSection className="mb-24" id="personal-projects">
          <h2 className="text-3xl font-bold mb-8 text-center">Personal Projects</h2>
          <div className="grid grid-cols-1 gap-8">
            {persnal_projects.map((project, index) => (
              <AnimatedProjectCard key={index}>
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 border-muted/60 bg-card/50 backdrop-blur-sm group">
                  <CardContent className="p-8 flex-grow flex flex-col">
                    <h3 className="font-bold text-2xl mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
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
                    <ul className="space-y-3 text-muted-foreground mb-8 flex-grow">
                      {project.work?.map((item: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-muted/50">
                      {project.link && (
                        <Button variant="outline" asChild size="sm" className="gap-2 hover:bg-secondary/80">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="w-4 h-4" />
                              View Code
                            </a>
                        </Button>
                      )}
                      {project.projectLink && (
                        <Button asChild size="sm" className="gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0">
                             <a
                                href={project.projectLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Live Demo
                              </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedProjectCard>
            ))}
          </div>
        </AnimatedProjectsSection>

        <AnimatedSection className="mb-24" id="contact" delay={0.5}>
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <Card className="bg-card/50 backdrop-blur-sm border-muted/60">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <a
                  href="tel:+919370963976"
                  className="flex flex-col items-center p-6 hover:bg-secondary/50 rounded-xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="p-4 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    +91 9370963976
                  </p>
                </a>
                <a
                  href="mailto:maheshgaikwad8892@gmail.com"
                  className="flex flex-col items-center p-6 hover:bg-secondary/50 rounded-xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="p-4 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    maheshgaikwad8892@gmail.com
                  </p>
                </a>
                <a
                  href="https://github.com/monstermahi982"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 hover:bg-secondary/50 rounded-xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="p-4 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Github className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold mb-1">GitHub</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    monstermahi982
                  </p>
                </a>
                <a
                  href="https://www.linkedin.com/in/maheshgaikwad26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 hover:bg-secondary/50 rounded-xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="p-4 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold mb-1">LinkedIn</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
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
