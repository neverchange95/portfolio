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
  SiTailwindcss,
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
  title: "Über mich",
  description: "In diesem Abschnitt finden Sie  allgemeine Informationen über meine Person.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Michael Küchenmeister"
    },
    {
      fieldName: "Wohnort",
      fieldValue: "Ingolstadt"
    },
    {
      fieldName: "Berufserfahrung",
      fieldValue: "2+ Years"
    },
    {
      fieldName: "Github",
      fieldValue: "neverchange95"
    },
    {
      fieldName: "Spachen",
      fieldValue: "Deutsch, Englisch"
    },
    {
      fieldName: "Email",
      fieldValue: "michaelkuechenmeister95@googlemail.com"
    },
  ]
}

// experience data
const experience = {
  icon: "",
  title: "Meine Berufserfahrung",
  description: "In diesem Abschnitt erfahren Sie mehr über meine berufliche Laufbahn.",
  items: [
    {
      company: "EDAG Group",
      position: "Softwareentwickler (Teilzeit)",
      duration: "Okt. 2023 - Heute"
    },
    {
      company: "EDAG Group",
      position: "Softwareentwickler (Vollzeit)",
      duration: "Jan. 2023 - Okt. 2023"
    },
    {
      company: "Audi AG",
      position: "Bachelorarbeit (Freiberuflich)",
      duration: "Feb. 2022 - Aug. 2022"
    },
    {
      company: "Audi AG",
      position: "Identity and Access Management (Praktikum)",
      duration: "Aug. 2021 - Jan. 2022"
    },
    {
      company: "ALDI SÜD",
      position: "Logistikmitarbeiter (Weksstudent)",
      duration: "März 2020 - Sep. 2020"
    },
    {
      company: "Klosterschenke Weltenburg",
      position: "Servicekraft im Gastgewerbe",
      duration: "Apr. 2017 - Sep. 2017"
    },
    {
      company: "Evang. Gesamtkirchenverwaltung",
      position: "Kaufm. f. Büromanagement (Ausbildung)",
      duration: "Sep. 2013 - Aug. 2016"
    },
  ]
}

// education data
const education = {
  icon: "",
  title: "Meine Ausbildung",
  description: "In diesem Abschnitt erfahren Sie mehr über meine Ausbildungslaufbahn.",
  items: [
    {
      insitution: "Technische Hochschule Ingolstadt",
      degree: "Master in Cloud App. & Security Engineering",
      duration: "Okt. 2023 - Heute"
    },
    {
      insitution: "Technische Hochschule Ingolstadt",
      degree: "Bachelor in Informatik",
      duration: "Okt. 2018 - Nov. 2022"
    },
    {
      insitution: "Staatliche Berufsoberschule Ingolstadt",
      degree: "Fachabitur Wirtschaft und Verwaltung",
      duration: "Sep. 2016 - Aug. 2018"
    },
    {
      insitution: "Leo von Klenze Berufsschule",
      degree: "Ausbildung Kaufm f. Büromanagement",
      duration: "Sep. 2013 - Aug. 2016"
    },
    {
      insitution: "Wirtschaftsschule Ingolstadt",
      degree: "Mittlere Reife",
      duration: "Sep. 2010 - Aug. 2013"
    },
  ]
}

// skills data
const skills = {
  title: "Meine Skills",
  description: "In diesem Abschnitt finden Sie die Technologien mit denen ich Erfahrungen im beruflichen, studentischen oder privaten Umfeld gesammelt habe.",
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
      name: "next,js",
    },
    {
      icon: <SiNestjs />,
      name: "nest,js",
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
            <TabsTrigger value="experience">Berufserfahrung</TabsTrigger>
            <TabsTrigger value="education">Ausbildung</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">Über mich</TabsTrigger>
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
                          <div className="flex items-center gap-3">
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
                          <div className="flex items-center gap-3">
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