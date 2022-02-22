import React from "react";
import "../styles/footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div class="sec4-wrapper">
        <div class="container sec-4">
          <div class="row m">
            <div class="col-md-4">
            <a href="https://twitter.com/geekedgorilla/status/1487915370568732675?s=21"><i className="fab fa-twitter"></i></a>
            </div>
            <div class="col-md-4">
            <a href="https://discord.gg/nAEcDjh6q4"><i className="fab fa-discord"></i></a>
            </div>
            <div class="col-md-4">
              <a href="https://www.instagram.com/invites/contact/?i=15ftwpmmml94z&utm_content=nlzjrsx"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <span className="span">Geeked Gorillas || @copyright reserved to CoderBoyRahmat</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
