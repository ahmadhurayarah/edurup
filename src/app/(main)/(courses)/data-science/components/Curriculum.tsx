import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const curriculum = [
  {
    title: "Fundamental of Marketing",
    description: [
      "Introduction to Marketing",
      "Segmentation, Targeting and Positioning",
      "Marketing Management through the Concept of 4Ps",
      "Branding, Brand Equity, Brand Models with Examples",
    ],
  },
  {
    title: "Designing and Building a Web Presence",
    description: [
      "Elements & Design of a Website",
      "Information Architecture and Wireframes",
      "Visual Design, Implementation and Testing",
      "The Hook Framework",
    ],
  },
  {
    title: "Blog Creation Project",
    description: [
      "Introduction to Plesk & Wordpress",
      "Blog Guidelines",
      "Integrating Analytics",
    ],
  },
  {
    title: "Social Media Marketing (SMM)",
    description: [
      "Popular Social Media Channels",
      "Social Media Plan",
      "Social Media Execution Strategies - Paid & Organic",
      "Online Reputation Management",
      "Social Media Ad Formats",
      "Measuring Social Media Performance",
      "Organic & Paid YouTube Marketing",
    ],
  },
  {
    title: "Social Media Marketing Live Project",
    description: ["Facebook Live Campaign", "Troubleshooting"],
  },
  {
    title: "Search Engine Optimization (SEO)",
    description: [
      "SEO Basics",
      "Keyword Strategy",
      "SEO Strategy & SEO Audit",
      "Content Optimization",
      "Technical Optimization",
      "Authority",
      "Keyword Performance",
      "Future of SEO - Video, Voice, Mobile, Local",
    ],
  },
  {
    title: "SEO Live Project",
    description: ["SEO for Blogs"],
  },
  {
    title: "Tools & Resources",
    description: [
      "Facebook Ads",
      "Twitter Analytics",
      "Hootsuite",
      "Hubspot",
      "SMM Tools",
      "Google Search Console",
      "Keyword Research Tools",
      "SEO Tools",
    ],
  },
  {
    title: "Google Adwords",
    description: [
      "Creating an Search, Display, Yourtube Campaigns",
      "Budgeting, Bidding, Keyword Match & Conversion Tracking",
      "Campaign Optimisition",
      "Reporting Campaigns",
      "Adword Metrics",
    ],
  },
];

const Curriculum = () => {
  return (
    <>
      <div className="w-full flex py-[2rem] flex-col justify-center bg-gradient-to-tr to-green-300 from-blue-300">
        <div className=" flex flex-col">
          <h3 className="text-xl sm:text-5xl font-semibold text-center text-primary dark:text-dark">
            Our Course curriculum is Developed
          </h3>
          <h3 className="mt-1 mb-5 sm:mt-5 sm:mb-10 text-center text-xl sm:text-5xl font-semibold text-primary dark:text-dark">
            for College Students like you!
          </h3>
        </div>
        <Accordion
          type="single"
          collapsible
          className="px-[1rem] sm:px-[20rem] space-y-2"
        >
          {curriculum.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="px-[1rem] sm:px-[4rem] bg-white rounded-xl hover:text-fg transition-colors"
            >
              <AccordionTrigger showIcon={true}>
                <h4 className="text-[0.95rem] flex flex-row space-x-3 text-left sm:text-lg font-normal dark:text-dark">
                  <div>{index + 1}.</div>
                  <div>{item.title}</div>
                </h4>
              </AccordionTrigger>
              <AccordionContent className="space-y-1">
                {item.description.map((desc, idx) => (
                  <li
                    key={idx}
                    className="text-sm sm:text-[0.95rem] font-semibold text-muted-foreground dark:text-gray-500"
                  >
                    {desc}
                  </li>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default Curriculum;
