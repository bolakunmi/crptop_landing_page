import React from "react";
import TrackVisibility from "react-on-screen";

const BODY = () => {
  return (
    <React.Fragment>
      <div className="body-container1">
        <TrackVisibility partialVisibility>
          {({ isVisible }) => (
            <section className={isVisible?"hero-section":'blur'}>
              <div className="hero-description-container">
                <div className="hero-advert">
                  <div>70% save</div>
                  <div>for the best black friday deals</div>
                </div>

                <h1>fastest & secure platform to invest in cypto</h1>
                <p>
                  buy and sell cyptocurrencies by trusted 10M wallets, in over
                  100m transactions
                </p>
                <button>
                  try for FREE
                  <TrackVisibility partialVisibility>
                    {({ isVisible }) => (
                      <div className={isVisible ? "vector" : "blur"}>
                        <img src={require("./files/Vector.png")} alt="arrow" />
                      </div>
                    )}
                  </TrackVisibility>
                </button>
              </div>
              <div>
                <img src={require("./files/hero-img.png")} alt="hero-img" />
              </div>
              <img
                className="background background-1"
                src={require("./files/hero-ribbon-1.png")}
                alt="background-img"
              />
              <img
                className="background background-2"
                src={require("./files/hero-ribbon-2.png")}
                alt="background-img"
              />
            </section>
          )}
        </TrackVisibility>

        <TrackVisibility partialVisibility>
          {({ isVisible }) => (
            <section className={isVisible ? "info " : "blur"}>
              <div className="info-div">
                <div className="info-div-img">
                  <img
                    src={require("./files/imports/Bar.png")}
                    alt="hero-img"
                  ></img>
                </div>
                <div>
                  <h2>$30B</h2>
                  <p>digital currency exchange</p>
                </div>
              </div>
              <div className="info-div">
                <div className="info-div-img">
                  <img
                    src={require("./files/imports/Person.png")}
                    alt="hero-img"
                  ></img>
                </div>
                <div>
                  <h2>190+</h2>
                  <p>countries around the world</p>
                </div>
              </div>
              <div className="info-div">
                <div className="info-div-img">
                  <img
                    src={require("./files/imports/Earth.png")}
                    alt="hero-img"
                  ></img>
                </div>
                <div>
                  <h2>$10M</h2>
                  <p>trusted wallet investors</p>
                </div>
              </div>
            </section>
          )}
        </TrackVisibility>

        {/* <TrackVisibility partialVisibility>
          {({ isVisible }) => ( */}
        <section className={"why"}>
          <img
            className="background background-3"
            src={require("./files/why-model-1.png")}
            alt="background-img"
          />
          <img
            className="background background-4"
            src={require("./files/why-ribbon.png")}
            alt="background-img"
          />
          <img
            className="background background-5"
            src={require("./files/why-model-2.png")}
            alt="background-img"
          />
          <img src={require("./files/why-img.png")} alt="why-img" />
          <div>
            <h1>why you should choose CHAPPO</h1>{" "}
            <p style={{ "font-size": "16px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. In, praesentium.
            </p>
            <button>learn more</button>
          </div>
        </section>
        {/* )}
        </TrackVisibility> */}

        <TrackVisibility partialVisibility>
          {({ isVisible }) => (
            <section className={isVisible ? "calculate" : "blur"}>
              <div className="calculate-info">
                <h2>Check how much you can earn with us</h2>
                <p>
                  lets check your hash rate to see how much you will earn today,
                  <br></br> Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.
                </p>
              </div>

              <div className="calculator-container">
                <form className="calculator-tools">
                  <input placeholder="Enter your hash rate"></input>

                  <select>
                    <option>TH/s</option>
                    <option>H/s</option>
                    <option>KH/s</option>
                    <option>GH/s</option>
                    <option>MH/s</option>
                  </select>
                  <button>calculate</button>
                </form>
                <div className="calculator-info">
                  <h2
                    style={{
                      "font-size": "16px",
                      color: "#3671E9",
                      marginBottom: "16px",
                    }}
                  >
                    ESTIMATED 24 HOUR REVENUE:
                  </h2>
                  <h2 style={{ "font-size": "32px", marginBottom: "4px" }}>
                    0.055 130 59 ETH{" "}
                    <span style={{ color: "#3671E9" }}>($1275)</span>
                  </h2>
                  <p>
                    Revenue will change based on mining difficulty and Ethereum
                    price.
                  </p>
                </div>
              </div>
            </section>
          )}
        </TrackVisibility>
      </div>
    </React.Fragment>
  );
};

export default BODY;
