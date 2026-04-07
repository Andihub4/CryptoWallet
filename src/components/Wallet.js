import React, { useState } from "react";

export default function Wallet(props) {
  
  
  fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,tether,binancecoin,solana,usd-coin,xrp,cardano,dogecoin,tron,polkadot,litecoin,chainlink,avalanche-2,polygon,uniswap,cosmos,stellar,filecoin,internet-computer,ethereum-classic,monero,okb,near,aptos,arbitrum,optimism,hedera,vechain,tezos,eos,theta-token,flow,neo,kusama,zcash,elrond-erd-2,maker,aave,compound-governance-token,sushi,curve-dao-token,yearn-finance,synthetix-network-token,render-token,fetch-ai,singularitynet,ocean-protocol,gala,enjincoin")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("market");

    data.forEach(coin => {
      const div = document.createElement("div");

      div.innerHTML = `
      
      <nav class="menu">
   <img  src="${coin.image}" id="market_logos"></img> 
   ${coin.name}
 <button class="menu-btn"></button>
  <button style={{fontFize: "200%'}} class="menu-btn">$${coin.current_price}</button>
</nav>
<hr></hr>
      
      


      `;

      container.appendChild(div);
    });
  })
  .catch(err => console.log(err));
  
  
  
  
  
  return (
    
   <div>
     <div id="crypto"></div>
     <nav class="menu">
    <button class="menu-btn">
      <svg id="btc"  xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-currency-bitcoin" viewBox="0 0 16 16">
  <path d="M5.5 13v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.5v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.084c1.992 0 3.416-1.033 3.416-2.82 0-1.502-1.007-2.323-2.186-2.44v-.088c.97-.242 1.683-.974 1.683-2.19C11.997 3.93 10.847 3 9.092 3H9V1.75a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25V3h-.573V1.75a.25.25 0 0 0-.25-.25H5.75a.25.25 0 0 0-.25.25V3l-1.998.011a.25.25 0 0 0-.25.25v.989c0 .137.11.25.248.25l.755-.005a.75.75 0 0 1 .745.75v5.505a.75.75 0 0 1-.75.75l-.748.011a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25zm1.427-8.513h1.719c.906 0 1.438.498 1.438 1.312 0 .871-.575 1.362-1.877 1.362h-1.28zm0 4.051h1.84c1.137 0 1.756.58 1.756 1.524 0 .953-.626 1.45-2.158 1.45H6.927z"/>
</svg>
    </button>
    
    
    <button class="menu-btn">Products</button>
    <button class="menu-btn">Pricing</button>
    <button class="menu-btn">Sign in</button>
   <button class="menu-btn">Logout</button>
 
  
  </nav>
  
  <div id="w_intro">
   Start your journey into the world of blockchain development and unlock the future of digital finance. Whether you're a beginner exploring decentralized technology or someone looking to sharpen your skills, this is the perfect time to dive in. Learn how blockchain works, understand smart contracts, and gain hands-on experience with real-world tools and platforms that power the decentralized ecosystem.
Take control of your financial independence by managing your own crypto wallet securely and efficiently. Understand how transactions work, how to store your assets safely, and how to interact with decentralized applications (dApps). Building these skills not only strengthens your technical knowledge but also empowers you to participate in the growing Web3 space with confidence.
To help you get started, we’ve provided quick-access links below where you can explore platforms that offer small amounts of free ETH daily. These resources are great for testing, learning, and experimenting without financial risk. Use them to practice transactions, deploy simple contracts, or interact with blockchain networks in a safe environment. 
  </div>
  
  
    <div class="w_main">
      
        
      
    <div class="w_submain">
      
      
      <div style={{paddingLeft: "10%"}}>


      <p class="balance">
      Private Key : <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
</svg>
        <br></br>
        Balance
        <br></br>
       

        
        <br></br>
        <b>$1500.00</b><br>
     </br>
    <label style={{fontSize: "50%"}}> ~14.02ETH</label>
     </p>
     </div>
     
     
     <div style={{padding: "10%"}}>

     
    <nav class="menu">
    <button id="buttons" class="menu-btn"><h3>
      
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
</svg>
      Send</h3></button>
        <button class="menu-btn"></button>
    <button id="buttons" class="menu-btn"><h3>
      
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
</svg>
      Receive</h3></button>
     </nav>
     
           <nav class="menu">
    <button class="menu-btn"><h1>Transaction History</h1></button>
      </nav>
      
      
      <hr></hr>
      
      <div>
        
       <nav class="menu">
   <button class="menu-btn">Date</button>
  <button class="menu-btn">Amount</button>
  <button class="menu-btn">Transaction</button>
 <button class="menu-btn">USDT</button>
      </nav>
      
      
      <nav class="menu">
<button class="menu-btn">2025-03-16</button>
<button class="menu-btn">0.1 ETH</button>
<button class="menu-btn">Received</button>
<button class="menu-btn">$232</button>
      </nav>
      
      
      
      <nav class="menu">
 <button class="menu-btn">2025-03-17</button>
<button class="menu-btn">50 ETH</button>
<button class="menu-btn">Sent</button>
<button class="menu-btn">$50</button>
      </nav>
      
      
    <nav class="menu">
<button class="menu-btn">2025-03-18</button>
<button class="menu-btn">0.05 ETH</button>
<button class="menu-btn">Received</button>
<button class="menu-btn">$1,500</button>
    </nav>
    
    
    
    <nav class="menu">
  <button class="menu-btn">2025-03-19</button>
<button class="menu-btn">200 ETH</button>
<button class="menu-btn">Sent</button>
<button class="menu-btn">$200</button>
    </nav>
    
    
    <nav class="menu">
<button class="menu-btn">2025-03-20</button>
<button class="menu-btn">1.2 ETH</button>
<button class="menu-btn">Received</button>
<button class="menu-btn">$2,800</button> 
    </nav>
    




     
      </div>
     </div>
  
      
    </div>  
    </div>
    <h1 style={{width: "100%", maxWidth: "100%", color:"white", textAlign: "center"}}>Market current price </h1>
    <div style={{paddingTop: "2%"}}></div>
    
    <div class="scrollable-div">
    <div id="market" class="market">
    </div>
   </div>

     
<div id="business">
<img src="/media/image/3.jpg" id="business_img"></img>
</div>
     
     
     <div style={{paddingTop: "1%"}}></div>
     <footer class="footer">
  
  
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