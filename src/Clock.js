import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup the timer
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.clock}>{time.toLocaleTimeString()}</h1>
      <p style={styles.date}>{time.toLocaleDateString()}</p>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4, #fbc2eb)",
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

export default Clock;
