import createHomeDOM from "./script/home";
import createMenuDOM from "./script/menu";
import createAboutUsDOM from "./script/about-us";
import "../src/style/home.css";
import "../src/style/menu.css";
import "../src/style/about-us.css";

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutUsButton = document.getElementById("about-us");

createHomeDOM();

homeButton.addEventListener("click", createHomeDOM);
menuButton.addEventListener("click", createMenuDOM);
aboutUsButton.addEventListener("click", createAboutUsDOM);