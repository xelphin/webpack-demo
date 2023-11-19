// import IceCreamImage from '../images/holding_ice_cream.jpg';
import '../../common.scss';
import './style.scss';

const dom_createImg = (cardData) => {
    let dom_img = document.createElement('img');
    dom_img.setAttribute('class', 'card-img');
    const pathToImage = "/dist/images/"+cardData.imageName;
    dom_img.src = pathToImage;
    dom_img.setAttribute('alt', cardData.title);
    return dom_img;
}

const dom_createTitle = (title) => {
    let dom_title = document.createElement('h3');
    dom_title.setAttribute('class', 'card-title');
    dom_title.textContent = title;
    return dom_title;
}

const dom_createDescription = (description) => {
    let dom_description = document.createElement('p');
    dom_description.setAttribute('class', 'card-description');
    dom_description.textContent = description;
    return dom_description;
}

const dom_createCard = (cardData) => {
    let dom_card = document.createElement('div');
    dom_card.setAttribute('class', 'card');
    dom_card.appendChild(dom_createImg(cardData));
    dom_card.appendChild(dom_createTitle(cardData.title));
    dom_card.appendChild(dom_createDescription(cardData.description));
    return dom_card;
}

export {
    dom_createCard
};


