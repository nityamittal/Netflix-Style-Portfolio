import { Education, Experience, Project, SkillCategory, Achievement, Volunteering } from './types';
import { Linkedin, Github, Mail } from 'lucide-react';
import React from 'react';

export const PROFILE = {
  name: "Nitya Mittal",
  title: "Master's Candidate in CS @ UMich | Ex-Amex",
  email: "nityamittal2000@gmail.com",
  linkedin: "https://www.linkedin.com/in/mittalnitya/",
  github: "https://github.com/nityamittal",
  location: "Ann Arbor, MI",
  about: "Computer Science graduate student at the University of Michigan with a strong foundation in Mathematics and Data Science. Formerly at American Express, optimizing data layers and automating critical financial processes. Passionate about Machine Learning, Natural Language Processing, and building scalable software solutions.",
};

export const SOCIAL_LINKS = [
  { icon: <Linkedin className="w-5 h-5" />, href: PROFILE.linkedin, label: "LinkedIn" },
  { icon: <Github className="w-5 h-5" />, href: PROFILE.github, label: "GitHub" },
  { icon: <Mail className="w-5 h-5" />, href: `mailto:${PROFILE.email}`, label: "Email" },
];

export const EDUCATION: Education[] = [
  {
    school: "University of Michigan",
    degree: "Master of Science in Engineering in Computer Science",
    duration: "Aug 2024 – May 2026",
    gpa: "3.925/4.0",
    location: "Ann Arbor, MI",
    activities: "GradSWE UMich, Michigan Engineering Student Advisory Board",
    courses: [
      "Algorithms for ML & DS", "Artificial Intelligence Foundations", "Computational Complexity", 
      "Distributed Consensus & Blockchain", "Human-AI Interaction", "Natural Language Processing"
    ]
  },
  {
    school: "Delhi Technological University",
    degree: "B.Tech in Mathematics & Computing",
    duration: "July 2019 – May 2023",
    gpa: "3.81/4.0",
    location: "Delhi, India",
    activities: "IEEE DTU, Kalakriti DTU, NSS DTU, Technical Council DTU",
    courses: [
      "Data Structures", "Algorithms", "Operating Systems", "DBMS", "Machine Learning", 
      "Computer Networks", "Theory of Computation", "Linear Algebra", "Probability & Statistics"
    ]
  },
  {
    school: "International Indian School Al-Jubail",
    degree: "High School Diploma (Science & Maths)",
    duration: "2007 – 2018",
    scores: [
      "SAT Math L2: 790", "SAT Chem: 780", "SAT Physics: 760", "Grade 10: 10 CGPA"
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "American Express",
    role: "Associate – Digital Product Management",
    duration: "July 2023 - July 2024",
    location: "Gurugram, India",
    technologies: ["Python", "Java", "Hive", "SQL", "JIRA", "Yellowbricks"],
    description: [
      "Responsible for maintenance, governance and optimization of data layers used for compliance needs in the Anti-Money Laundering Transaction Monitoring Team.",
      "Collaborated with cross-functional teams to identify and resolve data quality issues, implemented new optimization strategies for data layers, leading to a 33% data rationalization saving ~$70K in Q1 and Q2'24."
    ]
  },
  {
    company: "American Express",
    role: "Analyst Intern",
    duration: "May 2022 - July 2022",
    location: "Gurugram, India",
    technologies: ["Python", "Java", "Hive", "SQL", "Data Engineering", "MLStudio"],
    description: [
      "Optimized the development time by 80% of the Model Performance Tracking of the Forecasting Tool used to generate expected credit loss in the Regulatory Team.",
      "Automated the process to securely source data from an API & feed it to the DB in different formats as per their requirements."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "MiniGPT: From-Scratch Language Model",
    duration: "Nov 2025", 
    techStack: ["Python", "NumPy", "PyTorch", "Transformers"],
    description: "Built a decoder-only GPT-style transformer with multi-head self-attention, positional embeddings, and a causal LM objective. Pretrained on web text and supervised fine-tuned on chat data for multi-turn dialogue. Evaluated on multiple-choice QA benchmarks."
  },
  {
    title: "AI Generated Text Detector",
    duration: "Nov 2024 – Jan 2025",
    techStack: ["Python", "NumPy", "PyTorch", "Scikit-learn"],
    description: "Implemented an end-to-end sparse-first text classification pipeline. Built custom tokenizers and vocabularies, achieving ~79% F1 score using PyTorch with custom sparse logistic regression. Benchmarked SGD, RMSprop, and AdamW optimizers."
  },
  {
    title: "Chaos Classification on Keyword Extraction",
    duration: "Aug 2024 - Oct 2024",
    techStack: ["Python", "Scikit-learn", "NLTK", "spaCy", "Chaos Theory"],
    description: "Built a novel chaos classifier for keywords extracted in a corpus using Henon maps, Lyapunov exponent, tf-idf, NER & word2vec algorithms to identify randomness and chaos in the data. Identified low-frequency, high impact keywords similar to LLM outputs.",
    link: "https://github.com/nityamittal/Chaos-Classification-using-Keyword-Extraction"
  },
  {
    title: "COVID-19 Detection using CNN",
    duration: "Jan 2023 - Mar 2023",
    techStack: ["Python", "TensorFlow", "Keras"],
    description: "Built a Covid-19 testing system using CNN based architecture (VGG19 and ResnetB0) using lung X-rays with 95% accuracy.",
    link: "https://github.com/nityamittal/Covid-19-Detection-using-CNN"
  },
  {
    title: "POS Tagging using Hidden Markov Models",
    duration: "Oct 2021 – Nov 2021",
    techStack: ["Python", "Scikit-Learn", "NLP"],
    description: "Created a hybrid model using Rule based tagging and Viterbi Algorithm. Designed the HMM tagger based on Viterbi algorithm, implemented Brill’s rule based tagger for corner cases and compared model accuracy."
  },
  {
    title: "Customer Segmentation",
    duration: "Oct 2021 - Nov 2021",
    techStack: ["Python", "Scikit-learn", "Seaborn", "KNN"],
    description: "Built an ML segmentation model to identify different types of customers to optimize marketing strategy using cohort analysis, RFM segmentation and K-means clustering."
  },
  {
    title: "2048 Game",
    duration: "May 2021 – Jun 2021",
    techStack: ["JavaScript", "HTML", "CSS"],
    description: "Created a 4x4 grid 2048 game web application. Implemented game logic for sliding tiles, combining numbers, and win/loss states."
  },
  {
    title: "File Zipper (Huffman Coding)",
    duration: "Feb 2021 – Mar 2021",
    techStack: ["JavaScript", "HTML/CSS", "Bootstrap"],
    description: "Created a File Zipper website using Huffman coding algorithm to compress and decompress text files, demonstrating lossless data compression techniques."
  },
  {
    title: "Algorithm Visualizer",
    duration: "Oct 2020 – Nov 2020",
    techStack: ["Python", "PyGame", "NetworkX"],
    description: "Created an Algorithm Visualizer using Python libraries to depict the visualization of various searching and sorting algorithms and illustrate the effect of different algorithms on graphs."
  },
  {
    title: "Bayesian Statistics",
    duration: "Oct 2020 – Nov 2020",
    techStack: ["R", "ANOVA", "Regression"],
    description: "Explored statistical modelling processes, Markov chain Monte Carlo, and models like JAGS using linear regression, ANOVA, Poisson Regression, and hierarchical modelling."
  },
  {
    title: "SIR Model (Infectious Disease Modelling)",
    duration: "Oct 2020 – Nov 2020",
    techStack: ["R", "Mathematical Modeling"],
    description: "Modeled infectious disease dynamics using the SIR model in R to interpret rates, durations, proportions, and basic reproduction number (R0)."
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "C/C++", "Java", "SQL", "OCaml", "MATLAB", "R", "Hive", "HTML/CSS", "JavaScript"]
  },
  {
    category: "Machine Learning",
    items: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "NumPy", "Pandas", "NLP", "Computer Vision", "Deep Learning"]
  },
  {
    category: "Data & Tools",
    items: ["Git", "JIRA", "Slurm", "Hugging Face", "Data Engineering", "Data Analysis", "Tableau", "Seaborn"]
  },
  {
    category: "Core Concepts",
    items: ["Data Structures", "Algorithms", "OS", "DBMS", "Networks", "Distributed Systems", "OOP", "System Design"]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { title: "McKinsey’s Next Generation Women Leaders", organization: "McKinsey & Company", year: "2023 & 2025" },
  { title: "Global URAM Scholar", organization: "Micron Technology", year: "2022", description: "1 of 39 recipients across India for academic excellence and research." },
  { title: "AWS Machine Learning Scholar", organization: "Udacity", year: "2021", description: "Selected among 36,000+ applicants." },
  { title: "Silver Medalist - Green Olympiad", organization: "TERI", year: "2015" },
  { title: "Winner - Youth Leadership Program", organization: "Elite Toastmasters Club", description: "Evaluation Contest Winner" },
  { title: "Distinction - Mental Arithmetic", organization: "UCMAS", description: "Grade 10 Proficiency Exam" }
];

export const VOLUNTEERING: Volunteering[] = [
  {
    role: "Coach - Joy of Coding",
    organization: "University of Michigan",
    duration: "Jun 2025 - Present",
    description: ["Mentoring students in coding fundamentals."]
  },
  {
    role: "Board Member",
    organization: "Michigan Engineering Student Advisory Board",
    duration: "Dec 2024 - Present",
    description: ["Advising on student engineering initiatives."]
  },
  {
    role: "Networking Officer",
    organization: "Graduate Society of Women Engineers (GradSWE)",
    duration: "Sep 2024 - Present",
    location: "Ann Arbor, MI"
  },
  {
    role: "Judge",
    organization: "MHacks17",
    duration: "Sep 2024",
    description: ["Evaluated projects emphasizing hands-on technical skills in ML, web, and mobile dev."]
  },
  {
    role: "Vice Chairperson",
    organization: "IEEE DTU Computer Society",
    duration: "May 2022 - May 2023",
    location: "Delhi, India",
    description: ["Led one of the most active student branches with 400+ members."]
  },
  {
    role: "Lead Organizer",
    organization: "Vihaan 5.0 (IEEE DTU)",
    duration: "Mar 2022",
    description: ["Organized large-scale hackathon events and webinars."]
  },
  {
    role: "Mentor",
    organization: "IEEE DTU",
    duration: "Aug 2020 - May 2023",
    description: ["Conducted workshops on DSA, Programming, and ML for 200+ junior students."]
  },
  {
    role: "Member",
    organization: "Codess.Cafe",
    duration: "Apr 2021 - Present",
    description: ["Mentoring and supporting women in tech."]
  },
  {
    role: "Co-Head (Corporate)",
    organization: "Invictus DTU",
    duration: "Apr 2021 - Jun 2021",
    description: ["Managed events for the annual technical fest with 10K+ students."]
  },
  {
    role: "Volunteer",
    organization: "National Service Scheme (NSS) DTU",
    duration: "Jan 2020 - Aug 2023"
  }
];