"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
];

interface MissionVisionSectionProps {
  backgroundColor?: string;
}

export const MissionVisionSection = ({ backgroundColor = "bg-greyscale-0" }: MissionVisionSectionProps): React.ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isWhiteBackground = backgroundColor === "bg-greyscale-0";
  const logoSrc = isWhiteBackground 
    ? "/Frame 3 (2).svg"
    : "/Frame 3 (1).svg";
  const textColor = isWhiteBackground ? "text-[#5A6272]" : "text-white";
  const hoverTextColor = isWhiteBackground ? "hover:text-[#0c6e8a]" : "hover:text-white/80";

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`w-full ${backgroundColor} fixed top-0 left-0 right-0 z-[9999] pb-4 border-b border-gray-100 lg:border-0 shadow-sm lg:shadow-none lg:pt-8`} style={{ position: 'fixed' }}>
        <div className="flex w-full max-w-[1200px] mx-auto items-center justify-between px-4 md:px-[15px] py-4 md:py-3 lg:py-0">
          <Link href="/">
            <img
              className="shrink-0 h-8 md:h-auto w-auto cursor-pointer"
              alt="Company Logo"
              src={logoSrc}
            />
          </Link>

          <nav className="hidden lg:flex items-center justify-center gap-[30px]">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`cursor-pointer font-semibold ${textColor} text-base tracking-[0] leading-[22.4px] whitespace-nowrap ${hoverTextColor} transition-colors`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact">
              <Button className="hidden lg:flex cursor-pointer h-auto gap-4 pt-3 pb-[15px] px-[30px] bg-[#0c6e8a] hover:bg-[#0a5a6f] rounded-none border border-[#0c6e8a] transition-colors">
                <span className="font-semibold text-greyscale-0 text-base tracking-[-0.08px] leading-[25.6px]">
                  Contact us
                </span>
                <img
                  src="/arrow-right.svg"
                  alt="Arrow right"
                  className="w-6 h-6"
                />
              </Button>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden cursor-pointer p-2 -mr-2 ${textColor} ${hoverTextColor} transition-colors`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop Overlay - Outside section */}
      {isMenuOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black/40 z-[110] transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Slide-in Mobile Menu */}
          <div
            className={`lg:hidden fixed top-0 right-0 h-full w-[320px] max-w-[85vw] bg-white shadow-2xl z-[120] transform transition-transform duration-300 ease-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
          >
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  <img
                    className="h-7 cursor-pointer"
                    alt="Company Logo"
                    src="https://c.animaapp.com/mlvt2sbbsosEG0/img/frame-3-1.svg"
                  />
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="cursor-pointer p-2 text-[#5A6272] hover:text-[#0c6e8a] hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Menu Content */}
              <nav className="flex-1 flex flex-col p-5 overflow-y-auto">
                <div className="flex flex-col gap-1 mb-6">
                  {navigationLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="cursor-pointer text-left font-semibold text-[#5A6272] text-base py-3 px-4 rounded-md hover:text-[#0c6e8a] hover:bg-[#0c6e8a]/5 transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    <Button className="cursor-pointer w-full h-auto gap-3 pt-3 pb-[15px] px-6 bg-[#0c6e8a] hover:bg-[#0a5a6f] rounded-none border-[#0c6e8a] transition-colors">
                      <span className="font-semibold text-white text-sm tracking-[-0.08px] leading-[25.6px]">
                        Contact us
                      </span>
                      <img
                        src="/arrow-right.svg"
                        alt="Arrow right"
                        className="w-5 h-5"
                      />
                    </Button>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
};
