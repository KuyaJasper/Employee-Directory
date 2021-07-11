import React from "react";

function SearchBar(props) {
  return (
    <div className="form-floating" id="searchBar">
      <input
        onChange={props.typeName}
        type="text"
        className="form-control"
      />
      <label for="searchBar">Enter Employee Name</label>
    </div>
  );
}

export default SearchBar;
