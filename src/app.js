import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const pronoun = ["The", "our", "your"];
const adj = ["beauty", "gorgeous", "brilliant", "fancy", "smart"];
const noun = ["city", "purse", "jacket", "cat", "elephant"];
const dom = [".com", ".es", ".uk", ".it"];

function getRandom(max) {
    return Math.floor(Math.random() * max);
}


function createDomain() {
    const domain = 
        pronoun[getRandom(pronoun.length)] +
        adj[getRandom(adj.length)] +
        noun[getRandom(noun.length)] +
        dom[getRandom(dom.length)];
    
  
    console.log("Dominio generado: " + domain);
    
  
    document.getElementById("domain").innerHTML = domain;
}

window.onload = function() {
    createDomain();
};