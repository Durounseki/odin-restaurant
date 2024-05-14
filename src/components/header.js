import { Logo } from './logo.js';

function Header(logoSrc, tabNames) {
    
    this.logoSrc = logoSrc;
    this.tabNames = tabNames;

    this.createHeader = function() {
        
        const headerElement = document.createElement('header');

        //Create logo component
        const logo = new Logo(this.logoSrc);
        const logoComponent = logo.createLogo();

        headerElement.appendChild(logoComponent);

        //Create navigation menu
        const menu = document.createElement('nav');
        menu.classList.add('menu');
        
        for(let tabName of this.tabNames){
            menu.appendChild(this.createMenuTab(tabName));
        }

        headerElement.appendChild(menu);


        return headerElement;

    }

    this.createMenuTab = function(tabName){
        
        const tab = document.createElement('button');
        
        tab.classList.add('menu-tab');
        tab.textContent=tabName;
        
        return tab;
        
    }
}

export { Header };