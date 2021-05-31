import React from "react";
import spinner from "../images/spinner.gif";

const Spinner = () => {
  return (
    <div>
      <img
        src={spinner}
        alt="loading"
        style={{
          width: "80px",
          margin: "0 auto",
          display: "block",
        }}
      />
    </div>
  );
};

export default Spinner;
