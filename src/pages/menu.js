
import { Banner } from '../components/banner.js';
import { wingSlides, wingsItems, fingersSlides, fingersItems, potatoesSlides, sandwichSlides, Icons } from "../images/images.js";
import { MenuSection } from '../components/menu-section.js';


function Menu(){

    const menuContent = document.createElement('div');
    menuContent.classList.add('page-content');

    const banner = new Banner('MENU');
    const bannerComponent = banner.createBanner();
    menuContent.append(bannerComponent);

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu');

    //Chicken wings

    const wingsSection = {
        title: "CHICKEN WINGS",
        punchline: "Juicy, crispy and irresistible!",
        price: "5 Pc \u00A5 900 / 10 Pc \u00A5 1750",
        flavoursTitle: "Choose your favorite",
        remark: "\u203B Choose 1 flavor for every 5 wings",
        slides: wingSlides,
        items: wingsItems,
        icons: Icons,
    }

    const wingsMenu = new MenuSection(wingsSection);
    const wingsMenuComponent = wingsMenu.createSection();
    wingsMenuComponent.id = 'wings-section';

    //Chicken fingers

    const fingersSection = {
        title: "CHICKEN FINGERS",
        punchline: "Boneless chicken fingers. Crispy outside, juicy inside!",
        price: "5 Pc \u00A5 900 / 10 Pc \u00A5 1750",
        flavoursTitle: "Choose your dip",
        remark: "\u203B Extra \u00A5 70 each",
        slides: fingersSlides,
        items: fingersItems,
        icons: Icons,
    }

    const fingersMenu = new MenuSection(fingersSection);
    const fingersMenuComponent = fingersMenu.createSection();
    fingersMenuComponent.id = 'fingers-section';

    menuContainer.appendChild(wingsMenuComponent);
    menuContainer.appendChild(fingersMenuComponent);
    menuContent.appendChild(menuContainer);

    //Slideshow animation
    const slidesWings = menuContent.querySelectorAll('#wings-section .slide');
    const slidesFingers = menuContent.querySelectorAll('#fingers-section .slide');
    
    let currentWingsSlide = 0;
    let currentFingersSlide = 0;

    setInterval(() => {
        currentWingsSlide = (currentWingsSlide + 1) % slidesWings.length;
        showSlide(slidesWings, currentWingsSlide);
        currentFingersSlide = (currentFingersSlide + 1) % slidesFingers.length;
        showSlide(slidesFingers, currentFingersSlide);
    }, 5000);

    return menuContent;

}

function showSlide(slides, index){

    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    setTimeout(() => {
        slides[index].style.opacity = "1";
    }, 1000);

}

export { Menu };