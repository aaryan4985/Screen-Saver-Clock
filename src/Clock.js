import React, { useState, useEffect } from "react";

const AestheticClock = () => {
  const [time, setTime] = useState(new Date());
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // Format numbers to always show two digits
  const formatNumber = (num) => num.toString().padStart(2, "0");

  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden
      ${
        isDarkTheme
          ? "bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900"
          : "bg-gradient-to-br from-rose-100 via-purple-100 to-pink-100"
      }`}
    >
      {/* Floating orbs background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full blur-xl opacity-30 animate-float
              ${isDarkTheme ? "bg-purple-500" : "bg-pink-300"}`}
            style={{
              width: Math.random() * 200 + 50 + "px",
              height: Math.random() * 200 + 50 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>

      {/* Main clock container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Digital time display */}
        <div className="flex gap-4 mb-8">
          {[hours, minutes, seconds].map((unit, index) => (
            <div key={index} className="text-center">
              <div
                className={`text-7xl font-bold mb-2 transition-colors duration-500
                ${isDarkTheme ? "text-white" : "text-gray-800"}`}
              >
                {formatNumber(unit)}
              </div>
              <div
                className={`text-sm uppercase tracking-wider transition-colors duration-500
                ${isDarkTheme ? "text-purple-300" : "text-purple-500"}`}
              >
                {index === 0 ? "Hours" : index === 1 ? "Minutes" : "Seconds"}
              </div>
            </div>
          ))}
        </div>

        {/* Date display */}
        <div
          className={`text-xl mb-8 font-light transition-colors duration-500
          ${isDarkTheme ? "text-purple-200" : "text-purple-600"}`}
        >
          {time.toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>

        {/* Theme toggle button */}
        <button
          onClick={toggleTheme}
          className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105
            ${
              isDarkTheme
                ? "bg-purple-500 text-white hover:bg-purple-400"
                : "bg-pink-500 text-white hover:bg-pink-400"
            }`}
        >
          Switch Theme
        </button>
      </div>

      {/* Animated ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`w-96 h-96 rounded-full border-4 animate-spin-slow transition-colors duration-500
          ${isDarkTheme ? "border-purple-500/20" : "border-pink-300/20"}`}
        />
      </div>
    </div>
  );
};

export default AestheticClock;

// Add these to your tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         'spin-slow': 'spin 20s linear infinite',
//         'float': 'float 15s ease-in-out infinite',
//       },
//       keyframes: {
//         float: {
//           '0%, 100%': { transform: 'translateY(0) translateX(0)' },
//           '50%': { transform: 'translateY(-20px) translateX(20px)' },
//         }
//       }
//     }
//   }
// }
