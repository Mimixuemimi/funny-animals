import React from "react";
import { Link } from "react-router-dom";

const AnimalTile = (animal) => {
  return (
    <div className="animal-tile">
      <Link to={`/animals/${animal.id}`}>{animal.name}</Link>
    </div>
  );
};

export default AnimalTile;
