
import {
    FaReact,
    FaPython,
    FaCss3Alt,
    FaHtml5,
    FaJs,
    FaDatabase,
    FaAws,
    FaCode, // for fallback
} from "react-icons/fa";

import {
    SiC,
    SiCplusplus,
    SiDotnet,
    SiTailwindcss,
    SiFirebase,
    SiPostgresql,
    SiFastapi,
} from "react-icons/si";


export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'Project',
        href: '#project',
    },
    {
        id: 3,
        name: 'Skill',
        href: '#skill',
    },
    {
        id: 4,
        name: 'Experience',
        href: '#experience',
    },
    {
        id: 5,
        name: 'Education',
        href: '#education',
    },

    {
        id: 6,
        name: 'Contact',
        href: '#contact',
    },

    {
        id: 7,
        name: 'Resume',
        href: 'https://drive.google.com/file/d/1dpZpmbI2NBid-k8sa11SuGsZ0Z5M4uul/view?usp=sharing',
        external: true

    },
];


export const myProjects = [
    {
        title: 'Healthcare Patient Dashboard',
        desc: 'A modern web application for healthcare professionals to manage patient vitals data and appointments.',
        subdesc:
            'Built using React, FastAPI, and PostgreSQL. Focused on secure data handling and responsive design.',
        href: 'https://healthcare-patient-dashboard.vercel.app',
        texture: '/project/HealthDashboard.png',
        logo: '/project/HealthDashboardIcon.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },

        tags: [
            { id: 1, name: 'React Native', icon: <FaReact /> },
            { id: 2, name: 'FastAPI', icon: <SiFastapi /> },
            { id: 3, name: 'PostgreSQL', icon: <SiPostgresql /> },
        ],
    },
    {
        title: 'Chatbot Application',
        desc: 'An interactive AI chatbot web applicaiton using LLMs (like Llama, GPT, Mistral) with a responsive React frontend and FastAPI backend. Designed to simulate intelligent conversations with support for chat memory, multiple model, and an intuitive UI',
        subdesc:
            'Built using React, FastAPI, PostgreSQL, Ollama and LangChain.',
        href: 'https://github.com/MyLu004/OnTash---Intership/tree/master/ChatBot',
        texture: '/project/Chatbot.png',
        logo: '/project/ChatbotIcon.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },

        tags: [
            { id: 1, name: 'React Native', icon: <FaReact /> },
            { id: 2, name: 'TailwindCSS', icon: <SiTailwindcss /> },
            { id: 3, name: 'FastAPI', icon: <SiFastapi /> },
            { id: 4, name: 'PostgreSQL', icon: <SiPostgresql /> },
        ],
    },
    {
        title: 'MedAssist - Elderly Health Companion',
        desc: 'A React Native app designed to help elderly users manage their medication schedules and reminders.',
        subdesc:
            'Built for UCLA Hackathon using React Native and Gemini 1.5 API. Prioritized accessibility and secure data handling.',
        href: 'https://devpost.com/software/medassist-ut5qor',
        texture: '/project/medAssist.png',
        logo: '/project/medAssistIcon.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },

        tags: [
            { id: 1, name: 'React Native', icon: <FaReact /> },
            { id: 2, name: 'TailwindCSS', icon: <SiTailwindcss /> },
            { id: 3, name: 'Firebase', icon: <SiFirebase /> },
        ],
    },
    {
        title: 'Task Leaf - ToDo App',
        desc: 'Allow user creating and tracking their tasks. Design in Animal Crossing theme :3 ',
        subdesc:
            'Developed using html, css, javascript',
        href: 'https://mylu004.github.io/Task-Leaf/',
        texture: '/project/TaskLeaf.png',
        logo: '/project/TaskLeafIcon.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },

        tags: [
            { id: 1, name: 'HTML', icon: <FaHtml5 /> },
            { id: 2, name: 'CSS', icon: <FaCss3Alt /> },
            { id: 3, name: 'Javascript', icon: <FaJs /> },
        ],
    },
];


