import {
    FaPython,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaDatabase,
    FaAws,
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

// Grouped data
const languageSkills = [
    { name: "Python", icon: <FaPython /> },
    { name: "C", icon: <SiC /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "C#", icon: <SiDotnet /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "SQL", icon: <FaDatabase /> },
];

const toolSkills = [
    { name: "React", icon: <FaReact /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "AWS", icon: <FaAws /> },
];

const SkillGrid = ({ title, skills }) => (
    <div className="w-full max-w-6xl mb-16">
        <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-brand-kinoko_orange">{title}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
                <div
                    key={idx}
                    className="flex flex-col items-center justify-center bg-white px-4 py-6 rounded-xl shadow-lg hover:shadow-xl transition"
                >
                    <span className="text-3xl text-brand-kinoko_orange mb-2">{skill.icon}</span>
                    <p className="text-sm font-medium text-gray-800">{skill.name}</p>
                </div>
            ))}
        </div>
    </div>
);

const SkillSection = () => {
    return (
        <section
            id="skill"
            className="min-h-screen w-full flex flex-col items-center justify-center c-space bg-[#FFFBF5] py-20"
        >
            <h2 className="sm:text-4xl text-3xl font-semibold text-brand-kinoko_orange text-center mb-10">My Skills</h2>

            <SkillGrid title="Languages" skills={languageSkills} />
            <SkillGrid title="Tools & Frameworks" skills={toolSkills} />
        </section>
    );
};

export default SkillSection;
