import { Location } from '../components/location.js';
import logoImage from '../images/logo2.jpeg';

function Home(){
    
    const homeContent = document.createElement('div');
    homeContent.classList.add('page-content');

    //Store Location
    const storeDetails = {
        address: "2260-2 Sobe, Yomitan Village, Nakagami District, Okinawa Prefecture",
        phone: "098-923-5963",
        homepage: "https://www.facebook.com/goldenwingschicken/",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.1481999974667!2d127.73214348633479!3d26.38639930249866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e511fa1682df3f%3A0x51d44e7bb1ad26f0!2sGolden%20Wings%20Chicken!5e0!3m2!1sen!2sjp!4v1715597303678!5m2!1sen!2sjp",
    }

    const location = new Location(storeDetails,logoImage);  //Instantiate Location object
    const locationComponent = location.createLocation();

    homeContent.appendChild(locationComponent)

    return homeContent;
}

export { Home };