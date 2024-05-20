import { Banner } from '../components/banner.js';
import { Concept } from '../components/concept.js';
import { Sampler } from '../components/sampler.js';
import { ContactSection } from '../components/get-in-touch.js';
import { Contact } from './contact.js';
import { Menu } from './menu.js';
// import { Location } from '../components/location.js';
// import logoImage from '../images/logo2.jpeg';
import wingsPicture from '../images/classic-wings.jpeg';
import fingersPicture from '../images/classic-fingers.jpeg';
import sandwichPicture from '../images/classic-sandwich2.jpeg';
import potatoesPicture from '../images/potatoes3.jpeg';


function Home(){

    const homeContent = document.createElement('div');
    homeContent.classList.add('page-content');

    //Banner

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
    
    const banner = new Banner(restaurant.name, restaurant.slogan);
    const bannerComponent = banner.createBanner();
    homeContent.append(bannerComponent);

    //Concept

    const concept = new Concept(restaurant);
    const conceptComponent = concept.createConcept();

    homeContent.appendChild(conceptComponent);

    //Sampler Menu
    //Samples
    const menuSamples = [
        {
            name: "Wings",
            picture: wingsPicture,
            focusElement: "wings-section"
        },
        {
            name: "Fingers",
            picture: fingersPicture,
            focusElement: "fingers-section"
        },
        {
            name: "Sandwich",
            picture: sandwichPicture,
            focusElement: "sandwich-potatoes-section"
        },
        {
            name: "Potatoes",
            picture: potatoesPicture,
            focusElement: "sandwich-potatoes-section"
        }
    ];

    const sampler = new Sampler(menuSamples);
    const samplerComponent = sampler.createSampler();

    homeContent.appendChild(samplerComponent);

    const Samples = homeContent.querySelectorAll('.sample-picture-container');
    Samples.forEach(sample => {
        sample.addEventListener('click',(event) => {
            const targetElementId = event.target.closest('div').id;
            const content = document.querySelector('.content');
            content.innerHTML = "";
            content.appendChild(Menu());
            const targetElement = document.getElementById(targetElementId);
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    //Contact Section

    const contact = new ContactSection(restaurant);
    const contactComponent = contact.createContactSection();

    homeContent.appendChild(contactComponent);

    const contactButton = homeContent.querySelector('.contact-button');
    contactButton.addEventListener('click',() => {
        const content = document.querySelector('.content');
        content.innerHTML = "";
        content.appendChild(Contact());
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    return homeContent;
}

export { Home };