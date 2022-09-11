import React from "react";
const HEADER = () => {
  return (
    <header>
      <div>Logo</div>
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
