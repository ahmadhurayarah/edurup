export const dataScienceAICourseData = {
  course: {
    name: "Certified Data Scientist",
    code: "DSAI-PGP",
    description:
      "Learn Data Science, Machine Learning & AI with hands-on projects. Become a job-ready in just 32 weeks with expert mentorhip.",
    duration: "32 weeks",
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
      count: 1400,
      best: 5,
      worst: 1,
    },
    features: [
      { title: "Live", subtitle: "Sessions on Zoom" },
      { title: "32 Weeks", subtitle: "Course Duration" },
      { title: "Placement", subtitle: "1 year support" },
    ],
    teaches: [
      "Python",
      "Pandas",
      "NumPy",
      "Statistics",
      "Machine Learning",
      "Deep Learning",
      "TensorFlow/Keras",
      "NLP",
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
    backgroundColor: "#6ed290",
    textColor: "black",
    cohort: "14",
    cohortStartDate: "Nov 30",
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
      name: "Akshay Naik",
      role: "Fresher",
      from: "IIT Kharagpur",
      company: "Valueleaf",
      title: "Product Analyst",
      text: "I joined the course as a fresher and gained strong practical skills. I got placed as a Campaign Manager.",
      profile: "/Picture1.png",
      fromLogo: "/img1.png",
      companyLogo: "/logo1.png",
    },
    {
      name: "Sree Hari Ponappan",
      role: "BTech",
      from: "Product Management Intern",
      company: "Phenom",
      title: "Sr Marketing Manager",
      text: "Switched careers successfully with strong mentorship and hands-on learning.",
      profile: "/Picture2.png",
      fromLogo: "/img2.png",
      companyLogo: "/logo2.png",
    },
    {
      name: "SabySachi Mohapatra",
      role: "Byjus",
      from: "Associate Manager",
      company: "Inito",
      title: "Company Manager",
      text: "Advanced training helped me level up my career and transition effectively.",
      profile: "/Picture3.png",
      fromLogo: "/img3.png",
      companyLogo: "/logo3.png",
    },
  ],
  faculty: [
    {
      name: "Rupesh Kumar",
      designation: "Chief Marketing Officer",
      image: "/mentor3.jpg",
      subjects: ["Data Science & AI", "Performance Marketing"],
      socialMedia: "linkedin",
      url: "https://in.linkedin.com/in/neelam-rupesh",
      experience: "8+ Years",
      students: "2,500+",
      rating: "4.9",
      color: "blue",
    },
    {
      name: "Mukesh Kumar",
      designation: "General Manager",
      image: "/mentor2.jpg",
      subjects: ["Digital Strategy", "Product Marketing"],
      socialMedia: "linkedin",
      url: "https://www.linkedin.com/in/askmukesh?trk=blended-typeahead",
      experience: "10+ Years",
      students: "3,200+",
      rating: "4.9",
      color: "purple",
    },
  ],
  curriculum: [
    {
      title: "Python Fundamentals",
      duration: "2 weeks",
      lessons: "10 lessons",
      projects: "1 mini project",
      description: [
        "Python Basics: Syntax, Variables, Data Types",
        "Conditional Statements, Loops, Functions",
        "Lists, Tuples, Sets, Dictionaries",
        "File Handling & Exception Handling",
        "Mini Project: “Student Result Calculator”",
      ],
    },
    {
      title: "Data Analysis with NumPy & Pandas",
      duration: "3 weeks",
      lessons: "12 lessons",
      projects: "1 mini project",
      description: [
        "NumPy Arrays, Operations, Broadcasting",
        "Pandas DataFrames, Series, Indexing",
        "Data Cleaning, Handling Missing Values, Filtering",
        "Merging, Grouping, and Aggregations",
        "Mini Project: “Analyze Sales Data (Excel/CSV)”",
      ],
    },
    {
      title: "Data Visualization",
      duration: "2 weeks",
      lessons: "10 lessons",
      projects: "1 project",
      description: [
        "Matplotlib & Seaborn for plotting",
        "Line, Bar, Pie, Scatter, Heatmaps",
        "Real-world dataset visualization (Kaggle Datasets)",
        "Project: “Exploratory Data Analysis on Covid / Netflix Dataset”",
      ],
    },
    {
      title: "Statistics & Probability for Data Science",
      duration: "2 weeks",
      lessons: "10 lessons",
      projects: "1 project",
      description: [
        "Descriptive Statistics (Mean, Median, Mode, Variance, SD)",
        "Probability, Permutations & Combinations",
        "Correlation, Covariance",
        "Normal Distribution, Hypothesis Testing (t-test, chi-square)",
        "Project: “Statistical Analysis on Real Dataset”",
      ],
    },
    {
      title: "Introduction to Machine Learning",
      duration: "2 weeks",
      lessons: "10 lessons",
      projects: "1 mini project",
      description: [
        "What is ML? Supervised vs Unsupervised Learning",
        "Data Preprocessing: Encoding, Scaling, Splitting",
        "Evaluation Metrics: Accuracy, Precision, Recall, F1",
        "ML Pipeline & Workflow",
        "Mini Project: “Predict Student Scores”",
      ],
    },
    {
      title: "Supervised Learning – Regression",
      duration: "2 weeks",
      lessons: "8 lessons",
      projects: "1 project",
      description: [
        "Linear Regression, Polynomial Regression",
        "Ridge & Lasso Regularization",
        "Model Evaluation: R², RMSE",
        "Project: “House Price Prediction”",
      ],
    },
    {
      title: "Supervised Learning – Classification",
      duration: "3 weeks",
      lessons: "12 lessons",
      projects: "1 project",
      description: [
        "Logistic Regression, KNN, Decision Tree, Random Forest",
        "SVM, Naïve Bayes",
        "Cross Validation & Hyperparameter Tuning (GridSearchCV)",
        "Project: “Loan Approval / Diabetes Prediction”",
      ],
    },
    {
      title: "Unsupervised Learning",
      duration: "2 weeks",
      lessons: "10 lessons",
      projects: "1 project",
      description: [
        "Clustering: K-Means, Hierarchical",
        "Dimensionality Reduction: PCA",
        "Anomaly Detection & Customer Segmentation",
        "Project: “Customer Segmentation for Marketing”",
      ],
    },
    {
      title: "Introduction to Neural Networks",
      duration: "2 weeks",
      lessons: "10 lessons",
      projects: "1 project",
      description: [
        "What is Deep Learning? Perceptron Concept",
        "Activation Functions (ReLU, Sigmoid, Softmax)",
        "Building Neural Networks with TensorFlow/Keras",
        "Project: “Handwritten Digit Recognition (MNIST)”",
      ],
    },
    {
      title: "Convolutional Neural Networks (CNN)",
      duration: "2 weeks",
      lessons: "8 lessons",
      projects: "1 project",
      description: [
        "Image Data Preprocessing",
        "CNN Architecture (Conv, Pooling, Flatten, Dense)",
        "Data Augmentation",
        "Project: “Image Classification using CNN”",
      ],
    },
    {
      title: "Natural Language Processing (NLP)",
      duration: "2 weeks",
      lessons: "8 lessons",
      projects: "1 project",
      description: [
        "Text Preprocessing (Tokenization, Lemmatization)",
        "Bag of Words, TF-IDF",
        "Sentiment Analysis with Logistic Regression",
        "Project: “Twitter Sentiment Analysis / Movie Review Classification”",
      ],
    },
    {
      title: "Model Deployment & Career Readiness",
      duration: "2 weeks",
      lessons: "10 lessons",
      projects: "1 final project",
      description: [
        "Flask / Streamlit for Model Deployment",
        "Deploy on Render / Hugging Face Spaces",
        "GitHub Project Upload & Documentation",
        "Resume Building & Interview Prep",
        "Final Project Demo: “AI-Powered Data Science Capstone”",
      ],
    },
    {
      title: "Final Projects (Choose Any 2–3 for Portfolio)",
      duration: "—",
      lessons: "—",
      projects: "3 projects",
      description: [
        "House Price Prediction",
        "Customer Segmentation Dashboard",
        "Sentiment Analysis (Twitter / Reviews)",
        "Image Classification (CNN)",
        "Sales Forecasting using Time Series",
      ],
    },
  ],
  curriculumHighlights: {
    duration: "8 weeks",
    format: "Live + Recorded",
    projects: "15+ Real-world",
    mentorship: "1:1 Support",
    placement: "1 Year Support",
    certificate: "Industry Recognized",
    rating: { value: 4.8, reviews: 1400 },
  },
  fee: {
    scholarship: {
      percentage: 30,
      originalPrice: 20000,
      discountedPrice: 14000,
      emi: 10000,
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
        description: "1 year placement support",
        icon: "Shield",
        color: "text-orange-600",
      },
    ],
    badge: "Most Popular",
    cta: {
      text: "Apply Now - Limited Seats Available",
      note: "⚡ Scholarship applications closing soon",
    },
  },
  language: {
    heading: "Learning Journey",
    title: "Learn all the Tools that are In-demand",
    tools: [
      {
        name: "Python",
        icon: "/Language/Python.png",
        color: "bg-blue-100 text-blue-700",
      },
      {
        name: "NumPy",
        icon: "/Language/NumPy.png",
        color: "bg-indigo-100 text-indigo-700",
      },
      {
        name: "Pandas",
        icon: "/Language/Pandas.png",
        color: "bg-purple-100 text-purple-700",
      },
      {
        name: "Matplotlib",
        icon: "/Language/Matplotlib.png",
        color: "bg-green-100 text-green-700",
      },
      {
        name: "TensorFlow",
        icon: "/Language/TensorFlow.png",
        color: "bg-orange-100 text-orange-700",
      },
      {
        name: "SQL",
        icon: "/Language/sql.png",
        color: "bg-red-100 text-red-700",
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
      "Stand out from your peers in front of recruiters and start your career.",
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
  faq: [
    {
      "question": "What is the duration of the Edurup Data Science Course in {city}?",
      "answer": "The Edurup Data Science Course is an 8-week live online training program that helps you master Data Science, Machine Learning, and AI through practical, project-based learning."
    },
    {
      "question": "What is the course fee for the Data Science Course at Edurup?",
      "answer": "The actual course fee is ₹20,000, but with the Edurup Scholarship, you can enroll for just ₹14,000."
    },
    {
      "question": "Does Edurup provide placement support after course completion?",
      "answer": "Yes. Edurup offers 1-year of dedicated Placement Support, including resume building, interview preparation, and job referrals through our hiring network."
    },
    {
      "question": "Is this Data Science Course available offline in {city}?",
      "answer": "The course is conducted live online, allowing you to learn from {city}-based experts and attend career events organized locally."
    },
    {
      "question": "What will I learn in this Data Science course?",
      "answer": "You'll learn Python, Statistics, Machine Learning, Data Visualization, and AI Tools — all with hands-on projects guided by industry mentors."
    },
    {
      "question": "Is this course suitable for beginners?",
      "answer": "Yes. The course is ideal for beginners and working professionals who want to start a career in Data Science or upskill in AI and Machine Learning."
    },
    {
      "question": "What certification will I receive after completing the course?",
      "answer": "Upon successful completion, you'll receive an industry-recognized Edurup Data Science & AI Certification, validating your expertise in Data Science."
    },
    {
      "question": "Do you offer EMI or installment options for the fee?",
      "answer": "Yes. Edurup provides flexible EMI options, making it easier to pay the discounted ₹14,000 course fee in monthly installments."
    },
    {
      "question": "What kind of job roles can I apply for after completing this course?",
      "answer": "After completing the course, you can apply for roles such as Data Analyst, Junior Data Scientist, Machine Learning Engineer, or AI Research Assistant."
    },
    {
      "question": "How can I apply for the Edurup Scholarship?",
      "answer": "You can apply during registration. Eligible candidates will automatically receive a ₹6,000 scholarship discount, bringing the total course fee down to ₹14,000."
    },
  ],
  productAnalyst: {
    heading: "Your Future Job Title",
    titles: [
      "Data Scientist",
      "Machine Learning Engineer",
      "AI Engineer",
      "Data Analyst",
    ],
    salaries: {
      average: "4-7 Lakhs",
      highest: "14 Lakhs",
      highestCompany: "Top Firms",
    },
  },
};
