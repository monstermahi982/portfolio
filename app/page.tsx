import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  AnimatedSection,
  AnimatedProjectsSection,
  AnimatedProjectCard,
} from "@/components/AnimatedSection";
import { AnimatedNavbar } from "@/components/AnimatedNavbar";
import ExperienceTimeLine from "@/components/Experience";
import clsx from "clsx";
import {  Skill, skills } from "@/lib/utils";

const projects = [
  {
    title: "IndexNine Booking Backend",
    description:
      "A robust booking system backend with authentication, booking management, and payment processing.",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "Stripe"],
    link: "https://github.com/maheshindexnine/indexnine-booking-backend",
  },
  {
    title: "Custom Chat Backend",
    description:
      "Real-time chat application backend with support for attachments and user management.",
    tags: ["Node.js", "Socket.io", "MongoDB", "Express", "AWS S3"],
    link: "https://github.com/maheshindexnine/custom-chat-backend",
  },
  {
    title: "E-commerce Microservices",
    description:
      "Scalable e-commerce platform built with microservices architecture for high availability and performance.",
    tags: ["Node.js", "Microservices", "Docker", "Kubernetes", "MongoDB"],
    link: "https://github.com/maheshindexnine/e-commerce-microservices",
  },
  {
    title: "Chat Attachable",
    description:
      "Frontend for a chat application with file attachment capabilities and responsive design.",
    tags: ["React", "Redux", "Socket.io", "Tailwind CSS", "Axios"],
    link: "https://github.com/nisar-ahamad/frontend",
  },
  {
    title: "Expense Tracker",
    description:
      "Personal finance application to track expenses, generate reports, and manage budgets.",
    tags: ["React", "Node.js", "MongoDB", "Chart.js", "Express"],
    link: "https://github.com/monstermahi982/expense-tracker",
  },
];

export const getRandomColorClass = () => {
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
            <h2 className="text-xl md:text-3xl font-bold mb-4">
              Senior Software Engineer
            </h2>
            <p className="text-muted-foreground mb-6 text-sm md:text-base">
              Passionate software engineer with expertise in full-stack
              development, specializing in Node.js, React, and microservices
              architecture. Committed to writing clean, efficient code and
              building scalable applications that deliver exceptional user
              experiences.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <a href="#contact">Contact Me</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end items-center">
            <Avatar className="h-40 w-40">
              <AvatarImage
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt="Mahesh Gaikwad"
              />
              <AvatarFallback>MG</AvatarFallback>
            </Avatar>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mb-16" delay={0.2}>
          <h2 className="text-2xl font-bold mb-6">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <AnimatedProjectCard key={index}>
                <Card className="h-full flex flex-col">
                  <CardContent className="pt-6 flex-grow">
                    <h3 className="font-bold mb-2">{project.title}</h3>
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
