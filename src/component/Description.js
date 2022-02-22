import React from "react";
import gif from "../assets/animated.gif";
import "../styles/description.css";


const Description = () => {
  return (
    <>
      <div className="container-md desc-main mt-5 mb-5">
        <div className="row">
          <div className="col-md-6 mt-5 gif">
            <img src={gif} alt="ezgif" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <div class="right-detail">
              <p class="p-1">HI THERE!</p>
              <h3 class="sec2-h3">I’m<br />Geeked Gorilla</h3>
              <p class="p-2">
                We are not only An NFT in the meta verse, fortunately we are emphasizing the importance of building a strong community revolutionizing entrepreneurship. There are only 5,000 Geeked gorillas made roaming the meta verse. Claim yours before it’s too late!!
                We can’t forget the importance of our surroundings such as with the environment & reality. Subsequently We are donating 5% of our profits to various gorilla wildlife preservations. Unfortunately all gorilla species are classified as endangered by the international union for conservation of nature. And 10% of profits will be reimbursed back into the community.
              </p>
              <div class="btn-links-wrap">
                <a rel="noreferrer" href="https://discord.gg/nAEcDjh6q4">
                  <button class="disc-btn">
                    JOIN US ON DISCORD
                    <i class="fab fa-discord"></i>
                  </button>
                </a>
                <div class="social-links">
                  <a class="twit-link" href="https://twitter.com/geekedgorilla/status/1487915370568732675?s=21">
                    Twitter
                    <i class="fab fa-twitter"></i>
                    <div class="line-vert"></div>
                  </a>
                  <a href="https://www.instagram.com/invites/contact/?i=15ftwpmmml94z&utm_content=nlzjrsx">
                    Instagram
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p class="found-p"><span class="span1">5%</span> OF OUR PROFITS GO TOWARDS GORILLA WILD LIFE CONSERVATION</p>
        </div>
      </div>
    </>
  );
};

export default Description;
