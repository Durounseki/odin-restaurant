function Sampler(samples, title = "MENU"){
    this.samples = samples;
    this.title = title;

    this.createSampler = function(){
        
        const samplerContainer = document.createElement('div');
        samplerContainer.classList.add('section-container');
        const samplerTitle = document.createElement('h2');
        samplerTitle.classList.add('section-title');
        samplerTitle.textContent = this.title;

        samplerContainer.appendChild(samplerTitle);

        const sampler = document.createElement('div');
        sampler.classList.add('sampler');

        for(let sample of this.samples){
            sampler.appendChild(this.createSample(sample));
        }

        samplerContainer.appendChild(sampler);

        return samplerContainer;

    }

    this.createSample =  function(item){
        
        const container = document.createElement('div');
        container.classList.add('sample-container');

        const title = document.createElement('p');
        title.classList.add('menu-sample');
        title.textContent = item.name;

        const pictureContainer = document.createElement('div');
        pictureContainer.classList.add('sample-picture-container');
        const picture = new Image();
        picture.src = item.picture;
        picture.classList.add('sample-picture');

        pictureContainer.appendChild(picture);
        container.append(pictureContainer);
        container.append(title);

        return container;
    }

}

export { Sampler };