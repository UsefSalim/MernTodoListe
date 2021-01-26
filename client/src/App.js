import React, { Component } from 'react'

import './App.css';
import AppNavbar from './components/AppNavbar';
// import Test from './components/Test';
import TodoListe from './components/TodoListe';


class App extends Component {

  render() {
    return (
      <div className="App" >
        <AppNavbar />
        <TodoListe></TodoListe>
        {/* <Test></Test> */}
      </div>
    );
  }
}

export default App;
