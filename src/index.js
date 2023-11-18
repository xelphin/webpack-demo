console.log("Hello Alice's Matcha Bakery!");

import './common.scss';

import {dom_navCreate} from './nav/nav.js';
import {dom_homePageCreate} from './home/home.js';


const switchPage = (event) => {
    console.log("Switching to: "+event);
}

// Create Nav
dom_navCreate(switchPage);



// Create Pages
dom_homePageCreate();