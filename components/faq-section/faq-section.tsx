"use client";

import { useState } from "react";
import { JSX } from "react";

const faqs = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "We offer a comprehensive range of engineering services including valve testing, maintenance, calibration, and end-to-end engineering solutions tailored to your operational needs.",
  },
  {
    id: 2,
    question: "How do I start a project?",
    answer:
      "Simply reach out to our team via the contact form or give us a call. We'll schedule an initial consultation to understand your requirements and propose a tailored plan.",
  },
  {
    id: 3,
    question: "Do you provide cost estimates?",
    answer:
      "Yes, we provide detailed cost estimates after an initial assessment of your project scope. We strive to offer transparent and competitive pricing.",
  },
  {
    id: 4,
    question: "How long will my project take?",
    answer:
      "Project timelines vary depending on scope and complexity. We work with you to establish a realistic schedule and keep you informed at every milestone.",
  },
  {
    id: 5,
    question: "Do you handle permits?",
    answer:
      "Yes, our team can assist with the necessary permits and regulatory compliance to ensure your project meets all local and international standards.",
  },
  {
    id: 6,
    question: "Can you work with my budget?",
    answer:
      "We work with a wide range of budgets and will always seek the most cost-effective solution without compromising on quality or safety.",
  },
  {
    id: 7,
    question: "What makes you different?",
    answer:
      "Our combination of precision engineering, industry-leading equipment, and a client-first approach sets us apart. We deliver tailored solutions, not off-the-shelf answers.",
  },
  {
    id: 8,
    question: "How can I track progress?",
    answer:
      "We provide regular progress updates and have dedicated project managers who keep you informed throughout the entire duration of your project.",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-[#0C6E8A]/30">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span className="text-[#1180C5] text-base font-semibold leading-snug group-hover:opacity-80 transition-opacity">
          {question}
        </span>
            <img
              src="/arrow-down.svg"
              alt="Arrow down"
              className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-48 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export const FAQSection = (): JSX.Element => {
  const [openId, setOpenId] = useState<number | null>(null);

  const leftColumn = faqs.slice(0, 4);
  const rightColumn = faqs.slice(4, 8);

  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <section className="w-full bg-[#f5f5f3] py-[120px] px-4 md:px-8 lg:px-[120px]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#0C6E8A] text-sm font-semibold  uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-[#1180C5] text-4xl md:text-5xl font-bold">
            Customers frequently ask.
          </h2>
        </div>

        {/* Two-column FAQ grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {/* Left column */}
          <div>
            {leftColumn.map((faq) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === faq.id}
                onToggle={() => toggle(faq.id)}
              />
            ))}
          </div>

          {/* Right column */}
          <div>
            {rightColumn.map((faq) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === faq.id}
                onToggle={() => toggle(faq.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
