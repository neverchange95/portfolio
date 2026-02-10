"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

import { FaEnvelope, FaMapMarkedAlt  } from "react-icons/fa"
import { motion } from "framer-motion";
import { useState } from "react";

const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "contact.mkue@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Place of residence",
    description: "Ingolstadt, Bavaria, Germany",
  },
]

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSending) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const userId = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if(formData.firstname === '' ||
       formData.lastname === '' ||
       formData.email === '' ||
       formData.message === ''
    ) {
      toast.error("Please fill out all form fields!");
      return;
    } 
    
    setIsSending(true);

    try {
      const emailParams = {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      };

      const res = await emailjs.send(serviceId, templateId, emailParams, userId);

      if(res?.status === 200) {
        toast.success("Thank you! Your message has been successfully submitted. I will get back to you as soon as possible.")
        
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        toast.error("Your request could not be submitted. Please try again later.")
      }
    } catch(error) {
      toast.error("Your request could not be submitted. Please try again later.")
    } finally {
      setIsSending(false);
    }
  }

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
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
              <h3 className="text-4xl text-accent">Contact me</h3>
              <p className="text-white/60">
              You want to contact me?<br></br>
              Feel free to send me an email, and I will get back to you as soon as possible!
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="Firstname" value={formData.firstname} onChange={handleChange}/>
                <Input type="text" name="lastname" placeholder="Lastname" value={formData.lastname} onChange={handleChange}/>
                <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}/>
                <Input type="tel" name="phone" placeholder="Phone (optional)" value={formData.phone} onChange={handleChange}/>
              </div>
              {/* textarea */}
              <Textarea 
                className="h-[200px]"
                name="message"
                placeholder="Please describe your concern here."
                value={formData.message}
                onChange={handleChange}
              />
              {/* btn */}
              <Button size="md" className="max-w-40" type="submit" disabled={isSending} aria-busy={isSending}>
                {isSending ? "Sending..." : "Send"}
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