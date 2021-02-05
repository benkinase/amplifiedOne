import React, { useContext } from "react";
//import { PetContext } from "../contexts/PetContext";

function Navbar() {
  //const { pets } = useContext(PetContext);
  return (
    <div className='navbar center'>
      <h1>This is AmplifiedOne</h1>
      <p>Current number of pets: {"pets.length"}</p>
    </div>
  );
}

export default Navbar;
