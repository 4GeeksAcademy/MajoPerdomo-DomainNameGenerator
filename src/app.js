/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const name = ["caracas", "edimburgh", "Madrid"];
  const domain = [".com", ".uk", ".es"];

  name.forEach(el => {
    domain.forEach(el2 => {
      console.log(el + el2);
    });
  });
};
