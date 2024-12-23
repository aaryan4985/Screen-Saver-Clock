import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, []);

  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: isDarkTheme
        ? "linear-gradient(135deg, #1f1f1f, #333333)"
        : "linear-gradient(135deg, #ff9a9e, #fad0c4, #fbc2eb)",
      backgroundSize: "400% 400%",
      animation: "gradient 15s ease infinite",
      fontFamily: "Poppins, sans-serif",
    },
    clock: {
      fontSize: "4rem",
      color: "white",
      textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
    },
    date: {
      fontSize: "1.5rem",
      color: "white",
      marginTop: "10px",
      textShadow: "0 0 5px rgba(255, 255, 255, 0.6)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.clock}>{time.toLocaleTimeString()}</h1>
      <p style={styles.date}>{time.toLocaleDateString()}</p>
      <button
        onClick={toggleTheme}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          background: isDarkTheme ? "#ffffff" : "#333333",
          color: isDarkTheme ? "#333333" : "#ffffff",
          cursor: "pointer",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Clock;
