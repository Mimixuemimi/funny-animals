import React, { useState, useEffect } from "react";
import { withRouter, useParams } from "react-router-dom";
import ErrorList from "./ErrorList.js";
import translateServerErrors from "../services/translateServerErrors";
import CategoriesList from "./CategoriesList.js";
import  { Link } from 'react-router-dom'

const CategoryShow = (props) => {
  const [category, setCategory] = useState({
    name: "",
    animals: [],
  });
  const [errors, setErrors] = useState([]);
  const params = useParams();

  const categoryId = params.id;
  const user = props.user;

  let animalList = "";
  if (category.animals.length >= 1) {
    animalList = category.animals.map((animal) => {
      return <Link to={`/animals/${animal.id}`}> <p>{animal.name}</p> </Link>;
    });
  }

  const getCategory = async () => {
    try {
      const response = await fetch(`/api/v1/categories/${categoryId}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const body = await response.json();
      console.log("This is the body of the fetch request: ", body);
      setCategory(body.category);
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };
  useEffect(() => {
    getCategory();
  }, []);

  const postAnimal = async (newAnimalData) => {
    try {
      const response = await fetch(`api/v1/categories/${categoryId}/animals`, {
        method: "POST",
        headers: new Headers({
          "content-Type": "application/json",
        }),
        body: JSON.stringify(newAnimalData),
      });

      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json();
          const newErrors = translateServerErrors(body.errors);
          return setErrors(newErrors);
        } else {
          const errorMessage = `${response.status} (${response.statusText})`;
          const error = new Error(errorMessage);
          throw error;
        }
      } else {
        const body = await response.json();
        const updatedAnimals = category.animals.concat(body.animal);
        setErrors([]);
        setCategory({ ...category, animals: updatedAnimals });
        return true;
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  return (
    <>
      <div>
        <h1 className="category-tile">{category.name} Animals:</h1>
      </div>
      <div className="list-container">
        <div className="column-grid">
          <ul>{animalList}</ul>
        </div>
      </div>
    </>
  );
};

export default CategoryShow;
