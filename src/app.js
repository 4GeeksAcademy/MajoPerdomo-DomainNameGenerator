import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const pronoun = ["The", "our", "your"];
const adj = ["beauty", "gorgeous", "brilliant", "fancy", "smart"];
const noun = ["city", "purse", "jacket", "cat", "elephant"];
const dom = [".com", ".es", ".uk", ".it"];

function generateDomains() {
  const domainList = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < dom.length; l++) {
          const domainName = `${pronoun[i]}${adj[j]}${noun[k]}${dom[l]}`;
          domainList.push(domainName);
         
        }
      }
    }
  }

  return domainList;
}

console.log("hola vale");

window.onload = function() {
  const domains = generateDomains();
};
