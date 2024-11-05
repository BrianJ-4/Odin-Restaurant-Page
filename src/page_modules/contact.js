export function createContact() {
    // Get the content container
    const content = document.querySelector("#content");

    // Create icon element
    const iconElement = document.createElement("i");
    iconElement.className = "material-icons";
    iconElement.textContent = "call";

    content.appendChild(iconElement);
}