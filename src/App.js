import React from 'react';
import SearchBar from './components/SearchBar';
import Employees from './components/Employees';
import Sort from './components/Sort';


export default function App() {
  return (
    <div className="App">
      <SearchBar/>
      <Sort/>
      <Employees/>
    </div>
  );
}

