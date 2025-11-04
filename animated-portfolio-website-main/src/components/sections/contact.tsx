"use client";

import { useState, useEffect } from "react";
import { Mail, Linkedin, Github, Facebook } from "lucide-react";
import { SiDiscord } from "react-icons/si";

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/abhay332/",
    ariaLabel: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/coderabhay332",
    ariaLabel: "GitHub",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=100071492293346",
    ariaLabel: "Facebook",
  },
  {
    icon: SiDiscord,
    href: "https://discord.com/users/1163503921780760576",
    ariaLabel: "Discord",
  },
];

const Contact = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="contact" className="relative bg-black text-white">
      <div className="py-10 md:py-20">
        <h2 className="text-center text-[28px]/[114%] font-normal tracking-tight lg:text-[48px]/[114%]">
          Contact <span className="font-extrabold">Me</span>
        </h2>
      </div>

      <div className="bg-white px-4 py-16 text-black sm:px-6 md:px-20 lg:px-28 lg:py-24 2xl:px-36">
        <div className="mx-auto grid max-w-screen-xl gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Column */}
          <div className="flex flex-col gap-10">
            <form className="flex flex-col gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full rounded-lg border-2 border-black bg-white p-4 text-black placeholder:text-zinc-500 focus:border-black focus:ring-0"
                aria-label="Name"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full rounded-lg border-2 border-black bg-white p-4 text-black placeholder:text-zinc-500 focus:border-black focus:ring-0"
                aria-label="Email"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full rounded-lg border-2 border-black bg-white p-4 text-black placeholder:text-zinc-500 focus:border-black focus:ring-0"
                aria-label="Subject"
              />
              <textarea
                name="message"
                placeholder="Write your message"
                rows={5}
                className="w-full resize-none rounded-lg border-2 border-black bg-white p-4 text-black placeholder:text-zinc-500 focus:border-black focus:ring-0"
                aria-label="Message"
              />
              <button
                type="submit"
                className="group w-max rounded-lg border-2 border-black bg-black px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black hover:shadow-bottom active:translate-y-1"
              >
                Get In Touch
              </button>
            </form>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="group flex h-16 w-16 items-center justify-center rounded-lg border-2 border-black bg-white text-black transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white active:scale-95"
                >
                  <social.icon strokeWidth={1.5} className="h-8 w-8" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-start pt-2">
            <h3 className="text-[40px]/[1.2] font-bold tracking-tight text-black lg:text-5xl/[1.2]">
              Let's <span className="text-outline">talk</span> for
              <br />
              Something special
            </h3>
            <p className="mt-6 max-w-md text-base text-zinc-500">
              I'm currently looking for new opportunities, my inbox always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a
              href="mailto:abhay.21cse332@citranchi.ac.in"
              className="mt-8 flex items-center gap-3 text-lg font-semibold text-black transition-colors hover:text-zinc-700"
            >
              <Mail className="h-6 w-6" />
              <span>abhay.21cse332@citranchi.ac.in</span>
            </a>
          </div>
        </div>
      </div>
      
      {isScrolled && (
        <button
          onClick={scrollTop}
          aria-label="Scroll to top"
          className="animate-in fade-in fixed bottom-10 right-10 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-black text-lg font-bold text-white shadow-lg transition-transform duration-300 hover:scale-110"
        >
          Up
        </button>
      )}
    </section>
  );
};

export default Contact;