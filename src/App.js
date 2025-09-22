import React, { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);

  const services = [
    { name: "Digital Marketing", details: "We help grow your online presence." },
    { name: "SEO", details: "Rank higher on Google with our SEO services." },
    { name: "Social Media Management", details: "We manage and grow your social platforms." },
    { name: "Web Development", details: "Build modern, responsive websites." },
  ];

  const handleSearch = () => {
    const found = services.find(service =>
      service.name.toLowerCase().includes(query.toLowerCase())
    );
    setResult(found || { name: "Not Found", details: "Sorry, service not available." });
  };

  return (
    <div style={{
      fontFamily: "sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f9f9f9"
    }}>
      <h1 style={{ marginBottom: "20px" }}>Search Our Services</h1>

      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Type a service (e.g. SEO)"
        style={{ padding: "10px", width: "300px", border: "1px solid #ccc", borderRadius: "8px" }}
      />

      <button
        onClick={handleSearch}
        style={{ marginTop: "15px", padding: "10px 20px", borderRadius: "8px", background: "#0070f3", color: "#fff", border: "none" }}
      >
        Search
      </button>

      {result && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <h2>{result.name}</h2>
          <p>{result.details}</p>
          {result.name !== "Not Found" && (
            <div style={{ marginTop: "10px" }}>
              <a href="#" style={{ margin: "0 10px" }}>Learn More</a>
              <a href="https://wa.me/919050983530" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>Book Now</a>
              <a href="mailto:youremail@example.com" style={{ margin: "0 10px" }}>Contact</a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
