"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { timeline, TimelineItem } from "@/lib/utils";

const ExperienceTimeLine = () => {
  //   const router = useRouter();

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <>
      <div className="relative w-full">
        {/* Vertical line */}
        <div className="absolute w-0 h-0 md:h-full md:w-1 left-1/2 md:left-[180px] top-0 bg-gradient-to-b from-transparent via-slate-300 to-transparent transform -translate-x-1/2" />

        {timeline.map((item: TimelineItem, index: number) => (
          <div>
            <motion.div
              key={index}
              className="relative my-5 flex flex-col md:flex-row items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={fadeInUp}
            >
              <div className=" md:pr-8 flex flex-col items-center md:items-start text-center md:text-right">
                <div className="w-32 h-16 rounded-2xl shadow-md flex items-center justify-center mb-4 hover:scale-125 transition duration-300">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={"100"}
                    height={"100"}
                    className="w-full rounded-2xl h-full"
                  />
                </div>
                <time className="font-medium text-sm whitespace-nowrap">
                  {item.date}
                </time>
                <p className="text-xs text-gray-500">{item.location}</p>
              </div>

              {/* Content box */}
              <div className="w-full md:pl-8 mt-6 md:mt-5">
                <div className="p-5 rounded-lg border border-slate-200 shadow-md text-left">
                  <h3 className="text-base font-semibold hover:text-blue-500 transition duration-300 hover:underline cursor-pointer">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{item.position}</p>
                  <div className="flex items-end gap-2">
                    <p className="text-sm font-mono leading-relaxed">
                      Tech Stack -
                    </p>
                    <div className="flex flex-wrap gap-2 md:gap-5 mt-4">
                      {item.stack.map((tech, idx) => (
                        <div key={idx} className="group">
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            width={20}
                            height={20}
                            title={tech.name}
                            className="hover:scale-150 transition duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {
                  index === timeline.length - 1? null : (
                    <hr className="mt-10 md:h-0 md:w-0" />
                  )
                }
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ExperienceTimeLine;
