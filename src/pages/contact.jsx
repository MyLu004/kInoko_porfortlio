import React, { useEffect, useState } from 'react';


import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import CanvasLoader from '../components/Loading.jsx';

import {PayPhone} from "../components/model_component/payphone.jsx"

import ContactForm from '../components/ContactForm.jsx';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


///import ThreeModel from './ThreeModel';




const Contact = () => {
    return (
        <section className="min-h-screen flex flex-col md:flex-row items-center bg-[#FDF7EF]" id="contact">
            {/* Left: 3D Model */}
            <div className="hidden md:block w-full md:w-1/2 h-[500px] md:h-screen">


                <Canvas className="">
                    <Suspense fallback={<CanvasLoader/>}>
                        <PerspectiveCamera makeDefault position={[0, -0.5, 4]} fov={80} />
                        <ambientLight intensity={0.8} />
                        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
                        <PayPhone/>
                    </Suspense>

                </Canvas>
            </div>

            {/* Right: Contact Form */}
            <div className="w-full md:w-1/2 px-8 py-12">
                <ContactForm />
            </div>
        </section>
    );
};

export default Contact;
