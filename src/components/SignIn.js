import React, { useState } from "react";

export default function Login({ navigate }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  
    
    
    async function creatac() {
  const response = await fetch(`https://backend-omz4.onrender.com/login/${password}/${email}`);
  const data = await response.json();
  
  let status = "signed"
  let name = data[0]["name"];
  let idt = data[0]["idt"];
  
  

  // see full structure
  if(name !== "" && idt !== "") {
    
    localStorage.setItem("status",status);
    localStorage.setItem("name", name);
    localStorage.setItem("idt", idt);
    navigate("home")
    
    
    
  } else {
    
  }
}
creatac();

  }



  return (
    <div className="login-page">
      {/* HERO CONTENT */}
      <div className="login-hero">
        <h1>⚡ CryptoWallet</h1>
        <p>
          Access your secure Ethereum wallet and explore the decentralized
          future. This platform operates on the <span className="highlight">
          Sepolia Testnet</span>, providing a safe environment for learning
          and development.
        </p>
      </div>

      {/* CENTERED LOGIN CARD */}
      <div className="login-card">
        <h2 className="logo">🔐 Sign In</h2>
        <p className="login-subtitle">
          Enter your credentials to access your wallet.
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button style={{width: "100%", maxWidth: "100%"}} type="submit" className="btn login-btn">
            🔐 Login
          </button>
        </form>

        <div className="login-links">
          <p>
            Don't have an account? <a onClick={() => navigate("signup")} href="#">Sign Up</a>
          </p>
          <p>
        
          </p>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="login-section">
        <h2>Why Choose CryptoWallet?</h2>
        <div className="features">
          <div className="feature">⚡ Fast Sepolia Transactions</div>
          <div className="feature">🔐 Secure Wallet Management</div>
          <div className="feature">🌐 Web3 Ready</div>
          <div className="feature">📊 Real-Time Market Insights</div>
        </div>
      </div>

      {/* SECURITY TIPS */}
      <div className="login-section">
        <h2>Security Tips</h2>
        <ul className="info-list">
          <li>🔐 Never share your private key.</li>
          <li>📧 Use a strong and unique password.</li>
          <li>🛡️ Always log out from shared devices.</li>
          <li>🌐 Ensure you are on the Sepolia network.</li>
        </ul>
      </div>

      {/* FOOTER */}
      <div style={{paddingTop: "9%"}}></div>
      <div className="outro">
      Start your journey into the world of blockchain development and unlock the future of digital finance. Whether you're a beginner exploring decentralized technology or someone looking to sharpen your skills, this is the perfect time to dive in. Learn how blockchain works, understand smart contracts, and gain hands-on experience with real-world tools and platforms that power the decentralized ecosystem.
      </div>

      
      
      
      

      {/* 🔷 FOOTER */}
      <footer className="footer">
        <p>© 2026 CryptoWallet — Built for Web3 Developers</p>
        
        
        Built with passion for Web3, AI, and modern web technologies. This Ethereum Testnet Faucet Wallet is designed to simplify blockchain development in a secure, risk-free environment.
© 2026 All rights reserved.
<br></br>
Crafted by a Web Software Engineer, AI Engineer, and Blockchain Developer dedicated to building powerful, intelligent, and user-focused digital solutions.<br></br>
<a  style={{color: "white"}}href="https://github.com/Andihub4">🔗 GitHub </a>| 🌐 Portfolio | ✉️ Contact<br></br>
Note: This application operates on Ethereum test networks only. No real cryptocurrency is used or stored
  
  <nav class="menu">
   <button class="menu-btn"><h1>Contact</h1>
   +251989463751 <br></br>
   andinetatx@gmail.com
   </button>
   </nav>
      </footer>

    </div>
  );
}