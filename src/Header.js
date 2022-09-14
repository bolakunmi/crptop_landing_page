import React from "react";
const HEADER = () => {
  return (
    <header>
      <div>
        <img src={require("./files/imports/Logo.png")} alt="logo"></img>
      </div>
      <ul>
        <li className="list-items">products</li>
        <li className="list-items">features</li>
        <li className="list-items">about</li>
        <li className="list-items">contact</li>
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
