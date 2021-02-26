/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pinta = ["\u2666", "\u2665", "\u2660", "\u2663"];
let numeros = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

window.onload = function() {
  //write your code here
  let picture = pinta[Math.floor(Math.random() * pinta.length)];
  let number = numeros[Math.floor(Math.random() * numeros.length)];
  document.querySelector("#numeros").innerHTML = number;
  document.querySelector("#arribas").innerHTML = picture;
  document.querySelector("#abajos").innerHTML = picture;
  if (picture == "\u2666" || picture == "\u2665")
    document.body.style.color = "red";
};
