
import { Banner } from '../components/banner.js';
import { wingSlides, wingsItems, fingersSlides, fingersItems, potatoesSlides, sandwichSlides, sandwichPotatoesItems, Icons } from "../images/images.js";
import { MenuSection1, MenuSection2 } from '../components/menu-section.js';


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

    const wingsMenu = new MenuSection1(wingsSection);
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

    const fingersMenu = new MenuSection1(fingersSection);
    const fingersMenuComponent = fingersMenu.createSection();
    fingersMenuComponent.id = 'fingers-section';

    const sandwichPotatoesSection = {
        title: "SANDWICH & FRENCH FRIES",
        punchline: "Juicy chicken in a bun, fries to munch!",
        price: "Sandwich \u00A5 680 / Fries \u00A5 650",
        flavoursTitle: "Choose your favorite",
        remark: "",
        slides: sandwichSlides.concat(potatoesSlides),
        items: sandwichPotatoesItems,
        icons: Icons,
    }

    const sandwichPotatoesMenu = new MenuSection1(sandwichPotatoesSection);
    const sandwichPotatoesMenuComponent = sandwichPotatoesMenu.createSection();
    sandwichPotatoesMenuComponent.id = 'sandwich-potatoes-section';

    menuContainer.appendChild(wingsMenuComponent);
    menuContainer.appendChild(fingersMenuComponent);
    menuContainer.appendChild(sandwichPotatoesMenuComponent);
    menuContent.appendChild(menuContainer);

    //Slideshow animation
    const slidesWings = menuContent.querySelectorAll('#wings-section .slide');
    const slidesFingers = menuContent.querySelectorAll('#fingers-section .slide');
    const slidesSandwichPotatoes = menuContent.querySelectorAll('#sandwich-potatoes-section .slide');
    
    let currentWingsSlide = 0;
    let currentFingersSlide = 0;
    let currentSandwichPotatoesSlide = 0;
    let wingsIntervalId = null;
    let fingersIntervalId = null;
    let sandwichPotatoesIntervalId = null;

    showSlide(slidesWings,currentWingsSlide);
    wingsIntervalId = startCarousel(slidesWings,currentWingsSlide);
    
    showSlide(slidesFingers,currentFingersSlide);
    fingersIntervalId = startCarousel(slidesFingers,currentFingersSlide);

    showSlide(slidesSandwichPotatoes,currentSandwichPotatoesSlide);
    sandwichPotatoesIntervalId = startCarousel(slidesSandwichPotatoes,currentSandwichPotatoesSlide);

    // showSlide(slidesPotatoes,currentPotatoesSlide);
    // potatoesIntervalId = startCarousel(slidesPotatoes,currentPotatoesSlide);

    const wingsCarousel = menuContent.querySelector('#wings-section .slide-container');
    wingsCarousel.addEventListener('mouseenter',() => {
        stopCarousel(wingsIntervalId);
    });
    wingsCarousel.addEventListener('mouseleave',() => {
        wingsIntervalId = startCarousel(slidesWings,currentWingsSlide);
    });
    const fingersCarousel = menuContent.querySelector('#fingers-section .slide-container');
    fingersCarousel.addEventListener('mouseenter',() => {
        stopCarousel(fingersIntervalId);
    });
    fingersCarousel.addEventListener('mouseleave',() => {
        fingersIntervalId = startCarousel(slidesFingers,currentFingersSlide)
    });
    const sandwichPotatoesCarousel = menuContent.querySelector('#sandwich-potatoes-section .slide-container');
    sandwichPotatoesCarousel.addEventListener('mouseenter',() => {
        stopCarousel(sandwichPotatoesIntervalId);
    });
    sandwichPotatoesCarousel.addEventListener('mouseleave',() => {
        sandwichPotatoesIntervalId = startCarousel(slidesSandwichPotatoes,currentSandwichPotatoesSlide)
    });
    // const potatoesCarousel = menuContent.querySelector('#sandwich-potatoes-section :nth-child(5) .slide-container');
    // potatoesCarousel.addEventListener('mouseenter',() => {
    //     stopCarousel(potatoesIntervalId);
    // });
    // potatoesCarousel.addEventListener('mouseleave',() => {
    //     potatoesIntervalId = startCarousel(slidesPotatoes,currentPotatoesSlide)
    // });

    return menuContent;

}

function showSlide(slides, index){

    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    setTimeout(() => {
        slides[index].style.opacity = "1";
    }, 1000);

}

function startCarousel(slides,index){
    const intervalId = setInterval(() => {
        index = (index + 1) % slides.length;
        showSlide(slides, index);
    }, 3000);
    return intervalId;
}

function stopCarousel(intervalId){
    clearInterval(intervalId);
}

export { Menu };