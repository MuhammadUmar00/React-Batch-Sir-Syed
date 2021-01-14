import React, { useEffect, useState } from "react";
import Home from "../Home";
import Profile from "../Profile";

export default function App() {
  const [defaultgoTo, setDefaultGoTo] = useState("");
  useEffect(() => {
    console.log("USE EFFECT DID MOUNT TYPE");
    return () => {
      console.log("USE EFFECT WILL UNMOUNT TYPE");
    };
  }, [defaultgoTo]);
  return (
    <div>
      {defaultgoTo === "Home" && <Home />}
      {defaultgoTo === "Profile" && <Profile />}
      <button onClick={() => setDefaultGoTo("Home")}>Go to Home</button>
      <button onClick={() => setDefaultGoTo("Profile")}>Go to Profile</button>
    </div>
  );
}
