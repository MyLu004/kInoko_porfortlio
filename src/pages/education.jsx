import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaGraduationCap } from "react-icons/fa";
import { educationHistory } from "../constants/index.jsx";
import { clubExperiences } from "../constants/index.jsx";

const Education = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <section
            id="education"
            className="py-20 flex flex-col items-center justify-center c-space"
        >
            <h2
                className="head-text1 text-brand-kinoko_orange text-center mb-14"
                data-aos="fade-up"
            >
                Education
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
                {educationHistory.map((edu, idx) => (
                    <div
                        key={edu.id}
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col gap-3"
                        data-aos="zoom-in"
                        data-aos-delay={idx * 100}
                    >
                        {/* Header Row */}
                        <div className="flex items-center gap-4 mb-2">
                            <div className="bg-brand-kinoko_orange text-white p-3 rounded-full shadow-sm">
                                <FaGraduationCap className="text-xl" />
                            </div>
                            <div>
                                <h3 className="text-md font-semibold text-brand-kinoko_orange">
                                    {edu.degree}
                                </h3>
                                <p className="text-sm text-gray-600 font-medium">{edu.school}</p>
                                <p className="text-xs text-gray-400">{edu.duration}</p>
                            </div>
                        </div>

                        {/* Description */}
                        <ul className="text-sm text-gray-700 list-disc list-inside">
                            {edu.items.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <h2
                className="head-text1 text-brand-kinoko_orange text-center mt-20 mb-14"
                data-aos="fade-up"
            >
                Club Activities
            </h2>

            <div className="flex flex-col gap-10 w-full max-w-3xl">
                {clubExperiences.map((club, idx) => (
                    <div
                        key={club.id}
                        className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 flex flex-col lg:flex-row items-center justify-between gap-6 mx-auto"
                        data-aos="fade-up"
                        data-aos-delay={idx * 100}
                    >
                        {/* Text Content */}
                        <div className="lg:w-2/3 w-full">
                            <h3 className="text-md sm:text-lg font-semibold text-brand-kinoko_orange">
                                {club.role}{" "}
                                <span className="text-gray-800 font-normal">| {club.org}</span>
                            </h3>
                            <p className="text-sm text-gray-500 mb-2">{club.duration}</p>
                            <p className="text-sm text-gray-700 mb-4 leading-relaxed">{club.desc}</p>
                            <a
                                href={club.link}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm font-medium text-brand-kinoko_orange hover:underline"
                            >
                                Visit Website →
                            </a>
                        </div>

                        {/* Image */}
                        <div className="lg:w-1/3 w-full">
                            <img
                                src={club.image}
                                alt={`${club.org} logo`}
                                className="rounded-lg object-contain w-full h-40 shadow-sm"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
