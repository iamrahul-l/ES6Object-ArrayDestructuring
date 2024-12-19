// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";


const [Honda ,Tesla] = cars;

const {speedStats:{topSpeed:hondaTopSpeed, zeroToSixty:z26h}}=Honda;
const {speedStats:{topSpeed:teslaTopSpeed, zeroToSixty:z26t}}=Tesla;

const {coloursByPopularity:[,,hondaTopColour]}=Honda
const {coloursByPopularity:[,,teslaTopColour]}=Tesla


ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Zero to 60(Sec)</th>
      <th>Top Coluor</th>
    </tr>
    <tr>
      <td>{Tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{z26t}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{Honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{z26h}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);


