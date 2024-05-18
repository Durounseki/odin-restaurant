
import { Banner } from '../components/banner.js';
import { wingSlides, wingsItems, fingersSlides, potatoesSlides, sandwichSlides } from "../images/images.js";


function Menu(){

    const menuContent = document.createElement('div');
    menuContent.classList.add('page-content');

    const banner = new Banner('MENU');
    const bannerComponent = banner.createBanner();
    menuContent.append(bannerComponent);

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu');

    //Chicken wings

    const wingsMenu = document.createElement('div');
    wingsMenu.classList.add('menu-section');

    const wingsTitle = document.createElement('h2');
    wingsTitle.classList.add('section-title');
    wingsTitle.textContent = "Chicken Wings";
    const wingsDescription = document.createElement('p');
    wingsDescription.classList.add('menu-description');
    wingsDescription.textContent = "Juicy, crispy and Irresistible";
    wingsMenu.appendChild(wingsTitle);
    wingsMenu.appendChild(wingsDescription);

    const menuSectionContent = document.createElement('div');
    menuSectionContent.classList.add('menu-section-content');

    const menuSlideShow = document.createElement('div');
    menuSlideShow.classList.add('slideshow-container');

    for(let slide of wingSlides){
        const slideContainer = document.createElement('div');
        slideContainer.classList.add('slide-container');
        const Slide = document.createElement('img');
        Slide.classList.add('slide');
        Slide.src = slide.src;
        Slide.alt = slide.name;

        menuSlideShow.appendChild(Slide);
    }

    menuSectionContent.appendChild(menuSlideShow);

    const menuItemsContainer = document.createElement('div');
    menuItemsContainer.classList.add('menu-items-container');
    const priceContainer = document.createElement('div');
    priceContainer.classList.add('price-container');
    const price = document.createElement('h3');
    price.textContent = "5 Pc 900";
    const menuItemsTitle = document.createElement('h3');
    menuItemsTitle.textContent = "Choose your favorite";
    const menuItemsRemark = document.createElement('p');
    menuItemsRemark.textContent = "Choose 1 flavor for every 5 wings";
    const menuItems = document.createElement('div');
    menuItems.classList.add('menuItems');
    for(let item of wingsItems){
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        // const itemImageContainer = document.createElement('div');
        // itemImageContainer.classList.add('item-image-container');
        const itemImage = document.createElement('img');
        itemImage.src = item.src;
        const itemName = document.createElement('p');
        itemName.textContent = item.name; 
        menuItem.appendChild(itemImage);
        menuItem.appendChild(itemName);
        menuItems.appendChild(menuItem);
    }

    menuItemsContainer.appendChild(menuItemsTitle);
    menuItemsContainer.appendChild(menuItemsRemark);
    priceContainer.appendChild(price);
    menuItemsContainer.appendChild(priceContainer);
    menuItemsContainer.appendChild(menuItems);

    menuSectionContent.appendChild(menuItemsContainer);

    wingsMenu.appendChild(menuSectionContent);
    menuContent.appendChild(wingsMenu);

    return menuContent;

}

export { Menu };