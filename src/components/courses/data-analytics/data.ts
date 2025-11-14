export const dataAnalyticsCourseData = {
  course: {
    name: "Data Analytics",
    code: "DA-PGP",
    description:
      "8-week online Data Analytics Course with Certification. Learn Python, Power Bi, Excel.",
    duration: "8 weeks",
    durationISO: "P32W",
    timeRequired: "PT2H",
    mode: "online",
    language: "en",
    educationalLevel: "Professional",
    startDate: "2025-11-01",
    price: {
      original: 20000,
      discounted: 14000,
      currency: "INR",
      emi: 5000,
      discountPercentage: 28,
      validUntil: "2025-12-31",
    },
    rating: {
      value: 4.8,
      count: 1250,
      best: 5,
      worst: 1,
    },
    features: [
      { title: "Live", subtitle: "Sessions on Zoom" },
      { title: "8 Weeks", subtitle: "Course Duration" },
      { title: "Placement", subtitle: "1 Year Support" },
    ],
    teaches: [
      "Excel",
      "SQL",
      "Statistics",
      "Power BI",
      "Tableau",
      "Python",
      "EDA",
      "Data Visualization",
    ],
  },
  provider: {
    name: "Edurup Learning",
    url: "https://www.edurup.in",
    sameAs: [
      "https://www.instagram.com/edurup_learning/",
      "https://www.linkedin.com/school/edurup-learning/",
      "https://www.facebook.com/eduruplearning",
    ],
  },
  banner: {
    backgroundColor: "#2B1F5F",
    textColor: "white",
    cohort: "14",
    cohortStartDate: "Dec 7",
  },
  company: {
    heading: "500+ Companies have hired",
    subheading: "Edurup learners",
    marqueeImages: [
      { src: "/maurquee1.jpg", alt: "Marquee Image 1" },
      { src: "/maurquee2.jpg", alt: "Marquee Image 2" },
      { src: "/maurquee3.jpg", alt: "Marquee Image 3" },
    ],
  },
  reviews: [
    {
      name: "Vansh Agrawal",
      role: "Fresher",
      from: "IIT Kharagpur",
      company: "Zomato",
      title: "Product Analyst",
      text: "I got an offer from Zomato for PA role, the learning at NextLeap helped me a lot. Thank you for the course and all the learning.",
      profile: "/person1.jpg",
      fromLogo: "/iit.png",
      companyLogo: "/zomato.png",
    },
    {
      name: "Vanshu Saini",
      role: "JM Financial Ltd",
      from: "Product Management Intern",
      company: "Phenom",
      title: "Product Analyst",
      text: "Great support from the team for placements. Mentor sessions were really helpful.",
      profile: "/person2.jpg",
      fromLogo: "/jm.png",
      companyLogo: "/phenom.png",
    },
    {
      name: "Ankita B",
      role: "Byjus",
      from: "Associate Manager",
      company: "Inito",
      title: "Lead Product Analyst",
      text: "Got to collaborate with brilliant minds, learned from seasoned mentors, and put my analytical skills to the test.",
      profile: "/person3.jpg",
      fromLogo: "/byjus.png",
      companyLogo: "/inito.png",
    },
  ],
  faculty: [
    {
      name: "Sirija Devi",
      designation: "Data Analyst",
      image: "/sirija.png",
      subjects: ["Python", "SQL", "Power BI", "Excel"],
      socialMedia: "linkedin",
      url: "https://www.linkedin.com/in/sirija-devi-a35561160?trk=blended-typeahead",
      experience: "4+ Years",
      students: "1,800+",
      rating: "4.8",
      color: "green",
    },
  ],
 
  curriculum: [
    {
      "title": "Week 1: Introduction to Data Analytics",
      "duration": "1 week",
      "lessons": "5 modules",
      "projects": "Industry applications overview",
      "description": [
        "What is Data Analytics?",
        "Career Paths & Industry Applications",
        "Understanding Data Types and Formats",
        "Data Collection, Cleaning, and Preprocessing Basics",
        "Tools Overview: Excel, SQL, Power BI, Tableau"
      ]
    },
    {
      "title": "Week 2: Excel for Data Analytics – Basics",
      "duration": "1 week",
      "lessons": "5 modules",
      "projects": "Basic charts and data analysis",
      "description": [
        "Excel Interface, Shortcuts, and Functions",
        "Data Cleaning & Formatting Techniques",
        "Sorting, Filtering, Conditional Formatting",
        "Formulas: IF, COUNTIFS, SUMIFS, VLOOKUP, INDEX-MATCH",
        "Basic Charts and Graphs"
      ]
    },
    {
      "title": "Week 3: Advanced Excel & Dashboards",
      "duration": "1 week",
      "lessons": "5 modules",
      "projects": "Sales Data Analysis Case Study",
      "description": [
        "Advanced Formulas & Nested Functions",
        "Data Validation & What-If Analysis",
        "Pivot Tables & Pivot Charts",
        "Excel Dashboards for Reporting",
        "Case Study: Sales Data Analysis in Excel"
      ]
    },
    {
      "title": "Week 4: SQL for Data Analytics – Basics",
      "duration": "1 week",
      "lessons": "5 modules",
      "projects": "Real-time query practice",
      "description": [
        "Introduction to Databases & SQL",
        "SELECT, WHERE, ORDER BY, LIMIT",
        "Filtering and Sorting Data",
        "Aggregate Functions: COUNT, SUM, AVG, MIN, MAX",
        "Real-time Query Practice"
      ]
    },
    {
      "title": "Week 5: SQL – Advanced Queries",
      "duration": "1 week",
      "lessons": "5 modules",
      "projects": "Company Sales Data Analysis",
      "description": [
        "Joins (INNER, LEFT, RIGHT, FULL)",
        "Subqueries and CTEs",
        "GROUP BY and HAVING",
        "Data Manipulation (INSERT, UPDATE, DELETE)",
        "SQL Project: Analyze Company Sales Data"
      ]
    },
    {
      "title": "Week 6: Power BI – Basics & Data Modeling",
      "duration": "1 week",
      "lessons": "5 modules",
      "projects": "Data modeling with Power Query",
      "description": [
        "Introduction to Power BI Interface",
        "Importing Data from Excel/SQL",
        "Power Query Editor for Data Cleaning",
        "Data Modeling & Relationships",
        "DAX Functions for Calculations"
      ]
    },
    {
      "title": "Week 7: Power BI – Dashboard Development",
      "duration": "1 week",
      "lessons": "4 modules",
      "projects": "Business Insights Dashboard",
      "description": [
        "Creating Interactive Dashboards",
        "Slicers, Filters & Visual Formatting",
        "Publishing & Sharing Reports",
        "Power BI Project: Business Insights Dashboard"
      ]
    },
    {
      "title": "Week 8: Tableau for Data Visualization",
      "duration": "1 week",
      "lessons": "5 modules",
      "projects": "Real-World Dataset Dashboard",
      "description": [
        "Introduction to Tableau Workspace",
        "Connecting Excel/SQL Data",
        "Charts: Bar, Line, Pie, Maps",
        "Calculated Fields & Parameters",
        "Tableau Dashboard Project: Real-World Dataset"
      ],
    },
  ],
  fee: {
    scholarship: {
      percentage: 30,
      originalPrice: 20000,
      discountedPrice: 14000,
      emi: 5000,
      gst: true,
    },
    features: [
      {
        description: "Spend only two hours/day",
        icon: "Clock",
        color: "text-blue-600",
      },
      {
        description: "One-on-one mentorship and doubt resolution",
        icon: "Users",
        color: "text-green-600",
      },
      {
        description: "Network with your peers and industry experts",
        icon: "GraduationCap",
        color: "text-purple-600",
      },
      {
        description: "1 Year Placement Support",
        icon: "Shield",
        color: "text-orange-600",
      },
    ],
    badge: "Most Popular",
    cta: {
      text: "Enroll Now",
      note: "⚡ Scholarship applications closing soon",
    },
  },
 faq : [
  {
    question: "What is the duration of the Edurup Data Analytics Course in {city}?",
    answer: "The Edurup Data Analytics Course is an 8-week live online training program that helps you master data analytics tools and techniques through real-world projects."
  },
  {
    question: "What is the course fee for the Edurup Data Analytics Course?",
    answer: "The actual fee is ₹20,000, but with the Edurup Scholarship, you can enroll for just ₹14,000."
  },
  {
    question: "Is this Data Analytics Course conducted online or offline?",
    answer: "This is a 100% live online course, so you can learn from anywhere with interactive mentor-led classes and practical sessions."
  },
  {
    question: "Does Edurup offer placement support for this course?",
    answer: "Yes. Edurup provides 1-year placement support, including resume building, mock interviews, and job referrals through our dedicated career team."
  },
  {
    question: "What will I learn in the Data Analytics Course?",
    answer: "You'll learn Excel, SQL, Python for Data Analysis, Power BI, Tableau, Statistics, and Dashboard Creation — everything needed to become a job-ready Data Analyst."
  },
  {
    question: "Is the course suitable for beginners?",
    answer: "Yes. The course is designed for beginners and working professionals who want to start a career in data analytics or switch from a non-technical background."
  },
  {
    question: "What certification will I receive after the course?",
    answer: "After successful completion, you'll receive an industry-recognized Edurup Data Analytics Certification, validating your skills in data analytics and visualization."
  },
  {
    question: "Do you offer EMI or installment options for the fee?",
    answer: "Yes. Edurup offers flexible EMI options, allowing students to pay the discounted ₹14,000 fee in easy monthly installments."
  },
  {
    question: "What kind of job roles can I apply for after completing this course?",
    answer: "You can apply for roles such as Data Analyst, Business Analyst, Reporting Analyst, or BI Developer after completing the course."
  },
  {
    question: "How can I apply for the Edurup Scholarship?",
    answer: "You can apply during registration. Eligible students automatically receive a ₹6,000 scholarship discount, reducing the total course fee to ₹14,000."
  },
],
  language: {
    heading: "Learning Journey",
    title: "Learn all the Tools that are In-demand",
    tools: [
      {
        name: "Excel",
        icon: "/Language/excel.png",
        color: "bg-green-100 text-green-700",
      },
      {
        name: "SQL",
        icon: "/Language/sql.png",
        color: "bg-blue-100 text-blue-700",
      },
      {
        name: "Power BI",
        icon: "/Language/PowerBI.png",
        color: "bg-yellow-100 text-yellow-700",
      },
      {
        name: "Tableau",
        icon: "/Language/tableau.png",
        color: "bg-indigo-100 text-indigo-700",
      },
      {
        name: "Python",
        icon: "/Language/Python.png",
        color: "bg-emerald-100 text-emerald-700",
      },
      {
        name: "Pandas",
        icon: "/Language/Pandas.png",
        color: "bg-emerald-100 text-emerald-700",
      },
      {
        name: "NumPy",
        icon: "/Language/NumPy.png",
        color: "bg-emerald-100 text-emerald-700",
      },
      {
        name: "Matplotlib",
        icon: "/Language/Matplotlib.png",
        color: "bg-emerald-100 text-emerald-700",
      },
    ],
  },
  learning: {
    heading: "Learning Journey",
    title: "The New Immersive Learning Experience",
    description:
      "Follow our structured learning path from enrollment to job placement",
    steps: [
      {
        title: "Start Learning",
        description: [
          "Pay 70,000 and join the course",
          "Live Classes by Experts",
        ],
        image: "/learning1.svg",
      },
      {
        title: "Get Assessed",
        description: [
          "Write Online Assessment",
          "Get Eligibility for placements",
        ],
        image: "/learning2.svg",
      },
      {
        title: "Apply for jobs",
        description: [
          "Access Placement videos",
          "Apply for Jobs",
          "Get an offer letter",
        ],
        image: "/learning3.svg",
      },
    ],
  },
  placementAssistance: {
    heading: "Placement Assistance",
    description:
      "Stand out with the right skills and get your data career started.",
    features: [
      { icon: "Code", title: "One-on-one Sessions" },
      { icon: "LineChart", title: "Career Guidance" },
      { icon: "Briefcase", title: "300+ Hiring Partners" },
      { icon: "GanttChartSquare", title: "Resume Building" },
      { icon: "ScrollText", title: "Mock Interviews" },
      { icon: "UserRoundCog", title: "Soft Skills Training" },
    ],
    image: "/banner-01-2.png",
  },
  productAnalyst: {
    heading: "Your Future Job Title",
    titles: [
      "Data Analyst",
      "Business Analyst",
      "Reporting Analyst",
      "BI Analyst",
    ],
    salaries: {
      average: "4-6 Lakhs",
      highest: "12 Lakhs",
      highestCompany: "Top Firms",
    },
  },
};
