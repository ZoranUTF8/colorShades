import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState();
  const bcg = rgb.join(",");
  const hexValue = rgbToHex(...rgb);
  //? remove the alert after 3 sec
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000)
    return ()=>clearTimeout(timeout)
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`} //? if index bigger than 10 than change text color
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">Copied to clipboard...</p>}
    </article>
  );
};

export default SingleColor;
