import React, { useState } from "react";

const ProjectCard = ({ img, name, desc, skills = [] }) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className="w-[260px] sm:w-[300px] lg:w-[340px] h-[360px] perspective cursor-pointer"
            onClick={() => setFlipped(!flipped)}
        >
            <div
                className={`
                relative w-full h-full duration-700
                transform-style-preserve-3d
                ${flipped ? "rotate-y-180" : ""}
                lg:hover:rotate-y-180
            `}
            >
                {/* FRONT */}
                <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden border border-white/10 bg-black">
                    <img src={img} alt={name} className="h-48 w-full object-cover" />
                    <div className="p-4 text-center">
                        <h3 className="text-emerald-400 text-xl font-semibold">{name}</h3>
                        <p className="text-gray-300 text-sm mt-2">{desc}</p>
                    </div>
                </div>

                {/* BACK */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-[#0b0f0b] border border-emerald-500/30 p-5 flex flex-col justify-center gap-4">
                    <h3 className="text-center text-emerald-400 text-lg mb-2">
                        Tech Stack
                    </h3>
                    {skills.length > 0 ? (
                        skills.map((skill, index) => (
                            <Skill key={index} name={skill.name} percent={skill.percent} />
                        ))
                    ) : (
                        <>
                            <Skill name="HTML" percent={90} />
                            <Skill name="CSS" percent={85} />
                            <Skill name="JavaScript" percent={80} />
                            <Skill name="React" percent={75} />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

const Skill = ({ name, percent }) => (
    <div>
        <div className="flex justify-between text-sm text-gray-300 mb-1">
            <span>{name}</span>
            <span>{percent}%</span>
        </div>
        <div className="h-2 bg-white/10 rounded">
            <div
                style={{ width: `${percent}%` }}
                className="h-2 bg-emerald-400 rounded transition-all duration-700"
            />
        </div>
    </div>
);

export default ProjectCard;