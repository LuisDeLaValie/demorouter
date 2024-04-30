import React from "react";
import { useNavigate } from "react-router-dom";

export const ErrorPage = (): React.JSX.Element => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Sorry, this page doest exist!!</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        ir a Home
      </button>
    </div>
  );
};
