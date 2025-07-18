import React, { useEffect, useState } from 'react';
import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { useControls } from 'leva';
import HeroCamera from '../components/heroCamera.jsx';
import Button from '../components/Button.jsx';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import CanvasLoader from '../components/Loading.jsx';
import { MushroomModel } from '../components/model_component/mushroom.jsx';

const sentences = [
    "Welcome to my portfolio!",
    "I am a student passionate about coding",
    "I build things with React",
    "I love solving problems",
];

const Hero = () => {
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);


    useEffect(() => {
        const current = sentences[currentSentenceIndex];
        let timeout;

        if (!isDeleting && charIndex < current.length) {
            timeout = setTimeout(() => {
                setDisplayText(current.slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }, 70);
        } else if (isDeleting && charIndex > 0) {
            timeout = setTimeout(() => {
                setDisplayText(current.slice(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            }, 40);
        } else {
            timeout = setTimeout(() => {
                setIsDeleting(!isDeleting);
                if (!isDeleting) return;
                setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
            }, 1000);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, currentSentenceIndex]);

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            {/* Leva panel for debugging (optional) */}
            <Leva collapsed />

            {/* Hero text */}
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 z-10">
                <p className="sm:text-3xl text-xl font-medium text-black text-center font-generalsans">
                    <span className="waving-hand">👋</span> Hi, I am My Lu <span className="waving-hand"> 🌷 </span>
                </p>
                <p className="hero_tag text-orange_gradient text-center">
                    {displayText}
                    <span className="blinking-cursor">|</span>
                </p>
            </div>

            {/* 3D Canvas area */}
            <div className="w-full h-[500px] relative z-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 5, 4]} fov={80} />
                        <ambientLight intensity={0.8} />
                        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
                        <HeroCamera>
                            <MushroomModel/>
                        </HeroCamera>

                    </Suspense>
                </Canvas>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space flex flex-col items-center gap-2">

                {/* Icon Row */}
                <div className="flex justify-center items-center gap-8 text-5xl text-kinoko_orange mb-2">
                    <a href="mailto:myluwork004@example.com" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope className="hover:text-orange-600 transition-colors" />
                    </a>
                    <a href="https://github.com/MyLu004" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="hover:text-orange-600 transition-colors" />
                    </a>
                    <a href="https://www.linkedin.com/in/my-lu/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="hover:text-orange-600 transition-colors" />
                    </a>
                </div>

                {/* Button */}
                <div className="sm:flex flex-row space-x-4">
                    <a href="#contact" className="w-fit">
                        <Button name="Let Connect 🔗" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                    </a>

                    <a href="https://drive.google.com/file/d/1dpZpmbI2NBid-k8sa11SuGsZ0Z5M4uul/view?usp=sharing" target={"_blank"} className="w-fit">
                        <Button name="See my Resume📄 " isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                    </a>
                </div>

            </div>


        </section>
    );
};

export default Hero;
