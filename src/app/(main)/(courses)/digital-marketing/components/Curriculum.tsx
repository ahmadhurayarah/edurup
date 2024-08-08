import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const curriculum = [
  {
    title: "Understanding Marketing Fundamentals",
    description: [
      "Fundamentals of marketing",
      "Different marketing types",
      "What is Digital Marketing",
    ],
  },
  {
    title: "Search Engine Optimization (SEO)",
    description: [
      "Introduction to SEO",
      "On-page optimization",
      "Off-page optimization",
      "Search console",
      "Google My Business",
    ],
  },
  {
    title: "Social Media Marketing & Management",
    description: [
      "Instagram",
      "Facebook",
      "LinkedIn",
      "Google Business Account",
      "Quora, Medium, Website Blogs",
    ],
  },
  {
    title: "PPC Ads - Meta & Google Ads",
    description: [
      "Introduction to Meta Ads",
      "Setting up a Business Manager and Ad Accounts",
      "Types of Meta Ads & Campaigns",
      "Audience Targeting",
      "Set your First Facebook Ad (Campaign Structure)",
    ],
  },
  {
    title: "Meta Ads",
    description: [
      "Meta Pixel, Events & Dataset",
      "Conversion API",
      "Retargeting, Custom Audience & Lookalike audience",
      "Different Meta Ads Marketing Strategies",
    ],
  },
  {
    title: "Google Ads",
    description: [
      "Introduction to Google Ads",
      "Setting up a Google Ads account",
      "Types of Google Ads",
      "YouTube Ads",
      "Audience Targeting",
      "Set your First Google Ad Campaign",
    ],
  },
  {
    title: "Advanced Google Ads",
    description: [
      "Conversion Tracking",
      "Google Ads Analytics",
      "Google Tag Manager",
    ],
  },
  {
    title: "LinkedIn & Email Marketing",
    description: [
      "LinkedIn Ads",
      "LinkedIn Company Pages",
      "LinkedIn Sales & Lead Generation",
      "LinkedIn Analytics",
      "Introduction to Email Marketing",
      "Email Campaign Types",
      "Email Design and Content Creation",
      "Email Automation and Sequences",
      "Deliverability and Spam Compliance",
    ],
  },
  {
    title: "Analytics Tools",
    description: [
      "Google Analytics",
      "Microsoft Clarity",
      "HotJar",
      "Semrush - SEO",
      "AI tools for Analytics",
    ],
  },
];

const Curriculum = () => {
  return (
    <>
      <div className="w-full flex py-[2rem] flex-col justify-center bg-gradient-to-tr to-green-300 from-blue-300">
        <div className=" flex flex-col">
          <h3 className="text-xl sm:text-5xl font-semibold text-center text-primary dark:text-dark">
            Our Course Curriculum is Developed
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
