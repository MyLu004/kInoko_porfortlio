import React, { useState, Suspense } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { myProjects } from "../constants/index.jsx";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import CanvasLoader from "../components/Loading.jsx";
import { ComputerModel } from "../components/model_component/computer.jsx";

export default function Projects() {
  const [index, setIndex] = useState(0);
  const n = myProjects.length;

  const handleNavigation = (direction) => {
    setIndex((prevIndex) =>
      direction === "previous"
        ? prevIndex === 0
          ? n - 1
          : prevIndex - 1
        : prevIndex === n - 1
        ? 0
        : prevIndex + 1
    );
  };

  const currentProject = myProjects[index];

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center c-space" id="project">
      <p className="sm:text-4xl text-3xl font-semibold text-center text-brand-kinoko_orange">
        My Projects
      </p>

      <div className="relative mt-12 w-full flex items-center justify-center">
<div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
  {/* Left ghost */}
  <div
    className="
      absolute w-[86%] h-[88%]
      -translate-x-[90px] -translate-y-[8px] rotate-[-1.5deg] scale-[0.93]
      rounded-2xl
      bg-gradient-to-br from-[#FF6B35]/90 to-[#E65C2C]/80
      ring-1 ring-[#ff6b35]/50
      shadow-[0_25px_60px_rgba(255,107,53,0.45)]
      backdrop-blur-[1px] backdrop-saturate-150
      opacity-85
      transition-all duration-500 ease-out
    "
  />
  
  {/* Right ghost */}
  <div
    className="
      absolute w-[86%] h-[88%]
      translate-x-[90px] translate-y-[6px] rotate-[1.2deg] scale-[0.935]
      rounded-2xl
      bg-gradient-to-br from-[#FF6B35]/90 to-[#E65C2C]/80
      ring-1 ring-[#ff6b35]/50
      shadow-[0_25px_60px_rgba(255,107,53,0.45)]
      backdrop-blur-[1px] backdrop-saturate-150
      opacity-85
      transition-all duration-500 ease-out
    "
  />
</div>

        {/* Active Card */}
        <div className="relative z-10 grid lg:grid-cols-2 grid-cols-1 gap-5 w-[80%] shadow-2xl shadow-black-200 rounded-lg bg-white p-6 transition-all duration-300">
          {/* Left project info card */}
          <div className="flex flex-col gap-5 relative sm:p-6">
            {/* Logo */}
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-md z-10">
              <img
                className="w-15 h-15 object-contain"
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

            <div className="flex flex-col gap-2">
                {/* Live Site Link */}
                {currentProject.href && (
                    <a
                    className="flex items-center gap-2 cursor-pointer text-black-600 hover:underline"
                    href={currentProject.href}
                    target="_blank"
                    rel="noreferrer"
                    >
                    <p>Check Live Site →</p>
                    </a>
                )}

                {/* GitHub Link */}
                {currentProject.github && currentProject.github.trim() !== "" && (
                    <a
                    className="flex items-center gap-2 cursor-pointer text-black-600 hover:underline"
                    href={currentProject.github}
                    target="_blank"
                    rel="noreferrer"
                    >
                    <p>Check GitHub →</p>
                    </a>
                )}
            </div>
        </div>

            <div className="flex justify-between items-center mt-7 z-10 w-full">
                {/* Left arrow */}
                <button
                    className="arrow-btn"
                    onClick={() => handleNavigation("previous")}
                >
                    <FaArrowLeft className="text-xl text-black-600 hover:text-black-800" />
                </button>

                {/* Counter */}
                <span className="text-gray-600 font-medium text-base">
                    {index + 1} / {n}
                </span>

                {/* Right arrow */}
                <button
                    className="arrow-btn"
                    onClick={() => handleNavigation("next")}
                >
                    <FaArrowRight className="text-xl text-black-600 hover:text-black-800" />
                </button>
            </div>



          </div>

          {/* Right Model Preview */}
          <div className="border border-black-300 rounded-lg flex items-center justify-center relative bg-brand-kinoko_orange">
            <div className="h-80">

            
            <Canvas>
              <Suspense fallback={<CanvasLoader />}>
                <PerspectiveCamera makeDefault position={[0, 3, 50]} fov={10} />
                <ambientLight intensity={0.8} />
                <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
                <ComputerModel
                  key={currentProject.title}
                  txt={currentProject.title}
                  texture={currentProject.texture}
                  rotation={[0, -0.3, 0]}
                />
              </Suspense>
            </Canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
