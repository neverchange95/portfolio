"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt  } from "react-icons/fa"
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "youremail@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Stadt",
    description: "Ingolstadt, Bayern, Deutschland",
  },
]

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration:0.4, ease: "easeIn" }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Kontaktieren</h3>
              <p className="text-white/60">
                Sind Sie interessiert an einer zusammenarbeit?<br></br>
                Schreiben Sie mir gerne eine Anfrage. Ich werde mich schnellstmöglich bei Ihnen zurückmelden!
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Vorname" />
                <Input type="lastname" placeholder="Nachname" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Telefon" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="Wählen Sie einen Bereich" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Wählen Sie einen Bereich</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="bac">Backend Development</SelectItem>
                    <SelectItem value="cld">Cloud Development</SelectItem>
                    <SelectItem value="sec">Security</SelectItem>
                    <SelectItem value="uxi">UI/UX Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea 
                className="h-[200px]"
                placeholder="Schildern Sie Ihr Anliegen hier"
              />
              {/* btn */}
              <Button size="md" className="max-w-40">
                Nachricht senden
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact