import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={
    init=""
  }

  render() {
    return (
      <div className="App">
        <input className="tx" type="text"/>
        <input className="btn"
          type = "button" 
          value = "SUBMIT IT FAM" 
          onClick = "()"
          />
      </div>
    );
  }
}

export default App;
