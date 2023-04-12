import "./style.css";
import homePage from "./home";

(function managePageNavigation() {
  const content = document.querySelector("#content");

  const header = document.createElement("div");
  header.setAttribute("id", "header");

  const home = document.createElement("button");
  home.textContent = "HOME";
  home.addEventListener("click", () => content.appendChild(homePage()));
  const menu = document.createElement("button");
  menu.textContent = "MENU";
  const contact = document.createElement("button");
  contact.textContent = "CONTACT";

  header.appendChild(home);
  header.appendChild(menu);
  header.appendChild(contact);

  content.appendChild(header);
})();
