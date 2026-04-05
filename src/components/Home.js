import React, { useState } from "react";

export default function Home(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function test(e) {
    e.preventDefault();
    alert(`Form submitted : ${name}`);
  }


  fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,cardano,tron")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("logo_div");

let btc_price = data[0]["current_price"];

let btc_logo = data[0]["image"];

let eth_price = data[1]["current_price"];
let eth_logo = data[1]["image"];


let sol_price = data[2]["current_price"];
let sol_logo = data[2]["image"];



let car_price = data[3]["current_price"];
let car_logo = data[3]["image"];


let tr_price = data[4]["current_price"];
let tr_logo = data[4]["image"];







let code = `                          <span>
                 <img  src="${btc_logo}" id="cry"></img>
                 
                <img  src="${sol_logo}" id="cry"></img>
                
               <img  src="${eth_logo}" id="cry"></img>
                  
                <img  src="${car_logo}" id="cry"></img>
                  
                 <img  src="${tr_logo}" id="cry"></img>
                </span>
              <nav class="menu">
    <button class="menu-btn"> $${btc_price}</button>
    <button class="menu-btn">$${sol_price}</button>
     <button class="menu-btn">$${eth_price}</button>
     <button class="menu-btn">$${car_price}</button>
     <button class="menu-btn">$${tr_price}</button>
           
 
              </nav>

              `;
//alert(btc_price)

container.innerHTML = code;


  })
  .catch(err => console.log(err));










    

  return (
<div>
      
    <div class="main">
      <p></p><br></br>
        <nav class="menu">
    <button class="menu-btn">
      <svg id="btc"  xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-currency-bitcoin" viewBox="0 0 16 16">
  <path d="M5.5 13v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.5v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.084c1.992 0 3.416-1.033 3.416-2.82 0-1.502-1.007-2.323-2.186-2.44v-.088c.97-.242 1.683-.974 1.683-2.19C11.997 3.93 10.847 3 9.092 3H9V1.75a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25V3h-.573V1.75a.25.25 0 0 0-.25-.25H5.75a.25.25 0 0 0-.25.25V3l-1.998.011a.25.25 0 0 0-.25.25v.989c0 .137.11.25.248.25l.755-.005a.75.75 0 0 1 .745.75v5.505a.75.75 0 0 1-.75.75l-.748.011a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25zm1.427-8.513h1.719c.906 0 1.438.498 1.438 1.312 0 .871-.575 1.362-1.877 1.362h-1.28zm0 4.051h1.84c1.137 0 1.756.58 1.756 1.524 0 .953-.626 1.45-2.158 1.45H6.927z"/>
</svg>
    </button>
    
    
    <button class="menu-btn">Products</button>
    <button class="menu-btn">Pricing</button>
    <button class="menu-btn">Sign in</button>
  </nav>
  
        
      
      <div id="hero0"><b>ETH Wallet</b> </div> 
      <div id="hero">Cryptocurrency Is Here</div>
      <p id="intro">Create your Ethereum Faucet Wallet and manage it effortlessly! Read balances, receive test tokens, send transactions, and explore the crypto market with live interactive charts—all in a safe, risk-free environment.</p>
      
      <button id="getstart">get started </button>
      <div id="intro2h"></div>
      </div>
            <p id="intro2"> Blockchain Developers: Effortlessly manage your ETH Testnet Faucet Wallet to streamline your development workflow. Instantly receive faucet tokens for gas fees, monitor balances in real-time, create transactions visually, and simplify testing with interactive tools—accelerate your development with zero risk.</p>
            
           <div id="logo_div" class="logos">



            </div>
            
            

            <p style={{marginLeft: "3px", color: "white"}}>Blockchain Developers: Take full control of your Ethereum Testnet Faucet Wallet and supercharge your development workflow. Effortlessly manage your testnet ETH balances, receive faucet tokens instantly for gas fees, and monitor all activity in real-time with intuitive visual dashboards. Create, sign, and send transactions with ease while testing your smart contracts in a safe, risk-free environment. Explore detailed token histories, track transaction status, and analyze network activity without ever touching real funds. Whether you are building dApps, experimenting with new contracts, or simulating DeFi protocols, our tools simplify complex processes and accelerate your testing. Interactive charts and live market behavior tracking let you understand token trends on the testnet, helping you make smarter development decisions. Save time, reduce friction, and focus on coding—your testnet faucet wallet handles the tedious tasks for you, giving you a seamless, professional-grade blockchain development experience.</p>
            
            
            

            



            
            <div class="context">
            <h1 style={{ color:"white"}}>What is a Faucet Wallet</h1><br></br>
            <p style={{ color: "white"}}>
              faucet wallet is a type of cryptocurrency wallet designed specifically for test networks (testnets), where users can receive free tokens from faucet services. Unlike real wallets that store valuable assets, a faucet wallet operates in a risk-free environment and is used primarily for testing and development purposes. It allows developers to simulate real blockchain interactions such as sending transactions, paying gas fees, and interacting with smart contracts—without using actual money. Faucet wallets are essential tools for safely experimenting with blockchain functionality before deploying applications to the main network.
            </p>
            
            <h1 style={{ color:"white"}}>⚡ Why Developers Need Testnet ETH</h1><br></br>
            <p style={{ color: "white"}}>
              Testnet ETH is required by developers to pay for gas fees when performing operations on Ethereum test networks. Every transaction—whether it’s deploying a smart contract, calling a function, or transferring tokens—requires gas, even in a test environment.
Since using real ETH would be costly and risky during development, testnets provide free ETH through faucet services. This enables developers to build, test, debug, and optimize their applications without financial pressure. Testnet ETH ensures that developers can fully simulate real-world blockchain behavior while maintaining a safe and cost-free workflow.
            </p>
            
            
            
            
             <h1 style={{ color:"white"}}>🧩 The Problem You’re Solving</h1><br></br>
            <p style={{ color: "white"}}>
              Despite the importance of testnet ETH, accessing and managing it is often inconvenient and fragmented. Developers typically rely on multiple tools—separate wallets, external faucet websites, and block explorers—to complete simple tasks. This scattered workflow slows down development and creates unnecessary complexity, especially for beginners.
Additionally, tracking transactions, managing balances, and understanding network behavior can be confusing without a unified interface.
This project solves these challenges by providing an all-in-one faucet wallet platform. It combines wallet management, faucet access, transaction handling, and visual analytics into a single, user-friendly interface—making blockchain development more efficient, streamlined, and accessible for everyone.
            </p>
            
            
            
                         <h1 style={{ color:"white"}}>
                           

                            About the Developer</h1><br></br>
                            
                                                       <span><img id="dev" src="/media/developer.jpg"></img></span><br></br>
                                                       
                        <p style={{ color: "white"}}>
                          
                          I am a multidisciplinary engineer specializing in web development, artificial intelligence, and blockchain technologies. My strength lies in combining these domains to build powerful, intelligent, and scalable applications that go beyond traditional software solutions.
With a strong foundation in modern web technologies and Web3 development, I focus on creating systems that are not only functional but also intuitive and developer-friendly. I enjoy solving complex problems by integrating AI-driven logic with decentralized infrastructure, enabling smarter and more efficient digital experiences.
This Ethereum Testnet Faucet Wallet project reflects my ability to merge frontend engineering with blockchain interaction, while maintaining a clean user experience and practical functionality. It demonstrates my approach to simplifying complex workflows and making advanced technologies more accessible.
I am continuously exploring new innovations in AI and blockchain, with the goal of building impactful solutions that push the boundaries of what modern applications can achieve.
                          </p>
            
            
            <button id="getstart"> Sign Up</button>
            </div>


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