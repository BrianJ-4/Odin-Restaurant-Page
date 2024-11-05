export function createHome() {
    // Get the content container
    const content = document.querySelector("#content");

    // Create home container
    const homeContainer = document.createElement("div");
    homeContainer.id = "home-container";

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
    iconElement.id = "logo"
    iconElement.textContent = "restaurant";

    // Append icon to image container
    imageContainer.appendChild(iconElement);

    // Append containers to home container
    homeContainer.appendChild(textContainer);
    homeContainer.appendChild(imageContainer);

    // Append home container to content container
    content.appendChild(homeContainer);
}