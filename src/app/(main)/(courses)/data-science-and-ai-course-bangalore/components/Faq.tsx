import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq = [
  {
    question: "1. What is the Data Science and AI course offered by Edurup Learning?",
    answer: "The Data Science and Artificial Intelligence Course in Bangalore by Edurup Learning is a comprehensive PGP (Post Graduate Program) designed for beginners and professionals. It covers Python, Machine Learning, Deep Learning, and AI tools with 100% placement support and industry projects."
  },
  {
    question: "2. Who can apply for this Data Science course in Bangalore?",
    answer: "Anyone interested in building a career in data science or AI can apply. This includes fresh graduates, working professionals, and non-tech learners. No prior coding experience is required."
  },
  {
    question: "3. What is the duration of the Data Science and AI program?",
    answer: "The course duration is 8 months (32 weeks) with live online classes, weekend batches, and recorded sessions for flexibility."
  },
  {
    question: "4. What tools and technologies will I learn?",
    answer: "You'll learn essential tools like Python, NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, TensorFlow, Keras, and SQL — plus real-time project deployment techniques using Flask and Streamlit."
  },
  {
    question: "5. Does Edurup Learning offer placement support?",
    answer: "Yes, Edurup provides 100% placement support, including resume building, mock interviews, internship opportunities, and access to hiring partners in top tech companies across Bangalore and India."
  },
  {
    question: "6. What is the course fee for the Data Science and AI program?",
    answer: "The total course fee is ₹1,00,000, but students can avail up to 30% scholarship, bringing the fee down to ₹70,000. Easy EMI options are also available."
  },
  {
    question: "7. What are the eligibility criteria for joining this course?",
    answer: "Basic understanding of mathematics and logical reasoning is helpful, but not mandatory. Anyone with a passion for data and technology can join this program."
  },
  {
    question: "8. Will I get a certificate after completing the course?",
    answer: "Yes, you'll receive an industry-recognized certification from Edurup Learning upon successful completion of all modules and projects."
  },
  {
    question: "9. What kind of projects will I work on during the course?",
    answer: "Learners will work on real-world projects such as sentiment analysis, stock market prediction, image recognition, and customer churn analysis to build a strong portfolio."
  },
  {
    question: "10. Is this course available offline in Bangalore?",
    answer: "The Data Science and AI course is conducted online with live instructor-led sessions. You can attend from anywhere in India, though Edurup Learning also has an office in Bangalore."
  },
  {
    question: "11. What job roles can I expect after completing the program?",
    answer: "Graduates can apply for roles such as Data Analyst, Machine Learning Engineer, Data Scientist, Business Analyst, and AI Engineer with salaries ranging from ₹5 – 15 LPA depending on experience."
  },
  {
    question: "12. How can I apply for the Edurup Learning Data Science and AI course?",
    answer: "You can visit the official page edurup.in/data-science-and-ai-course-bangalore and click on 'Apply for Course' or 'Book a Demo' to get started."
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
