import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { dataAnalyticsCourseData } from "./data";


const faq = [
  {
    question: "1. What is the Data Analytics Course offered by Edurup Learning?",
    answer: "The Data Analytics PGP by Edurup Learning is an 8-month (32-week) comprehensive program that helps learners master data analysis tools like Excel, SQL, Python, Tableau, and Power BI. It is designed to make you job-ready with 100% placement support."
  },
  {
    question: "2. Who can enroll in this course?",
    answer: "This course by Edurup Learning is ideal for fresh graduates, working professionals, and anyone looking to switch their career into data analytics. No prior programming experience is required."
  },
  {
    question: "3. What tools and technologies will I learn?",
    answer: "At Edurup Learning, you'll get hands-on experience with:\n• Excel\n• SQL\n• Python (NumPy, Pandas)\n• Tableau\n• Power BI\n• Statistics & Data Visualization Tools"
  },
  {
    question: "4. What is the duration of the Data Analytics course?",
    answer: "The Data Analytics Course by Edurup Learning runs for approximately 8 months (32 weeks) with live online sessions conducted by industry experts."
  },
  {
    question: "5. Does Edurup Learning provide placement support?",
    answer: "Yes! Edurup Learning offers 100% Placement Support including resume building, mock interviews, internship opportunities, and interview preparation until you get placed."
  },
  {
    question: "6. What is the program fee and payment options?",
    answer: "The total program fee is ₹1,00,000, but after a 30% scholarship, you pay ₹70,000. EMI options start from ₹10,000/month for your convenience."
  },
  {
    question: "7. Are the classes online or offline?",
    answer: "The Edurup Learning Data Analytics Course is conducted live online via Zoom, with access to recorded sessions if you miss a class."
  },
  {
    question: "8. Will I receive a certificate after completing the course?",
    answer: "Yes, you'll receive an Industry-Recognized Certificate from Edurup Learning upon successfully completing the program and final project."
  },
  {
    question: "9. What projects will I work on?",
    answer: "You'll build multiple hands-on projects including:\n• Excel data dashboards\n• SQL data queries\n• Tableau & Power BI visualizations\n• Python data analysis using Pandas\n• Final capstone project based on real-world business data"
  },
  {
    question: "10. What career roles can I apply for after this course?",
    answer: "After completing the Data Analytics Course from Edurup Learning, you can apply for roles like:\n• Data Analyst\n• Business Analyst\n• Data Visualization Specialist\n• Junior Data Scientist\n• Reporting Analyst"
  },
  {
    question: "11. What is the average salary after completing this program?",
    answer: "Students from Edurup Learning have received placements with average salaries of ₹8–10 LPA, with top performers earning up to ₹31 LPA in reputed companies."
  },
  {
    question: "12. What if I miss a live class?",
    answer: "All live sessions conducted by Edurup Learning are recorded. You'll have lifetime access to class recordings through the student learning portal."
  },
  {
    question: "13. Does Edurup Learning offer a demo session?",
    answer: "Yes! You can attend a Free Demo Class by Edurup Learning to understand the teaching style, course content, and mentorship before enrolling."
  },
  {
    question: "14. Is there any eligibility requirement?",
    answer: "Anyone with basic computer knowledge can join. Students from B.Tech, B.Com, B.Sc, MBA, or any graduate background are welcome to apply."
  },
  {
    question: "15. When does the next batch start?",
    answer: "The upcoming batch (Cohort 14) for Edurup Learning's Data Analytics course starts November 1. Limited seats are available — enroll early!"
  },
  {
    question: "16. What makes Edurup Learning different from other institutes?",
    answer: "At Edurup Learning, we provide:\n✅ Mentor-led Live Classes\n✅ Real-world Projects\n✅ Lifetime Learning Access\n✅ 100% Placement Assistance\n✅ One-on-One Career Mentoring"
  }
];


const Faq = () => {
  return (
    <>
      <div className="w-full flex py-[2rem] flex-col justify-center bg-gradient-to-tr to-green-300 from-blue-300">
        <div className=" flex flex-col">
          <h3 className="text-xl mb-5 sm:mt-5 sm:mb-10 sm:text-5xl font-semibold text-center text-primary dark:text-dark">
            Data Analytics Training FAQs
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
