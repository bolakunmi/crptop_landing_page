import React from "react";

const BODY2 = () => {
  return (
    <React.Fragment>
      <section>
        <div className="white-section">
          <h1 style={{ textAlign: "center" }}>
            Trade securely and market the high growth cryptocurrencies.
          </h1>
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
      <section className="statistics">
                            <img
            className="background"
            src={require("./files/features-circle-1.png")}
            alt="background-img"
          />
        <h1 style={{ textAlign: "center" }}>
          Market sentiments, portfolio, and run the infrastructure of your
          choice
        </h1>
        <div className="statistics-container">
          <div className="statistics-object">
            <div>
              <h2>Invest Smart</h2>
              <p>
                Get full statistic information about the behaviour of buyers and
                sellers will help you to make the decision.
              </p>
              <button>learn more</button>
            </div>
            <img
              src={require("./files/feature-1-img.png")}
              alt="feature-1-img.png"
            />
          </div>

          <div className="statistics-object">
            <div>
              <h2>Detailed Statistics</h2>
              <p>
                View all mining related information in realtime, at any point at
                any location and decide which polls you want to mine in.
              </p>
              <button>learn more</button>
            </div>
            <img
              src={require("./files/feature-2-img.png")}
              alt="feature-2-img.png"
            />
          </div>

          <div className="statistics-object">
            <div>
              <h2>Grow your profit and track your investments</h2>
              <p>
                Use advanced analytical tools. Clear TradingView charts let you
                track current and historical profit investments.
              </p>
              <button>learn more</button>
            </div>
            <img
              src={require("./files/feature-3-img.png")}
              alt="feature-3-img.png"
            />
          </div>
        </div>
                                    <img
            className="background"
            src={require("./files/features-circle-2.png")}
            alt="background-img"
          />
      </section>

      <section className="mining-section">
        <div className="subscribe-section">
          <div className="subscribe-description">
                                                <img
            className="background"
            src={require("./files/ethereum-backgound.png")}
            alt="background-img"
          />
            <h1>Start mining now</h1>
            <p>
              Join now with CRAPPO to get the latest news and start mining now
            </p>
          </div>
          <div className="subscribe">
            <input
              placeholder="Enter your Email"
              type="email"
              id="email"
              pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$"
            ></input>
            <button> Subscribe</button>
                                                <img
            className="background"
            src={require("./files/bitcoin-background.png")}
            alt="background-img"
          />
          </div>
        </div>

                                                        <img
            className="background"
            src={require("./files/something2.png")}
            alt="background-img"
          />                                                <img
            className="background"
            src={require("./files/something.png")}
            alt="background-img"
          />
      </section>
    </React.Fragment>
  );
};

export default BODY2;
