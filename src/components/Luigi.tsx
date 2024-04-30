import React from "react";
import {  useNavigate } from "react-router-dom";

export const Luigi = (): React.JSX.Element => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>its me Luigi!!!</h2>
      <p>The MArios brother</p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        ir a Home
      </button>{" "}
    </div>
  );
};
