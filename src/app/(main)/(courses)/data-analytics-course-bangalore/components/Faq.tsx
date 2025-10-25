import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq = [
  {
    question: "What is Digital Marketing?",
    answer:
      "In this digital era, marketing and other advertisements are generally done with the help of digital services rather than manual services. Digital Marketing is the process of using the Internet, social media, mobile devices, search engines, etc. to reach out to business customers. This allows you to gain new leads and sales and garner traffic, thereby improving your business.",
  },
  {
    question: "Why learn Digital Marketing courses?",
    answer:
      "LinkedIn shows over 36,000 Digital Marketing job openings in the United States and more than 10,000 jobs in India. Digital Marketers in the United States earn in the range of US$61,027 to US$77,238 per annum – Indeed.",
  },
  {
    question: "Is Digital Marketing a good career?",
    answer:
      "In the world we live in today, most of the marketing process is done over the Internet through various platforms, such as websites, social media, etc. Companies from all around the world have digitized their systems, which has given rise to numerous job opportunities in top organizations. Besides, Digital Marketing is a vast field and provides a platform for professionals with numerous skills. Digital Marketing is one of the most sought-after career opportunities as well.",
  },
  {
    question: "What are the skills needed to learn Digital Marketing?",
    answer:
      "There are no prerequisites to learn Digital Marketing. No prior knowledge or skill is required to take up these digital marketing classes online.",
  },
  {
    question:
      "What are the various job opportunities available after doing online Digital Marketing courses?",
    answer:
      "1. Digital Marketing Specialist\n2. Digital Marketing Strategist\n3. Digital Marketing Manager\n4. Social Media Marketer\n5. Digital Marketing Executive\n6. SEO Expert\n7. Digital Marketing Analyst\n8. Content Marketer",
  },
  {
    question: "What are the various Digital Marketing courses available?",
    answer:
      "1. Google Analytics Training\n2. Search Engine Marketing (SEM) Training\n3. Search Engine Optimization (SEO) Training\n4. SEO, SEM, and Google Analytics Master’s Course",
  },
];

const Faq = () => {
  return (
    <>
      <div className="w-full flex py-[2rem] flex-col justify-center bg-gradient-to-tr to-green-300 from-blue-300">
        <div className=" flex flex-col">
          <h3 className="text-xl mb-5 sm:mt-5 sm:mb-10 sm:text-5xl font-semibold text-center text-primary dark:text-dark">
            Digital Marketing Training FAQs
          </h3>
        </div>
        <Accordion
          type="single"
          collapsible
          className="px-[1rem] sm:px-[20rem] space-y-2"
        >
          {faq.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="px-[1rem] sm:px-[4rem] bg-white rounded-xl hover:text-fg transition-colors"
            >
              <AccordionTrigger showIcon={true}>
                <h4 className="text-[0.95rem] flex flex-row space-x-3 text-left sm:text-lg font-normal dark:text-dark">
                  <div>{index + 1}.</div>
                  <div>{item.question}</div>
                </h4>
              </AccordionTrigger>
              <AccordionContent className="space-y-1">
                <p className="text-sm sm:text-[0.95rem] font-semibold text-muted-foreground dark:text-gray-500">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default Faq;
