// Service data with detailed content for each service
// ADD YOUR SERVICE-SPECIFIC INFORMATION HERE

export interface ServiceOverview {
  intro: string[];
  whatWeOffer: string[];
  ourApproach: {
    title: string;
    description: string;
  }[];
}

export interface Service {
  id: string;
  image: string;
  title: string;
  description: string;
  overview: ServiceOverview;
}

export const services: Service[] = [
  {
    id: "1",
    image: "/Drawings.svg",
    title: "Valve Procurement, Installation & Commissioning",
    description:
      "End-to-end sourcing, supply, installation, and commissioning of industrial valves and related equipment – delivered with precision, compliance, and efficiency.",
    // Service Overview Section Content
    overview: {
      intro: [
        "At Bestman International Limited, we provide comprehensive valve procurement and commissioning solutions tailored to the operational demands of oil & gas, refining, petrochemical, and industrial facilities.",
        "Through our global OEM partnerships, we source high-quality valves and equipment that meet international standards and project specifications. From procurement planning to final commissioning, we ensure seamless integration into your operational systems.",
      ],
      whatWeOffer: [
        "Industrial valve sourcing and global procurement",
        "OEM-certified equipment supply",
        "Installation and system integration",
        "Pre-commissioning inspections",
        "Functional testing and validation",
        "Project documentation and compliance verification",
      ],
      ourApproach: [
        {
          title: "Technical Evaluation",
          description: "We assess project specifications and recommend appropriate valve types and configurations."
        },
        {
          title: "Global Sourcing",
          description: "Through our international partners, we procure equipment that meets required standards and performance expectations.",
        },
        {
          title: "Installation & Integration",
          description: "Our engineering team ensures safe and precise installation aligned with project requirements."
        },
        {
          title: "Commissioning & Validation",
          description: "We perform system checks, pressure tests, and performance verification before operational handover.",
        },
      ],
    },
  },
  {
    id: "2",
    image: "/Team.svg",
    title: "Valve Testing, Repair & Maintenance",
    description:
      "Comprehensive in-house and on-site valve lifecycle services designed to ensure reliability, safety, and optimal performance.",
    overview: {
      intro: [
        "We provide specialized valve inspection, overhaul, troubleshooting, and maintenance services to extend equipment life and minimize downtime.",
        "Our facility is equipped with advanced testing benches and precision tools, supported by skilled engineers trained to international standards.",
      ],
      whatWeOffer: [
        "Safety valve testing and calibration",
        "Control valve inspection and servicing",
        "Hydrostatic and pressure testing",
        "Valve disassembly and refurbishment",
        "Component replacement and machining",
        "On-site maintenance services",
        "DNV 2.7.1 certified mobile workshop support",
        
        

      ],
      ourApproach: [
        {
          title: "Inspection & Diagnostics",
          description: "Detailed evaluation to identify wear, leakage, or performance issues.",
        },
        {
          title: "Testing & Calibration",
          description: "Hydro and pressure testing to ensure compliance with operational thresholds.",
        },
        {
          title: "Repair & Refurbishment",
          description: "Replacement of worn components, re-machining, and reassembly.",
        },
        {
          title: "Performance Validation",
          description: "Final testing to certify operational reliability before reinstallation.",
        },
      ],
    },
  },
  {
    id: "3",
    image: "/Tool1.svg",
    title: "Instrumentation & Calibration Services",
    description:
      "Precision calibration and testing of control systems and measurement instruments to ensure accurate and reliable performance.",
    overview: {
      intro: [
        "Accurate instrumentation is critical to operational safety and efficiency. Bestman International provides professional calibration and validation services for industrial measurement and control devices.",
        "Our services ensure that all instrumentation functions within specified tolerances and regulatory requirements.",
      ],
      whatWeOffer: [
        "Pressure gauge calibration",
        "Safety valve calibration",
        "Flow meter calibration",
        "Temperature and level transmitters testing",
        "Control valve calibration",
        "Process control system verification",
      ],
      ourApproach: [
        {
          title: "Assessment",
          description: "We evaluate equipment condition and operational parameters.",
        },
        {
          title: "Calibration",
          description: "Using certified instruments and equipment, we recalibrate devices to required specifications.",
        },
        {
          title: "Documentation",
          description: "We provide calibration certificates and compliance documentation.",
        },
        {
          title: "Ongoing Support",
          description: "Periodic maintenance and scheduled recalibration services.",
        },
      ],
    },
  },
  {
    id: "4",
    image: "/Drawings1.svg",
    title: "Fabrication & Precision Machining Services",
    description:
      "High-precision CNC machining, flange works, and custom metal fabrication solutions engineered for industrial performance and durability.",
    overview: {
      intro: [
        "Bestman International Limited provides specialized fabrication and machining services designed to support industrial operations in oil & gas, refining, petrochemical, and manufacturing sectors.",
        "Our facility is equipped with advanced CNC-controlled machinery and precision tools, enabling us to produce high-quality mechanical components, flanges, structural parts, and custom metal assemblies that meet international engineering standards",
      ],
      whatWeOffer: [
        "CNC-controlled machining for valve components",
        "Flange facing and resurfacing",
        "Custom mechanical parts fabrication",
        "Metal structure manufacturing",
        "Component refurbishment and re-machining",
        "Precision cutting, shaping, and finishing",
      ],
      ourApproach: [
        {
          title: "Design Review",
          description: "We analyze technical drawings and client specifications.",
        },
        {
          title: "Precision Machining",
          description: "Components are manufactured using CNC equipment for consistent accuracy.",
        },
        {
          title: "Quality Inspection",
          description: "Dimensional verification and performance checks are conducted before delivery.",
        },
        {
          title: "Final Delivery",
          description: "All fabricated parts are supplied ready for integration and operational use.",
        },
      ],
    },
  },
  {
    id: "5",
    image: "/image6.svg",
    title: "Valve Hydro Testing & Non-Destructive Testing (NDT)",
    description:
      "Comprehensive hydrostatic and non-destructive testing services ensuring safety, compliance, and operational reliability.",
    overview: {
      intro: [
        "Bestman International offers professional hydrostatic testing and NDT services to verify valve integrity, structural performance, and regulatory compliance.",
        "Our testing procedures are conducted using calibrated equipment and industry-approved methods to detect leaks, structural weaknesses, and potential defects before operational deployment.",
      ],
      whatWeOffer: [
        "Hydrostatic pressure testing",
        "Ultrasonic testing (UT)",
        "Magnetic particle inspection (MPI)",
        "Dye penetrant testing (PT)",
        "Radiographic testing (RT)",
        "Visual inspection and integrity assessment",
      ],
      ourApproach: [
        {
          title: "Pre-Test Inspection",
          description: "Initial visual and structural assessment.",
        },
        {
          title: "Controlled Testing",
          description: "Application of pressure and non-destructive methods under regulated conditions.",
        },
        {
          title: "Performance Verification",
          description: "Confirmation that valves meet specified performance standards.",
        },
        {
          title: "Documentation & Certification",
          description: "Comprehensive reporting and compliance documentation provided.",
        },
      ],
    },
  },
  {
    id: "6",
    image: "/Grinder-Tool2.svg",
    title: "DNV 2.7.1 Certified Mobile Workshop Services",
    description:
      "On-site valve inspection, testing, and maintenance solutions designed for offshore and remote industrial operations.",
    overview: {
      intro: [
        "Our DNV 2.7.1 certified mobile workshop enables Bestman International to provide on-site valve testing, maintenance, and repair services in offshore and remote locations.",
        "Fully equipped with testing benches, precision tools, and diagnostic equipment, our mobile unit ensures minimal operational disruption and faster turnaround times.",
      ],
      whatWeOffer: [
        "On-site valve inspection and testing",
        "Field maintenance and repair",
        "Emergency valve servicing",
        "Pressure testing and calibration",
        "Troubleshooting and diagnostics",
        "Offshore and onshore deployment support",
      ],
      ourApproach: [
        {
          title: "Deployment",
          description: "Mobile workshop transported to project site.",
        },
        {
          title: "On-Site Setup",
          description: "Rapid installation and testing equipment configuration.",
        },
        {
          title: "Service Execution",
          description: "Inspection, repair, calibration, and validation conducted on location.",
        },
        {
          title: "Reporting & Certification",
          description: "Full documentation provided upon service completion.",
        },
      ],
    },
  },
];
