import IceCreamImage from '../images/holding_ice_cream.jpg';
import '../common.scss';
import './style.scss';

const dom_homePageCreate = () => {
    let dom_contentDiv = document.querySelector('div#content');

    // CREATE HOME
    
    let dom_textDiv = document.createElement('div');
    dom_textDiv.setAttribute('id', 'home-text-div');
    
    let dom_title = document.createElement('h1');
    dom_title.setAttribute('id', 'home-title');
    dom_title.textContent = "Alice's Matcha Bakery";
    
    let dom_sub_title = document.createElement('h3');
    dom_sub_title.setAttribute('id', 'home-sub-title');
    dom_sub_title.textContent  = "Tasty Treats! Made with love.";
    
    let dom_img = document.createElement('img');
    dom_img.setAttribute('id', 'home-img');
    dom_img.src = IceCreamImage;
    dom_img.setAttribute('alt', './cake with dried cranberries');
    dom_img.width = 800; 
    
    dom_textDiv.appendChild(dom_title);
    dom_textDiv.appendChild(dom_sub_title);
    
    // CONTENT APPEND
    
    dom_contentDiv.appendChild(dom_textDiv);
    dom_contentDiv.appendChild(dom_img);
}

export {
    dom_homePageCreate
};


