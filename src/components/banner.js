function Banner(title, subtitle){
    
    this.title = title;
    this.subtitle = subtitle;

    this.createBanner = function(){
        
        const banner = document.createElement('div');
        banner.classList.add('banner'); //Add an image to the background
        const bannerContent = document.createElement('div');
        bannerContent.classList.add('banner-content'); // The banner content has a translucid background to make the text on top of the background easier to read
        const title = document.createElement('h1');
        title.classList.add('banner-title');
        title.textContent = this.title;
        bannerContent.appendChild(title);
        if(this.subtitle){
            const subtitle = document.createElement('p');
            subtitle.classList.add('banner-subtitle');
            subtitle.textContent = this.subtitle;
            bannerContent.appendChild(subtitle);
        }
        
        banner.append(bannerContent);

        return banner;
    }
}

export { Banner };