//Styles, fonts and colors
import './style.css';
import './fonts-and-colors.css';

//Header component
import { Header } from './components/header.js';

import logoImage from './images/logo2.jpeg';

const restaurant = {
    name: 'GOLDEN WINGS CHICKEN',
    slogan: 'Finger-lickin\' wings. Experience a taste of the world in Okinawa',
    proposalTitle: "Crafted with a unique American-inspired recipe",
    proposals: [
        "We only use the finest locally-sourced chicken from Okinawa, Kyushu and Shikoku.",
        "Enjoy a delicious meal with 50% less fat thanks to our unique cooking method.",
        "We use a healthier rice bran oil."
    ],
    address: "2260-2 Sobe, Yomitan Village, Nakagami District, Okinawa Prefecture",
    phone: "098-923-5963",
    homepage: "https://www.facebook.com/goldenwingschicken/",
    businessHours: [
        "Wed-Sat: 15:00 ~ 19:00 (Last Order: 18:45)",
        "Sunday: 12:00 ~ 18:00 (Last Order: 17:45)",
        "Mon-Tue: Closed" 
    ],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.1481999974667!2d127.73214348633479!3d26.38639930249866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e511fa1682df3f%3A0x51d44e7bb1ad26f0!2sGolden%20Wings%20Chicken!5e0!3m2!1sen!2sjp!4v1715597303678!5m2!1sen!2sjp",
}

const tabs = [{name: "Home", page: "home"}, {name: "Menu", page: "menu"}, {name: "Contact Us", page: "contact"}]
const header = new Header(logoImage, tabs); //Instantiate a Header object

const headerComponent = header.createHeader();

document.body.appendChild(headerComponent);

//Page Content
const content = document.createElement('div');
content.classList.add('content');
document.body.appendChild(content);

import { Home } from './pages/home.js';
import { Menu } from './pages/menu.js';
import { Contact } from './pages/contact.js';

const pages = {
    home: Home(),
    menu: Menu(),
    contact: Contact(),
};

//Show home page
content.appendChild(Home());

function showContent(event){
    const button = event.target;
    const page = button.dataset.page;
    content.innerHTML = "";
    content.appendChild(pages[page]);
}

const navTabs = document.querySelectorAll('.nav-tab');
navTabs.forEach(tab => {
    tab.addEventListener('click',showContent);
});

//Location Section
import { Location } from './components/location.js';

const location = new Location(restaurant,logoImage);  //Instantiate Location object
const locationComponent = location.createLocation();
locationComponent.classList.add('location');

document.body.appendChild(locationComponent)

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

//Go back home on click on restaurant logo
const logos = document.querySelectorAll('.logo');

logos.forEach(logo => logo.addEventListener('click',() => {
    content.innerHTML = "";
    content.appendChild(Home());
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}));