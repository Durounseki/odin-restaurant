import { Logo } from './logo.js';

function Header(logoSrc, tabs) {
    
    this.logoSrc = logoSrc;
    this.tabs = tabs;

    this.createHeader = function() {
        
        const headerElement = document.createElement('header');

        //Create logo component
        const logo = new Logo(this.logoSrc,'logo','Golden Wings');
        const logoComponent = logo.createLogo();

        headerElement.appendChild(logoComponent);

        //Create navigation menu
        const menu = document.createElement('nav');
        menu.classList.add('nav-menu');
        
        for(let tab of this.tabs){
            menu.appendChild(this.createMenuTab(tab));
        }

        headerElement.appendChild(menu);


        return headerElement;

    }

    this.createMenuTab = function(tab){
        
        const navTab = document.createElement('button');
        
        navTab.classList.add('nav-tab');
        navTab.textContent=tab.name;
        navTab.dataset.page = tab.page;
        
        return navTab;
        
    }
}

export { Header };