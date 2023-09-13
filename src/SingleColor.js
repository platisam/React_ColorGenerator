import React, { useState } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");

  return (
    <article className={`color`} style={{ backgroundColor: `rgb(${bcg})` }}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value"></p>
    </article>
  );
};

export default SingleColor;
