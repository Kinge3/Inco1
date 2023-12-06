import React from "react";

const Home = () => {
  const sectionStyle = {
    background: "linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), url(https://live-production.wcms.abc-cdn.net.au/938406c9303e5eab5cd3efc35e103dc2) 50% 15%/cover",
    color: "#fff",
    font: "sans-serif",
    margin: "0",
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "40px 0",
  };

  const boxStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "30px",
  };

  const buttonStyle = {
    padding: "15px 30px",
    fontSize: "18px",
    background: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background 0.3s ease-in-out",
  };

  const linkStyle = {
    font: "sans-serif",
    fontSize: "14px",
    position: "fixed",
    bottom: "12px",
    right: "12px",
    zIndex: "4",
    borderRadius: "4px",
    padding: "8px 16px",
    backgroundColor: "#2c3e50",
    opacity: "0.8",
    color: "#fff",
    textDecoration: "none",
    cursor: "pointer",
    transition: "opacity 0.3s ease-in-out",
  };

  return (
    <div>
      <div style={sectionStyle}>
        <div style={boxStyle}>
          <p>XXX Votes</p>
          <button style={buttonStyle}>Reveal</button>
          <p>XXX Votes</p>
        </div>
        <div style={boxStyle}>
          <button style={{ ...buttonStyle, border: "2px solid #004d87", background: "transparent", color: "#004d87" }}>Vote</button>
          <button style={{ ...buttonStyle, background: "#e74c3c" }}>Vote</button>
        </div>
      </div>
      <style>
        {":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
      </style>
    </div>
  );
};

export default Home;
