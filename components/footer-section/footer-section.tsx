"use client";

import { MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { JSX } from "react";

const companyLinks = [
  { label: "About Us", href: "#" },
  { label: "Services", href: "#" },
  { label: "Our Products", href: "#" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Facebook", href: "#" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col w-full items-center justify-center pt-[100px] pb-5 px-0 bg-greyscale-0">
      <div className="flex flex-col w-full max-w-[1200px] items-center justify-center gap-10 px-[15px] py-0">
        <div className="flex flex-col items-start gap-0 w-full">
          <div className="flex items-end justify-between pt-0 pb-5 px-0 w-full border-b border-[#dde0e3]">
            <div className="flex flex-col max-w-[220px] items-start gap-[19.2px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              <img
                className="flex-[0_0_auto]"
                alt="Bestman International Logo"
                src="https://c.animaapp.com/mlvt2sbbsosEG0/img/frame-3.svg"
              />
              <p className="text-sm font-semibold text-[#1180c5] tracking-[var(--brentor-template-framer-website-semantic-heading-6-letter-spacing)] font-brentor-template-framer-website-semantic-heading-6 text-[length:var(--brentor-template-framer-website-semantic-heading-6-font-size)] leading-[var(--brentor-template-framer-website-semantic-heading-6-line-height)] [font-style:var(--brentor-template-framer-website-semantic-heading-6-font-style)] w-[220px]">
                Powering Critical Industries with Precision and Expertise.
              </p>
            </div>

            <div className="inline-flex min-w-[370px] items-end gap-[20.7px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              <a
                href="mailto:info@bestmaninternational.com"
                className="inline-flex items-center gap-2.5 transition-opacity hover:opacity-70"
              >
                <MailIcon className="w-5 h-5 text-[#1180c5]" />
                <span className="font-[number:var(--brentor-template-framer-website-semantic-link-font-weight)] tracking-[var(--brentor-template-framer-website-semantic-link-letter-spacing)] leading-[var(--brentor-template-framer-website-semantic-link-line-height)] font-brentor-template-framer-website-semantic-link [font-style:var(--brentor-template-framer-website-semantic-link-font-style)] text-[length:var(--brentor-template-framer-website-semantic-link-font-size)] text-[#1180c5]">
                  info@bestmaninternational.com
                </span>
              </a>

              <Separator
                orientation="vertical"
                className="h-[22.8px] bg-brentor-templateframerwebsiteiron"
              />

              <a
                href="tel:+2348162037867"
                className="inline-flex items-center gap-2.5 transition-opacity hover:opacity-70"
              >
                <PhoneIcon className="w-5 h-5 text-[#1180c5]" />
                <span className="font-brentor-template-framer-website-semantic-link font-[number:var(--brentor-template-framer-website-semantic-link-font-weight)] text-[#1180c5] text-[length:var(--brentor-template-framer-website-semantic-link-font-size)] tracking-[var(--brentor-template-framer-website-semantic-link-letter-spacing)] leading-[var(--brentor-template-framer-website-semantic-link-line-height)] whitespace-nowrap [font-style:var(--brentor-template-framer-website-semantic-link-font-style)]">
                  +234 816 203 7867
                </span>
              </a>
            </div>
          </div>

          <div className="flex items-start justify-center mt-6 gap-20 w-full">
            <div className="flex w-[639px] items-start justify-between pt-5 pb-0 px-0">
              <nav
                className="flex flex-col items-start gap-[7px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
                aria-label="Company"
              >
                <h3 className="font-brentor-template-framer-website-semantic-heading-6 font-[number:var(--brentor-template-framer-website-semantic-heading-6-font-weight)] text-[#1180c5] text-[length:var(--brentor-template-framer-website-semantic-heading-6-font-size)] tracking-[var(--brentor-template-framer-website-semantic-heading-6-letter-spacing)] leading-[var(--brentor-template-framer-website-semantic-heading-6-line-height)] whitespace-nowrap [font-style:var(--brentor-template-framer-website-semantic-heading-6-font-style)]">
                  Company
                </h3>
                <ul className="flex flex-col items-start gap-[5px]">
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="font-brentor-template-framer-website-plus-jakarta-sans-regular font-[number:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-weight)] text-brentor-templateframerwebsiteshuttle-gray text-[length:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-size)] tracking-[var(--brentor-template-framer-website-plus-jakarta-sans-regular-letter-spacing)] leading-[var(--brentor-template-framer-website-plus-jakarta-sans-regular-line-height)] [font-style:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-style)] transition-colors hover:text-[#1180c5]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav
                className="flex flex-col items-start gap-[7px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:700ms]"
                aria-label="Social Media"
              >
                <h3 className="font-brentor-template-framer-website-semantic-heading-6 font-[number:var(--brentor-template-framer-website-semantic-heading-6-font-weight)] text-[#1180c5] text-[length:var(--brentor-template-framer-website-semantic-heading-6-font-size)] tracking-[var(--brentor-template-framer-website-semantic-heading-6-letter-spacing)] leading-[var(--brentor-template-framer-website-semantic-heading-6-line-height)] whitespace-nowrap [font-style:var(--brentor-template-framer-website-semantic-heading-6-font-style)]">
                  Socials
                </h3>
                <ul className="flex flex-col items-start gap-[5px]">
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="font-brentor-template-framer-website-plus-jakarta-sans-regular font-[number:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-weight)] text-brentor-templateframerwebsiteshuttle-gray text-[length:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-size)] tracking-[var(--brentor-template-framer-website-plus-jakarta-sans-regular-letter-spacing)] leading-[var(--brentor-template-framer-website-plus-jakarta-sans-regular-line-height)] whitespace-nowrap [font-style:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-style)] transition-colors hover:text-[#1180c5]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="flex flex-col w-[269px] gap-[15px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
                <h3 className="font-brentor-template-framer-website-semantic-heading-6 font-[number:var(--brentor-template-framer-website-semantic-heading-6-font-weight)] text-[#1180c5] text-[length:var(--brentor-template-framer-website-semantic-heading-6-font-size)] tracking-[var(--brentor-template-framer-website-semantic-heading-6-letter-spacing)] leading-[var(--brentor-template-framer-website-semantic-heading-6-line-height)] whitespace-nowrap [font-style:var(--brentor-template-framer-website-semantic-heading-6-font-style)]">
                  Contact us anytime
                </h3>
                <div className="flex flex-col gap-[15px]">
                  <p className="font-brentor-template-framer-website-plus-jakarta-sans-regular whitespace-nowrap font-[number:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-weight)] text-brentor-templateframerwebsiteshuttle-gray text-[length:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-size)] tracking-[var(--brentor-template-framer-website-plus-jakarta-sans-regular-letter-spacing)] leading-[var(--brentor-template-framer-website-plus-jakarta-sans-regular-line-height)] [font-style:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-style)]">
                    Monday – Friday: 9:00 AM – 5:00 PM
                    <br />
                    Saturday – Sunday: Closed
                  </p>
                  <address className="not-italic font-brentor-template-framer-website-plus-jakarta-sans-regular font-[number:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-weight)] text-brentor-templateframerwebsiteshuttle-gray text-[length:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-size)] tracking-[var(--brentor-template-framer-website-plus-jakarta-sans-regular-letter-spacing)] leading-[var(--brentor-template-framer-website-plus-jakarta-sans-regular-line-height)] [font-style:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-style)] w-[299px]">
                    138 NLNG road, Amadi-Ama, Port-Harcourt, Rivers State,
                    Nigeria
                  </address>
                </div>
              </div>
            </div>

            <Separator
              orientation="vertical"
              className="h-full min-h-[200px] bg-[#DDE0E3]"
            />

            <div className="flex flex-col max-w-[370px] w-[370px] justify-center gap-5 pt-[19.2px] pb-[0.01px] px-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:900ms]">
              <div className="flex flex-col max-w-[330px]">
                <p className="font-brentor-template-framer-website-semantic-heading-6 font-[number:var(--brentor-template-framer-website-semantic-heading-6-font-weight)] text-[#1180c5] text-[length:var(--brentor-template-framer-website-semantic-heading-6-font-size)] tracking-[var(--brentor-template-framer-website-semantic-heading-6-letter-spacing)] leading-[var(--brentor-template-framer-website-semantic-heading-6-line-height)] [font-style:var(--brentor-template-framer-website-semantic-heading-6-font-style)]">
                  Stay informed about our latest products, engineering
                  innovations, and industry updates.
                </p>
              </div>

              <form
                className="flex items-start gap-1.5 w-full"
                onSubmit={(e) => e.preventDefault()}
              >
                <Input
                  type="email"
                  placeholder="Email*"
                  className="flex-1 h-auto rounded-none shadow-none bg-brentor-templateframerwebsitealabaster border-[#1334751a] font-brentor-template-framer-website-semantic-input font-[number:var(--brentor-template-framer-website-semantic-input-font-weight)] text-brentor-templateframerwebsiteshuttle-gray text-[length:var(--brentor-template-framer-website-semantic-input-font-size)] tracking-[var(--brentor-template-framer-website-semantic-input-letter-spacing)] leading-[var(--brentor-template-framer-website-semantic-input-line-height)] [font-style:var(--brentor-template-framer-website-semantic-input-font-style)] px-5 py-2.5"
                  required
                />
                <Button
                  type="submit"
                  className="h-auto min-w-[140px] rounded-none min-h-[3px] px-[32.86px] py-2 bg-[#0c6e8a] hover:bg-[#0c6e8a]/90 border border-[#0c6e8a] font-brentor-template-framer-website-semantic-button font-[number:var(--brentor-template-framer-website-semantic-button-font-weight)] text-greyscale-0 text-[length:var(--brentor-template-framer-website-semantic-button-font-size)] tracking-[var(--brentor-template-framer-website-semantic-button-letter-spacing)] leading-[var(--brentor-template-framer-website-semantic-button-line-height)] whitespace-nowrap [font-style:var(--brentor-template-framer-website-semantic-button-font-style)] transition-colors"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-[19px] pb-0 px-0 w-full border-t border-[#dde0e3] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
          <p className="font-brentor-template-framer-website-plus-jakarta-sans-regular font-[number:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-weight)] text-brentor-templateframerwebsiteshuttle-gray text-[length:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-size)] tracking-[var(--brentor-template-framer-website-plus-jakarta-sans-regular-letter-spacing)] leading-[var(--brentor-template-framer-website-plus-jakarta-sans-regular-line-height)] whitespace-nowrap [font-style:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-style)]">
            © Bestman. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
