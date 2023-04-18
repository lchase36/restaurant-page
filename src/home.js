const createHome = () => {
  const content = document.createElement("div");
  content.setAttribute("id", "home");
  const title = document.createElement("h1");
  title.textContent = "Pie in the Sky";

  content.appendChild(title);
  return content;
};

export default createHome;
