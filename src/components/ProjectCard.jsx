import React, { useState } from "react";

const ProjectCard = ({ img, name, desc, skills = [], liveLink, explainProject }) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className="group w-[260px] sm:w-[300px] lg:w-[340px] h-[380px] [perspective:1500px]"
            onClick={() => {
                if (window.innerWidth < 1024) {
                    setFlipped(!flipped);
                }
            }}
        >
            <div
                className={`
      relative w-full h-full
      transition-transform duration-800
      ease-[cubic-bezier(0.19,1,0.22,1)]
      transform-gpu
      [transform-style:preserve-3d]
      ${flipped ? "rotate-y-180" : ""}
      lg:group-hover:rotate-y-180
    `}
            >
                {/* FRONT */}
                <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl">
                    <img
                        src={img}
                        alt={name}
                        className="h-36 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="p-4 text-center flex flex-col justify-between align-bottom h-[calc(100%-12rem)]">
                        <div>
                            <h3 className="text-emerald-400 text-xl font-semibold">
                                {name}
                            </h3>
                            <p className="text-gray-300 text-sm mt-2">
                                {desc}
                            </p>
                        </div>

                        {/* LIVE BUTTON ON FRONT */}
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="
                mt-4
                px-4 py-2
                text-sm font-medium
                rounded-lg
                bg-emerald-500
                text-black
                transition-all duration-300
                hover:bg-emerald-400
                hover:scale-105
                shadow-lg shadow-emerald-500/20
              "
                        >
                            View Live
                        </a>
                        {explainProject && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    explainProject(desc,skills);
                                }}
                                className="
        mt-2
        px-4 py-2
        text-sm font-medium
        rounded-lg
        bg-purple-500
        text-white
        transition-all duration-300
        hover:bg-purple-400
        hover:scale-105
        shadow-lg shadow-purple-500/20
      "
                            >
                                Explain with AI
                            </button>
                        )}
                    </div>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 rotate-y-180 [backface-visibility:hidden] rounded-2xl bg-[#0b0f0b] border border-emerald-500/30 p-5 flex flex-col justify-between shadow-2xl">
                    <div>
                        <h3 className="text-center text-emerald-400 text-lg mb-4">
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

                    {/* LIVE BUTTON ON BACK */}
                    <div className="flex flex-col">
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="
              mt-4 text-center
              px-4 py-2
              text-sm font-medium
              rounded-lg
              bg-emerald-500
              text-black
              transition-all duration-300
              hover:bg-emerald-400
              hover:scale-105
              shadow-lg shadow-emerald-500/20
            "
                        >
                            View Live
                        </a>
                        {explainProject && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    explainProject(desc,skills);
                                }}
                                className="
        mt-2
        px-4 py-2
        text-sm font-medium
        rounded-lg
        bg-purple-500
        text-white
        transition-all duration-300
        hover:bg-purple-400
        hover:scale-105
        shadow-lg shadow-purple-500/20
      "
                            >
                                Explain with AI
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Skill = ({ name, percent }) => (
    <div className="mb-3">
        <div className="flex justify-between text-sm text-gray-300 mb-1">
            <span>{name}</span>
            <span>{percent}%</span>
        </div>

        <div className="h-2 bg-white/10 rounded overflow-hidden">
            <div
                style={{ width: `${percent}%` }}
                className="h-2 bg-emerald-400 rounded transition-all duration-1000 ease-out"
            />
        </div>
    </div>
);

export default ProjectCard;