import { createHome } from "./page_modules/home.js";
import { createMenu } from "./page_modules/menu.js";
import { createContact } from "./page_modules/contact.js";
import "./temp.css";

createHome();

const functions = {
    home: createHome,
    menu: createMenu,
    contact: createContact
};

const content = document.querySelector("#content");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        handleButton(button.id);
    });
  });

function handleButton(id) {
    content.innerHTML = "";
    functions[id]();
}