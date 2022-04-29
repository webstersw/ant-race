import React, { useState, useEffect } from 'react';
import '../App.css';

function Loaded(props) {
  return (
    <header className={"App-header"}>
      <table className={"Race-table"}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Length</th>
            <th>Color</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {
            props.ants.map((ant) => 
              <tr key={ant.name}>
                <td>{ant.name}</td>
                <td>{ant.length}</td>
                <td>{ant.color}</td>
                <td>{ant.weight}</td>
              </tr>
            )
          }
        </tbody>
      </table>
      <button onClick={() => props.updateStatus("RACE")}>Start The Race!</button>
    </header>
  )
}

export default Loaded;