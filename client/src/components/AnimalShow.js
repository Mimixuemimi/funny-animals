import React, { useState, useEffect } from "react";
import ErrorList from "./ErrorList.js";
import translateServerErrors from "../services/translateServerErrors";
import { Link, withRouter } from "react-router-dom";

const AnimalShow = (props) => {
  const [animal, setAnimal] = useState({
    name: "",
    description: "",
    skill: "",
    category: {},
  });
  const [errors, setErrors] = useState([]);
  const animalId = props.match.params.id;
  const user = props.user;

  const getAnimal = async () => {
    try {
      const response = await fetch(`/api/v1/animals${animalId}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const body = await response.json();
      setAnimal(body.animal);
    } catch (error) {
      console.error(`Error in fetch ${error.message}`);
    }
  };

  useEffect(() => {
    getAnimal();
  }, []);

  return (
    <>
      <div className="animal-info">
        <h1 className="animal-tile"> {animal.name}</h1>

        <p className="animal-description"> {animal.description}</p>
        <Link to={`/categories/${animal.category.id}`}>
          <p className="animal-category">Categories: {animal.category.name}</p>
        </Link>
      </div>
    </>
  );
};

export default withRouter(AnimalShow);
