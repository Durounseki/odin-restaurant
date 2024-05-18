function Sample(item){
    
    this.item = item;

    this.createSample =  function(){
        
        const container = document.createElement('div');
        container.classList.add('sample-container');

        const title = document.createElement('p');
        title.classList.add('menu-sample');
        title.textContent = this.item.name;

        const pictureContainer = document.createElement('div');
        pictureContainer.classList.add('sample-picture-container');
        const picture = new Image();
        picture.src = this.item.picture;
        picture.classList.add('sample-picture');

        pictureContainer.appendChild(picture);
        container.append(pictureContainer);
        container.append(title);

        return container;
    }

}

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

        for(let item of this.samples){
            const sample = new Sample(item);
            sampler.appendChild(sample.createSample());
        }

        samplerContainer.appendChild(sampler);

        return samplerContainer;

    }

}

export { Sampler };