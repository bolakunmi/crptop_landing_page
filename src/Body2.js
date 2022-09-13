import React from "react";

const BODY2 = () => {
  return (
    <React.Fragment>
      <section>
        <div className="white-section">
          <h1>Trade securely and market the high growth cryptocurrencies.</h1>
          <div className="coins-container">
            <div className="coins">
              <img src={require("./files/bitcon.png")} alt="Bitcoin" />
              <div className="coins-description">
                <h2>Bitcoin</h2>
                <p>BTC</p>
              </div>
              <p>
                Digital currency in which a record of transactions is
                maintained.
              </p>
              <button className="coins-button">
                <p>Start mining</p>
                <div className="vector2">
                  <img src={require("./files/Vector.png")} alt="arrow" />
                </div>
              </button>
            </div>

            <div className="coins">
              <img src={require("./files/ethereum.png")} alt="ethereum" />
              <div className="coins-description">
                <h2>Ethereum</h2>
                <p>ETH</p>
              </div>
              <p>
                Blockchain technology to create and run decentralized digital
                applications.
              </p>
              <button className="coins-button">
                <p>Start mining</p>

                <div className="vector2">
                  <img src={require("./files/Vector.png")} alt="arrow" />
                </div>
              </button>
            </div>

            <div className="coins">
              <img src={require("./files/litecoin.png")} alt="litecoin" />
              <div className="coins-description">
                <h2>Litecoin</h2>
                <p>LTC</p>
              </div>
              <p>
                Cryptocurrency that enables instant payments to anyone in the
                world.
              </p>
              <button className="coins-button">
                <p>Start mining</p>

                <div className="vector2">
                  <img src={require("./files/Vector.png")} alt="arrow" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default BODY2;
