import React, { useState, useEffect } from "react";

export default function Wallet({ navigate }) {

  const [market, setMarket] = useState([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,cardano,dogecoin,polkadot,litecoin,chainlink,avalanche-2,polygon")
      .then(res => res.json())
      .then(data => setMarket(data))
      .catch(err => console.log(err));
  }, []);



//⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡

const status = "signed";
const idt = localStorage.getItem("idt");
const name = localStorage.getItem("name");






//Balance in ETH and USDT display
const [total_eth, setETH] = useState("");
const  [balance, setPrc] = useState("00.000");


async function getbal() {
  const response = await fetch(`https://backend-omz4.onrender.com/balance/${idt}`);
  const data = await response.json();

  
  let row_eth = Number(data);
  console.log(row_eth)
  setETH(row_eth);
  // see full structure
  
}
getbal();
fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd")
  .then(res => res.json())
  .then(data => {
    //convert ETH to USDT based on current price 

    setPrc(data.ethereum.usd)
    
  } );
  

//getbal();






const [dt0, setDt0] = useState("");
const [ty0, setTy0] = useState("");
const [am0, setAm0] = useState("");
const [st0, setSt0] = useState("");

const [dt1, setDt1] = useState("");
const [ty1, setTy1] = useState("");
const [am1, setAm1] = useState("");
const [st1, setSt1] = useState("");

const [dt2, setDt2] = useState("");
const [ty2, setTy2] = useState("");
const [am2, setAm2] = useState("");
const [st2, setSt2] = useState("");


const [dt3, setDt3] = useState("");
const [ty3, setTy3] = useState("");
const [am3, setAm3] = useState("");
const [st3, setSt3] = useState("");




async function getHis() {
  const response = await fetch(`https://backend-omz4.onrender.com/history/${idt}`);
  const data = await response.json();

  
  
  console.log(data.length);
  // Transaction 0
  setDt0(data[0]["dates"])
  setTy0("Sent");
  setAm0(`${data[0]["amount"]} ETH`);
  setSt0(data[0]["status"]);
  // Transaction 1
  setDt1(data[1]["dates"])
  setTy1("Sent");
  setAm1(`${data[1]["amount"]} ETH`);
  setSt1(data[1]["status"]);
  
  // Transaction 2
  setDt2(data[2]["dates"])
  setTy2("Sent");
  setAm2(`${data[2]["amount"]} ETH`);
  setSt2(data[2]["status"]);
  
  //transaction 3
  setDt3(data[3]["dates"])
  setTy3("Sent");
  setAm3(`${data[3]["amount"]} ETH`);
  setSt3(data[3]["status"]);
  
}
getHis();

  
//Private key Backup
const [pkk, setPK] = useState("");
  async function getpk() {
  const response = await fetch(`https://backend-omz4.onrender.com/backpk/${idt}`);
  const data = await response.json();

  
  let pk = data[0]["pk"];
  // Copy pk
  setPK(pk);

  
};
getpk();
function copypk() {
  navigator.clipboard.writeText(pkk)
}  
  
// Create Transaction 


function send() {
  
  alert("send fun")
}


// Receive Token

function receive() {
  alert("Receive fun")
}


//Logout function 

function logout() {
  localStorage.removeItem("status");
  localStorage.removeItem("idt");
  localStorage.removeItem("name");
  navigate("home");
}


//⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡
  return (
    <div className="container">

      {/* 🔷 NAVBAR */}
      <nav className="nav">
        <h2>⚡ CryptoWallet</h2>
        
       <nav className="menu">
 <button id="empty" class="menu-btn"></button>
 <button id="empty" class="menu-btn"></button>
  <button id="empty" class="menu-btn"><h3>🧒: {name}</h3></button>
  <button onClick={() => logout()} id="empty" class="menu-btn">Logout</button>

  </nav>
</nav>

      {/* 🔷 HERO / INTRO */}
      <div className="hero">
        <h1>Next-Gen Web3 Wallet</h1>
        <p>
          Manage assets, explore blockchain, and interact with decentralized apps.
          Built for developers and power users.
        </p>
      </div>

      {/* 🔷 MAIN DASHBOARD */}
      <div className="grid">

        {/* 💰 BALANCE CARD */}
        <div className="card big">
          <h3>Total Balance</h3>
          <h1>${balance * total_eth}</h1>
          <p>~{total_eth} ETH</p>

          <div className="actions">
            <button onClick={() => navigate("send")} className="btn send">Send</button>
            <button onClick={() => navigate("receive")} className="btn receive">Receive</button>
          
          </div>
        </div>

        {/* 🔐 SECURITY CARD */}
        <div className="card">
          <h3>Security</h3>
          <p>Private Key Protected</p>
          <p></p>
          <p>*********</p>
          <button onClick={() => copypk()} className="backup">Copy Private Key</button>
          <p> 🔐  Copy and save your private key safe and secure place. </p>
        </div>

        {/* 📊 ANALYTICS */}
        <div className="card">
          <h3>Analytics</h3>
          <p>Track performance & growth</p>
          <h2>+12.4%</h2>
        </div>

      </div>

      {/* 🔷 TRANSACTIONS */}
      <div className="section">
        <h2>Transaction History</h2>

        <div className="table">
          <div className="row head">
            <span>Date</span>
            <span>Type</span>
            <span>Amount</span>
            <span>Status</span>
          </div>
          <div className="row">
            <span>{dt0}</span>
            <span>{ty0}</span>
            <span>{am0}</span>
            <span className="green">{st0}</span>
          </div>
          
          
           <div className="row">
            <span>{dt1}</span>
            <span>{ty1}</span>
            <span>{am1}</span>
            <span className="green">{st1}</span>
          </div>
          
           <div className="row">
            <span>{dt2}</span>
            <span>{ty2}</span>
            <span>{am2}</span>
            <span className="green">{st2}</span>
          </div>
          
          <div className="row">
            <span>{dt3}</span>
            <span>{ty3}</span>
            <span>{am3}</span>
            <span className="green">{st3}</span>
          </div>



        </div>
      </div>

      {/* 🔷 MARKET */}
      <div className="section">
        <h2>Live Market</h2>

        <div className="market-grid">
          {market.map(coin => (
            <div key={coin.id} className="coin-card">
              <img src={coin.image} alt="" />
              <h4>{coin.name}</h4>
              <p>${coin.current_price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🔷 FEATURES / CONTENT */}
      <div className="section content">
        <h2>Why This Wallet?</h2>
        <p>
          Built for modern blockchain developers, this wallet gives you full control
          over your digital assets while providing deep insight into transactions,
          smart contracts, and decentralized finance ecosystems.
        </p>

        <div className="features">
          <div className="feature">⚡ Fast Transactions</div>
          <div className="feature">🔐 Secure Storage</div>
          <div className="feature">🌐 Web3 Ready</div>
          <div className="feature">📊 Real-time Analytics</div>
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