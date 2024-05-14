function Logo(logoSrc, className = 'logo') {
    this.logoSrc = logoSrc;
    this.className = className; // Allow customization of class name

    this.createLogo = function() {
        const logoContainer = document.createElement('div');
        logoContainer.classList.add('logo-container');

        const logoImage = new Image();
        logoImage.src = this.logoSrc;
        logoImage.classList.add(this.className); 

        logoContainer.appendChild(logoImage);
        return logoContainer;
    };
}

export { Logo }; // Export for importing in other files