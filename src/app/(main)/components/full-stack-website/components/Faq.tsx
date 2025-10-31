import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const faq = [
  {
    question: "What is the Full Stack Developer Course offered by Edurup Learning in Bangalore?",
    answer: "The Full Stack Developer Course in Bangalore by Edurup Learning is a job-ready, industry-oriented program that covers front-end (HTML, CSS, JavaScript, React/Angular) and back-end (Node.js, Express, Databases) technologies, and ends with live projects and placement support for learners in Bengaluru and beyond."
  },
  {
    question: "Who can apply for the Full Stack Developer course in Bangalore?",
    answer: "Anyone eager to become a full-stack web developer can apply — including fresh graduates, working professionals looking to upskill or switch careers, and even non-IT background learners. No prior coding knowledge is strictly required."
  },
  {
    question: "What is the duration and format of this Full Stack Developer course in Bangalore?",
    answer: "The program spans several weeks (often 20-32 weeks depending on batch type) and is delivered through live online classes (and optionally in-person or hybrid in Bangalore). Learners get real-time interaction, assignments, and project work."
  },
  {
    question: "What technologies and tools are covered in the curriculum?",
    answer: "You will learn essential web technologies including HTML5, CSS3, JavaScript, front-end frameworks (React or Angular), back-end frameworks (Node.js, Express), databases (MongoDB, MySQL), version control (Git), and deployment tools—equipping you for full-stack development roles."
  },
  {
    question: "Does Edurup Learning provide placement assistance for this Full Stack Developer course?",
    answer: "Yes — Edurup Learning offers robust placement support including resume building, mock interviews, access to hiring partner networks, and assistance until you secure a relevant full-stack developer position in or around Bangalore."
  },
  {
    question: "What is the fee structure and payment/EMI options for this course?",
    answer: "The fee for the Full Stack Developer course varies by batch and mode (online vs classroom) and may include scholarships or early-bird discounts. Flexible EMI/payment plans are typically offered to make the course accessible."
  },
  {
    question: "What are the eligibility criteria for enrolling in the Full Stack Developer Course in Bangalore?",
    answer: "There are generally minimal eligibility criteria: a basic mathematical/logical aptitude helps, but no strict coding background is required. Openness to learning programming and the dedication to complete the course are key."
  },
  {
    question: "Will I receive a certificate upon completion of the full-stack developer program?",
    answer: "Yes — upon successful completion of all modules, projects and assessments, you will receive an industry-recognised certificate from Edurup Learning for the Full Stack Developer course."
  },
  {
    question: "What kinds of projects will I work on during the course?",
    answer: "You will engage in hands-on real-world projects such as building responsive web applications, RESTful APIs, full-stack MERN/MEAN applications, deployment to cloud or servers, and personalized capstone project portfolios that make you job-ready."
  },
  {
    question: "Is the course available offline in Bangalore or only online?",
    answer: "The Full Stack Developer course is offered as an online live-class format (so you can join from anywhere) and may also include optional classroom sessions in Bangalore. Check current batch details for in-person/online modes."
  },
  {
    question: "What job roles and salary can I expect after completing the Full Stack Developer course?",
    answer: "After completion you can aim for roles such as Full Stack Developer, Web Application Developer, Front-End/Back-End Developer, with salary ranges varying by company and location. In Bangalore freshers may begin at ~₹ 5-10 lakhs per annum and grow from there depending on skill and experience."
  },
  {
    question: "How do I apply or enrol for the Edurup Learning Full Stack Developer Course in Bangalore?",
    answer: "To apply, visit the official course page on Edurup Learning's website, click 'Apply' or 'Book a Demo', fill the registration form, attend the counselling/demo session and secure your seat for the next batch."
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
