"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const mernFaq = [
  {
    question: "What is MERN Stack?",
    answer:
      "MERN Stack is a powerful JavaScript framework including MongoDB, Express.js, React, and Node.js. This allows developers to create dynamic, efficient, and scalable web applications. The edurup MERN Stack Developer course is an intensive training course designed to provide you with the industry-leading skills necessary to succeed in this challenging industry. Whether you are a beginner or a professional looking to take your coding skills to the next level, this course has something for everyone. The course is designed by a team of IIT alumni and industry experts from top companies like Amazon and Microsoft. This ensures that you’re learning the latest skills and best practices used in the real world.",
  },
  {
    question: "Who is a MERN Stack Developer?",
    answer:
      "A MERN Stack Developer is a person skilled in using the MERN tech stack, which includes MongoDB, Express.js, React, and Node.js. They mainly focus on creating web applications using these technologies, managing both server-side and client-side development to produce dynamic and efficient applications that power various online experiences.",
  },
  {
    question: "Difference between the MERN Stack vs MEAN Stack",
    answer:
      "While both MERN and MEAN Stacks use MongoDB, Express.js, and Node.js, the main difference lies in the front-end design. MERN uses React, while MEAN uses Angular. These differences affect development approaches and preferences.",
  },
  {
    question: "Is MERN Stack in demand in 2024?",
    answer:
      "Yes, MERN Stack will remain popular for web development in 2024. The framework’s efficiency and wide adoption by professionals help to sustain its popularity. Its continued demand is because widespread use of JavaScript, which provides versatile solutions for both front-end and back-end applications. MERN has a modular code approach, user-centric features, and strong community support to make it ideal for creating dynamic web applications efficiently.",
  },
  {
    question: "How to become a MERN Stack Developer?",
    answer:
      "To become a MERN Stack Developer, start with basic web technologies like HTML, CSS, and JavaScript. Progress to learning Node.js for server-side development and React for building user interfaces. Explore MongoDB for database skills. Build projects, gain experience through internships, and stay updated with the latest trends in the field. MERN Stack demand ensures a promising career in web development.",
  },
  {
    question: "What skills do MERN stack developers need?",
    answer:
      "MERN stack developers require expertise in MongoDB, Express.js, React.js, and Node.js. Proficient in JavaScript (ES6+), HTML/CSS, and Git, they design RESTful APIs, ensure web security, and deploy applications. Testing skills, knowledge of package managers, and familiarity with deployment processes are essential. A strong foundation in command-line tools and shell scripting enhances the efficiency of development workflows and server management.",
  },
  {
    question: "Is MERN Stack easy to learn?",
    answer:
      "Learning the MERN (MongoDB, Express.js, React.js, Node.js) stack varies based on existing web development and JavaScript knowledge. It’s more straightforward for those already familiar, given the consistent language use. Beginners may find it a bit challenging initially, as mastering all components takes time and practice. Accessible documentation and a supportive learning environment can help both beginners and experienced developers in the learning process. At edurup, we further improve this journey by offering a structured curriculum, hands-on projects, and personalized mentorship, ensuring greater student success.",
  },
  {
    question: "How many months will it take to learn the MERN stack?",
    answer:
      "On average, it takes three to six months to become proficient in MERN Stack development. However, personal dedication and more focused hours a day can speed up the learning process. edurup focuses on realistic goals, celebrating small achievements. We guide students with practical skills and personalized support, building confidence for success in mastering the MERN stack and pursuing tech career goals.",
  },
  {
    question: "Which is better Java Full Stack or MERN Full Stack?",
    answer:
      "Choosing Java Full Stack and MERN Full Stack depends on personal preference and career goals. However, MERN is often preferred for its clear code and smooth development. MERN developers manage both front and back end, by simplifying things. With JavaScript at its core, code reuse is easy, making work simpler and team communication better. MERN’s active community offers support, making it a smart and budget-friendly choice for businesses.",
  },
  {
    question: "What is the salary of MERN Stack Developer in India?",
    answer:
      "According to Glassdoor, the starting average salary for MERN Stack Developers in India is ₹4.48 LPA. With professional growth over 3-5 years, salaries can significantly escalate, often doubling or tripling.",
  },
  {
    question:
      "What are the roles and responsibilities of a MERN stack developer?",
    answer:
      "The responsibility of a MERN Stack Developer is to understand client needs and specifications, write efficient and well-designed code, solve complex technical issues, and ensure the timely delivery of quality projects. They actively communicate with clients to understand functional requirements, provide technical support to team members, maintain high standards for code and documentation, and follow industry best practices while contributing to internal coding standards.",
  },
];

const ReadMore = () => {
  return (
    <>
      <div className="w-full flex py-[2rem] flex-col justify-center bg-gradient-to-tr to-green-300 from-blue-300">
        <div className=" flex flex-col">
          <h3 className="text-xl mb-5 sm:mt-5 sm:mb-10 sm:text-5xl font-semibold text-center text-primary dark:text-dark">
            Read More about MERN Stack Development
          </h3>
        </div>
        <Accordion
          type="single"
          collapsible
          className="px-[1rem] sm:px-[20rem] space-y-2"
        >
          {mernFaq.map((item, index) => (
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

export default ReadMore;
