import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function App(): React.JSX.Element {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Main Page</h1>
      <p>Navigations..</p>
      <nav>
        <ul>
          <li>
            <button
              onClick={() => {
                navigate("/profile");
              }}
            >
              Profile
            </button>
            <button
              onClick={() => {
                navigate("/profile/mario");
              }}
            >
              mario
            </button>
            <button
              onClick={() => {
                navigate("/profile/luigi");
              }}
            >
              Luiegi
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
