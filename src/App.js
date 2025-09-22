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
        style={{ padding: "10px", width: "300px", borderRadius: "8px", border: "1px solid #ccc" }}
      />
      
      <button 
        onClick={handleSearch} 
        style={{ marginTop: "10px", padding: "10px 20px", borderRadius: "8px", background: "#000", color: "#fff", border: "none" }}
      >
        Search
      </button>

      {result && (
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <h2>{result.name}</h2>
          <p>{result.details}</p>
          {result.name !== "Not Found" && (
            <div style={{ marginTop: "20px" }}>
              <button 
                onClick={() => alert("Learn more about " + result.name)} 
                style={{ margin: "5px", padding: "10px 15px", borderRadius: "6px", background: "#007bff", color: "#fff", border: "none" }}
              >
                Learn More
              </button>
              <button 
                onClick={() => alert("Booking started for " + result.name)} 
                style={{ margin: "5px", padding: "10px 15px", borderRadius: "6px", background: "#28a745", color: "#fff", border: "none" }}
              >
                Book Now
              </button>
              <button 
                onClick={() => window.open("https://wa.me/919050983530?text=Hello%2C+I+am+interested+in+" + encodeURIComponent(result.name))} 
                style={{ margin: "5px", padding: "10px 15px", borderRadius: "6px", background: "#25d366", color: "#fff", border: "none" }}
              >
                Contact
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
