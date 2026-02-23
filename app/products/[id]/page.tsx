import { MissionVisionSection as Navbar } from "@/components/mission-vision-section/mission-vision-section";
import { FooterSection } from "@/components/footer-section/footer-section";
import { CallToActionSection } from "@/components/call-to-action/call-to-action-section";

interface ProductDetailsPageProps {
  params: {
    id: string;
  };
}

// Product data - in a real app, this would come from an API or database
const products = [
  {
    id: "1",
    title: "Felis",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
    description: "Eget id sed tincidunt sit pharetra iaculis aliquam risus odio. Arcu morbi lorem fermentum lacus.",
  },
  {
    id: "2",
    title: "Amet venenatis vestibulum",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
    description: "Ullamcorper eget tellus commodo egestas consequat lacus nulla donec in. Eu in viverra diam.",
  },
  {
    id: "3",
    title: "Cursus auctor nulla nisl hac in",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    description: "Orci sit vitae cras porttitor accumsan felis sit. Nisi amet interdum imperdiet arcu. Dui est ac.",
  },
  {
    id: "4",
    title: "Volutpat morbi rhoncus sit et",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    description: "Amet adipiscing tincidunt elit tristique accumsan consequat. Dui sed tempor sit hendrerit. Tellus.",
  },
  {
    id: "5",
    title: "Quam ut turpis ac amet tellus",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&q=80",
    description: "Id id purus amet odio tortor auctor ornare lacus tellus. Volutpat enim massa ridiculus est elit.",
  },
  {
    id: "6",
    title: "Nibh sed tempor pellentesque",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    description: "Quis nisl hendrerit ut sed duis. Tristique amet phasellus tellus arcu in. Cras tincidunt porttitor.",
  },
];

const contentSections = [
  {
    heading: "Facilisis eget ultricies adipiscing amet. Dignissim venenatis.",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    ],
  },
  {
    heading: "Elit eros facilisi id volutpat sit pretium. Urna sed nibh tellus feugiat ornare. Faucibus.",
    paragraphs: [
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    ],
  },
  {
    heading: "Eu est risus donec nam ultrices. Risus vivamus vel est sit vitae urna congue egestas.",
    paragraphs: [
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
      "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    ],
  },
  {
    heading: "Tristique pellentesque enim lorem placerat sit eget arcu a venenatis. Sed.",
    paragraphs: [
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    ],
  },
  {
    heading: "Et in nibh facilisi odio augue nulla hac. Tellus varius magnis tempor vivamus. Urna.",
    paragraphs: [
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
      "So blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will.",
    ],
  },
  {
    heading: "Arcu orci libero accumsan quis dictum vitae a nam id.",
    paragraphs: [
      "The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
      "And expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself.",
      "Because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",
      "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
    ],
  },
];

export default function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  const product = products.find((p) => p.id === params.id) || products[0];

  return (
    <div className="flex flex-col w-full items-start relative bg-white overflow-hidden">
      <div className="w-full -translate-y-4 animate-fade-in opacity-0">
        <Navbar />
      </div>
      <div className="w-full mt-24 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center py-12 px-4 md:px-8 lg:px-[120px]">
          <div className="w-full max-w-[1200px]">
            <p className="text-base text-[#0C6E8A] font-semibold mb-4 text-center">Product Details</p>
            <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold text-[#1180C5] text-center">
              {product.title}
            </h1>
          </div>
        </div>

        {/* Full Width Image */}
        <div className="w-full px-4 md:px-8 lg:px-[120px]">
          <div className="max-w-[1200px] mx-auto">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[400px] md:h-[500px] lg:h-[500px] object-cover"
            />
          </div>
        </div>

        {/* Content Sections */}
        <div className="w-full py-16 px-4 md:px-8 lg:px-[200px]">
          <div className="max-w-[1200px] mx-auto space-y-12">
            {contentSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-[#1180C5] leading-tight">
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-gray-700 text-base leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:1400ms]">
        <CallToActionSection />
      </div>
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:1600ms]">
        <FooterSection />
      </div>
    </div>
  );
}
