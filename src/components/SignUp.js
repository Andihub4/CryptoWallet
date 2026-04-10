import React, { useState } from "react";

export default function Signup({ navigate }) {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    createWallet: true,
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

  const fuln =  formData["name"];
  
  let splited = fuln.split(" ");
  let name = splited[0];
  let lname = splited[1];
  let age = 18;
  let email = formData["email"];
  let password = formData["password"];
  
      async function creatac() {
  const response = await fetch(`https://backend-omz4.onrender.com/signup/${name}/${lname}/${age}/${email}/${password}`);
  const data = await response.json();

  console.log(data); // see full structure
  if(data == "sucessfully Signed Up") {
    navigate("login");
  }
}
creatac();

  
  
    
    
  };

  return (
    <div className="container">
      {/* 🔷 NAVBAR */}
      <nav className="nav">
        <h2>⚡ CryptoWallet</h2>
        <nav className="menu">
          <button onClick={() => navigate("home")} className="menu-btn">Home</button>
          <button onClick={() => navigate("login")} className="menu-btn">Login</button>
        </nav>
      </nav>

      {/* 🔷 HERO */}
      <div className="hero">
        <h1>Create Your Crypto Wallet</h1>
        <p>
          Join the decentralized future by creating your secure Ethereum wallet.
          This platform operates on the Sepolia Testnet, allowing you to explore
          blockchain technology without financial risk.
        </p>
      </div>

      {/* 🔷 MAIN GRID */}
      <div className="grid">
        {/* 📝 SIGN UP FORM */}
        <div className="card big">
          <h3>Sign Up</h3>
          <form className="signup-form" onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter a secure password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-enter your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            {/* Wallet Creation */}
            <div className="checkbox-group">
              <input
                type="checkbox"
                name="createWallet"
                checked={formData.createWallet}
                onChange={handleChange}
              />
              <label>Automatically generate a new Ethereum wallet</label>
            </div>

            {/* Terms & Conditions */}
            <div className="checkbox-group">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
              />
              <label>
                I agree to the Terms of Service and Privacy Policy
              </label>
            </div>

            <button type="submit" className="btn receive full">
              🚀 Create Account
            </button>
          </form>
        </div>

        {/* 📘 INFORMATION CARD */}
        <div className="card">
          <h3>Why Join CryptoWallet?</h3>
          <ul className="info-list">
            <li>⚡ Instant wallet creation</li>
            <li>🔐 Secure private key management</li>
            <li>🌐 Built for Ethereum Sepolia Testnet</li>
            <li>📊 Real-time market insights</li>
            <li>🧪 Perfect for developers and learners</li>
          </ul>
        </div>

        {/* 🔐 SECURITY TIPS */}

      </div>
      
            <div className="outro">
      Start your journey into the world of blockchain development and unlock the future of digital finance. Whether you're a beginner exploring decentralized technology or someone looking to sharpen your skills, this is the perfect time to dive in. Learn how blockchain works, understand smart contracts, and gain hands-on experience with real-world tools and platforms that power the decentralized ecosystem.
      </div>

      {/* 🔷 EDUCATIONAL CONTENT */}
      <div className="section content">
        <h2>Understanding Your Wallet</h2>
        <p>
          When you create an account, a cryptographic Ethereum wallet can be
          generated for you. This wallet includes a public address for receiving
          funds and a private key that grants full control over your assets.
          Since this application operates on the Sepolia test network, it is
          ideal for experimentation and learning without financial risk.
        </p>

        <div className="features">
          <div className="feature">🌐 Decentralized Access</div>
          <div className="feature">🔐 Cryptographic Security</div>
          <div className="feature">⚡ Fast Testnet Transactions</div>
          <div className="feature">📚 Educational Environment</div>
        </div>
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