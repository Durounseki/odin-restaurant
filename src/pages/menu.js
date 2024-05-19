
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

    const priceContainer = document.createElement('div');
    priceContainer.classList.add('price-container');
    const price = document.createElement('h1');
    price.textContent = "5 Pc \u00A5 900 / 10 Pc \u00A5 1750";

    priceContainer.appendChild(price);
    menuSectionContent.appendChild(priceContainer);

    const menuItemsHeader = document.createElement('div');
    menuItemsHeader.classList.add('menu-items-header');
    const menuItemsTitle = document.createElement('h3');
    menuItemsTitle.textContent = "Choose your favorite";
    const menuItemsRemark = document.createElement('p');
    menuItemsRemark.textContent = "Choose 1 flavor for every 5 wings";
    menuItemsHeader.appendChild(menuItemsTitle);
    menuItemsHeader.appendChild(menuItemsRemark);

    menuSectionContent.appendChild(menuItemsHeader);

    const menuSlideShow = document.createElement('div');
    menuSlideShow.classList.add('slideshow-container');
    
    const slideContainer = document.createElement('div');
    slideContainer.classList.add('slide-container');

    for(let slide of wingSlides){
        
        const Slide = document.createElement('img');
        Slide.classList.add(...['slide','fade']);
        Slide.src = slide.src;
        Slide.alt = slide.name;

        slideContainer.appendChild(Slide);
        menuSlideShow.appendChild(slideContainer);
    }

    menuSectionContent.appendChild(menuSlideShow);

    const menuItemsContainer = document.createElement('div');
    menuItemsContainer.classList.add('menu-items-container');
    
    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items');
    for(let item of wingsItems){
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        const itemImage = document.createElement('img');
        itemImage.src = item.src;
        const itemName = document.createElement('p');
        itemName.textContent = item.name;
        const extraInfo = document.createElement('span');
        extraInfo.classList.add('extra-info');
        for(let icon of item.icons){
            let Icon;
            if(icon.name === "Top Choice"){
                Icon = document.createElement('div');
                Icon.classList.add('fa-stack');
                const star = document.createElement('i');
                star.classList.add(...icon.star.faClass.split(' '));
                const one = document.createElement('i');
                one.classList.add(...icon.one.faClass.split(' '));
                Icon.id = "top-choice";
                Icon.appendChild(star);
                Icon.appendChild(one);
            }else{
                Icon = document.createElement('i');
                Icon.classList.add(...icon.faClass.split(' '));
            }
            Icon.style.verticalAlign = "top";
            extraInfo.append(Icon);
        }
        itemName.append(extraInfo);
        menuItem.appendChild(itemImage);
        menuItem.appendChild(itemName);
        menuItems.appendChild(menuItem);
    }

    menuItemsContainer.appendChild(menuItems);
    menuSectionContent.appendChild(menuItemsContainer);
    wingsMenu.appendChild(menuSectionContent);
    menuContent.appendChild(wingsMenu);

    return menuContent;

}

export { Menu };