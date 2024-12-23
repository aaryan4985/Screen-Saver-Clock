import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => num.toString().padStart(2, "0");
  const hours = time.getHours();
  const minutes = formatNumber(time.getMinutes());
  const ampm = hours >= 12 ? "PM" : "AM";
  const displayHours = formatNumber(hours % 12 || 12);

  return (
    <div
      className={`min-h-screen w-full relative overflow-hidden transition-all duration-700
        ${
          isDarkTheme
            ? "bg-gradient-to-br from-purple-700 via-fuchsia-500 to-pink-500"
            : "bg-gradient-to-br from-blue-400 via-purple-400 to-pink-300"
        }`}
    >
      {/* Glow effect background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0%,_transparent_50%)]" />

      {/* Main content */}
      <div className="relative z-10 h-screen flex flex-col items-center justify-center">
        {/* Clock display */}
        <div className="text-center relative">
          <div className="text-8xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            {`${displayHours}:${minutes}`}
            <span className="text-4xl ml-2">{ampm}</span>
          </div>

          {/* Theme toggle button */}
          <button
            onClick={() => setIsDarkTheme(!isDarkTheme)}
            className="mt-8 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full 
                     text-white/80 text-sm uppercase tracking-wider hover:bg-white/20 
                     transition-all duration-300 border border-white/20"
          >
            {isDarkTheme ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* Floating glow orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full blur-3xl opacity-30 animate-float-slow"
              style={{
                background: isDarkTheme
                  ? "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,192,203,0.3) 50%, transparent 70%)"
                  : "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(147,51,234,0.3) 50%, transparent 70%)",
                width: "40vw",
                height: "40vw",
                left: `${i * 30 + 20}%`,
                top: `${i * 20 + 30}%`,
                animationDelay: `${i * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clock;
