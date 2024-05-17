function Banner(company){
    
    this.company = company;

    this.createBanner = function(){
        
        const banner = document.createElement('div');
        banner.classList.add('banner'); //Add an image to the background
        const bannerContent = document.createElement('div');
        bannerContent.classList.add('banner-content'); // The banner content has a translucid background to make the text on top of the background easier to read
        const companyName = document.createElement('h1');
        companyName.classList.add('company-name');
        companyName.textContent = this.company.name;
        const slogan = document.createElement('p');
        slogan.classList.add('slogan');
        slogan.textContent = this.company.slogan;
        bannerContent.appendChild(companyName);
        bannerContent.appendChild(slogan);
        banner.append(bannerContent);

        return banner;
    }
}

export { Banner };