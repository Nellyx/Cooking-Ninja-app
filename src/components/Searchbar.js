import React, { useState } from "react";
import "./Searchbar.css";
import { useNavigate } from "react-router";

function Searchbar() {
  const [terms, setterms] = useState("");

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/search/?q=${terms}`);
  };

  return (
    <div className="searhbar">
      <form onSubmit={handleSubmit}>
        <div className="form">
          <button className="btn">Search</button>
          <input
            type="text"
            onChange={e => {
              setterms(e.target.value);
            }}
            value={terms}
            required
            id="search"
          />
        </div>
      </form>
    </div>
  );
}

export default Searchbar;
