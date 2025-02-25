import React, { useState } from "react";

const surprises = [
  "🎉 You unlocked a secret!",
  "🐶 A puppy somewhere just wagged its tail!",
  "🌟 A shooting star just passed!",
  "🎵 A secret melody is playing in your head!",
  "🚀 You are awesome!"
];

const SurpriseMe = () => {
  const [message, setMessage] = useState("");
  const [bgColor, setBgColor] = useState("#ffffff");

  const handleSurprise = () => {
    const randomMessage = surprises[Math.floor(Math.random() * surprises.length)];
    setMessage(randomMessage);
    setBgColor("#" + Math.floor(Math.random() * 16777215).toString(16)); // Random color
  };

  return (
    <div style={{ textAlign: "center", padding: "50px", backgroundColor: bgColor, height: "100vh" }}>
      <button
        onClick={handleSurprise}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer",
          backgroundColor: "#ff9800",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}
      >
        Surprise Me
      </button>
      {message && <h2 style={{ marginTop: "20px" }}>{message}</h2>}
    </div>
  );
};

export default SurpriseMe;
