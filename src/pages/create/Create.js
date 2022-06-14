import React, { useState } from "react";
import "./Create.css";

import "./Create.css";

function Create() {
  const [title, settitle] = useState("");
  const [method, setmethod] = useState("");
  const [cookingTime, setcookingTime] = useState("");
  const [newIngredient, setnewIngredient] = useState("");
  const [ingredients, setingredients] = useState([]);

  const handlesubmit = e => {
    e.preventDefault();
    console.log(title, method, cookingTime);
  };

  const handleAdd = e => {
    e.preventDefault();
    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setingredients(previngredients => [...previngredients, ing]);
    }

    setnewIngredient("");
    
  };

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      {/* Recipe Title */}
      <form onSubmit={handlesubmit}>
        <label htmlFor="">
          <span>Recipe Title:</span>
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

        <label htmlFor="Ingredients">
          <span>Recipe Ingredients:</span>
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

        <label>
          <span>Recipe Method:</span>
          <textarea
            onChange={e => {
              setmethod(e.target.value);
            }}
            value={method}
            required
          ></textarea>
        </label>

        <label htmlFor="">
          <span>Cooking Time (Minutes):</span>

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
