"use client";

import { MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { JSX } from "react";
import Link from "next/link";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Products", href: "/products" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col w-full items-center justify-center pt-12 md:pt-16 lg:pt-[100px] pb-16 lg:pb-5 px-0 bg-greyscale-0">
      <div className="flex flex-col w-full max-w-[1200px] items-center justify-center gap-8 md:gap-10 px-4 md:px-[15px] py-0">
        <div className="flex flex-col items-start gap-0 w-full">
          {/* Top: brand + contact */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-0 pb-5 w-full border-b border-[#dde0e3] gap-6 md:gap-8">
            <div className="flex flex-col max-w-full md:max-w-[min(100%,400px)] items-start gap-3 md:gap-3 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
              <img
                className="h-9 w-9 md:h-10 md:w-10 shrink-0"
                alt="Bestman International Ltd"
                src="/bestman.svg"
              />
              <p className="font-bold text-[#1180c5] text-sm sm:text-base tracking-wide uppercase leading-snug">
                BESTMAN INTERNATIONAL LTD
              </p>
              <p className="text-sm font-semibold text-[#0c6e8a] leading-relaxed">
                Powering Critical Industries with <br /> Precision and Expertise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4 sm:gap-x-6 sm:gap-y-2 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms] w-full md:w-auto">
              <a
                href="mailto:info@bestmaninternational.com"
                className="cursor-pointer inline-flex items-center gap-2.5 transition-opacity hover:opacity-70 min-w-0"
              >
                <MailIcon className="w-5 h-5 text-[#1180c5] shrink-0" />
                <span className="text-sm md:text-[15px] text-[#1180c5] break-all sm:break-normal">
                  info@bestmaninternational.com
                </span>
              </a>

              <Separator
                orientation="vertical"
                className="hidden sm:block h-[22.8px] shrink-0 bg-[#dde0e3]"
              />

              <div className="inline-flex items-start sm:items-center gap-2.5 min-w-0">
                <PhoneIcon className="w-5 h-5 text-[#1180c5] shrink-0 mt-0.5 sm:mt-0" />
                <p className="text-sm md:text-[15px] text-[#1180c5] leading-snug">
                  <a
                    href="tel:+2348162037867"
                    className="transition-opacity hover:opacity-70 whitespace-nowrap"
                  >
                    +234 816 203 7867
                  </a>
                  <span className="text-brentor-templateframerwebsiteshuttle-gray">
                    ,{" "}
                  </span>
                  <a
                    href="tel:+2348055503030"
                    className="transition-opacity hover:opacity-70 whitespace-nowrap"
                  >
                    +234 805 550 3030
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Middle: 3 equal columns + vertical rule + newsletter — one flex gap matches inner column-gap */}
          <div className="mt-6 flex w-full flex-col gap-10 lg:flex-row lg:items-stretch">

            {/* Three equal columns */}
            <div className="
  grid w-full min-w-0
  grid-cols-1 gap-8
  sm:grid-cols-[0.6fr_1.2fr_1.2fr] sm:gap-x-8
  lg:flex-1
  -translate-y-4 animate-fade-in opacity-0 [--animation-delay:600ms]
  lg:pt-3
">

              <div className="flex flex-col gap-2 " >
                <h3 className="font-semibold text-[#1180c5] text-sm md:text-base">Company</h3>
                <ul className="flex flex-col items-start gap-1.5">
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className="cursor-pointer text-sm md:text-[15px] text-brentor-templateframerwebsiteshuttle-gray transition-colors hover:text-[#1180c5]">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col  gap-2">
                <h3 className="font-semibold text-[#1180c5] text-sm md:text-base">Contact us anytime</h3>
                <p className="text-sm md:text-[15px] text-brentor-templateframerwebsiteshuttle-gray leading-relaxed">
                  Monday – Friday: 9:00 AM – 5:00 PM<br />
                  Saturday – Sunday: Closed
                </p>
              </div>

              <div className="flex flex-col  gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-[#1180c5] text-sm md:text-base">Head Office</h3>
                  <address className="not-italic text-sm md:text-[15px] text-brentor-templateframerwebsiteshuttle-gray leading-relaxed">
                    19 Abana street, old GRA Portharcourt, Rivers state
                  </address>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-[#1180c5] text-sm md:text-base">Fabrication Yard/Valve Workshop</h3>
                  <address className="not-italic text-sm md:text-[15px] text-brentor-templateframerwebsiteshuttle-gray leading-relaxed">
                    Trans-Amadi, Portharcourt, Rivers State Nigeria
                  </address>
                </div>
              </div>

            </div>

            {/* Vertical divider */}
            <div className="hidden lg:block w-px shrink-0 bg-[#dde0e3] self-stretch" aria-hidden />

            {/* Newsletter */}
            <div className="flex w-full flex-col justify-start gap-5 border-t border-[#dde0e3] pt-8 lg:w-72 xl:w-80 lg:shrink-0 lg:border-t-0 lg:pt-0 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:900ms]">
              <p className="text-[#1180c5] text-sm md:text-[15px] font-semibold leading-relaxed">
                Stay informed about our latest products, engineering innovations, and industry updates.
              </p>
              <form className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-1.5 w-full" onSubmit={(e) => e.preventDefault()}>
                <Input
                  type="email"
                  placeholder="Email*"
                  className="flex-1 h-auto rounded-none shadow-none bg-brentor-templateframerwebsitealabaster border-[#1334751a] font-brentor-template-framer-website-semantic-input font-[number:var(--brentor-template-framer-website-semantic-input-font-weight)] text-brentor-templateframerwebsiteshuttle-gray text-sm px-4 md:px-5 py-2 md:py-2.5"
                  required
                />
                <Button
                  type="submit"
                  className="cursor-pointer h-auto min-w-full sm:min-w-[140px] rounded-none px-6 py-2 md:py-2.5 bg-[#0c6e8a] hover:bg-[#0c6e8a]/90 border border-[#0c6e8a] text-greyscale-0 text-sm whitespace-nowrap transition-colors"
                >
                  Subscribe
                </Button>
              </form>
            </div>

          </div>
        </div>

        <div className="flex w-full items-center justify-center sm:justify-start pt-[19px] border-t border-[#dde0e3] -translate-y-4 animate-fade-in opacity-0 [--animation-delay:1000ms]">
          <p className="text-sm text-brentor-templateframerwebsiteshuttle-gray text-center sm:text-left">
            © Bestman. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
