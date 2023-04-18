const createMenu = () => {
  const content = document.createElement("div");
  content.setAttribute("id", "menu");

  const menuHead = document.createElement("div");
  menuHead.setAttribute("id", "menu-head");
  const title = document.createElement("h1");
  title.textContent = "Menu";
  const subtitle = document.createElement("p");
  subtitle.textContent =
    "All produce and meats sourced through partnership with our local farming community.";
  menuHead.appendChild(title);
  menuHead.appendChild(subtitle);

  const createPlate = (name, desc, numPrice) => {
    const item = document.createElement("div");
    item.classList.add("menu-item");
    const itemTitle = document.createElement("h2");
    itemTitle.textContent = name;

    const itemDesc = document.createElement("span");
    itemDesc.textContent = desc;

    const itemPrice = document.createElement("span");
    const price = Math.round(numPrice * 100) / 100;
    const lgPrice = Math.round((numPrice + 8) * 100) / 100;
    itemPrice.textContent = `$${price} | $${lgPrice}`;

    item.appendChild(itemTitle);
    item.appendChild(itemDesc);
    item.appendChild(itemPrice);
    return item;
  };

  content.appendChild(menuHead);
  content.appendChild(
    createPlate(
      "Margherita",
      "Our homemade crust baked with layers of extra virgin olive oil, fresh mozzarella, sliced tomatoes and basil.",
      12.99
    )
  );
  content.appendChild(
    createPlate(
      "Pepperoni",
      "Layers of delcious spicy pepperoni with a sprinkle of parmesan over our signature crust and fresh mozzarella.",
      13.99
    )
  );
  content.appendChild(
    createPlate(
      "Combination",
      "A gourmet mix of italian sausage, pepperoni, onions, black olives, green peppers, and fresh mozzarella.",
      15.99
    )
  );
  content.appendChild(
    createPlate(
      "Hawaiian",
      "For those that want to ruin a perfectly good pepperoni pizza by adding pineapple.",
      57.99
    )
  );
  return content;
};

export default createMenu;
