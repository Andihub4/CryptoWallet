import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function Receive({ navigate}) {
  
  const status = "signed";
const idt = localStorage.getItem("idt");
const name = localStorage.getItem("name");
  
  // Example wallet address (replace with real address variable)
  const [address, setAddress] = useState(
    "0x0000000000000000000000000000"
  );

async function Receive() {
  const response = await fetch(`https://backend-omz4.onrender.com/receive/${idt}`);
  const data = await response.json();

  setAddress(data);

  // see full structure
  
}

Receive();

  // Copy address to clipboard
  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    
  };

  return (
    <div className="container">
      {/* 🔷 NAVBAR */}
      <nav className="nav">
        <h2>⚡ CryptoWallet</h2>
        <nav className="menu">
          <button className="menu-btn">
            <h3>🧒: {name}</h3>
          </button>
          <button onClick={() => navigate("wallet")} className="menu-btn">Wallet</button>
          <button onClick={() => navigate("send")} className="menu-btn">Send</button>
        </nav>
      </nav>

      {/* 🔷 HERO */}
      <div className="hero">
        <h1>Receive Ethereum</h1>
        <p>
          Share your wallet address to receive ETH on the Ethereum Sepolia
          Test Network. You can copy the address or use the QR code for quick
          and accurate transfers.
        </p>
      </div>

      {/* 🔷 MAIN GRID */}
      <div className="grid">
        {/* 📥 RECEIVE CARD */}
        <div className="card big receive-card">
          <h3>Your Wallet Address</h3>

          {/* Address Display */}
          <div className="address-box">
            <p className="address-text">{address}</p>

          </div>

          {/* QR Code */}
          <div className="qr-container">
            <QRCodeCanvas
              value={address}
              size={200}
              bgColor="#ffffff"
              fgColor="#000000"
              level="H"
              includeMargin={true}
            />
            <p className="qr-caption">
              Scan this QR code to send ETH to this address.
            </p>
          </div>

          {/* Network */}
          <div className="network-info">
            <span>Network:</span>
            <span className="green">Sepolia Testnet</span>
          </div>

          {/* Generate New Address (UI Only) */}
                      <button onClick={copyAddress} className="btn receive full">
              📋 Copy Address
            </button>

        </div>

        {/* 📘 INFORMATION CARD */}


        {/* 🔐 SECURITY TIPS */}

      </div>

      {/* 🔷 EDUCATIONAL CONTENT */}
      <div className="section content">
        <h2>Understanding Wallet Addresses</h2>
        <p>
          An Ethereum wallet address is a unique identifier that allows you to
          receive digital assets. It is derived from your public key and can be
          safely shared with others. Transactions sent to this address are
          recorded on the blockchain and can be publicly verified.
        </p>

        <div className="features">
          <div className="feature">🌐 Public & Shareable</div>
          <div className="feature">🔐 Secured by Cryptography</div>
          <div className="feature">📜 Immutable Records</div>
          <div className="feature">⚡ Instant Transfers</div>
        </div>
      </div>
      <div style={{paddingTop: "3%"}}></div>
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