//Styles, fonts and colors
import './style.css';
import './fonts-and-colors.css';

//Header component
import { Header } from './components/header.js';

import logoImage from './images/logo2.jpeg';
const tabs = ["Home", "Menu", "About Us", "Contact Us"]
const header = new Header(logoImage, tabs); //Instantiate a Header object

const headerComponent = header.createHeader();

document.body.appendChild(headerComponent);

//Page Content
const content = document.createElement('div');
content.classList.add('content');

// import { Home } from './pages/home.js';

// content.appendChild(Home());
// document.body.appendChild(content);

import { Menu } from './pages/menu.js';

content.appendChild(Menu());
document.body.appendChild(content);

// import { Contact } from './pages/contact.js';

// content.appendChild(Contact());
// document.body.appendChild(content);

//Footer component
import { Footer } from './components/footer.js';

const companyCopyright = '株式会社';
const companySns = [
    {
        name: "facebook",
        url: "https://www.facebook.com/goldenwingschicken/",
        faClass: "fa-brands fa-square-facebook",
    },
    {
        name: "twitter",
        url: "https://twitter.com/goldenwingstogo",
        faClass: "fa-brands fa-square-x-twitter",
    },
    {
        name: "instagram",
        url: "https://www.instagram.com/golden_wings_chicken/?hl=ja",
        faClass: "fa-brands fa-square-instagram",
    }
]
const DesignCredits = {
    text: "Web design by",
    url: "https://github.com/Durounseki",
    faClass: "fa-brands fa-square-github",
    creditor: "Durounseki",
}

const footer = new Footer(companyCopyright,companySns,DesignCredits);//Instantiate a Footer object

const footerComponent = footer.createFooter();

document.body.appendChild(footerComponent);