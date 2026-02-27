"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JSX } from "react";
import { products } from "@/lib/products-data";



interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
}

function ProductCard({ image, title, description, href }: ProductCardProps) {
  return (
    <div className="flex flex-col h-full group cursor-pointer">
      {/* Image */}
      <div className="relative w-full h-[220px] sm:h-[260px] md:h-[280px] overflow-hidden ">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-3 bg-[#FAFAFA] sm:p-4 lg:p-5 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-[#1a8cc7] text-base sm:text-lg lg:text-xl font-semibold leading-snug mb-1.5 sm:mb-2 lg:mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 lg:mb-5 flex-1">
          {description}
        </p>

        {/* Learn More link */}
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-[#1a8cc7] text-xs sm:text-sm font-semibold border-b border-[#1a8cc7] w-fit hover:opacity-70 transition-opacity duration-200"
        >
          Learn More
          <img
            src="/arrow-right%202.svg"
            alt="Arrow right"
            className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
          />
        </Link>
      </div>
    </div>
  );
}

export const ProductsGridSection = (): JSX.Element => {
  return (
    <section className="flex items-center justify-center py-10 sm:py-12 md:py-16 lg:py-[120px] px-4 sm:px-6 md:px-8 lg:px-[120px] bg-white">
      <div className="w-full max-w-[1200px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 sm:gap-x-5 md:gap-x-6 lg:gap-x-8 gap-y-6 sm:gap-y-8 md:gap-y-10 lg:gap-y-14">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              href={`/products/${product.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};