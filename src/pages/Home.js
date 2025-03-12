import React from "react";

const Home = () => (
  <div style={{ textAlign: "center", padding: "40px", background: "#f9f5ed", fontFamily: "'Times New Roman', serif" }}>
    
    {/* Sacred Title */}
    <h2 style={{ fontSize: "1.8rem", color: "#6b4226", marginBottom: "10px" }}>
      "ॐ नमः शिवाय ॥ शिवाय नमः ॐ ॥"
    </h2>

    {/* Temple Image */}
    <img 
      src="/images/omflower.jpeg" 
      alt="Om Flower Sacred Symbol" 
      style={{ width: "85%", borderRadius: "10px", margin: "20px 0", boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" }} 
    />

    {/* Introduction Section */}
    <p style={{ fontSize: "1.2rem", color: "#333", maxWidth: "850px", margin: "0 auto", lineHeight: "1.6" }}>
      <strong>Sri Someshwara Shivagnana Peetham</strong> is a sacred institution dedicated to the <strong>preservation of Sanatana Dharma, 
      Vedic wisdom, and the path of Shiva Bhakti</strong>. For centuries, this spiritual center has served as a guiding 
      light for seekers devoted to divine knowledge, meditation, and self-realization.
    </p>

    {/* Call to Action */}
    <h3 style={{ fontSize: "1.5rem", color: "#6b4226", marginTop: "30px" }}>🌟 Join Us in Our Spiritual Journey</h3>
    <p style={{ fontSize: "1.1rem", color: "#333", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
      We invite devotees, seekers, and followers of Sanatana Dharma to visit the Peetham, participate in our 
      spiritual activities, and experience the bliss of divine wisdom and devotion.  
    </p>

  </div>
);

export default Home;
