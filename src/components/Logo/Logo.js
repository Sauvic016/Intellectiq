import React from "react";
// import Tilt from "react-tilt";
import ai from "./ai.png";

import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <div
        className="Tilt br2 shadow-2"
        // options={{ max: 55 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner pa3">
          {" "}
          <img src={ai} style={{ paddingTop: "5px" }} alt="ai" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Logo;
