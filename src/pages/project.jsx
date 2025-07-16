// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
import { myProjects } from '../constants/index.jsx'; // ensure this contains the JSX icon-based tags

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


import { ComputerModel } from '../components/model_component/computer.jsx';

import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import CanvasLoader from '../components/Loading.jsx';
import { PerspectiveCamera } from '@react-three/drei';


import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {PayPhone} from "../components/model_component/payphone.jsx";


const projectCount = myProjects.length;

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    useGSAP(() => {
        gsap.fromTo(
            `.animatedText`,
            { opacity: 0 },
            { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' }
        );
    }, [selectedProjectIndex]);

    const currentProject = myProjects[selectedProjectIndex];

    return (
        <section className="min-h-screen w-full flex items-center justify-center flex-col c-space" id={"project"}>
            <p className="sm:text-4xl text-3xl font-semibold text-center text-brand-kinoko_orange">My Projects</p>

            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                {/* Left project info card */}
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 rounded-lg bg-white">


                    {/* Logo */}
                    <div
                        className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg z-10"
                        style={currentProject.logoStyle}
                    >
                        <img
                            className="w-10 h-10 shadow-sm"
                            src={currentProject.logo}
                            alt="logo"
                        />
                    </div>

                    {/* Title & Descriptions */}
                    <div className="flex flex-col gap-5 text-gray-800 my-5 z-10">
                        <p className="text-orange-500 text-2xl font-semibold animatedText">
                            {currentProject.title}
                        </p>
                        <p className="animatedText">{currentProject.desc}</p>
                        <p className="animatedText">{currentProject.subdesc}</p>
                    </div>

                    {/* Tags and Link */}
                    <div className="flex items-center justify-between flex-wrap gap-5 z-10">
                        <div className="flex items-center gap-3 flex-wrap">
                            {currentProject.tags.map((tag, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-1 px-3 py-2 bg-brand-kinoko_orange rounded text-black-200 text-sm"
                                >
                                    <span className="text-lg">{tag.icon}</span>
                                    <span>{tag.name}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            className="flex items-center gap-2 cursor-pointer text-black-600 hover:underline"
                            href={currentProject.href}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <p>Check Live Site → </p>
                            {/*<img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />*/}
                        </a>
                    </div>

                    {/* Arrows for navigation */}
                    <div className="flex justify-between items-center mt-7 z-10">
                        <button
                            className="arrow-btn"
                            onClick={() => handleNavigation('previous')}
                        >
                            <FaArrowLeft className="text-xl text-black-600 hover:text-black-800" />
                        </button>
                        <button
                            className="arrow-btn"
                            onClick={() => handleNavigation('next')}
                        >
                            <FaArrowRight className="text-xl text-black-600 hover:text-black-800" />
                        </button>
                    </div>
                </div>

                {/* Right static preview image (you can replace this with a screenshot or GIF) */}
                <div className="border border-black-300  rounded-lg h-96 flex items-center justify-center">
                    <Canvas>
                        <Suspense fallback={<CanvasLoader/>}>
                            <PerspectiveCamera makeDefault position={[0, 3, 50]} fov={10} />
                            <ambientLight intensity={0.8} />
                            <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
                            <ComputerModel/>
                        </Suspense>

                    </Canvas>
                </div>
            </div>
        </section>
    );
};

export default Projects;
