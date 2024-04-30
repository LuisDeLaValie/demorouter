import React from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { Mario } from "./Mario";
import { Luigi } from "./Luigi";
import { DafaultProfile } from "./DafaultProfile";

const Profile = (): React.JSX.Element => {
  const navigate = useNavigate();
  const { name } = useParams();
  return (
    <div>
      <h1>Profile Page</h1>
      <button
        onClick={() => {
          navigate("/profile/mario");
        }}
      >
        ir a mario
      </button>
      <button
        onClick={() => {
          navigate("/profile/luigi");
        }}
      >
        ir a luigi
      </button>

      <br />

      
      {name === "mario" ? (
        <Mario />
      ) : name === "luigi" ? (
        <Luigi />
      ) : (
        <DafaultProfile />
      )}
      {/* <Outlet /> */}
    </div>
  );
};

export default Profile;
