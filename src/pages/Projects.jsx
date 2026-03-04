import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import dma from "../assets/dma.png";
import mess from "../assets/mess.png";
import artport from "../assets/artport.png";
import notes from "../assets/notes.png";
import gallery from "../assets/gallery.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Projects = () => {
    const [count, setCount] = useState(0);

    const projects = [
        {
            id: 1,
            img: dma,
            name: "DMA for Farmers",
            desc: "A responsive web platform that enables farmers to sell produce directly to consumers.",
            liveLink: "https://dma-forfarmer.pages.dev/",
            skills: [
                { name: "React", percent: 100 },
                { name: "JavaScript", percent: 58 },
                { name: "CSS", percent: 32.9 },
                { name: "HTML", percent: 3.1 },

            ]
        },
        {
            id: 2,
            img: mess,
            name: "Mess Management",
            desc: "A web-based system to manage mess (dining/hostel) facility operations and administration.",
            liveLink: "https://mess-management-system-rust.vercel.app/",
            skills: [
                { name: "React", percent: 100 },
                { name: "JavaScript", percent: 72 },
                { name: "CSS", percent: 24 },
                { name: "HTML", percent: 4 },

            ]
        },
        {
            id: 3,
            img: artport,
            name: "Art-Portfolio",
            desc: "showcasing creativity and craftsmanship across various mediums.Discover innovation and artistic excellence in each piece.",
            liveLink: "https://art-port.pages.dev/",
            skills: [
                { name: "React", percent: 100 },
                { name: "JavaScript", percent: 45.2 },
                { name: "CSS", percent: 48.3 },
                { name: "HTML", percent: 6.5 },
            ]
        },
        {
            id: 4,
            img: gallery,
            name: "Gallery",
            desc: "Creative image gallery with multiple layout styles and responsive design.",
            liveLink: "https://891cf820.gallery-dh4.pages.dev/",
            skills: [
                { name: "JavaScript", percent: 30.8 },
                { name: "CSS", percent: 55.3 },
                { name: "HTML", percent: 13.9 },
            ]
        },
        {
            id: 5,
            img: notes,
            name: "Notes-Management",
            desc: "Secure full-stack notes app with JWT authentication, cloud file uploads, and Docker deployment, built using React, Spring Boot, and MySQL.",
            liveLink: "https://notes-frontend-ebon.vercel.app/",
            skills: [
                { name: "React", percent: 100 },
                { name: "JavaScript", percent: 96.5 },
                { name: "Java", percent: 98.5 },
                { name: "Dockerfile", percent: 1.5 },
                { name: "Spring-boot", percent: 80 },
            ]
        },
    ];

    const next = () =>
        setCount((prev) => (prev + 1) % projects.length);

    const previous = () =>
        setCount((prev) => (prev - 1 + projects.length) % projects.length);

    return (
        <div className="py-20 px-4 flex flex-col items-center mb-0 lg:mt-16 md:mt-16">

            {/* ================= MOBILE ================= */}
            <div className="lg:hidden  w-full max-w-sm flex flex-col items-center">

                <div
                    key={projects[count].id}
                    className="w-full transition-all duration-500 ease-in-out"
                >
                    <ProjectCard {...projects[count]} />
                </div>

                <div className="flex items-center gap-6 mt-6">

                    <button
                        onClick={previous}
                        className="p-2 hover:scale-110 text-white transition"
                    >
                        <ChevronLeft size={24} />
                    </button>

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
            <div className="hidden lg:flex flex-col items-center">

                <div className="flex items-center justify-center gap-12 w-full">

                    {/* If 3+ projects → show slider style */}
                    {projects.length > 2 ? (
                        [-1, 0, 1].map((offset) => {
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
                        })
                    ) : (
                        /* If 1 or 2 projects → show normally */
                        projects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`transition-all duration-500 ease-in-out ${index === count
                                        ? "scale-105 opacity-100"
                                        : "scale-95 opacity-60"
                                    }`}
                            >
                                <ProjectCard {...project} />
                            </div>
                        ))
                    )}

                </div>

                <div className="flex items-center gap-8 mt-10">

                    <button
                        onClick={previous}
                        className="p-2 hover:scale-110 text-white transition"
                    >
                        <ChevronLeft size={28} />
                    </button>

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