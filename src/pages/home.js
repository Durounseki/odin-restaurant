function createLocationElement(){
    const locationContainer = document.createElement('div');
    locationContainer.classList.add('location-container');
    const addressContainer = document.createElement('div');
    addressContainer.classList.add('address');
    const mapContainer = document.createElement('div');
    mapContainer.classList.add('map-container');
    const gMap = document.createElement('iframe');
    gMap.classList.add('g-map');
    gMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.1481999974667!2d127.73214348633479!3d26.38639930249866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e511fa1682df3f%3A0x51d44e7bb1ad26f0!2sGolden%20Wings%20Chicken!5e0!3m2!1sen!2sjp!4v1715597303678!5m2!1sen!2sjp"
    gMap.loading = "lazy";
    gMap.referrerpolicy = "no-referrer-when-downgrade";
    gMap.allowfullscreen = "";
    // gMap.style.width = "600";
    // gMap.style.height = "450";
    gMap.style.border = "0";

    // width="600" height="450" style="border:0;" 
}