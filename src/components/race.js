import React, { useState } from 'react';
import '../App.css';
import {generateAntWinLikelihoodCalculator, sortAnts} from '../utils/utils'

function Race(props) {
  const [racingAnts, setRacingAnts] = useState();
  const [loaded, setLoaded] = useState(false);
  const [updatedAnts, setUpdatedAnts] = useState();

  function updateAnt(ants, name, likelihood, status) {
    var updated = [...ants];
    var index = updated.findIndex(ant => ant.name === name);
    updated[index].status = status;
    updated[index].likelihood = likelihood;

    setUpdatedAnts(updated);
  };

  function initializeAnts(ants){
    for(let i = 0; i < ants.length; i++)
    {
      ants[i].status = "starting";
      ants[i].likelihood = undefined;
    }
    setRacingAnts(ants);
    setLoaded(true);
  }; 

  function startRace(ants){
    var temp = [...ants];
    for(let i = 0; i < temp.length; i++)
    {
      var likelihood = generateAntWinLikelihoodCalculator();
      temp[i].status = "running";
      var promise = new Promise(function(resolve){      
        likelihood(function(num){
            resolve(num)
          })
        })
        promise.then((response) => {
          updateAnt(racingAnts, ants[i].name, response, "complete");
        });
    }    
    setTimeout(() => {
      setUpdatedAnts(temp);
    }, 1000);
  }; 

  
  React.useEffect(() => {
    if(updatedAnts)
      {
        var sortedAnts = sortAnts(updatedAnts);
        setRacingAnts(sortedAnts);
      }
    else if(racingAnts && loaded)
      {
        startRace(racingAnts)
      }
    else
      {
        initializeAnts(props.ants);
      }
  }, [loaded, updatedAnts]);

  return (
    <header className={"App-header"}>
      <table className={"Race-table"}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Length</th>
            <th>Color</th>
            <th>Weight</th>
            <th>Status</th>
            <th>Likelihood</th>
          </tr>
        </thead>
        <tbody>
          {           
            racingAnts?.length > 0 && racingAnts.map((ant) => 
              <tr key={ant.name}>
                <td>{ant.name}</td>
                <td>{ant.length}</td>
                <td>{ant.color}</td>
                <td>{ant.weight}</td>
                <td>{ant.status}</td>
                <td className={"Fixed-Width"}>{ant.likelihood}</td>
              </tr>
            )
          }
        </tbody>
      </table>
      <button onClick={() => props.updateStatus("RESTART")}>Restart</button>
    </header>
  )
}

export default Race;