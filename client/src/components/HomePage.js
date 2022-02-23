import React from "react";
import CategoriesList from "./CategoriesList";

const HomePage = (props) => {
  return (
    <>
      <div className="homepage header">
        <h1> Let them put a smile on your face! </h1>
      </div>
      <div className="homepage tag-line">
        <h4> Welcome to review these amazing animals </h4>
      </div>
      <CategoriesList />
    </>
  );
};

export default HomePage;
