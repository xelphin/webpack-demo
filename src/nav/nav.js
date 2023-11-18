import '../common.scss';
import './style.scss';

let dom_body = document.querySelector('body');

const dom_createNavLinkAndAppend = (dom_nav, switchPage, title) => {
    let dom_link = document.createElement('h4');
    dom_link.textContent = title;
    dom_link.setAttribute('data-title', title);
    dom_link.addEventListener("click", (event) => switchPage(event.target.getAttribute('data-title')) );
    dom_nav.appendChild(dom_link);
}

const dom_navCreate = (switchPage) => {
    
    // CREATE NAV
    
    let dom_navDiv = document.createElement('div');
    dom_navDiv.setAttribute('id', 'nav-div');

    // CREATE LINKS

    dom_createNavLinkAndAppend(dom_navDiv, switchPage, "Home");
    dom_createNavLinkAndAppend(dom_navDiv, switchPage, "Menu");
    
    // CONTENT APPEND
    
    dom_body.insertBefore(dom_navDiv, dom_body.firstChild);
}

export {
    dom_navCreate
};


