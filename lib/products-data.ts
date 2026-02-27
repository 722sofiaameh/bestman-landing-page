export interface Product {
  id: string;
  slug: string;
  title: string;
  image: string;
  description: string;
  overview: string[];
  keyFeatures: string[];
  whyChoose: string[];
}

export const products: Product[] = [
  {
    id: "1",
    slug: "customized-containerized-mobile-workshop-solutions",
    title: "Customized Containerized Mobile Workshop Solutions",
    image: "/Container2.svg",
    description:
      "Bestman manufactures fully customized containerized Mobile Workshops designed specifi..",
    overview: [
      "Bestman manufactures fully customized containerized Mobile Workshops designed specifically for on-site repair and maintenance of Safety and Isolation Valves. Built using either 20-foot or 40-foot shipping containers, these units are engineered for rapid deployment to customer facilities, offshore platforms, and plant turnaround sites.",
      "Each mobile workshop is configured to client specifications and equipped with valve testing systems, machining tools, and organized workspaces that support efficient field operations. Designed for durability and mobility, the unit enables high-performance maintenance while minimizing operational disruption and transportation delays",
    ],
    keyFeatures: [
      "Available in 20’ and 40’ container configurations",
      "Designed for safety and isolation valve repair",
      "Fully customizable interior layout",
      "Ready for plant turnaround and shutdown projects",
      "Transportable and site-ready design",
    ],
    whyChoose: [
      "Enables on-site maintenance without equipment relocation",
      "Reduces downtime during plant shutdowns",
      "Built for harsh industrial environments",
      "Configured to meet client-specific operational needs",
    ],
  },
  {
    id: "2",
    slug: "professional-in-situ-valve-repair-solutions",
    title: "Professional In-Situ Valve Repair Solutions",
    image: "/Construction.svg",
    description:
      "With over two decades of experience in in-situ valve repair in partnership with EFCO, Bestman del..",
    overview: [
      "With over two decades of experience in in-situ valve repair in partnership with EFCO, Bestman delivers precision on-site machining and valve restoration services for industrial clients. Our in-situ solutions allow valves to be repaired directly within the pipeline or system without removal, significantly reducing production losses and maintenance costs.",
      "Using advanced EFCO equipment and trained specialists, we restore sealing surfaces, valve seats, and damaged components to required tolerances while maintaining structural integrity and compliance with operational standards.",
    ],
    keyFeatures: [
      "Over 20 years of in-situ repair expertise",
      "Supported by EFCO machining technology",
      "On-site restoration without valve removal",
      "Suitable for critical and high-pressure systems",
    ],
    whyChoose: [
      "Minimizes plant shutdown time",
      "Cost-effective alternative to replacement",
      "Ensures precision restoration",
      "Proven performance in oil & gas facilities"
    ],
  },
  {
    id: "3",
    slug: "in-situ-valve-machining-technology",
    title: "In-Situ Valve Machining Technology",
    image: "/image11.svg",
    description:
      "Bestman specializes in in-situ machining of Turbine Control Valves using NC-controlled EFCO..",
    overview: [
      "Bestman specializes in in-situ machining of Turbine Control Valves using NC-controlled EFCO TD2 systems. This advanced machining technology ensures highly accurate restoration of valve sealing surfaces and critical components directly at site.",
      "The system is engineered to meet the demanding requirements of turbine and control valve maintenance, delivering tight tolerances, precision cutting, and consistent performance standards required in high-pressure industrial environments."
    ],
    keyFeatures: [
      "NC-controlled EFCO TD2 machining system",
      "Designed for turbine control valves",
      "High-precision in-situ machining capability","Suitable for complex valve geometries"
    ],
    whyChoose: [
      "Ensures superior machining accuracy",
      "Reduces need for valve replacement",
      "Minimizes operational downtime","Backed by EFCO technology expertise"
    ],
  },
  {
    id: "4",
    slug: "portable-stationary-valve-grinding-equipment",
    title: "Portable & Stationary Valve Grinding Equipment",
    image: "/image-13.svg",
    description:
      "Bestman’s product range includes both portable and stationary valve grinding and lapping equipm..",
    overview: [
      "Bestman’s product range includes both portable and stationary valve grinding and lapping equipment designed for a wide variety of industrial applications. These systems are engineered to restore valve seats, sealing surfaces, and critical components with high precision and consistent finishing quality.",
      "Designed for workshop and field use, the equipment provides flexibility while maintaining industrial-grade durability and operational efficiency."
    ],
    keyFeatures: [
      "Portable and stationary configurations available",
      "Precision grinding and lapping capability",
      "Suitable for multiple valve sizes","Designed for industrial maintenance operations"
    ],
    whyChoose: [
      "Improves sealing performance",
      "Extends valve lifespan","Flexible for field and workshop use","Reliable and durable construction"
    ],
  },
  {
    id: "5",
    slug: "valve-test-equipment-pst-10",
    title: "Valve Test Equipment – PST-10",
    image: "/PHOTO-21.svg",
    description:
      "The PST-10 valve testing system is designed to perform portable valve investigations to ensure s..",
    overview: [
      "The PST-10 valve testing system is designed to perform portable valve investigations to ensure safe and reliable shut-off valve performance. Developed with EFCO technology, this equipment supports efficient testing procedures that validate valve integrity, pressure tolerance, and operational compliance.",
      "Its portable configuration makes it ideal for field applications, plant maintenance programs, and safety inspections where reliable performance verification is critical."
    ],
    keyFeatures: [
      "Portable valve testing capability",
      "Designed for shut-off valve investigation",
      "EFCO-supported testing technology","Suitable for field and workshop use"
    ],
    whyChoose: [
      "Ensures valve safety and compliance",
      "Portable for flexible deployment",
      "Reliable performance validation","Built for industrial testing standards"
    ],
  },
  {
    id: "6",
    slug: "portable-stationary-turning-machines",
    title: "Portable & Stationary Turning Machines",
    image: "/image 13-(1).svg",
    description:
      "Bestman’s product range comprises portable and stationary lathes and flange facers, available in bo..",
    overview: [
      "Bestman’s product range comprises portable and stationary lathes and flange facers, available in both CNC-controlled and conventional configurations. These machines are designed for precision flange resurfacing, bore machining, and turning operations in demanding industrial environments.",
      "Engineered for flexibility and durability, the equipment supports on-site and workshop machining requirements across oil & gas, refining, and heavy industrial sectors."
    ],
    keyFeatures: [
      "Portable and stationary lathe systems",
      "CNC-controlled and conventional options","Flange facing and turning capability","Suitable for industrial machining applications"
    ],
    whyChoose: [
      "Reduces reliance on off-site machining",
      "Improves surface sealing integrity",
      "Increases operational efficiency","Built for heavy-duty industrial use"
    ],
  },
];
