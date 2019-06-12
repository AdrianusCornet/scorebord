import React from 'react';
import './App.css';
import Title from './componets/Title'
import Scoreboard from './componets/Scoreboard'

function App() {
  return (
    <div className="App">
      < Title content='Game' />
      <br/>
      <br/>
      < Scoreboard />
    </div>
  );
}

export default App;
