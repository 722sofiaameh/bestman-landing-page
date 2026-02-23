"use client";

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { JSX } from "react";

const services = [
  "Select a service",
  "Engineering Consulting",
  "Project Management",
  "Safety Audits",
  "Technical Support",
  "Other",
];

export const ContactSection = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="w-full bg-white py-[120px] px-4 md:px-8 lg:px-[120px]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left — Contact Info */}
        <div>
          <p className="text-[#0c6e8a] text-sm font-semibold  mb-4">
            Get in touch
          </p>
          <h2 className="text-[#1180C5] text-4xl lg:whitespace-nowrap  font-bold leading-tight mb-6">
            Contact Our Engineering Team
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-md mb-10">
            Whether you have a question, need more details about our services, or
            want to discuss a potential collaboration, we're here to help. Fill out
            the form below, and we'll get back to you as soon as possible.
          </p>

          <hr className="border-gray-200 mb-10" />

          <ul className="flex flex-col gap-6">
            <li className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-[#0C6E8A] mt-0.5 shrink-0" />
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1180C5] font-semibold text-base leading-snug hover:underline"
              >
                138 NLNG road, Amadi-Ama, Port-Harcourt, Rivers State, Nigeria
              </a>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-[#0C6E8A] shrink-0" />
              <a
                href="tel:+2348162037867"
                className="text-[#1180C5] font-semibold text-base hover:underline"
              >
                +234(0)816 2037 867
              </a>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-[#0C6E8A] shrink-0" />
              <a
                href="mailto:info@bestmaninternational.com"
                className="text-[#1180C5] font-semibold text-base hover:underline"
              >
                info@bestmaninternational.com
              </a>
            </li>
          </ul>
        </div>

        {/* Right — Form */}
        <div className="bg-gray-50 rounded-sm p-8 md:p-10">
          <h3 className="text-[#1180C5] text-2xl md:text-3xl font-bold text-center mb-8">
            Send us a message
          </h3>

          <div className="flex flex-col gap-5">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-700 text-sm font-medium">
                Name<span className="text-[#1180C5]">*</span>
              </label>
              <input
                type="text"
                placeholder="Jane Smith"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border border-gray-200 rounded-sm bg-white px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1180C5]/30 focus:border-[#1180C5] transition"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-700 text-sm font-medium">
                Email<span className="text-[#1180C5]">*</span>
              </label>
              <input
                type="email"
                placeholder="jane@mail.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full border border-gray-200 rounded-sm bg-white px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1180C5]/30 focus:border-[#1180C5] transition"
              />
            </div>

            {/* Service */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-700 text-sm font-medium">
                Service
              </label>
              <div className="relative">
                <select
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full appearance-none border border-gray-200 rounded-sm bg-white px-4 py-3 text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1180C5]/30 focus:border-[#1180C5] transition"
                >
                  {services.map((s) => (
                    <option key={s} value={s === "Select a service" ? "" : s}>
                      {s}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-700 text-sm font-medium">
                Message
              </label>
              <textarea
                placeholder="Your text"
                rows={7}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full border border-gray-200 rounded-sm bg-white px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1180C5]/30 focus:border-[#1180C5] transition resize-none"
              />
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              className="w-full bg-[#0c6e8a] hover:bg-[#1180C5] text-white font-semibold text-base py-4 rounded-sm transition-colors duration-200 mt-1"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
