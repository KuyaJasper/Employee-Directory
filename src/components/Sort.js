import React from 'react';

function Sort (){
return(
    <div className="form-floating">
  <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <label for="floatingSelect">Sort Employee By:</label>
</div>
)
}

export default Sort