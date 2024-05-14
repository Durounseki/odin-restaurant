function Location(details,logoSrc){

    this.details = details;
    this.logoSrc = logoSrc;

    this.createLocation = function(){

        //Container
        const locationContainer = document.createElement('div');
        locationContainer.classList.add('location-container');

        //Append elements
        locationContainer.appendChild(this.createDetails(this.details));
        locationContainer.appendChild(this.createMap(this.details.map));

        return locationContainer;
    }

    //Details
    this.createDetails = function(Details){
        const detailsContainer = document.createElement('div');
        detailsContainer.classList.add('details-container');
        //Address
        const address = document.createElement('p');
        address.classList.add('address');
        address.textContent = "Address: " + Details.address;
        //Telephone
        const phone = document.createElement('p');
        phone.classList.add('phone');
        phone.textContent = "Telephone: " + Details.phone;
        //Website
        const homePage = document.createElement('p');
        homePage.classList.add('home-page');
        const homePageUrl = document.createElement('a');
        homePageUrl.href = Details.homepage;
        homePageUrl.target = "_blank";
        homePageUrl.rel = "noopener noreferrer";
        homePageUrl.textContent = Details.homepage;
        homePage.textContent = "Website: ";
        homePage.appendChild(homePageUrl);

        detailsContainer.appendChild(this.createLogo(this.logoSrc));
        detailsContainer.appendChild(address);
        detailsContainer.appendChild(phone);
        detailsContainer.appendChild(homePage);

        return detailsContainer;
    }

    //Logo
    this.createLogo = function(src){
        const logoContainer = document.createElement('div');
        logoContainer.classList.add('logo-container');
        const myLogo = new Image();
        myLogo.src = src;
        myLogo.classList.add('logo');

        logoContainer.appendChild(myLogo);

        return logoContainer;
    }

    //Google map
    this.createMap = function(mapUrl){
        const mapContainer = document.createElement('div');
        mapContainer.classList.add('map-container');
        const gMap = document.createElement('iframe');
        gMap.classList.add('g-map');
        gMap.src = mapUrl;
        gMap.loading = "lazy";
        gMap.referrerpolicy = "no-referrer-when-downgrade";
        gMap.allowfullscreen = "";

        mapContainer.appendChild(gMap);

        return mapContainer;
    }

}

export { Location };