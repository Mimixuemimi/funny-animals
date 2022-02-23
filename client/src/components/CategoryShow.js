import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import ErrorList from "./ErrorList.js";
import translateServerErrors from "../services/translateServerErrors";
import CategoriesList from "./CategoriesList.js";

const CategoryShow = (props) => {
  const [category, setCategory] = useState({
    name: "",
    animals: [],
  });
  const [errors, setErrors] = useState([]);

  const categoryId = props.match.params.id;
  const user = props.user;

  const getCategory = async () => {
    try {
      const response = await fetch(`/api/v1/categories/${categoryId}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const body = await response.json();
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
        <div className="column-grid"> {CategoriesList} </div>
      </div>
    </>
  );
};

export default CategoryShow;
