function Logo(logoSrc, className = 'logo', altName = 'logo') {
    this.logoSrc = logoSrc;
    this.className = className; // Allow customization of class name
    this.altName = altName;

    this.createLogo = function() {
        const logoContainer = document.createElement('div');
        logoContainer.classList.add('logo-container');

        const logoImage = new Image();
        logoImage.src = this.logoSrc;
        logoImage.alt = this.altName;
        logoImage.classList.add(this.className); 

        logoContainer.appendChild(logoImage);
        return logoContainer;
    };
}

export { Logo }; // Export for importing in other files