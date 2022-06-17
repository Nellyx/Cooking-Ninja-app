import React from "react";
import "./Recipe.css";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useTheme } from "../../hooks/useTheme";

function Recipe() {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { data: recipes, error, ispending } = useFetch(url);
  const { mode } = useTheme();

  return (
    <div className={`recipe ${mode}`}>
      {ispending && <p>Loading Loading Loading</p>}
      {error && <p>{error}</p>}

      {recipes && (
        <>
          <h2>{recipes.title}</h2>
          <p>Takes {recipes.cookingTime} to cook..</p>

          <ul>
            {recipes.ingredients.map(ingredient => (
              <li key="ingredient">{ingredient}</li>
            ))}
          </ul>
          <p className="method">{recipes.method}</p>
        </>
      )}
    </div>
  );
}

export default Recipe;
