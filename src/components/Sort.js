import React from 'react';

function Sort (props){
return(
    <div>
  <button onClick={props.sortByFirstName}> First Name</button>
  <button onClick={props.sortByLastName}> Last Name</button>
</div>

)
}

export default Sort
