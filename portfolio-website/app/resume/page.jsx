"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaJava,
  FaPython
} from "react-icons/fa"

import {
  SiNextdotjs,
  SiSpringboot,
  SiNestjs,
  SiKubernetes,
  SiDocker,
  SiPostgresql,
  SiLinux,
  SiC
} from "react-icons/si"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion"

// about data
const about = {
  title: "About me",
  description: "This section provides general information about me.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Michael Küchenmeister"
    },
    {
      fieldName: "Place of residence",
      fieldValue: "Ingolstadt"
    },
    {
      fieldName: "Professional experience",
      fieldValue: "2+ Years"
    },
    {
      fieldName: "Github",
      fieldValue: "neverchange95"
    },
    {
      fieldName: "Languages",
      fieldValue: "German, English"
    },
    {
      fieldName: "Email",
      fieldValue: "contact.mkue@gmail.com"
    },
  ]
}

// experience data
const experience = {
  icon: "",
  title: "My Experience",
  description: "In this section, you will discover more about my professional career.",
  items: [
    {
      company: "EDAG Group",
      position: "Software Developer (part time)",
      duration: "Oct. 2023 - Today"
    },
    {
      company: "EDAG Group",
      position: "Software Developer (full time)",
      duration: "Jan. 2023 - Oct. 2023"
    },
    {
      company: "Audi AG",
      position: "Bachelor thesis",
      duration: "Feb. 2022 - Aug. 2022"
    },
    {
      company: "Audi AG",
      position: "Identity and Access Management (internship)",
      duration: "Aug. 2021 - Jan. 2022"
    },
    {
      company: "ALDI SÜD",
      position: "Logistic collaboration (working student)",
      duration: "Mar. 2020 - Sep. 2020"
    },
    {
      company: "Klosterschenke Weltenburg",
      position: "Waiter for the catering",
      duration: "Apr. 2017 - Sep. 2017"
    },
    {
      company: "Evang. Gesamtkirchenverwaltung",
      position: "Management Assistant for Office Communication (vocational training)",
      duration: "Sep. 2013 - Aug. 2016"
    },
  ]
}

// education data
const education = {
  icon: "",
  title: "My Education",
  description: "In this section, you will discover more about my education.",
  items: [
    {
      insitution: "Technische Hochschule Ingolstadt",
      degree: "M.Sc. Cloud Applications & Security Engineering",
      duration: "Oct. 2023 - Today"
    },
    {
      insitution: "Technische Hochschule Ingolstadt",
      degree: "B.Sc. Computer Sience",
      duration: "Oct. 2018 - Nov. 2022"
    },
    {
      insitution: "Staatliche Berufsoberschule",
      degree: "Vocational baccalaureate diploma in economics",
      duration: "Sep. 2016 - Aug. 2018"
    },
    {
      insitution: "Leo von Klenze Berufsschule",
      degree: "Management Assistant for Office Communication (vocational training)",
      duration: "Sep. 2013 - Aug. 2016"
    },
    {
      insitution: "Wirtschaftsschule Ingolstadt",
      degree: "Intermediate secondary school leaving certificate",
      duration: "Sep. 2010 - Aug. 2013"
    },
  ]
}

// skills data
const skills = {
  title: "My Skills",
  description: "This section highlights the technologies I have gained experience with in professional, academic, and personal settings.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiNestjs />,
      name: "nest.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaJava />,
      name: "java",
    },
    {
      icon: <SiSpringboot />,
      name: "springboot",
    },
    {
      icon: <SiC />,
      name: "C",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <SiKubernetes />,
      name: "kubernetes",
    },
    {
      icon: <SiDocker />,
      name: "docker",
    },
    {
      icon: <SiPostgresql />,
      name: "postgresql",
    },
    {
      icon: <SiLinux />,
      name: "linux",
    },
  ]
}

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"  
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content  */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li 
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3 mt-5">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li 
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3 mt-5">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.insitution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li 
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"  
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume