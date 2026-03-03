import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import dma from "../assets/dma.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Projects = () => {
    const [count, setCount] = useState(0);

    const projects = [
        { id: 1, img: dma, name: "DMA for Farmers", desc: "A responsive web platform that enables farmers to sell produce directly to consumers." },
        { id: 2, img: dma, name: "Agro Direct", desc: "Smart marketplace system with analytics and real-time pricing." },
        { id: 3, img: dma, name: "Harvest Hub", desc: "Premium animated web experience for agricultural trade." },
        { id: 4, img: dma, name: "Green Chain", desc: "Supply-chain optimization platform with live tracking." }
    ];

    const next = () => setCount((prev) => (prev + 1) % projects.length);
    const previous = () => setCount((prev) => (prev - 1 + projects.length) % projects.length);

    return (
        <div className="py-20 px-4 flex flex-col items-center mb-32 h-96">

            

            {/* ================= MOBILE ================= */}
            <div className="lg:hidden w-full max-w-sm flex flex-col items-center">

                {/* CARD */}
                <div
                    key={projects[count].id}
                    className="w-full transition-all duration-500 ease-in-out"
                >
                    <ProjectCard {...projects[count]} />
                </div>

                {/* NAVIGATION BELOW CARD */}
                <div className="flex items-center gap-6 mt-6">

                    <button
                        onClick={previous}
                        className="p-2 hover:scale-110 text-white transition"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* DOTS */}
                    <div className="flex gap-3">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCount(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === count
                                    ? "bg-black scale-125"
                                    : "bg-gray-400"
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={next}
                        className="p-2 hover:scale-110 text-white transition"
                    >
                        <ChevronRight size={24} />
                    </button>

                </div>
            </div>

            {/* ================= DESKTOP ================= */}
            <div className="hidden lg:flex flex-col items-center  ">

                {/* CARDS */}
                <div className="flex items-center justify-center gap-12 w-full">

                    {[-1, 0, 1].map((offset) => {
                        const index =
                            (count + offset + projects.length) % projects.length;

                        const style =
                            offset === 0
                                ? "scale-105 opacity-100"
                                : "scale-95 opacity-60";

                        return (
                            <div
                                key={projects[index].id}
                                className={`transition-all duration-500 ease-in-out ${style}`}
                            >
                                <ProjectCard {...projects[index]} />
                            </div>
                        );
                    })}

                </div>

                {/* NAVIGATION BELOW CARDS */}
                <div className="flex items-center gap-8 mt-10">

                    <button
                        onClick={previous}
                        className="p-2 hover:scale-110 text-white transition"
                    >
                        <ChevronLeft size={28} />
                    </button>

                    {/* DOTS */}
                    <div className="flex gap-4">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCount(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === count
                                        ? "bg-black scale-125"
                                        : "bg-gray-400"
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={next}
                        className="p-2 hover:scale-110 text-white transition"
                    >
                        <ChevronRight size={28} />
                    </button>

                </div>
            </div>

        </div>
    );
};

export default Projects;