import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

 const sendEmail = (e) => {
  e.preventDefault();

  const loadingToast = toast.loading("Sending message...");

  emailjs
    .sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    )
    .then(() => {
      toast.success("Message sent successfully!", { id: loadingToast });
      form.current.reset();
    })
    .catch(() => {
      toast.error("Failed to send message", { id: loadingToast });
    });
};

  return (
    <section className="relative w-[92vw] sm:w-[85vw] lg:w-[75vw] max-w-5xl h-[55vh] sm:h-[65vh] lg:h-[65vh] flex items-center justify-center">

      <div className="relative w-full h-full overflow-y-auto scrollbar-hide grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-10 shadow-2xl">

        {/* LEFT SIDE */}
        <div className="text-white space-y-5 md:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400">
            Let’s Work Together
          </h2>

          <p className="text-gray-300">
            Have a project in mind or just want to say hello?
          </p>

          <div className="space-y-3 text-gray-300">
            <div className="flex items-center gap-3">
              <Mail className="text-emerald-400 w-5 h-5" />
              <span>vishalkoli1402@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-emerald-400 w-5 h-5" />
              <span>8668385494</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-emerald-400 w-5 h-5" />
              <span>Pune 411045, Maharashtra</span>
            </div>
          </div>

          <div className="flex gap-4 pt-2">
            <a
              href="https://github.com/Vishalk1402"
              className="p-3 bg-white/10 rounded-xl hover:bg-emerald-500 transition"
            >
              <Github size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/vishal-koli/"
              className="p-3 bg-white/10 rounded-xl hover:bg-emerald-500 transition"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-6">

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:border-emerald-400 outline-none text-white"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:border-emerald-400 outline-none text-white"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:border-emerald-400 outline-none text-white resize-none"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;