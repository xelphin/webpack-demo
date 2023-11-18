import IceCreamImage from '../images/holding_ice_cream.jpg';
import '../common.scss';
import './style.scss';

const dom_createTextAndAppendToDiv = (dom_textDiv) => {
    let dom_title = document.createElement('h1');
    dom_title.setAttribute('id', 'home-title');
    dom_title.textContent = "Alice's Matcha Bakery";
    
    let dom_sub_title = document.createElement('h3');
    dom_sub_title.setAttribute('id', 'home-sub-title');
    dom_sub_title.textContent  = "Tasty Treats! Made with love.";

    dom_textDiv.appendChild(dom_title);
    dom_textDiv.appendChild(dom_sub_title);
}

const dom_createTextDiv = () => {
    let dom_textDiv = document.createElement('div');
    dom_textDiv.setAttribute('id', 'home-text-div');
    dom_createTextAndAppendToDiv(dom_textDiv);
    return dom_textDiv;
}

const dom_createImg = () => {
    let dom_img = document.createElement('img');
    dom_img.setAttribute('id', 'home-img');
    dom_img.src = IceCreamImage;
    dom_img.setAttribute('alt', './cake with dried cranberries');
    dom_img.width = 800; 
    return dom_img;
}

const dom_homePageCreate = () => {
    let dom_contentDiv = document.querySelector('div#content');
    
    let dom_textDiv = dom_createTextDiv();
    let dom_img = dom_createImg();
    
    dom_contentDiv.appendChild(dom_textDiv);
    dom_contentDiv.appendChild(dom_img);
}

export {
    dom_homePageCreate
};


