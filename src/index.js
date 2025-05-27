// import sunflower from "./sunflower.jpg";

// const image = document.createElement("img");
// image.src = sunflower;

// document.body.appendChild(image);

// import "./greeting.js";

import "./style.css";

import { loadHome } from "./js/loadHome.js";
import { loadMenu } from "./js/loadMenu.js";
import {
  isTabletL,
  isTabletP,
  isPhoneL,
  isPhoneP,
  log,
  warn,
  table,
  pluralize,
  logArrayInline,
  logArrayColumn,
  logArrayList,
  logArrayTable,
  checkKeysMatch,
  //formatPrice,
  measure,
} from "./js/utils.js";

loadHome();

const main = document.getElementById("main");

document.getElementById("home").addEventListener("click", () => {
  main.innerHTML = ""; // Clear the main content
  log("Home button clicked");
  loadHome(); // Load the home content
});

document.getElementById("menu").addEventListener("click", () => {
  main.innerHTML = ""; // Clear the main content
  log("Menu button clicked");
  loadMenu(); // Load the menu content
});

