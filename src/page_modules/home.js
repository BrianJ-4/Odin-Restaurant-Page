export function createHome() {
    // Get the content container
    const content = document.querySelector("#content");

    // Create text container
    const textContainer = document.createElement("div");
    textContainer.id = "text-container";

    // Create name div
    const nameDiv = document.createElement("div");
    nameDiv.id = "name";
    nameDiv.innerHTML = "The Everything <br> Place";

    // Create description div
    const descriptionDiv = document.createElement("div");
    descriptionDiv.id = "description";
    descriptionDiv.textContent = "Yes we really have everything";

    // Append name and description to text container
    textContainer.appendChild(nameDiv);
    textContainer.appendChild(descriptionDiv);

    // Create image container
    const imageContainer = document.createElement("div");
    imageContainer.id = "image-container";

    // Create icon element
    const iconElement = document.createElement("i");
    iconElement.className = "material-icons";
    iconElement.textContent = "restaurant";

    // Append icon to image container
    imageContainer.appendChild(iconElement);

    // Append containers to content container
    content.appendChild(textContainer);
    content.appendChild(imageContainer);
}