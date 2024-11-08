const items = {
    Burgers: "lunch_dining",
    Pizzas: "local_pizza",
    Ramen: "ramen_dining",
    Cakes: "cake",
    Bakery: "bakery_dining",
    Cocktails: "local_bar",
    Soups: "soup_kitchen",
    Seafood: "phishing"
}


export function createMenu() {
    // Get the content container
    const content = document.querySelector("#content");

    // Create menu container
    const menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";

    // Create menu title
    const menuTitle = document.createElement("div");
    menuTitle.id = "menu-title"
    menuTitle.innerText = "Explore Our Categories";

    // Loop over defined items and create an item card for each one
    for (const [key, value] of Object.entries(items))
    {
        const itemCard = createItemCard(key, value);
        menuContainer.appendChild(itemCard);
    }

    // Append menu container to content container
    content.appendChild(menuTitle);
    content.appendChild(menuContainer);
}

function createItemCard(key, value)
{
    // Create item card
    const itemCard = document.createElement("div");
    itemCard.className = "item-card";

    // Create item name
    const itemName = document.createElement("div");
    itemName.className = "item-name";
    itemName.textContent = key;

    // Create item icon
    const itemIcon = document.createElement("i");
    itemIcon.className = "material-icons item-icon";
    itemIcon.textContent = value;

    // Append item name and icon to item card
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemIcon);

    return itemCard;
}