import { workExperiences } from "../constants/index.jsx";
import { FaBriefcase } from "react-icons/fa";

const ExperienceSection = () => {
    return (
        <section
            id="experience"
            className="w-full bg-[#FFFBF5] py-20 flex flex-col items-center justify-center c-space"
        >
            <h2 className="head-text1 text-brand-kinoko_orange text-center mb-14">
                Work Experience
            </h2>

            <div className="relative w-full max-w-4xl">
                {/* Vertical Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-kinoko_orange"></div>

                {/* Present Pointer */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-brand-kinoko_orange text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
                    Present
                </div>

                {workExperiences.map((exp, index) => {
                    const isLeft = index % 2 === 0;
                    return (
                        <div key={exp.id} className="mb-16 flex justify-between items-center w-full">
                            {/* Left side */}
                            <div className={`w-5/12 ${isLeft ? "" : "hidden sm:block"}`}>
                                {isLeft && (
                                    <div className="bg-white p-6 rounded-xl shadow-md">
                                        <h3 className="text-lg font-semibold text-brand-kinoko_orange">
                                            {exp.pos}
                                        </h3>
                                        <p className="text-sm text-gray-600 font-medium">{exp.name}</p>
                                        <p className="text-xs text-gray-400 mb-2">{exp.duration}</p>
                                        <p className="text-sm text-gray-700 leading-relaxed">{exp.title}</p>
                                    </div>
                                )}
                            </div>

                            {/* Timeline Icon */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                                <div className="w-10 h-10 bg-brand-kinoko_orange text-white rounded-full flex items-center justify-center shadow-lg">
                                    <FaBriefcase />
                                </div>
                            </div>

                            {/* Right side */}
                            <div className={`w-5/12 ${!isLeft ? "" : "hidden sm:block"}`}>
                                {!isLeft && (
                                    <div className="bg-white p-6 rounded-xl shadow-md">
                                        <h3 className="text-lg font-semibold text-brand-kinoko_orange">
                                            {exp.pos}
                                        </h3>
                                        <p className="text-sm text-gray-600 font-medium">{exp.name}</p>
                                        <p className="text-xs text-gray-400 mb-2">{exp.duration}</p>
                                        <p className="text-sm text-gray-700 leading-relaxed">{exp.title}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ExperienceSection;
