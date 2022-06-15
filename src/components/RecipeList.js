// style
import "./RecipeList.css";
import React from "react";
import { Link } from "react-router-dom";

function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return <div className="error">There was no recipe to show</div>;
  }

  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div key={recipe.id} className="card">
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div className="method">{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipe/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
