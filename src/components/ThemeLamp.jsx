import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeLamp = () => {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <div
      onClick={toggleTheme}
      className="fixed top-0 right-70 z-50 flex flex-col items-center cursor-pointer"
    >
      {/* Lamp Wire */}
      <div className="w-[2px] h-10 bg-gray-400 dark:bg-gray-600"></div>

      {/* Lamp */}
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400 dark:bg-gray-700 shadow-lg hover:scale-110 transition">
        {dark ? <Sun size={20} /> : <Moon size={20} />}
      </div>
    </div>
  );
};

export default ThemeLamp;