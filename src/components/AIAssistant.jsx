import { useState } from "react";
import AIResponseModal from "./AIResponseModal";
import chat from "../assets/chat.jpg"


export default function AIAssistant() {

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("ask");
  const [question, setQuestion] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {

    setLoading(true);

    const res = await fetch("https://vk-port-backend.onrender.com/ai/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question })
    });

    const data = await res.json();

    setContent(data.answer);
    setLoading(false);
  };

  const analyzeJob = async () => {

    setLoading(true);

    const res = await fetch("https://vk-port-backend.onrender.com/ai/job-match", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jobDescription })
    });

    const data = await res.json();

    setContent(data.result);
    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}

      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 right-64 bg-emerald-500 px-4 py-3 rounded-full shadow-lg z-50"
      >
       AI
      </button>

      <AIResponseModal
        open={open}
        title="AI Assistant"
        content={content}
        loading={loading}
        onClose={() => setOpen(false)}
      >

        {/* Tabs */}

        <div className="flex gap-4 mb-4">

          <button
            onClick={() => setMode("ask")}
            className={`px-3 py-1 rounded ${
              mode === "ask"
                ? "bg-emerald-500 text-black"
                : "bg-gray-700"
            }`}
          >
            Ask About Me
          </button>

          <button
            onClick={() => setMode("job")}
            className={`px-3 py-1 rounded ${
              mode === "job"
                ? "bg-emerald-500 text-black"
                : "bg-gray-700"
            }`}
          >
            Job Match
          </button>

        </div>

        {/* Ask Mode */}

        {mode === "ask" && (

          <div className="flex gap-2">

            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask about Vishal..."
              className="flex-1 p-2 rounded text-white"
            />

            <button
              onClick={askAI}
              className="bg-emerald-500 px-3 rounded"
            >
              Ask
            </button>

          </div>

        )}

        {/* Job Mode */}

        {mode === "job" && (

          <div className="space-y-2">

            <textarea
              rows="4"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste job description..."
              className="w-full p-2 rounded text-blue-50"
            />

            <button
              onClick={analyzeJob}
              className="bg-emerald-500 px-4 py-2 rounded"
            >
              Analyze Match
            </button>

          </div>

        )}

      </AIResponseModal>
    </>
  );
}