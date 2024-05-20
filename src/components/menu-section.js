function MenuSection1(section){
    
    this.section = section;

    this.createSection = function(){
        
        const Section = document.createElement('div');
        Section.classList.add('menu-section');

        const sectionTitle = document.createElement('h2');
        sectionTitle.classList.add('section-title');
        sectionTitle.textContent = this.section.title;

        const punchline = document.createElement('p');
        punchline.classList.add('punchline');
        punchline.textContent = this.section.punchline;
        Section.appendChild(sectionTitle);
        Section.appendChild(punchline);

        const sectionContent = document.createElement('div');
        sectionContent.classList.add('menu-section-content');

        const price = document.createElement('h1');
        price.classList.add('price');
        price.textContent = this.section.price;
        price.append(this.createIcon(this.section.icons[0]));

        sectionContent.appendChild(price);

        const flavoursHeader = document.createElement('div');
        flavoursHeader.classList.add('flavours-header');
        const flavoursTitle = document.createElement('h3');
        flavoursTitle.textContent = this.section.flavoursTitle;
        const flavoursRemark = document.createElement('p');
        flavoursRemark.textContent = this.section.remark;
        flavoursHeader.appendChild(flavoursTitle);
        flavoursHeader.appendChild(flavoursRemark);

        sectionContent.appendChild(flavoursHeader);

        const slideShow = document.createElement('div');
        slideShow.classList.add('slideshow-container');
        const slideContainer = document.createElement('div');
        slideContainer.classList.add('slide-container');

        for(let slide of this.section.slides){
            slideContainer.appendChild(this.createSlide(slide));
            slideShow.appendChild(slideContainer);
        }

        sectionContent.appendChild(slideShow);

        const itemsContainer = document.createElement('div');
        itemsContainer.classList.add('menu-items-container');
        
        const menuItems = document.createElement('div');
        menuItems.classList.add('menu-items');
        for(let item of this.section.items){
            menuItems.appendChild(this.createMenuItem(item));
        }

        const extraInfoDescription = document.createElement('div');
        extraInfoDescription.classList.add('icons-description');

        for(let icon of this.section.icons){
            const iconDescription = document.createElement('p');
            iconDescription.textContent = icon.description;
            iconDescription.prepend(this.createIcon(icon));
            extraInfoDescription.appendChild(iconDescription);
        }

        itemsContainer.appendChild(menuItems);
        sectionContent.appendChild(itemsContainer);
        sectionContent.appendChild(extraInfoDescription);
        Section.appendChild(sectionContent);

        return Section;
    }

    this.createSlide =  function(slide){
        const Slide = document.createElement('img');
        Slide.classList.add('slide');
        Slide.src = slide.src;
        Slide.alt = slide.name;

        return Slide;
    }

    this.createMenuItem = function(item){
        
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        const itemImage = document.createElement('img');
        itemImage.src = item.src;
        const itemName = document.createElement('p');
        itemName.textContent = item.name;
        const extraInfo = document.createElement('span');
        extraInfo.classList.add('extra-info');

        for(let icon of item.icons){
            extraInfo.append(this.createIcon(icon));
        }

        itemName.append(extraInfo);
        menuItem.appendChild(itemImage);
        menuItem.appendChild(itemName);

        return menuItem;

    }

    this.createIcon = function(icon){
        
        let Icon;
        if(icon.name === "Top Choice"){
            Icon = document.createElement('div');
            Icon.classList.add('fa-stack');
            const star = document.createElement('i');
            star.classList.add(...icon.star.faClass.split(' '));
            const one = document.createElement('i');
            one.classList.add(...icon.one.faClass.split(' '));
            Icon.id = "top-choice";
            Icon.appendChild(star);
            Icon.appendChild(one);
        }else{
            Icon = document.createElement('i');
            Icon.classList.add(...icon.faClass.split(' '));
        }
        Icon.style.verticalAlign = "top";

        return Icon;
    };
}

function MenuSection2(section){

    this.section = section;

    this.createSection = function(){
        
        const Section = document.createElement('div');
        Section.classList.add('menu-section');

        const sectionTitle = document.createElement('h2');
        sectionTitle.classList.add('section-title');
        sectionTitle.textContent = this.section.title;
        
        Section.appendChild(sectionTitle);

        const sectionContent = document.createElement('div');
        sectionContent.classList.add('menu-section-content');

        const price1 = document.createElement('h1');
        price1.textContent = this.section.price1;
        const price2 = document.createElement('h1');
        price2.textContent = this.section.price2;

        sectionContent.appendChild(price1);
        sectionContent.appendChild(price2);

        sectionContent.appendChild(this.createSlideshow(this.section.slides1));
        sectionContent.appendChild(this.createSlideshow(this.section.slides2));

        Section.appendChild(sectionContent);

        return Section;
    }

    this.createSlide =  function(slide){
        const Slide = document.createElement('img');
        Slide.classList.add('slide');
        Slide.src = slide.src;
        Slide.alt = slide.name;

        return Slide;
    }

    this.createSlideshow =function(slides){
        const slideShow = document.createElement('div');
        slideShow.classList.add('slideshow-container');
        const slideContainer = document.createElement('div');
        slideContainer.classList.add('slide-container');

        for(let slide of slides){
            slideContainer.appendChild(this.createSlide(slide));
            slideShow.appendChild(slideContainer);
        }

        return slideShow;
    }

}

export { MenuSection1, MenuSection2 };