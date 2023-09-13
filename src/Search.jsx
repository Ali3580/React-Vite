import React, { useState } from "react";
import { useGlobalContext } from "./context";

const Search = () => {
  const { query, searchPost } = useGlobalContext();
  const [searchInput, setSearchInput] = useState(query);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchPost(searchInput);
  };

  return (
    <>
      <h1>OUR SERVICES</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="search here"
            value={searchInput}
            onChange={handleInputChange}
          />
        <button type="submit">Search</button>
        </div>

      </form>
    </>
  );
};

export default Search;
