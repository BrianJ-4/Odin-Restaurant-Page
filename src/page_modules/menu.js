export function createMenu() {
    // Get the content container
    const content = document.querySelector("#content");

    // Create icon element
    const iconElement = document.createElement("i");
    iconElement.className = "material-icons";
    iconElement.textContent = "lunch_dining";

    content.appendChild(iconElement);
}