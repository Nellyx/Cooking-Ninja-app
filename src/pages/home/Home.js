import React, { useState } from "react";
// import hooks
import useFetch from "../../hooks/useFetch";

// import styles
import "./Home.css";

// import components
import RecipeList from "../../components/RecipeList";

function Home() {
  const [url, seturl] = useState("http://localhost:3000/recipes");
  const { data, ispending, error } = useFetch(url);

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {ispending && <p className="Loading">Loading</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}

export default Home;
