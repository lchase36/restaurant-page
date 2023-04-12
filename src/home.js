const createHome = () => {
  const home = document.createElement("div");
  const title = document.createElement("h1");
  title.textContent = "Pie in the Sky";

  home.appendChild(title);
  return home;
};

export default createHome;
