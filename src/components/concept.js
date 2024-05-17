function Concept(company){

    this.company = company;

    this.createConcept = function(){

        const conceptContainer = document.createElement('div');
    
        conceptContainer.classList.add('section-container');
        const conceptTitle = document.createElement('h2');
        conceptTitle.classList.add('section-title');
        conceptTitle.textContent = "CONCEPT";
        conceptContainer.appendChild(conceptTitle);

        const conceptContent = document.createElement('div');
        conceptContent.classList.add('concept-content');
        const concept = document.createElement('p');
        concept.classList.add('concept');
        concept.textContent = this.company.proposalTitle;
        conceptContent.appendChild(concept);

        const conceptValues = document.createElement('ul');
        conceptValues.classList.add('concept-values');

        for(let proposal of this.company.proposals){
            conceptValues.appendChild(this.createValueProposal(proposal));
        }
        
        conceptContent.appendChild(conceptValues);
        conceptContainer.appendChild(conceptContent);

        const viewMore = document.createElement('button');
        viewMore.classList.add('view-more');
        viewMore.textContent="View More";
        conceptContainer.appendChild(viewMore);

        return conceptContainer;

    }

    this.createValueProposal = function(proposal){

        const concept = document.createElement('li');
        concept.textContent = proposal;

        return concept;

    }

}

export { Concept };