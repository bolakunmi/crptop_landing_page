import React from "react";
import TrackVisibility from "react-on-screen";



const FOOTER = () => {
  return (
    <footer>
      <TrackVisibility partialVisibility>
        {({ isVisible }) => (
          <div className="footer-about">
            <div>
              <img src={require("./files/imports/Logo.png")} alt="logo"></img>
            </div>
            <ul>
              <span style={{ fontSize: "20px", fontWeight: "500" }}>
                Quick Link
              </span>
              <span className="text-slide-up">
                <li>Home</li>
              </span>
              <span className="text-slide-up">
                <li>products</li>
              </span>
              <span className="text-slide-up">
                <li>features</li>
              </span>
              <span className="text-slide-up">
                <li>about</li>
              </span>
              <span className="text-slide-up">
                <li>contact</li>
              </span>
            </ul>

            <ul>
              <span style={{ fontSize: "20px", fontWeight: "500" }}>
                Resources
              </span>
              <span className="text-slide-up">
                <li>Download Whitepaper</li>
              </span>
              <span className="text-slide-up">
                <li>Smart Token</li>
              </span>
              <span className="text-slide-up">
                <li>Blockchain Explorer</li>
              </span>
              <span className="text-slide-up">
                <li>Crypto API </li>
              </span>
              <span className="text-slide-up">
                <li>Interest</li>
              </span>
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
                  <img
                    src={require("./files/mastercard.png")}
                    alt="mastercard"
                  />
                </div>
                <div>
                  <img src={require("./files/bitcoin.png")} alt="bitcoin" />
                </div>
              </div>
            </div>
          </div>
        )}
      </TrackVisibility>

      <TrackVisibility partialVisibility>
        {({ isVisible }) => (
          <div>
            <div className="socials">
              <p>© 2022 CRAPPO. All rights reserved.</p>
              <div>
                <img
                  src={require("./files/imports/facebook.png")}
                  alt="facebook"
                />
                <img
                  src={require("./files/imports/instagram.png")}
                  alt="instagram"
                />
                <img
                  src={require("./files/imports/youtube.png")}
                  alt="youtube"
                />
                <img
                  src={require("./files/imports/twitter.png")}
                  alt="twitter"
                />
                <img
                  src={require("./files/imports/linkedin.png")}
                  alt="linkedin"
                />
              </div>
            </div>
            <h2 className="mylink">
              <a
                href="https://bolakunmiprofile.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                keenest
              </a>
            </h2>
          </div>
        )}
      </TrackVisibility>
    </footer>
  );
};

export default FOOTER;
