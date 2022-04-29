import React from 'react';
import '../App.css';

function Welcome(props) {
  return (
    <header className={"App-header"}>
      <h1>Welcome!</h1>
      <h2>Ant Race By Steve Webster</h2>
      <button onClick={() => props.updateStatus("LOADED")}>Show Me The Ants</button>
    </header>
  )
}

export default Welcome;