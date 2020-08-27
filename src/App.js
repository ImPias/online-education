import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Courses from './Components/Content/Content';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Menu></Menu>
      <Courses></Courses>
    </div>
  );
}

export default App;
