import { ContactForm } from "../components/contact-form";
import { Banner } from '../components/banner.js';

function Contact(){

    const contactContent = document.createElement('div');
    contactContent.classList.add('page-content');

    const banner = new Banner('GET IN TOUCH');
    const bannerComponent = banner.createBanner();
    contactContent.append(bannerComponent);

    const getInTouch = document.createElement('h1');
    getInTouch.classList.add('get-in-touch');
    getInTouch.textContent = 'Got questions or feedback? Let us know!';

    const contactForm = new ContactForm();
    const contactFormComponent = contactForm.createForm();

    contactContent.appendChild(getInTouch);
    contactContent.appendChild(contactFormComponent);

    return contactContent;

}

export { Contact };