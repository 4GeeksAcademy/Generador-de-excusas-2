import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
let excusaHTML = document.getElementById("excuse");
let paletaColorHTML = document.getElementById("paletaColor");


function numeroArrayAleatorio(myArray) {
  let numero = Math.floor(Math.random() * myArray.length)
  return numero;
}

function crearExcusa(array1, array2, array3, array4) {
  let excusa = `${array1[numeroArrayAleatorio(array1)]} ${array2[numeroArrayAleatorio(array2)]} ${array3[numeroArrayAleatorio(array3)]} ${array4[numeroArrayAleatorio(array4)]}`
  return excusaHTML.innerHTML = excusa;
}

function selectorColorRandom(){
  let numeroRandom= Math.floor(Math.random()*4);

  switch(numeroRandom){
    case 1:
    paletaColorHTML.style.backgroundColor="red"; paletaColorHTML.style.color="yellow";
    break;
    case 2:
    paletaColorHTML.style.backgroundColor="green";  paletaColorHTML.style.color="blue";
    break;
    case 3:
    paletaColorHTML.style.backgroundColor="grey";  paletaColorHTML.style.color="azure";
    break;
  }
}

window.onload = function () {
  //write your code here
  crearExcusa(who, action, what, when)
};
btn.onclick = function(){
  crearExcusa(who, action, what, when)

  selectorColorRandom()
};
