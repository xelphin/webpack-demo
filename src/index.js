import './common.scss';
import {dom_navCreate} from './nav/nav.js';
import {dom_homePageCreate} from './home/home.js';
import {dom_menuPageCreate} from './menu/menu.js';
let dom_content = document.querySelector('#content');

const changeContentStyle = (title) => {
    let dom_contentDiv = document.querySelector('div#content');
    dom_contentDiv.setAttribute('class', "content-"+title.toLowerCase());
}

const createPage = (title) => {
    switch (title) {
        case "Home":
            dom_homePageCreate();
            break;
        case "Menu":
            dom_menuPageCreate();
            break;
        default:
            console.log("Page doesn't exist...");
    }
}

const switchPage = (pageTitle) => {
    console.log("Switching to: "+pageTitle);
    dom_content.textContent = "";
    createPage(pageTitle);
    changeContentStyle(pageTitle);
}

const init = () => {
    console.log("Hello Alice's Matcha Bakery!");
    // Create Nav
    dom_navCreate(switchPage);
    // Create Home Page (initially on Home)
    switchPage("Home"); 
}

// ----- INIT -----

init();