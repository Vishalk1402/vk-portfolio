import React from "react";
import ReactMarkdown from "react-markdown";

const AIResponseModal = ({ open, title, content, loading, onClose, children }) => {

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">

            <div
                className="
        w-full
        max-w-2xl
        max-h-[85vh]
        bg-[#0b0f0b]
        border border-emerald-500/30
        rounded-2xl
        shadow-2xl
        flex flex-col
      "
            >

                {/* HEADER */}
                <div className="flex items-center justify-between p-4 border-b border-emerald-500/20">

                    <h2 className="text-emerald-400 font-semibold text-lg">
                        {title}
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white text-xl"
                    >
                        ✕
                    </button>

                </div>

                {/* BODY */}
                {/* BODY */}
                <div className="p-5 overflow-y-auto space-y-4">

                    {/* Optional custom UI (used by AI assistant) */}
                    {children}

                    {/* AI response */}
                    {loading ? (
                        <p className="text-gray-300 animate-pulse">
                            AI is thinking...
                        </p>
                    ) : content && (
                        <div className="prose prose-invert max-w-none text-amber-50 text-sm sm:text-base">
                            <ReactMarkdown>
                                {content}
                            </ReactMarkdown>
                        </div>
                    )}

                </div>

            </div>
        </div>
    );
};

export default AIResponseModal;