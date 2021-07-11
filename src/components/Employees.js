import React, { Component } from "react";
import API from "../utils/API";
import SearchBar from "./SearchBar";
import Sort from "./Sort";

class Employees extends Component {
  state = {
    search: "",
    results: [],
    sort: "",
    typedResults:[]
  };

  componentDidMount() {
    API.getRandomUser()
      .then((res) => {
        this.setState({ results: res.data.results, typedResults: res.data.results });
      })
      .catch((err) => console.log(err));
  }

  sortByFirstName = () => {
    var sortedFirstName = this.state.results.sort(function (a, b) {
      var nameA = a.name.first.toLowerCase();
      var nameB = b.name.first.toLowerCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    this.setState({ results: sortedFirstName });
  };

  sortByLastName = () => {
    var sortedLastName = this.state.results.sort(function (a, b) {
      var nameA = a.name.last.toLowerCase();
      var nameB = b.name.last.toLowerCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    this.setState({ results: sortedLastName });
  };

  sortByEmail = () => {
    var sortedEmail = this.state.results.sort(function (a, b) {
      var nameA = a.email.toLowerCase();
      var nameB = b.email.toLowerCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    this.setState({ results: sortedEmail });
  };

  typeName = (event) => {
    
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value.toLowerCase();

    this.setState({
      [name]: value,
      results: this.state.typedResults.filter(person => person.name.first.toLowerCase().includes(value)),
    });
 

  };


  render() {
    return (
      <div className="employees">
        <SearchBar search={this.state.search} typeName={this.typeName}/>
        <Sort
          sortByFirstName={this.sortByFirstName}
          sort={this.state.sort}
          sortByLastName={this.sortByLastName}
          sortByEmail={this.sortByEmail}
        />
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
            {this.state.results.map((person) => (
              <tr>
                <th scope="row">
                  <img src={person.picture.thumbnail}></img>
                </th>
                <td>{person.name.first}</td>
                <td>{person.name.last}</td>
                <td>{person.email}</td>
                <td>{person.cell}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Employees;
