import React from "react";
import "./Search.css";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import RecipeList from "../../components/RecipeList";

function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");
  const url = " http://localhost:3000/recipes?q=" + query;
  const { data, ispending, error } = useFetch(url);
  return (
    <div>
      <h2 className="page-title">Recipes Including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {ispending && <p className="ispending"> {ispending}</p>}
      {data && <RecipeList recipes={data}></RecipeList>}
    </div>
  );
}

export default Search;
