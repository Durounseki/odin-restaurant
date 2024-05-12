import './style.css';
import Logo from './images/logo2.jpeg';

const tabNames = ["Home", "Menu", "About Us", "Contact Us"]

function docHeader() {
    
    const headerElement = document.createElement('header');

    const logoContainer = document.createElement('div');
    const myLogo = new Image();
    myLogo.src = Logo;
    myLogo.classList.add('logo');

    logoContainer.classList.add('logo-container');
    logoContainer.appendChild(myLogo);
    // logoContainer.textContent="Logo";

    const menu = document.createElement('nav');
    menu.classList.add('menu');

    headerElement.appendChild(logoContainer);
    for(let tabName of tabNames){
        menu.appendChild(menuTab(tabName));
    }
    headerElement.appendChild(menu);

    return headerElement;
}

function menuTab(tabName){
    const tab = document.createElement('button');
    tab.classList.add('menu-tab');
    tab.textContent=tabName;
    return tab;
}

document.body.appendChild(docHeader());