export const workExperiences = [
    {
        id: 1,
        name: "OnStach AI Internship",
        pos: "AI Research Intern",
        duration: "Summer 2025",
        title:
            "Worked on LLM summarization and document processing using Python, LangChain, Streamlit, and Ollama. Built tools for summarizing long documents and deployed an AI assistant for real-time article Q&A.",
        icon: "/assets/ai.svg", // You can customize this icon path
        animation: "brain",
    },
    {
        id: 2,
        name: "Zero Robotics",
        pos: "Tutor & Mentor",
        duration: "Summer 2023, 2024",
        title:
            "Guided middle school students in algorithm development and robotics programming. Explained technical concepts using age-appropriate examples and fostered critical thinking through hands-on coding challenges.",
        icon: "/assets/robotics.svg",
        animation: "clapping",
    },
    {
        id: 3,
        name: "BESST (CSULB)",
        pos: "STEM Tutor – Calculus & Precalculus",
        duration: "October 2023 – Present",
        title:
            "Tutored students in Calculus I & II and foundational Precalculus topics. Collaborated with faculty to align support with class material and guided students through exam prep, problem-solving, and core concept reinforcement.",
        icon: "/assets/math.svg",
        animation: "salute",
    },
    {
        id: 4,
        name: "Assistant Research (CSULB)",
        pos: "Student Assistant",
        duration: "September 2022 - December 2022",
        title:
            "Assisted faculty with research design, literature review, and methodology development in support of faculty-led academic projects",
        icon: "/assets/math.svg",
        animation: "salute",
    },
];



export const educationHistory = [
    {
        id: 1,
        degree: "B.S. in Computer Science",
        school: "California State University, Long Beach",
        duration: "Graduate Expected: Spring 2026",
        items: [
            "President's Honor List",
            "University Honors Program",
            "GPA: 3.9 (Expected Graduation: May 2026)",
            "Courses: Calculus 2, Algorithms, Assembly, Data Structure, OOP, Discrete Math, Computer Architecture,Linear Algebra, System Programming, Operating System, Database",
        ],
    },
    {
        id: 2,
        degree: "Certificate in Machine Learning Foundations",
        school: "Cornell Tech (Break Through Tech AI Program)",
        duration: "Summer 2024",
        items: [
            "Completed AI certification through Cornell’s BTT program at UCLA",
            "Topics: Machine learning theory, supervised learning",
        ],
    },
];

export const clubExperiences = [
    {
        id: 1,
        role: "Webmaster",
        org: "AI Research Club",
        duration: "2023 – 2025",
        desc: "Designed and developed the AI Research Club’s official website. Maintained up-to-date content for meetings and events, prioritized accessibility, and ensured a responsive, user-friendly experience for members.",
        image: "/club/AI_csulb_club.png",
        link: "https://csulbairesearch.github.io/AI_Research_Website/",
    },
    {
        id: 2,
        role: "Web Lead",
        org: "AI X DATA",
        duration: "2025",
        desc: "Led the frontend development for MarinaHack 2024’s website. Designed and built the landing page, integrated registration workflows, and collaborated with organizers to meet launch deadlines.",
        image: "/club/AI_Data.png",
        link: "https://datathoncsulb.netlify.app",
    },
    {
        id: 3,
        role: "Web Co-Lead",
        org: "MarinaHack",
        duration: "2024",
        desc: "Co-led a team of 12 developers to design and implement the MarinaHack 2024 website. Oversaw page structure, feature rollout, and team coordination to ensure a polished and on-time deployment.",
        image: "/club/wicHackathon24.png",
        link: "https://marina-hacks-3-0-r96wre70m-victoriamacalis-projects.vercel.app",
    },
    {
        id: 4,
        role: "Webmaster",
        org: "Women in Computing (WIC)",
        duration: "2024 – 2025",
        desc: "Redesigned and managed the WIC website to promote events, outreach initiatives, and resources. Ensured timely updates, modern UI/UX, and an inclusive design for a diverse member base.",
        image: "/club/wic_csubl_club.png",
        link: "https://csulbwic.com",
    },
];