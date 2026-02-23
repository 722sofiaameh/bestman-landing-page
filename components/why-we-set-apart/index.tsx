const keyPoints = [
    {
        id: 1,
        number: "01",
        title: "Engineering Expertise",
        description: "Over 35 years of hands-on experience in valve procurement, testing, calibration, and maintenance.",
    },
    {
        id: 2,
        number: "02",
        title: "Client-Focused Solutions",
        description: "We collaborate closely with clients to deliver tailored, cost-effective engineering solutions.",
    },
    {
        id: 3,
        number: "03",
        title: "Operational Efficiency",
        description: "Minimizing downtime through optimized processes and responsive field support.",
    },
    {
        id: 4,
        number: "04",
        title: "Safety-First Culture",
        description: "Strict adherence to health, safety, and environmental standards across all operations.",
    },
    {
        id: 5,
        number: "05",
        title: "Innovation & Technology",
        description: "Utilizing advanced equipment, CNC machining, and certified mobile workshop systems.",
    },
    {
        id: 6,
        number: "06",
        title: "Proven Reliability",
        description: "Trusted by leading oil & gas and industrial organizations across Nigeria.",
    },
];

export const WhyWeSetApart = () => {
    return (
        <section className="relative flex items-center justify-center py-[120px] px-4 md:px-8 lg:px-[120px]">
            <div className="w-full max-w-[1200px] px-[15px]">
                <div className="flex flex-col lg:flex-row items-start lg:items-start justify-center gap-8 lg:gap-[200px]">
                    <aside className="w-full lg:w-[200px] flex-shrink-0 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:0ms]">
                        <h2 className="font-brentor-template-framer-website-semantic-heading-6 font-semibold     font-[number:var(--brentor-template-framer-website-semantic-heading-6-font-weight)] text-[#1180c5] text-[length:var(--brentor-template-framer-website-semantic-heading-6-font-size)] tracking-[var(--brentor-template-framer-website-semantic-heading-6-letter-spacing)] leading-[var(--brentor-template-framer-website-semantic-heading-6-line-height)] [font-style:var(--brentor-template-framer-website-semantic-heading-6-font-style)]">
                        What sets us apart
                        </h2>
                    </aside>

                    <div className="flex flex-col w-full lg:w-[770px] items-start justify-center gap-[80px]">
                        <div className="flex flex-col items-start gap-[19px] w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
                            <div className="flex flex-col items-start w-full">
                                <h3 className=" font-semibold text-[#1180c5] text-2xl md:text-[38px] tracking-[-0.43px] leading-tight md:leading-[49.4px]">
                                    Why we stand out in the valve and engineering industry?
                                    <span className="text-[#0c6e8a]">
                                        At Bestman, we are committed to operational excellence, safety compliance, and delivering measurable performance across every project lifecycle.
                                    </span>
                                </h3>
                            </div>

                          
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms] items-stretch">
                            {keyPoints.map((point) => (
                                <div key={point.id} className="flex flex-col items-start h-full">
                                    <div className="flex flex-col items-start w-full mb-3">
                                        <span className="font-semibold text-[#0C6E8A] text-[24px] tracking-[-0.42px] leading-[59.8px]">
                                            {point.number}
                                        </span>
                                    </div>
                                    <div className="w-full h-0.5 bg-[#0C6E8A] mb-4" />
                                    <div className="flex flex-col items-start w-full flex-1">
                                        <h4 className="font-bold text-[#1180c5] text-lg md:text-xl mb-2">
                                            {point.title}
                                        </h4>
                                        <p className="text-gray-600 text-sm leading-relaxed flex-1">
                                            {point.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <img
                className="absolute w-[23.26%] h-[65.73%] top-[2.20%] left-0 pointer-events-none"
                alt="Decorative background"
                src="/Vector (2).svg"
            />
        </section>
    )
}