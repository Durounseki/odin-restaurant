function Header(logoSrc, tabNames) {
    
    this.logoSrc = logoSrc;
    this.tabNames = tabNames;

    this.createHeader = function() {
        
        const headerElement = document.createElement('header');

        //Create logo container and image element
        const logoContainer = document.createElement('div');
        logoContainer.classList.add('logo-container');

        const myLogo = new Image();
        myLogo.src = this.logoSrc;
        myLogo.classList.add('logo');

        logoContainer.appendChild(myLogo);
        headerElement.appendChild(logoContainer);

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