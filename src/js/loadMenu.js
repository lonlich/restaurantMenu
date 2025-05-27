export const loadMenu = () => {

const main = document.getElementById("main");
    
    const h1 = document.createElement("h1");
    h1.textContent = "Welcome to the Menu!";
    main.appendChild(h1);

    const p = document.createElement("p");
    p.textContent = "Menu items will be displayed here soon.";
    main.appendChild(p);
}