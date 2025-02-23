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
    category: "frontend",
    title: "portfolio 1",
    description: "Eine Portfolio Website über meine Person. ",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "Framer Motion" }],
    image: "/assets/projects/portfolio-1.png",
    live: "",
    github: "https://github.com/neverchange95/portfolio",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Supermarket Scout",
    description: "Ein Cloud-native Studienprojekt, indem Mircoservices umgesetzt wurden, die Backendservices innerhalb eines Kubernetes Clusters für eine Webanwendung bereitstellen. Die Anwendung ermöglicht es nach Produktpreisen von den umliegenden Supermärkten in einer Stadt zu suchen.",
    stack: [{ name: "Springboot" }, { name: "Postgresql" }, { name: "Python" }, { name: "Next.js" }, { name: "Docker" }, { name: "Kubernetes/Helm" }, { name: "CI/CD" }],
    image: "/assets/projects/supermarket-scout.png",
    live: "",
    github: "https://github.com/neverchange95/supermarket-scout",
  },
  {
    num: "03",
    category: "fullstack",
    title: "bgp-routing-looking-glass",
    description: "Ein Studienprojekt, welches ein Looking Glass für Internettraffic aus einem Rechenzentrum bereitstellt.",
    stack: [{ name: "React.js" }, { name: "CSS 3" }, { name: "Python" }, { name: "Spark" }],
    image: "/assets/projects/bgp.png",
    live: "",
    github: "https://github.com/neverchange95/bgp-routing-looking-glass",
  },
  {
    num: "04",
    category: "UI/UX-design",
    title: "smart-home",
    description: "Ein Designentwurf für eine Smart Home Frontend Anwendung.",
    stack: [{ name: "Figma" }],
    image: "/assets/projects/smart-home.jpg",
    live: "",
    github: "https://github.com/neverchange95/smart-home",
  },
  {
    num: "05",
    category: "frontend",
    title: "portfolio 2",
    description: "Eine ältere Portfolio Website über meine Person.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "Java Script" }],
    image: "/assets/projects/portfolio.png",
    live: "",
    github: "https://github.com/neverchange95/MyWebsite",
  },
  {
    num: "06",
    category: "Frontend",
    title: "dfs/bfs",
    description: "Eine Visualisierung eines Tiefen- und Breitensuchealgorithmus.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: "/assets/projects/dfs-bfs.png",
    live: "",
    github: "https://github.com/neverchange95/VisualSearch",
  },
  {
    num: "07",
    category: "Android App",
    title: "dfs/bfs",
    description: "Eine ToDo-Anwendung für android Smartphones.",
    stack: [{ name: "Java" }, { name: "Android Studio" }, { name: "SQL" }],
    image: "/assets/projects/todo.jpg",
    live: "",
    github: "https://github.com/neverchange95/ToDoApp",
  },
  {
    num: "08",
    category: "Security",
    title: "rootkit",
    description: "Ein Linux Kernel Rootkit zum verbergen von PIDs, sowie einen Keylogger als beispielhafte Schadsoftware, die durch das Rootkit dem Anwender verborgen bleiben soll.",
    stack: [{ name: "C" }, { name: "Linux Kernel" }],
    image: "/assets/projects/rootkit.png",
    live: "",
    github: "https://github.com/neverchange95/Rootkit",
  },
  {
    num: "09",
    category: "Fullstack",
    title: "webauthn",
    description: "Eine Beispielanwendung, welche die Registrierungs- und Authentifizierungsphase des Webauthn Standards durchläuft und die ausgetauschten und generierten Werte visualisiert.",
    stack: [{ name: "React.js" }, { name: "Spring Boot" }, { name: "FIDO 2" }, { name: "Webauthn" }],
    image: "/assets/projects/webauthn.png",
    live: "",
    github: "https://github.com/neverchange95/WebAuthnDemo",
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