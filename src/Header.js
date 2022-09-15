import React from "react";
const HEADER = () => {
  return (
    <header>
      <div>
        <img src={require("./files/imports/Logo.png")} alt="logo"></img>
      </div>
      <ul>
        <span className="text-slide-up">
          <li className="list-items">products</li>
        </span>
        <span className="text-slide-up">
          <li className="list-items">features</li>
        </span>
        <span className="text-slide-up">
          <li className="list-items">about</li>
        </span>
        <span className="text-slide-up">
          <li className="list-items">contact</li>
        </span>
        <div>
          <li className="login">login</li>
          <hr></hr>
          <button className="register">register</button>
        </div>
      </ul>
    </header>
  );
};

export default HEADER;
