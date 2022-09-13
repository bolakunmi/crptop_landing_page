import HEADER from "./Header.js";
import BODY from "./Body.js";
import "./App.css";
import React from "react";
import FOOTER from "./Footer.js";
import BODY2 from "./Body2.js";

function App() {
  return (
    <React.Fragment>
      <HEADER />
      <BODY />
      <BODY2 />
      <FOOTER />
    </React.Fragment>
  );
}

export default App;
