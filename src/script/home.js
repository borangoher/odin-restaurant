const createHomeDOM= () => {
    const linkElement = document.getElementsByTagName("link")[0];
    let mainElement = document.getElementById("main");

    linkElement.setAttribute("href", "../src/style/home.css");

    mainElement.replaceWith(mainElement.cloneNode(false));
    mainElement = document.getElementById("main");
    mainElement.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus excepturi ratione incidunt repellendus aperiam nam eos, cumque quia quis suscipit temporibus laborum, vitae totam optio assumenda! Non debitis sequi nesciunt?";
}

export default createHomeDOM;