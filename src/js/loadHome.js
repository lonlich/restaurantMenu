import aqua from "../img/aqua_annoyed_400x400.jpg"; // Import the image to ensure it's included in the build

export const loadHome = () => {

    const main = document.getElementById("main");
    const test = 1;
    const img = document.createElement("img");
    img.src = aqua; // Ensure the path is correct relative to the output directory
    img.alt = "Restaurant Logo";
    main.appendChild(img);

    const h1 = document.createElement("h1");
    h1.textContent = "Welcome to Homepage! Woop Woop";
    main.appendChild(h1);

    const p = document.createElement("p");
    p.textContent = "Explore our delicious offerings and enjoy your meal!";
    main.appendChild(p);
}