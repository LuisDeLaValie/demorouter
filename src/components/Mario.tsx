import React from "react";
import {  useNavigate } from "react-router-dom";

export const Mario = (): React.JSX.Element => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Its me Mario!! </h2>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        ir a Home
      </button>    </div>
  );
};
