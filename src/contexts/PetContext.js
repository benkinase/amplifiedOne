import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const PetContext = createContext();

const PetContextProvider = (props) => {
  //initialise state for local storage
  const initState = JSON.parse(localStorage.getItem("pets")) || [];
  const [pets, setPets] = useState(initState);

  //edit
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("pets", JSON.stringify(pets));
  }, [pets]);

  const addPet = (name, age, date) => {
    setPets([...pets, { id: uuidv4(), name, age, date }]);
  };

  const deletePet = (id) => {
    setPets(pets.filter((pet) => pet.id !== id));
  };

  const clearList = () => {
    setPets([]);
  };

  //to update
  const findItem = (id) => {
    const item = pets.find((pet) => pet.id === id);
    setEditItem(item);
  };

  const editPet = (name, age, date, id) => {
    const newPet = pets.map((pet) =>
      pet.id === id ? { name, age, date, id } : pet
    );
    setPets(newPet);
    setEditItem(null);
  };

  return (
    <PetContext.Provider
      value={{
        pets,
        addPet,
        deletePet,
        clearList,
        findItem,
        editPet,
        editItem,
      }}
    >
      {props.children}
    </PetContext.Provider>
  );
};

const PetConsumer = PetContext.Consumer;

export { PetContextProvider, PetConsumer, PetContext };
