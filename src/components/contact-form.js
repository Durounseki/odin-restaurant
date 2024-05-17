function FormGroup(group){

    this.group = group;
    
    this.createFormGroup = function(){
        const formGroup = document.createElement('div');
        formGroup.classList.add('form-group');

        const labelElement = document.createElement('label');
        labelElement.setAttribute('for', this.group.id);
        labelElement.textContent = this.group.label;

        // Conditional input type creation
        let inputElement;
        if (this.group.type === 'textarea') {
            inputElement = document.createElement('textarea');
            inputElement.rows = this.group.rows; 
        } else {
            inputElement = document.createElement('input');
            inputElement.type = this.group.type;
        }

        inputElement.id = this.group.id;
        inputElement.name = this.group.name;
        inputElement.placeholder = this.group.placeholder;
        inputElement.required = this.group.required;

        if(this.group.required){
            const requiredSpan = document.createElement('span');
            requiredSpan.classList.add('required');
            requiredSpan.textContent = '*';
            labelElement.appendChild(requiredSpan);
        }

        // Email confirmation handling (if applicable)
        if (inputElement.type === 'email' && inputElement.name === 'email') {
            const confirmEmailGroup = new FormGroup(
                {
                    type: 'email',
                    label: 'Confirm Email',
                    id: 'email-confirm',
                    name: 'emailConfirm',
                    placeholder: '',
                    required: true,
                });
            formGroup.insertAdjacentElement('afterend', confirmEmailGroup.createFormGroup()); // Insert after email group
        }

        formGroup.appendChild(labelElement);
        formGroup.appendChild(inputElement);

        return formGroup;
    }
}

function ContactForm(
    fields = [],
    action = "javascript:void(0);",
    method="POST",
    id="contact-form"
){
    
    this.fields = [...fields, ...[
        {
            name: 'Details',
            groups: [
                {
                    type: 'text',
                    label: 'Full Name',
                    id: 'full-name',
                    name: 'fullName',
                    placeholder: 'Taro Yamada',
                    required: true,
                },
                {
                    type: 'email',
                    label: 'Email',
                    id: 'email',
                    name: 'email',
                    placeholder: 'taro.yamada@wing.com',
                    required: true,
                },
                {
                    type: 'tel',
                    label: 'Phone Number',
                    id: 'phone-number',
                    name: 'phoneNumber',
                    placeholder: '0123456789',
                    required: true,
                },
                {
                    type: 'textarea',
                    label: 'Inquiry',
                    id: 'inquiry',
                    name: 'inquiry',
                    placeholder: 'Please tell us how can we help',
                    rows: 5,
                    required: true,
                }
            ]
        }]
    ];
    this.action = action;
    this.method = method;
    this.id = id;

    this.createForm = function(){
        
        const formContainer = document.createElement('div');
        formContainer.classList.add('form-container');
        const form = document.createElement('form');
        form.classList.add('contact-form');
        form.action = this.action;
        form.method = this.method;
        form.id = this.id;
        
        for(let field of this.fields){            
            form.appendChild(this.createFormField(field));
        }

        const submitButton = document.createElement('button');
        submitButton.classList.add('submit-button');
        submitButton.type = 'submit';
        submitButton.id = 'submit';
        submitButton.textContent = 'Send';

        formContainer.appendChild(form);
        formContainer.appendChild(submitButton);

        return formContainer;

    }

    this.createFormField = function(field){
        
        const formField = document.createElement('div');
        formField.classList.add('form-field');
        for(let group of field.groups){
            const formGroup = new FormGroup(group);
            formField.appendChild(formGroup.createFormGroup());
        }

        return formField;
    }

}

export { ContactForm };