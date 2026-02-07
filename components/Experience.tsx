"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { timeline, TimelineItem } from "@/lib/utils";

const ExperienceTimeLine = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Vertical line */}
      <div className="absolute hidden md:block w-0.5 h-full left-[180px] top-0 bg-gradient-to-b from-primary/10 via-primary/50 to-primary/10 transform -translate-x-1/2" />

      {timeline.map((item: TimelineItem, index: number) => (
        <motion.div
          key={index}
          className="relative mb-12 last:mb-0 flex flex-col md:flex-row items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={index}
          variants={fadeInUp}
        >
          {/* Date and Logo Column */}
          <div className="md:w-[180px] flex-shrink-0 flex flex-col items-center md:items-end md:pr-8 mb-6 md:mb-0">
            <div className="w-24 h-24 rounded-xl overflow-hidden shadow-md border border-muted/50 bg-white p-2 mb-3 hover:scale-105 transition-transform duration-300">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>
            <time className="font-bold text-sm text-primary whitespace-nowrap">
              {item.date}
            </time>
            <p className="text-xs text-muted-foreground text-center md:text-right">{item.location}</p>
          </div>

          {/* Content Column */}
          <div className="flex-grow md:pl-8 relative">
             {/* Dot on the line */}
             <div className="hidden md:block absolute left-0 top-8 w-4 h-4 rounded-full bg-background border-4 border-primary transform -translate-x-1/2 z-10" />
             
            <div className="p-6 rounded-xl border border-muted/60 bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-foreground mb-1">
                {item.name}
              </h3>
              <p className="text-sm font-medium text-primary/80 mb-4">{item.position}</p>
              
              <div className="flex flex-col gap-3">
                <p className="text-sm font-semibold text-muted-foreground">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-3">
                  {item.stack.map((tech, idx) => (
                    <div key={idx} className="group relative" title={tech.name}>
                      <div className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-200">
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={24}
                          height={24}
                          className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceTimeLine;
