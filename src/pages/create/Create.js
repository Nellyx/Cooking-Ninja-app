import React, { useState, useRef, useEffect } from "react";
import "./Create.css";

import "./Create.css";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

function Create() {
  const [title, settitle] = useState("");
  const [method, setmethod] = useState("");
  const [cookingTime, setcookingTime] = useState("");
  const [newIngredient, setnewIngredient] = useState("");
  const [ingredients, setingredients] = useState([]);
  const ingredientInput = useRef(null);

  const navigate = useNavigate();

  const { postData, data, error } = useFetch(
    "http://localhost:3000/recipes",
    "POST"
  );

  const handleSubmit = e => {
    e.preventDefault();

    postData({
      title,
      ingredients,
      method,
      cookingTime: cookingTime + "minutes"
    });
  };

  const handleAdd = e => {
    e.preventDefault();

    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setingredients(previngredients => [...previngredients, ing]);
    }

    setnewIngredient("");
    ingredientInput.current.focus();
    console.log(ingredients);
  };

  // to navigate to the home route after submission

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data]);

  const { mode } = useTheme();

  return (
    <div className="create">
      <h2 className="page-title" className={`change ${mode}`}>
        Add a New Recipe
      </h2>
      {/* Recipe Title */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          <span className={`change ${mode}`}>Recipe Title:</span>
          <input
            type="text"
            onChange={e => {
              settitle(e.target.value);
            }}
            value={title}
            required
          />
        </label>

        {/* ingredients go here */}

        <label htmlFor="ingredients">
          <span className={`change ${mode}`}>Recipe Ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={e => {
                setnewIngredient(e.target.value);
              }}
              value={newIngredient}
            />
            <button onClick={handleAdd}>Add</button>
          </div>
        </label>
        <p className={`current-ingredients  ${mode}`}>
          Current Ingredients:
          {ingredients.map(ingredient => (
            <em key={ingredient}> {ingredient}</em>
          ))}
        </p>

        <label>
          <span className={`change ${mode}`}>Recipe Method:</span>
          <textarea
            onChange={e => {
              setmethod(e.target.value);
            }}
            value={method}
            required
          ></textarea>
        </label>

        <label htmlFor="">
          <span className={`change ${mode}`}>Cooking Time (Minutes):</span>

          <input
            type="number"
            onChange={e => {
              setcookingTime(e.target.value);
            }}
            value={cookingTime}
            required
          />
        </label>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}

export default Create;
