import "./style.css";
import viewHome from "./home";
import viewMenu from "./menu";
import viewContact from "./contact";

(function managePageNavigation() {
  const content = document.querySelector("#content");
  const header = document.createElement("div");
  header.setAttribute("id", "header");
  const page = document.createElement("div");
  page.setAttribute("id", "container");
  const swapView = (newView) => {
    while (page.firstChild) {
      page.removeChild(page.firstChild);
    }
    page.appendChild(newView);
  };

  const home = document.createElement("button");
  home.textContent = "HOME";
  home.addEventListener("click", () => swapView(viewHome()));

  const menu = document.createElement("button");
  menu.textContent = "MENU";
  menu.addEventListener("click", () => swapView(viewMenu()));

  const contact = document.createElement("button");
  contact.textContent = "CONTACT";
  contact.addEventListener("click", () => swapView(viewContact()));

  header.appendChild(home);
  header.appendChild(menu);
  header.appendChild(contact);

  content.appendChild(header);
  content.appendChild(page);

  swapView(viewHome());
})();
