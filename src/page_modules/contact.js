export function createContact() {
    // Get the content container
    const content = document.querySelector("#content");

    // Create contact container
    const contactContainer = document.createElement("div");
    contactContainer.id = "contact-container";
    
    // Create contact text
    const contactText = document.createElement("div");
    contactText.id = "contact-text";
    contactText.innerText = "123-456-7890"

    // Create icon element
    const iconElement = document.createElement("i");
    iconElement.className = "material-icons";
    iconElement.id = "contact-icon";
    iconElement.textContent = "call";

    contactContainer.appendChild(iconElement);
    contactContainer.appendChild(contactText);

    content.appendChild(contactContainer);
}