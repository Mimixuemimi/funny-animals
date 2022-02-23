import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AnimalsList = (props) => {
  const [animals, setAnimals] = useState([]);
  const getAnimals = async () => {
    try {
      const response = await fetch(`/api/v1/animals`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const body = await response.json();
      setAnimals(body.animals);
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };
  useEffect(() => {
    getAnimals();
  }, []);

  const animalListItems = animals.map((animal) => {
    return (
      <div className="animal-tile" key={animal.id}>
        <Link t0={`/animals/${animal.id}`}>{animal.name}</Link>
      </div>
    );
  });

  return (
    <>
      <div className="call-to-action">
        <h2> Click to see more info! from AnimalList.js </h2>
      </div>
      <div className="list-container">
        <div className="colum-grid"> {animalListItems} </div>
      </div>
    </>
  );
};

export default AnimalsList;
