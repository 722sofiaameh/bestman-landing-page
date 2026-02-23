"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JSX } from "react";

const products = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    title: "Hac porttitor magna tristique",
    description:
      "Eget id sed tincidunt sit pharetra iaculis aliquam risus odio. Arcu morbi lorem fermentum lacus.",
    href: "/products/1",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    title: "Amet venenatis vestibulum",
    description:
      "Ullamcorper eget tellus commodo egestas consequat lacus nulla donec in. Eu in viverra diam.",
    href: "/products/2",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    title: "Cursus auctor nulla nisl hac in",
    description:
      "Orci sit vitae cras porttitor accumsan felis sit. Nisi amet interdum imperdiet arcu. Dui est ac.",
    href: "/products/3",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    title: "Volutpat morbi rhoncus sit et",
    description:
      "Amet adipiscing tincidunt elit tristique accumsan consequat. Dui sed tempor sit hendrerit. Tellus.",
    href: "/products/4",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=600&q=80",
    title: "Quam ut turpis ac amet tellus",
    description:
      "Id id purus amet odio tortor auctor ornare lacus tellus. Volutpat enim massa ridiculus est elit.",
    href: "/products/5",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    title: "Nibh sed tempor pellentesque",
    description:
      "Quis nisl hendrerit ut sed duis. Tristique amet phasellus tellus arcu in. Cras tincidunt porttitor.",
    href: "/products/6",
  },
];

const placeholderImages = [
  "https://picsum.photos/seed/arch1/600/400",
  "https://picsum.photos/seed/build2/600/400",
  "https://picsum.photos/seed/steel3/600/400",
  "https://picsum.photos/seed/office4/600/400",
  "https://picsum.photos/seed/garden5/600/400",
  "https://picsum.photos/seed/living6/600/400",
];

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
}

function ProductCard({ image, title, description, href }: ProductCardProps) {
  return (
    <div className="flex flex-col bg-[#FAFAFA] group cursor-pointer">
      {/* Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden mb-2">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 lg:p-5">
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
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              image={placeholderImages[index]}
              title={product.title}
              description={product.description}
              href={product.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};