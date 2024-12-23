import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => num.toString().padStart(2, "0");
  const hours = formatNumber(time.getHours());
  const minutes = formatNumber(time.getMinutes());
  const seconds = formatNumber(time.getSeconds());

  return (
    <div
      className={`min-h-screen w-full relative overflow-hidden transition-all duration-700
        ${
          isDarkTheme
            ? "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-purple-900 to-violet-950"
            : "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-100 via-purple-200 to-blue-300"
        }`}
      onDoubleClick={() => setIsDarkTheme(!isDarkTheme)}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full blur-2xl opacity-20 animate-float-slow
              ${isDarkTheme ? "bg-purple-500" : "bg-pink-300"}`}
            style={{
              width: Math.random() * 300 + 100 + "px",
              height: Math.random() * 300 + 100 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${20 + Math.random() * 20}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      {/* Clock display */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Inner rotating ring */}
        <div className="relative w-96 h-96">
          <div
            className={`absolute inset-0 rounded-full border-2 animate-spin-slow
            ${isDarkTheme ? "border-purple-500/20" : "border-pink-300/30"}`}
          />
          <div
            className={`absolute inset-0 rounded-full border-2 animate-spin-reverse
            ${isDarkTheme ? "border-blue-500/20" : "border-blue-300/30"}`}
          />

          {/* Time display */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div
              className={`text-8xl font-light tracking-widest mb-4
              ${isDarkTheme ? "text-white/90" : "text-gray-800/90"}`}
            >
              {`${hours}:${minutes}`}
              <span className="text-4xl ml-4 opacity-50">{seconds}</span>
            </div>

            <div
              className={`text-lg tracking-widest uppercase
              ${isDarkTheme ? "text-purple-300/70" : "text-purple-600/70"}`}
            >
              {time.toLocaleDateString(undefined, {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-float
              ${isDarkTheme ? "bg-white/30" : "bg-purple-500/30"}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              transform: `scale(${Math.random() * 2 + 0.5})`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Clock;
