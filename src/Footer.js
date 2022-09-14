import React from "react";

const FOOTER = () => {
  return (
    <footer>
      <div className="footer-about">
        <div>
          <img src={require("./files/imports/Logo.png")} alt="logo"></img>
        </div>
        <ul>
          <span style={{ fontSize: "20px", fontWeight: "500" }}>
            Quick Link
          </span>
          <li>Home</li>
          <li>products</li>
          <li>features</li>
          <li>about</li>
          <li>contact</li>
        </ul>

        <ul>
          <span style={{ fontSize: "20px", fontWeight: "500" }}>Resources</span>
          <li>Download Whitepaper</li>
          <li>Smart Token</li>
          <li>Blockchain Explorer</li>
          <li>Crypto API </li>
          <li>Interest</li>
        </ul>

        <div>
          <h2 style={{ fontSize: "32px" }}>
            We accept following payment systems
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              paddingTop: "40px",
            }}
          >
            <div>
              <img src={require("./files/visa.png")} alt="visa" />
            </div>
            <div>
              <img src={require("./files/mastercard.png")} alt="mastercard" />
            </div>
            <div>
              <img src={require("./files/bitcoin.png")} alt="bitcoin" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="socials">
          <p>© 2022 CRAPPO. All rights reserved.</p>
          <div>
            <img src={require("./files/imports/facebook.png")} alt="facebook" />
            <img
              src={require("./files/imports/instagram.png")}
              alt="instagram"
            />
            <img src={require("./files/imports/youtube.png")} alt="youtube" />
            <img src={require("./files/imports/twitter.png")} alt="twitter" />
            <img src={require("./files/imports/linkedin.png")} alt="linkedin" />
          </div>
        </div>
        <h2 className="mylink">
          <a href="https://bolakunmiprofile.netlify.app" target="_blank">
            keenest
          </a>
        </h2>
      </div>
    </footer>
  );
};

export default FOOTER;
