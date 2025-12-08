"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Linkedin, Github, FileText, Mail } from "lucide-react";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/your-linkedin-profile/",
    icon: Linkedin,
    ariaLabel: "LinkedIn Profile",
  },
  {
    href: "https://github.com/your-github-profile",
    icon: Github,
    ariaLabel: "GitHub Profile",
  },
  {
    href: "https://leetcode.com/your-leetcode-profile/",
    icon: FileText,
    ariaLabel: "LeetCode Profile",
  },
  {
    href: "mailto:abhay.21cse332@citranchi.ac.in",
    icon: Mail,
    ariaLabel: "Send an Email",
  },
];

const HeroSection = () => {
  const [typedName, setTypedName] = useState("");
  const nameToType = "Abhay";

  useEffect(() => {
    if (typedName.length < nameToType.length) {
      const timer = setTimeout(() => {
        setTypedName(nameToType.slice(0, typedName.length + 1));
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [typedName]);

  return (
    <div className="flex items-center justify-evenly bg-background flex-col-reverse md:flex-row px-4 sm:px-6 md:px-20 md:pt-10 lg:px-28 2xl:px-36">
      <section className="flex flex-col gap-8 md:w-1/2">
        <div className="flex flex-col gap-3 text-[28px]/[1.14] tracking-tight lg:gap-5 lg:text-5xl/[1.17]">
          <h1>
            Hello, I`am{" "}
            <span className="font-extrabold relative inline-block">
              {typedName}
              {typedName.length === nameToType.length && (
                <span className="absolute right-[-4px] top-0 bottom-0 my-auto h-[0.9em] w-0.5 animate-pulse bg-foreground" />
              )}
            </span>
          </h1>
          <p>
            <span className="font-extrabold">Full-Stack </span>
            <span className="text-outline font-extrabold">Developer</span>
          </p>
          <p>
            Based In <span className="font-extrabold">Noida 62, India.</span>
          </p>
        </div>

        <p className="text-base/6 text-muted-foreground">
          Skilled full-stack developer with a focus on backend and DevOps. Experienced in building scalable backend systems (Node.js, Python, Java) and managing cloud infrastructure (AWS, Docker, Kubernetes). Strong in automating deployments with CI/CD pipelines and optimizing performance. A problem-solver with hands-on experience in delivering efficient, high-quality solutions.
        </p>

        <div className="lg:mt-10">
          <div className="flex gap-6">
            {socialLinks.map(({ href, icon: Icon, ariaLabel }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                className="flex items-center justify-center group bg-[var(--color-social-icon-background)] hover:bg-[var(--color-social-icon-hover-background)] text-[var(--color-social-icon-foreground)] hover:text-[var(--color-social-icon-hover-foreground)] h-12 w-12 rounded border-2 border-border p-1 transition-all duration-300 hover:scale-105 active:scale-90 md:h-16 md:w-16"
              >
                <Icon className="h-5 w-5 md:h-8 md:w-8" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center md:w-1/2">
        <Image
          src="/head.svg"
          alt="Developer illustration"
          width={630}
          height={750}
          className="max-h-[750px] w-full pb-8 sm:w-[539px] xl:w-[630px]"
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;