import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section  className="
    relative
    w-[92vw] sm:w-[85vw] lg:w-[75vw]
    max-w-5xl
    h-[55vh] sm:h-[65vh] lg:h-[65vh]
    flex
    items-center
    justify-center
    z-0
  ">

      {/* Background Glow */}
      <div className="absolute " />

      {/* Glass Box */}
      <div className="
    relative w-full h-full
    overflow-y-auto scrollbar-hide
    grid grid-cols-1 md:grid-cols-2
    gap-6 sm:gap-8 md:gap-12
    rounded-2xl md:rounded-3xl
    p-5 sm:p-6 md:p-10
    shadow-2xl
  "
>

        {/* LEFT SIDE */}
        <div className="text-white space-y-5 md:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400">
            Let’s Work Together
          </h2>

          <p className="text-gray-300 text-sm sm:text-base">
            Have a project in mind or just want to say hello?
            Fill out the form and I’ll get back to you.
          </p>

          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
            <div className="flex items-center gap-3">
              <Mail className="text-emerald-400 w-5 h-5" />
              <span>your@email.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-emerald-400 w-5 h-5" />
              <span>+123 456 7890</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-emerald-400 w-5 h-5" />
              <span>Your City, Country</span>
            </div>
          </div>

          <div className="flex gap-4 pt-2 sm:pt-4">
            <a
              href="#"
              className="p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl hover:bg-emerald-500 transition"
            >
              <Github size={18} />
            </a>

            <a
              href="#"
              className="p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl hover:bg-emerald-500 transition"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <form className="space-y-4 sm:space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg sm:rounded-xl bg-white/10 border border-white/10 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 outline-none text-white text-sm sm:text-base transition"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg sm:rounded-xl bg-white/10 border border-white/10 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 outline-none text-white text-sm sm:text-base transition"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg sm:rounded-xl bg-white/10 border border-white/10 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 outline-none text-white text-sm sm:text-base transition resize-none"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg sm:rounded-xl bg-emerald-500 text-black font-semibold text-sm sm:text-base hover:bg-emerald-400 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-emerald-500/20"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;