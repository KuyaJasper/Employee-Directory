import React from 'react';
import Employees from './components/Employees';
import "./styles/app.scss";


export default function App() {
  return (
    <div className="Container">
    <h1>Employee Directory</h1>
      <Employees/>
    </div>
  );
}

