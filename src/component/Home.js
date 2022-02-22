import React from "react";
import "../styles/home.css";
// import brand from "../assets/Geeked-Gorillas-2-3-2022(2).png";
// import brand from "../assets/GEEKED-GORILLAS-2-3-2022 (10).png";
import cartmin from "../assets/Cart-min.png";
import eth from "../assets/solana.png";
import meta from "../assets/metamask.png";
import coinbase from "../assets/coinbase.jpeg";

const Home = () => {
  return (
    <div className="App">
      <div class="sec1-wrapper">
        <div class="shade"></div>
        <div class="container-md sec-1">
          <a href="#mint" class="top-link">
            <i className="fas fa-arrow-right"></i>
            <div class="mint">HOW TO MINT</div>
          </a>
          <div class="row header-container">
            <div class="col-md-9 mint-container">
              <h3>GET YOUR GEEKED GORILLA NOW</h3>
              <h1>MINT<br/><span>GEEKED <span className="rotate">G</span>ORILLA</span><br/>NFT</h1>
              <p>
                Own the new super rare piece of digital artand make<br/>your own
                collection more valuable!
              </p>
              <button class="mint-btn">
                <img alt="catmin" src={cartmin} className="catmin"/>
                <span>GORILLAS 1</span>
              </button><br/>
              <input id="slider" class="slider" type="range"></input>
            </div>
            <div class="col-md-3 mint-detail">
              <img alt="eth" src={eth}className="eth" />
              <h3>0.75 SOLANA</h3>
              <button>Connect Wallet</button>
              <div>
                <p>Secure payments powered by</p>
                <img src={meta} alt="Metamask" className="meta"/>
                <img src={coinbase} alt="coinbase"className="coinbase"/>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
