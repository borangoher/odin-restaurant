const createMenuDOM = () => {
    const linkElement = document.getElementsByTagName("link")[0];
    let mainElement = document.getElementById("main");

    linkElement.setAttribute("href", "../src/style/menu.css");

    mainElement.replaceWith(mainElement.cloneNode(false));
    mainElement = document.getElementById("main");

    const p1 = createDishPara("Dish 1", "Ingredient 1, 2, 3", "50");
    const p2 = createDishPara("Dish 2", "Ingredient 4, 5, 6", "45");
    const p3 = createDishPara("Dish 3", "Ingredient 7, 8, 9", "60");
    const p4 = createDishPara("Dish 4", "Ingredient 10, 11, 12", "30");

    mainElement.appendChild(p1);
    mainElement.appendChild(p2);
    mainElement.appendChild(p3);
    mainElement.appendChild(p4);
}

function createDishPara (str1, str2, str3) {
    let pElement = document.createElement("p");
    let pText = document.createTextNode(str1);
    let brElement = document.createElement("br"); 
    pElement.appendChild(pText);
    pElement.appendChild(brElement);
    pText = document.createTextNode(str2);
    pElement.appendChild(pText);
    brElement = document.createElement("br");
    pElement.appendChild(brElement);
    pText = document.createTextNode(str3);
    pElement.appendChild(pText);
    brElement = document.createElement("br");
    pElement.appendChild(brElement);

    return pElement;
}

export default createMenuDOM;