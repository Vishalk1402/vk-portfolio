import React from "react";

const About = () => {
  return (
    <section
      className="
        relative
        w-[96vw] sm:w-[85vw] lg:w-[100vw]
        max-w-5xl
        h-[62vh]  lg:h-[75vh]
        flex
        items-center
        justify-center
      "
    >
      <div
        className="
          relative w-full h-full
          overflow-y-auto scrollbar-hide
         
          rounded-3xl
          shadow-2xl
          p-6 sm:p-8 md:p-12
          space-y-16
        "
      >

        {/* PROFILE */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="/profile.jpeg"
            alt="Profile"
            className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover border-4 border-emerald-500 shadow-lg"
          />

          <div className="text-center md:text-left space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-400">
              Vishal Koli
            </h2>

            <p className="text-gray-300 text-lg">
              Web Developer / Java Enthusiast / Software Developer
            </p>

            <p className="text-gray-400 text-sm sm:text-base max-w-xl">
              Specializing in modern web technologies and Java-based systems,
              I deliver secure, performance-driven applications built for scale.
            </p>
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-emerald-400">
            Experience
          </h3>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            Currently working as a Software Engineer at Siemens, contributing to
            the development of scalable and reliable software solutions. I focus on
            writing clean, maintainable code and delivering high-performance applications
            aligned with industry standards.
          </p>
        </div>



        {/* SKILLS */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-emerald-400">
            Skills
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <Skill name="Java" />
            <Skill name="JavaScript" />
            <Skill name="Spring Boot" />
            <Skill name="React" />
            <Skill name="SQL" />
            <Skill name="MySQL" />
            <Skill name="MongoDB" />
            <Skill name="JWT" />
            <Skill name="Rest API" />
            <Skill name="Hibernate" />
            <Skill name="JDBC" />
            <Skill name="Postman" />
            <Skill name="Docker" />
            <Skill name="HTML5" />
            <Skill name="CSS3" />
            <Skill name="Tailwind CSS" />
            <Skill name="Git & GitHub" />
            <Skill name="Copilot" />
            <Skill name="Eclipse" />
            <Skill name="IntelliJ IDEA" />
          </div>
        </div>

        {/* EDUCATION */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-emerald-400">
            Education
          </h3>

          <div className="space-y-4">

            {/* BE */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <h4 className="text-lg font-semibold text-white">
                Bachelor of Engineering (B.E) – E&TC Engineering
              </h4>
              <p className="text-gray-400 text-sm">
                S.S.B.T COET jalgaon 425002, Maharashtra
              </p>
              <p className="text-gray-400 text-sm">
                CGPA: 8.11 | 2021 – 2025
              </p>
            </div>

            {/* HSC */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <h4 className="text-lg font-semibold text-white">
                Higher Secondary Certificate (HSC)
              </h4>
              <p className="text-gray-400 text-sm">
                S.P.D.M College, Shirpur 425427 Maharashtra
              </p>
              <p className="text-gray-400 text-sm">
                Percentage: 82% | Year: 2021
              </p>
            </div>

            {/* SSC */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <h4 className="text-lg font-semibold text-white">
                Secondary School Certificate (SSC)
              </h4>
              <p className="text-gray-400 text-sm">
                K.K.M.V High School, Arthe 425427 Maharashtra
              </p>
              <p className="text-gray-400 text-sm">
                Percentage: 77.40% | Year: 2019
              </p>
            </div>

          </div>
        </div>


        {/* VISION */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-emerald-400">
            Vision
          </h3>

          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            Focused on leading the creation of scalable, high-performance digital
            ecosystems where innovation meets reliability—setting new benchmarks
            in web and Java development and inspiring teams to build technology
            that creates lasting impact.
          </p>
        </div>

        {/* MISSION */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-emerald-400">
            Mission
          </h3>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Committed to engineering reliable and scalable digital systems that
            solve meaningful challenges, continuously refining technical expertise
            and delivering technology designed for long-term impact.
          </p>
        </div>

        {/* CORE VALUES */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-emerald-400">
            Core Values
          </h3>

          <ul className="text-gray-300 text-sm sm:text-base leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-white">Engineering Excellence : </span>
              Writing clean, scalable, and maintainable code that meets high standards of performance and reliability.
            </li>

            <li>
              <span className="font-semibold text-white">Continuous Growth : </span>
              Constantly learning, adapting, and evolving with modern technologies and best practices.
            </li>

            <li>
              <span className="font-semibold text-white">Innovation with Purpose : </span>
              Building solutions that solve real-world problems and create meaningful impact.
            </li>

            <li>
              <span className="font-semibold text-white">Integrity & Accountability : </span>
              Taking ownership of responsibilities and delivering solutions with transparency and professionalism.
            </li>
          </ul>
        </div>

        {/* PHILOSOPHY */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-emerald-400">
            My Philosophy
          </h3>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            I believe great software is built on simplicity, strong architecture,
            and thoughtful user experience. Technology should not only function
            efficiently but also scale sustainably and create measurable impact.
          </p>
        </div>

      </div>
    </section>
  );
};

const Skill = ({ name }) => (
  <div className="bg-white/10 border border-white/10 rounded-xl py-3 text-center text-sm sm:text-base text-white hover:bg-emerald-500 hover:text-black transition duration-300">
    {name}
  </div>
);

export default About;