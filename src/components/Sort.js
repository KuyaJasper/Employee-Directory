import React from 'react';

function Sort (){
return(
    <div className="form">
  <select className="form-select" >
    <option selected>Sort Employee By:</option>
    <option value="1">First Name</option>
    <option value="2">Last Name</option>
    <option value="3">E-Mail</option>
  </select>
</div>
)
}

export default Sort