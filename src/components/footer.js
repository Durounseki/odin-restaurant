import moment from 'moment';

function Footer(copyright, sns, credits){
    
    this.copyright = copyright;
    this.sns = sns;
    this.credits = credits;

    this.createFooter = function(){
        
        const footerElement = document.createElement('footer');

        //copyright
        const copyrightContainer = document.createElement('div');
        copyrightContainer.classList.add('copyright');

        const copyrightText = document.createElement('p');
        copyrightText.textContent = `\u00A9 ${moment().format('YYYY')} ${this.copyright}. All Rights Reserved.`;
        copyrightContainer.appendChild(copyrightText);

        //SNS
        if(this.sns && this.sns.length > 0){
            const snsContainer = document.createElement('div');
            snsContainer.classList.add('sns-container');
            
            for(let sn of this.sns){
                snsContainer.appendChild(this.createSnIcon(sn));
            }
            copyrightContainer.appendChild(snsContainer);

            footerElement.appendChild(copyrightContainer);   
        }

        //Credits
        if(this.credits){
            footerElement.appendChild(this.createCredits(this.credits));
        }

        return footerElement;
        
    }

    this.createSnIcon = function(sn){

        const snAnchor = document.createElement('a');
        snAnchor.classList.add('sns');
        snAnchor.href = sn.url;
        snAnchor.target = "_blank";
        snAnchor.rel = "noopener noreferrer";
        
        //Icon FontAwesome
        const snIcon = document.createElement('i');
        snIcon.classList.add(...sn.faClass.split(' ')); //allow multiple classes from Font Awesome

        //Accessibility
        snIcon.setAttribute('aria-label', sn.name);

        snAnchor.appendChild(snIcon);

        return snAnchor;

    }

    this.createCredits = function (credits){

        const creditsContainer = document.createElement('div');
        creditsContainer.classList.add('credits-container');

        //Custom text
        const createdBy =  document.createElement('p');
        createdBy.classList.add('created-by');
        createdBy.textContent = credits.text;
        creditsContainer.appendChild(createdBy);

        //Credits
        const creditsAnchor = document.createElement('a');
        creditsAnchor.classList.add('credits');
        creditsAnchor.href = credits.url;
        creditsAnchor.target = "_blank";
        creditsAnchor.rel = "noopener noreferrer";

        //Icon FontAwesome
        const creditIcon = document.createElement('i');
        creditIcon.classList.add(...credits.faClass.split(' '));    //Allow multiple classes from Font Awesome
        creditsAnchor.appendChild(creditIcon);

        //Creditor
        const creditor = document.createElement('p');
        creditor.classList.add('creditor');
        creditor.textContent = credits.creditor;
        creditsAnchor.appendChild(creditor);

        creditsContainer.appendChild(creditsAnchor);

        return creditsContainer;

    }

}

export { Footer };