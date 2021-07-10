import React from 'react'

function SearchBar() {
    return (
<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Search</label>
  </div>
    )

}

export default SearchBar;