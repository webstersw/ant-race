import React, { useState } from 'react';
import './App.css';
import Loaded from './components/loaded';
import Race from './components/race';
import Welcome from './components/welcome';
import {AntData} from './constants/data';

function App() {
  const [status, setStatus] = useState("WELCOME");
  const [antData] = useState(AntData);

  function setStatusState(status) {
    setStatus(status);
  }

  const renderActiveStatus = () => {
    switch(status) { 
      case "WELCOME":
      case "RESTART": 
        return(<Welcome updateStatus={setStatusState} />);
        break;
      case "LOADED":  
        return(<Loaded ants={antData.ants} updateStatus={setStatusState} />);
        break;  
      case "RACE":
        return(<Race ants={antData.ants} updateStatus={setStatusState} />);
        break; 
      default: 
        return(<h1>Error: invalid status: {status}</h1>);
    }
  }

  return (
    <div className={"App"}>
      { renderActiveStatus() }
    </div>
  );
}

export default App;
