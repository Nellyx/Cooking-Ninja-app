import React from "react";
import { useParams, Route } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./Recipe.css"

import "./Recipe.css";

function Recipe() {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { data: recipe, ispending, error } = useFetch(url);

return (
    <div className="recipe">
      {ispending && <p>Loading....</p>}
      {error && <p>{error}</p>}

      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook..</p>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  );
}

export default Recipe;
