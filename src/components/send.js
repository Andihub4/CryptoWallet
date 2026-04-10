import React, { useState } from "react";

export default function Send({navigate}) {
  
  const status = "signed";
  const name = localStorage.getItem("name"); 
  const idt = localStorage.getItem("idt");

  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [success, setSac] = useState("");

  
  
  



  function handleSend(e) {
    e.preventDefault();
  alert(`from: me, to: ${address} , amount: ${amount}`);
  
  
  async function creatTransaction() {
  const response = await fetch(`https://backend-omz4.onrender.com/trans/${idt}/${address}/${amount}`);
  const data = await response.json();
  if(data == "Successfull") {
    setSac(`Successfully ${amount} ETH transferred to ${address}`);
  }
  console.log(data); // see full structure
}
creatTransaction();
  
  }



  return (
    <div className="container">

      {/* 🔷 NAVBAR */}
      <nav className="nav">
        <h2>⚡ CryptoWallet</h2>
        <nav className="menu">
          <button className="menu-btn"><h3>🧒: {name}</h3></button>
          
          <button onClick={() => navigate("wallet")} className="menu-btn">Wallet</button>
        </nav>
      </nav>

      {/* 🔷 HERO */}
      <div className="hero">
        <h1>Send Ethereum</h1>
        <p>
          Transfer ETH securely on the Ethereum Sepolia Test Network.
          This environment is designed for development and testing purposes,
          allowing you to experiment with blockchain transactions without
          using real funds.
        </p>
      </div>

      {/* 🔷 MAIN GRID */}
      <div className="grid">

        {/* 💸 SEND FORM */}
        <div className="card big">
          <h3>Transaction Details</h3>
          <form onSubmit={handleSend} className="send-form">

            {/* Recipient Address */}
            <label>Recipient Address</label>
            <input
              type="text"
              placeholder="0x1234...abcd"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />

            {/* Amount */}
            <label>Amount (ETH)</label>
            <input
              type="number"
              step="0.0001"
              placeholder="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />

            {/* Network */}
            <label>Network</label>
            <input
              type="text"
              value="Sepolia Testnet"
              disabled
              className="network-input"
            />

            {/* Send Button */}
            <button type="submit" className="btn send full">
              🚀 Send Transaction
            </button>
          </form>
          <p className="success">{success} </p>
        </div>

    

      </div>

      {/* 🔷 TRANSACTION PREVIEW */}
      <div className="section">
        <h2>Transaction Preview</h2>
        <div className="card">
          <div className="preview-row">
            <span>Recipient:</span>
            <span>{address || "Not specified"}</span>
          </div>
          <div className="preview-row">
            <span>Amount:</span>
            <span>{amount ? `${amount} ETH` : "0.00 ETH"}</span>
          </div>
          <div className="preview-row">
            <span>Network:</span>
            <span className="green">Sepolia Testnet</span>
          </div>
          
        </div>
      </div>

      {/* 🔷 EDUCATIONAL CONTENT */}
      <div className="section content">
        <h2>Understanding Ethereum Transactions</h2>
        <p>
          Sending Ethereum involves broadcasting a signed transaction to the
          blockchain. Once confirmed by network validators, the transaction
          becomes immutable and publicly verifiable. On the Sepolia testnet,
          this process mirrors the Ethereum mainnet but without financial risk.
        </p>

        <div className="features">
          <div className="feature">⚡ Fast Testnet Transfers</div>
          <div className="feature">🔐 Cryptographically Secure</div>
          <div className="feature">🌐 Fully Decentralized</div>
          <div className="feature">📜 Transparent & Verifiable</div>
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