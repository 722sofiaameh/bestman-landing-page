import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { JSX } from "react";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
];

export const HeroContentSection = (): JSX.Element => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 translate-y-[-1rem] animate-fade-in opacity-0">
      <nav className="bg-[#1180c5] w-full">
        <div className="max-w-[1200px] mx-auto px-[15px] min-h-20 flex items-center justify-between">
          <img
            className="h-auto translate-y-[-0.5rem] animate-fade-in opacity-0 [--animation-delay:200ms]"
            alt="Company Logo"
            src="https://c.animaapp.com/mlxaygwhYd0iJj/img/frame-3-1.svg"
          />

          <ul className="flex items-center gap-0 translate-y-[-0.5rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="px-[15px] py-7 inline-flex items-center justify-center font-brentor-template-framer-website-semantic-link font-[number:var(--brentor-template-framer-website-semantic-link-font-weight)] text-white text-[length:var(--brentor-template-framer-website-semantic-link-font-size)] tracking-[var(--brentor-template-framer-website-semantic-link-letter-spacing)] leading-[var(--brentor-template-framer-website-semantic-link-line-height)] [font-style:var(--brentor-template-framer-website-semantic-link-font-style)] transition-opacity hover:opacity-80"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Link href="/contact">
            <Button className="h-auto bg-[#0c6e8a] hover:bg-[#0a5a70] text-white px-[30px] pt-3 pb-[15px] gap-4 transition-colors translate-y-[-0.5rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
              <span className="font-semibold tracking-[-0.08px] leading-[25.6px]">
                Contact Us
              </span>
              <ArrowRightIcon className="w-6 h-6" />
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};
