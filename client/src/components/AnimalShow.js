import React, { useState, useEffect } from "react";
import ErrorList from "./ErrorList.js";
import translateServerErrors from "../services/translateServerErrors";
import { Link, withRouter } from "react-router-dom";
import AnimalsList from "./AnimalsList.js";

const AnimalShow = (props) => {
  const [animal, setAnimal] = useState({
    name: "",
    description: "",
    skill: "",
    category: {},
    image: ""
  });
  const [errors, setErrors] = useState([]);
  const animalId = props.match.params.id;
  const user = props.user;

  const getAnimal = async () => {
    try {
      const response = await fetch(`/api/v1/animals/${animalId}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const body = await response.json();
      setAnimal(body.animal)
      console.log(body.animal);
    } catch (error) {
      console.error(`Error in fetch ${error.message}`);
    }
  };

  useEffect(() => {
    getAnimal();
  }, []);
// debugger
console.log(animal)
  return (
    <>
      <div className="animal-info">
        <h1 className="animal-tile"> {animal.name}</h1>

        <p className="animal-description"> {animal.description}</p>
          <p> <b>Special Ability:</b> {animal.skill} </p>
          <img src={animal.image} height="300" width="300" />
        <Link to={`/categories/${animal.category.id}`}>
          <h5 className="animal-category">Category: {animal.category.name}</h5>
        </Link>
      </div>
    </>
  );
};

export default withRouter(AnimalShow);
