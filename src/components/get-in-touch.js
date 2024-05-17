function Contact(
    details, 
    titleText = "GET IN TOUCH", 
    mailIconFaClass = "fa-regular fa-envelope", 
    contactText = "Contact Form", 
    invitationText = "Please contact us by phone or via this form."
){

    this.details = details;
    this.titleText = titleText;
    this.mailIconFaClass = mailIconFaClass;
    this.contactText = contactText;
    this.invitationText = invitationText;

    this.createContact = function(){

        const contactContainer = document.createElement('div');
        contactContainer.classList.add('section-container');

        const title = document.createElement('h2');
        title.classList.add('section-title');
        title.textContent = this.titleText;

        contactContainer.appendChild(title);

        const phone = document.createElement('h1');
        phone.classList.add('phone');
        phone.textContent = details.phone;

        contactContainer.appendChild(phone);

        const businessHours = document.createElement('div');
        businessHours.classList.add('business-hours');
        for(let hours of this.details.businessHours){
            businessHours.appendChild(this.createBusinessHours(hours));
        }

        contactContainer.appendChild(businessHours);

        const contact = document.createElement('div');
        contact.classList.add('contact');
        const contactButton = document.createElement('div');
        contactButton.classList.add('contact-button');
        const mailIcon = document.createElement('i');
        mailIcon.classList.add(...mailIconFaClass.split(' '));    //Allow multiple classes from Font Awesome
        contactButton.appendChild(mailIcon);

        const ContactText = document.createElement('p');
        ContactText.textContent = this.contactText;
        contactButton.appendChild(ContactText);

        contact.appendChild(contactButton);

        const invitation = document.createElement('p');
        invitation.classList.add('invitation');
        invitation.textContent = "\u203B " + this.invitationText;

        contact.appendChild(invitation);

        contactContainer.append(contact);

        return contactContainer;

    }

    this.createBusinessHours = function(hours){
        const businessHour = document.createElement('div');
        businessHour.classList.add('business-hour');
        businessHour.textContent = "\u2666 " + hours;

        return businessHour;
    }

}

export { Contact };