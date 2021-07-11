import React from 'react';

function Sort (props){
return(
    <div className="sortButtons">
      <h2>Sort Employee By:</h2>
  <button onClick={props.sortByFirstName} className="btn btn-dark"> First Name</button>
  <button onClick={props.sortByLastName} className="btn btn-secondary"> Last Name</button>
</div>

)
}

export default Sort
