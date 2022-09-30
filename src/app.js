import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import bitcoin_logo from "./img/bitcoin_logo.png";
import { runSearch } from "./js/api.js";

console.log("app.js starts");

let logo = document.querySelector("#logo");

logo.insertAdjacentHTML(
  "afterbegin",
  `
    <img src=${bitcoin_logo} width="30" height="30" class="d-inline-block 
    align-text-top" style="cursor: pointer;">
  `
);

let searchButton = document.querySelector("#searchButton");

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  let userInput = document.querySelector("#userInput").value;
  runSearch(userInput);
});
