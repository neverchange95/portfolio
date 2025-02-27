"use client";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { useState } from "react";
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"

const projects = [
  {
    num: "01",
    category: "UI/UX-design",
    title: "smart-home",
    description: "Design concept for a Smart Home frontend application.",
    stack: [{ name: "Figma" }],
    image: "/assets/projects/smart-home.jpg",
    live: "",
    github: "https://github.com/neverchange95/smart-home",
  },
  {
    num: "02",
    category: "fullstack",
    title: "bgp-routing-looking-glass",
    description: "Study project that provides a Looking Glass for analyzing internet traffic from data centers and visualizing potential anomalies.",
    stack: [{ name: "React.js" }, { name: "CSS 3" }, { name: "Python" }, { name: "Spark" }],
    image: "/assets/projects/bgp.png",
    live: "",
    github: "https://github.com/neverchange95/bgp-routing-looking-glass",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Supermarket Scout",
    description: "Cloud-native study project implementing microservices to provide backend services within a Kubernetes cluster for a web application. The application enables users to search for product prices from nearby supermarkets within a city.",
    stack: [{ name: "Springboot" }, { name: "Postgresql" }, { name: "Python" }, { name: "Next.js" }, { name: "Docker" }, { name: "Kubernetes/Helm" }, { name: "CI/CD" }],
    image: "/assets/projects/supermarket-scout.png",
    live: "",
    github: "https://github.com/neverchange95/supermarket-scout",
  },
  {
    num: "04",
    category: "Fullstack",
    title: "webauthn",
    description: "Example application that walks through the registration and authentication phases of the WebAuthn standard, visualizing the exchanged and generated values.",
    stack: [{ name: "React.js" }, { name: "Spring Boot" }, { name: "FIDO 2" }, { name: "Webauthn" }],
    image: "/assets/projects/webauthn.png",
    live: "",
    github: "https://github.com/neverchange95/WebAuthnDemo",
  },
  {
    num: "05",
    category: "Android App",
    title: "dfs/bfs",
    description: "ToDo-Application for Android Smartphones.",
    stack: [{ name: "Java" }, { name: "Android Studio" }, { name: "SQL" }],
    image: "/assets/projects/todo.jpg",
    live: "",
    github: "https://github.com/neverchange95/ToDoApp",
  },
  {
    num: "06",
    category: "Frontend",
    title: "portfolio 2",
    description: "An older portfolio website about me.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "Java Script" }],
    image: "/assets/projects/portfolio.png",
    live: "",
    github: "https://github.com/neverchange95/MyWebsite",
  },
  {
    num: "07",
    category: "Frontend",
    title: "dfs/bfs",
    description: "A visualization of a depth-first and breadth-first search algorithm",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: "/assets/projects/dfs-bfs.png",
    live: "",
    github: "https://github.com/neverchange95/VisualSearch",
  },
  {
    num: "08",
    category: "Security",
    title: "rootkit",
    description: "A Linux kernel rootkit designed to hide process IDs (PIDs), along with a keylogger as an example of malware that remains concealed from the user through the rootkit.",
    stack: [{ name: "C" }, { name: "Linux Kernel" }],
    image: "/assets/projects/rootkit.png",
    live: "",
    github: "https://github.com/neverchange95/Rootkit",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;

    // update project state based on current slide index
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {/* github project button */}
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        sizes="max-width: 100%"
                        fill
                        className="object-contain"
                        style={{ backgroundColor: "#1c1c23" }}
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>;
              })}
              {/* slider buttons */}
              <WorkSliderBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"  
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work