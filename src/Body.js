import React from "react";

const BODY = () => {
  return (
    <section className="hero-section">
      <div className="hero-description-container">
        <div className="hero-advert">
          <div>70% save</div>
          <div>for the best black friday deals</div>
        </div>

        <h1>fastest & secure platform to invest in cypto</h1>
        <p>
          buy and sell cyptocurrencies by trusted 10M wallets, in over 100m
          transactions
        </p>
        <button>try for free</button>
      </div>
      <div>
        <img src={require("./files/hero-img.png")} alt="hero-img" />
      </div>
    </section>
  );
};

export default BODY;
