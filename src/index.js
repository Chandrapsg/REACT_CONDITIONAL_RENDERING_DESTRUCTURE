
// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import animals, {useSound} from "./data.js";
import cars from "./practice.js";
console.log(animals)

//Destructuring Array
const [cat, dog] = animals;
console.log(cat)

//Destructuring Object
// giving alternate name for cat nae
const {name : catname, sound: catsound, foodRequirement:  {food, water} } = cat;

console.log(food)
// Give default value  for name
// const{name = "chandra", sound = "rrrrrr"} =cat;
console.log(catname);


//console.log(useSound(cat));
// const [animalName, makeSound ] = useSound(cat);
// console.log(animalName);
// makeSound();

const [honda, tesla] = cars;

const {model: hondamodel, coloursByPopularity: [ , hondaTopColour], speedStats:{topSpeed :hondaTopSpeed, zeroToSixty}} = honda;
const {model: teslamodel, coloursByPopularity: [ , teslaTopColour], speedStats:{topSpeed: teslaTopSpeed, zeroToSixty2}} = tesla;


ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td> 
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);

