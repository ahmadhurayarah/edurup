import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq = [
  {
    question: "What is the Digital Marketing Course at Edurup Learning?",
    answer: "Edurup Learning's Digital Marketing Course in Bangalore is an industry-oriented training program covering SEO, Google Ads, Social Media Marketing, Email Marketing, and Analytics — with 100% placement support."
  },
  {
    question: "Who can enroll in the Digital Marketing Course?",
    answer: "Anyone — students, fresh graduates, working professionals, or entrepreneurs — who wants to build a career in online marketing can join this course. No prior experience is required."
  },
  {
    question: "What is the duration of the course?",
    answer: "The PGP in Digital Marketing is an 8-month program, including hands-on projects, live campaigns, and placement assistance."
  },
  {
    question: "Does Edurup provide placement support?",
    answer: "Yes. Edurup Learning offers 100% placement support through dedicated placement training, resume building, mock interviews, and recruiter connections with top Bangalore companies."
  },
  {
    question: "What tools will I learn during the course?",
    answer: "You'll get hands-on training on top industry tools such as Google Ads, Meta Ads, Google Analytics, Semrush, Mailchimp, WordPress, and more."
  },
  {
    question: "What are the eligibility criteria?",
    answer: "Anyone with basic computer knowledge and interest in digital marketing can apply. Both technical and non-technical backgrounds are welcome."
  },
  {
    question: "Is this course available online or offline?",
    answer: "The course is available in both classroom (Bangalore) and live online formats, so you can choose based on your preference."
  },
  {
    question: "What is the average salary after completing this course?",
    answer: "Freshers completing the course can expect a starting salary between ₹3 LPA to ₹6 LPA, depending on performance, role, and company."
  },
  {
    question: "How much does the digital marketing course cost?",
    answer: "The total fee is ₹1,00,000, but Edurup offers a 30% scholarship for early applicants and flexible EMI options."
  },
  {
    question: "Why choose Edurup Learning over other institutes in Bangalore?",
    answer: "Edurup offers a practical, placement-driven approach with real-time campaign projects, 1:1 mentorship, and partnerships with leading digital agencies."
  },
  {
    question: "What are the modules covered in the Digital Marketing Course?",
    answer: "The course covers 12+ modules including SEO, Google Ads, Social Media Marketing, Content Marketing, Email Marketing, Web Analytics, Affiliate Marketing, and Marketing Automation."
  },
  {
    question: "Will I get to work on live digital marketing campaigns?",
    answer: "Yes! You'll work on real-time campaigns using live Google Ads and Meta Ads accounts to gain hands-on experience."
  },
  {
    question: "What certifications will I receive after the course?",
    answer: "You'll receive an Edurup Learning PGP Certificate and guidance to earn Google Ads, HubSpot, and Meta Blueprint certifications."
  },
  {
    question: "How is this course different from other digital marketing institutes in Bangalore?",
    answer: "Edurup focuses on project-based learning, 1:1 mentorship, and placement guarantee, while many institutes only provide theoretical sessions."
  },
  {
    question: "Can I learn digital marketing without a technical background?",
    answer: "Absolutely! The program is designed for beginners with no coding or technical background required."
  },
  {
    question: "Do you provide demo classes before enrolling?",
    answer: "Yes, we offer a free demo class so you can understand the teaching methodology and course structure before joining."
  },
  {
    question: "What kind of companies hire Edurup students?",
    answer: "Our students are placed in top companies like TCS, Wipro, Adobe, Un Academy, Flipkart, Lumen, Valueleaf, MetricFox, Amazon, Qpi AI, and startup digital agencies across Bangalore and India."
  },
  {
    question: "What is the batch size for each session?",
    answer: "We maintain small batches (15–20 students) to ensure personalized attention and better learning outcomes."
  },
  {
    question: "Can I switch from online to offline classes midway?",
    answer: "Yes, Edurup allows a flexible learning mode, so you can switch between online and classroom sessions as per convenience."
  },
  {
    question: "Will I get internship opportunities?",
    answer: "Yes, after completing the main modules, students are provided with internship opportunities to gain real-world project experience."
  },
  {
    question: "How can I enrol in the course?",
    answer: "You can enrol online via the 'Apply Now' button or visit our Bangalore campus. Our counsellors will guide you through scholarship and EMI options."
  },
  {
    question: "What if I miss a class?",
    answer: "All sessions are recorded and available on the learning portal. You can revisit missed classes anytime."
  },
  {
    question: "Do you provide doubt-clearing or mentorship sessions?",
    answer: "Yes, Edurup offers weekly mentorship sessions and 1:1 doubt-clearing with instructors and campaign managers."
  },
  {
    question: "What career roles can I apply for after this course?",
    answer: "After completing the program, you can apply for roles like Digital Marketing Executive, SEO Specialist, Google Ads Expert, Social Media Manager, or Campaign Manager."
  },
  {
    question: "How do I contact Edurup Learning for more details?",
    answer: "You can reach us via:\n• Website: https://edurup.in\n• Email: neelam@edurup.in\n• Phone: +91-9964150039\nOr visit our Bangalore training centre for career counselling."
  }
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
