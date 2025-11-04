"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

// The custom AKG Logo SVG component
const AkgLogo = () => (
  <svg
    width="55"
    height="55"
    viewBox="0 0 55 55"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M44.529 55V17.0673H55V0H0V55H44.529ZM10.46 10.4712H44.5394V44.5288H10.46V10.4712Z" />
    <path d="M12.5 44.5288V10.4712H22.5V38.5H32.5V44.5288H12.5Z" />
    <path d="M34.5 44.5288V10.4712H44.5V38.5H34.5V44.5288Z" />
    <path d="M12.5 10.4712L18 5L23.5 10.4712H20.5V15H15.5V10.4712H12.5Z" />
  </svg>
);

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-10 flex h-[104px] items-center justify-between bg-background px-5 py-6 transition-all duration-300 md:px-20 lg:px-[112px]">
        <Link href="/" aria-label="Go to homepage">
          <div className="cursor-pointer text-foreground transition-transform duration-300 ease-in hover:scale-125">
            <AkgLogo />
          </div>
        </Link>
        
        <nav className="hidden md:block">
          <ul className="flex flex-row gap-8 text-base/[20px]">
            {navLinks.map((link) => (
              <li key={link.href} className="group flex flex-col font-semibold hover:font-bold xl:text-xl/[120%]">
                <a href={link.href}>{link.label}</a>
                <span className="h-[2px] w-0 border-b-2 border-foreground transition-all duration-300 ease-in group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </nav>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden h-14 w-[153px] items-center justify-center gap-2 rounded border-2 border-primary bg-primary px-4 py-3 text-primary-foreground transition-all active:translate-y-1 md:flex hover:bg-background hover:text-foreground hover:shadow-bottom"
          >
            <span className="font-semibold lg:text-xl/[120%]">Resume</span>
            <ArrowUpRight className="h-5 w-5" />
          </a>

        <button
          className="z-30 text-foreground md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-0 z-20 transform bg-background text-foreground transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-10">
          <nav>
            <ul className="flex flex-col items-center gap-6 text-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-2xl font-semibold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="group mt-4 flex h-14 items-center justify-center gap-2 rounded border-2 border-primary bg-primary px-6 py-3 text-xl font-semibold text-primary-foreground transition-all hover:bg-background hover:text-foreground"
          >
            <span>Resume</span>
            <ArrowUpRight strokeWidth={2.5} className="h-5 w-5" />
          </a>
        </div>
      </div>
    </>
  );
}