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


const locationContainer = document.createElement('div');
locationContainer.classList.add('location-container');

const addressContainer = document.createElement('div');
addressContainer.classList.add('address-container');
const address = document.createElement('p');
address.classList.add('address');
address.textContent = "Address: 2260-2 Sobe, Yomitan Village, Nakagami District, Okinawa Prefecture";
const homePage = document.createElement('p');
homePage.classList.add('home-page');
homePage.textContent = "https://www.facebook.com/goldenwingschicken/";
const logoContainer = document.createElement('div');
logoContainer.classList.add('logo-container');

const myLogo = new Image();
myLogo.src = logoImage;
myLogo.classList.add('logo');

logoContainer.appendChild(myLogo);

addressContainer.appendChild(logoContainer);
addressContainer.appendChild(address);
addressContainer.appendChild(homePage);
locationContainer.appendChild(addressContainer);

const mapContainer = document.createElement('div');
mapContainer.classList.add('map-container');
const gMap = document.createElement('iframe');
gMap.classList.add('g-map');
gMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.1481999974667!2d127.73214348633479!3d26.38639930249866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e511fa1682df3f%3A0x51d44e7bb1ad26f0!2sGolden%20Wings%20Chicken!5e0!3m2!1sen!2sjp!4v1715597303678!5m2!1sen!2sjp"
gMap.loading = "lazy";
gMap.referrerpolicy = "no-referrer-when-downgrade";
gMap.allowfullscreen = "";
// gMap.style.width = "200px";
// gMap.style.height = "600px";
// gMap.style.border = "0";

mapContainer.appendChild(gMap);
locationContainer.appendChild(mapContainer);
content.appendChild(locationContainer);
document.body.appendChild(content);

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