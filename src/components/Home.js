import React from "react";

const Home = () => (
  <div style={{ textAlign: "center", padding: "40px", background: "#f9f5ed", fontFamily: "'Times New Roman', serif" }}>
    
    {/* Sacred Title */}
    <h2 style={{ fontSize: "1.8rem", color: "#6b4226", marginBottom: "10px" }}>
      "ॐ नमः शिवाय ॥ शिवाय नमः ॐ ॥"
    </h2>

    {/* Temple Image */}
    <img 
      src="/images/temple.jpg" 
      alt="Sri Someshwara Shivagnana Peetham" 
      style={{ width: "85%", borderRadius: "10px", margin: "20px 0", boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" }} 
    />

    {/* Introduction Section */}
    <p style={{ fontSize: "1.2rem", color: "#333", maxWidth: "850px", margin: "0 auto", lineHeight: "1.6" }}>
      **Sri Someshwara Shivagnana Peetham** is a sacred institution dedicated to the **preservation of Sanatana Dharma, 
      Vedic wisdom, and the path of Shiva Bhakti**. For centuries, this spiritual center has served as a guiding 
      light for seekers devoted to divine knowledge, meditation, and self-realization.
    </p>

    {/* Brief History */}
    <h3 style={{ fontSize: "1.5rem", color: "#6b4226", marginTop: "30px" }}>📜 A Glorious Heritage</h3>
    <p style={{ fontSize: "1.1rem", color: "#333", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
      The Peetham traces its roots back to **ancient sages and enlightened saints** who meditated in the divine 
      presence of **Lord Someshwara (Shiva)**. Over the ages, this Peetham has been a center of **Vedic learning, 
      sacred rituals, and spiritual guidance**, spreading the eternal wisdom of Advaita Vedanta and Shiva Bhakti.
    </p>

    {/* Teachings of the Peetham */}
    <h3 style={{ fontSize: "1.5rem", color: "#6b4226", marginTop: "30px" }}>🕉️ The Teachings of the Peetham</h3>
    <p style={{ fontSize: "1.1rem", color: "#333", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
      At Sri Someshwara Shivagnana Peetham, devotees follow the sacred principles of **Dhyana (Meditation), Jnana (Wisdom), and Bhakti (Devotion)**.
      The Peetham emphasizes:
    </p>
    <ul style={{ textAlign: "left", maxWidth: "750px", margin: "20px auto", fontSize: "1.1rem", color: "#444", lineHeight: "1.6" }}>
      <li>🔱 **Worship of Lord Shiva** through daily Rudrabhishekam and Mahanyasa Purvaka Rudra Pooja.</li>
      <li>📖 **Vedic Education** - Teachings of Upanishads, Shiva Purana, and Advaita Vedanta.</li>
      <li>🕯️ **Meditation & Self-Realization** - Spreading the knowledge of inner awakening.</li>
      <li>🍲 **Annadanam (Free Food Service)** - Providing food to the needy as an act of divine service.</li>
      <li>📿 **Mantra Sadhana & Homas** - Conducting spiritual practices for personal and global well-being.</li>
    </ul>

    {/* Call to Action */}
    <h3 style={{ fontSize: "1.5rem", color: "#6b4226", marginTop: "30px" }}>🌟 Join Us in Our Spiritual Journey</h3>
    <p style={{ fontSize: "1.1rem", color: "#333", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
      We invite devotees, seekers, and followers of Sanatana Dharma to visit the Peetham, participate in our 
      spiritual activities, and experience the bliss of divine wisdom and devotion.  
    </p>

    <p style={{ fontSize: "1.3rem", fontWeight: "bold", color: "#6b4226", marginTop: "20px" }}>
      "Shiva Bhakti is the highest path. Surrender to Lord Someshwara, and He shall guide you to the ultimate truth."
    </p>

  </div>
);

export default Home;