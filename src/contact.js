const createContact = () => {
  const content = document.createElement("div");
  content.setAttribute("id", "contact");
  const title = document.createElement("h1");
  title.textContent = "Contact Us";

  const info = document.createElement("div");
  info.setAttribute("id", "info");

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Feel free to reach out to us if you have any questions or requests! You are always welcome to come talk to us in person as well at Pie in the Sky. Where the pie will send you flying!";
  const phone = document.createElement("span");
  phone.textContent = "Phone: (902)867-5309";

  const email = document.createElement("span");
  email.textContent = "Email: bigpiesrus@skypie.com";

  const location = document.createElement("address");
  const visit = document.createTextNode("Visit us at:");
  const street = document.createTextNode("12345 Pepperoni Way");
  const city = document.createTextNode("Pizzatopia, California 98765");
  const country = document.createTextNode("USA");
  location.appendChild(visit);
  location.appendChild(document.createElement("br"));
  location.appendChild(street);
  location.appendChild(document.createElement("br"));
  location.appendChild(city);
  location.appendChild(document.createElement("br"));
  location.appendChild(country);

  info.appendChild(paragraph);
  info.appendChild(phone);
  info.appendChild(email);
  info.appendChild(location);

  content.appendChild(title);
  content.appendChild(info);
  return content;
};

export default createContact;
