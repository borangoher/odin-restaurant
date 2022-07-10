const createAboutUsDOM = () => {
    const linkElement = document.getElementsByTagName("link")[0];
    let mainElement = document.getElementById("main");

    linkElement.setAttribute("href", "../src/style/about-us.css");

    mainElement.replaceWith(mainElement.cloneNode(false));
    mainElement = document.getElementById("main");

    let paraIntro = document.createElement("p");
    let introText = document.createTextNode("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel fugit fuga dolores voluptatibus optio molestiae earum sit, nihil nostrum quisquam accusamus deserunt error et, perferendis, suscipit odit quidem labore dicta.")
    paraIntro.appendChild(introText);
    paraIntro.setAttribute("id", "intro-text");

    let paraLoc = document.createElement("p");
    let locText1 = document.createTextNode("James Ave. James st. No: James")
    let brElement = document.createElement("br");
    let locText2 = document.createTextNode("Between James Bakery and James Statue");
    paraLoc.appendChild(locText1);
    paraLoc.appendChild(brElement);
    paraLoc.appendChild(locText2);
    paraLoc.setAttribute("id", "location");

    let paraContact = document.createElement("p");
    let contactText1 = document.createTextNode("james@james.com");
    brElement = document.createElement("br");
    let contactText2 = document.createTextNode("+1 111 111 11 11");
    paraContact.appendChild(contactText1);
    paraContact.appendChild(brElement);
    paraContact.appendChild(contactText2);
    paraContact.setAttribute("id", "contact");
    
    mainElement.appendChild(paraIntro);
    mainElement.appendChild(paraLoc);
    mainElement.appendChild(paraContact);
}

export default createAboutUsDOM;