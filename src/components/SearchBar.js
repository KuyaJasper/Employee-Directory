import React from "react";

function SearchBar(props) {
  return (
    <div className="form-floating">
      <input
        onChange={props.typeName}
        type="text"
        className="form-control"
        id="searchBar"
      />
      <label for="searchBar">Enter Employee Name</label>
    </div>
  );
}

export default SearchBar;
