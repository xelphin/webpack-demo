// import IceCreamImage from '../images/holding_ice_cream.jpg';
import '../common.scss';
import './style.scss';
import {dom_createCard} from './card/card.js';
import cardsData from './allCards.json';


const dom_createCardsHolder = () => {

    let dom_cardsHolder = document.createElement('div');
    dom_cardsHolder.setAttribute('id', 'cards-holder');

    for (let i=0; i< cardsData.length; i++) {
        let dom_card = dom_createCard(cardsData[i]);
        dom_cardsHolder.appendChild(dom_card);
    }

    return dom_cardsHolder;
}

const dom_createTitle = () => {
    let dom_title = document.createElement('h2');
    dom_title.setAttribute('id', 'title');
    dom_title.textContent = "Menu"
    return dom_title;
}

const dom_menuPageCreate = () => {
    let dom_contentDiv = document.querySelector('div#content');
    
    let dom_cardsHolder = dom_createCardsHolder();
    let dom_title = dom_createTitle();
    
    dom_contentDiv.appendChild(dom_title);
    dom_contentDiv.appendChild(dom_cardsHolder);
}

export {
    dom_menuPageCreate
};


