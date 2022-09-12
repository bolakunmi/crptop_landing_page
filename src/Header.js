import React from "react";
const HEADER = () => {
  return (
    <header>
      <div>
        <img src={require("./files/imports/Logo.png")} alt="logo"></img>
      </div>
      <ul>
        <li>products</li>
        <li>features</li>
        <li>about</li>
        <li>contact</li>
        <div>
          <li className="login">login</li>
          <hr></hr>
          <li className="register">register</li>
        </div>
      </ul>
    </header>
  );
};

export default HEADER;
