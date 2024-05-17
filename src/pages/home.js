import { Sampler } from '../components/sampler.js';
import { Contact } from '../components/get-in-touch.js';
import { Location } from '../components/location.js';
import logoImage from '../images/logo2.jpeg';
import wingsPicture from '../images/classic-wings.jpeg';
import fingersPicture from '../images/classic-fingers.jpeg';
import sandwichPicture from '../images/classic-sandwich2.jpeg';
import potatoesPicture from '../images/potatoes3.jpeg';


function Home(){

    const homeContent = document.createElement('div');
    homeContent.classList.add('page-content');

    //Banner
    const banner = document.createElement('div');
    banner.classList.add('banner');
    const bannerContent = document.createElement('div');
    bannerContent.classList.add('banner-content');
    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurant-name');
    restaurantName.textContent = 'GOLDEN WINGS CHICKEN'
    const slogan = document.createElement('p');
    slogan.classList.add('slogan');
    slogan.textContent = 'Finger-lickin\' wings. Experience a taste of the world in Okinawa.';
    bannerContent.appendChild(restaurantName);
    bannerContent.appendChild(slogan);
    banner.append(bannerContent)
    homeContent.append(banner);

    //Concept
    const conceptContainer = document.createElement('div');
    
    conceptContainer.classList.add('section-container');
    const conceptTitle = document.createElement('h2');
    conceptTitle.classList.add('section-title');
    conceptTitle.textContent = "CONCEPT";
    conceptContainer.appendChild(conceptTitle);

    const conceptContent = document.createElement('div');
    conceptContent.classList.add('concept-content');
    const concept = document.createElement('p');
    concept.classList.add('concept');
    concept.textContent = "Crafted with a unique American-inspired recipe";
    conceptContent.appendChild(concept);

    const conceptValues = document.createElement('ul');
    conceptValues.classList.add('concept-values');
    const concept1 = document.createElement('li');
    const concept2 = document.createElement('li');
    const concept3 = document.createElement('li');
    concept1.textContent = "We only use the finest locally-sourced chicken from Okinawa, Kyushu and Shikoku.";
    concept2.textContent = "Enjoy a delicious meal with 50% less fat thanks to our unique cooking method.";
    concept3.textContent = "We use a healthier rice bran oil.";
    conceptValues.appendChild(concept1);
    conceptValues.appendChild(concept2);
    conceptValues.appendChild(concept3);
    conceptContent.appendChild(conceptValues);
    conceptContainer.appendChild(conceptContent);

    const viewMore = document.createElement('button');
    viewMore.classList.add('view-more');
    viewMore.textContent="View More";
    conceptContainer.appendChild(viewMore);

    homeContent.appendChild(conceptContainer);

    //Sampler Menu
    //Samples
    const menuSamples = [
        {
            name: "Wings",
            picture: wingsPicture
        },
        {
            name: "Fingers",
            picture: fingersPicture
        },
        {
            name: "Sandwich",
            picture: sandwichPicture
        },
        {
            name: "Potatoes",
            picture: potatoesPicture
        }
    ];

    const sampler = new Sampler(menuSamples);
    const samplerComponent = sampler.createSampler();

    homeContent.appendChild(samplerComponent);

    //Contact Section

    //Contact details
    const contactDetails = {
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

    const contact = new Contact(contactDetails);
    const contactComponent = contact.createContact();

    homeContent.appendChild(contactComponent);

    //Location Section
    const location = new Location(contactDetails,logoImage);  //Instantiate Location object
    const locationComponent = location.createLocation();

    homeContent.appendChild(locationComponent)

    return homeContent;
}

export { Home };