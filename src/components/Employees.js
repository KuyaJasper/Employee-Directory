import React, {Component} from 'react'
import API from '../utils/API';

function Employees(){
return (
    <div>
<table className="table">
  <thead>
    <tr>
        {/* use the Thumbnail result from Picture array */}
      <th scope="col">Thumbnail</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">E-Mail</th>
      <th scope="col">Cell Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>
)
}

export default Employees;