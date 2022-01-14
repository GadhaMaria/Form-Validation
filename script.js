const form = document.getElementById('form');
const password1Element = document.getElementById('password1');
const password2Element = document.getElementById('password2');
const messageContainerCss = document.querySelector('.message-container');
const messageText = document.getElementById('message');
//by default when we open the page there are no values hence isValid is false
let isValid = false;
let passwordsMatch = false;

const validateForm = function(){
isValid = form.checkValidity();
checkValidityAndStyle();
}

const checkValidityAndStyle = function(){
    if(!isValid){
        messageText.textContent = 'Please fill out all fields.';
        messageText.style.color = 'red';
        messageContainerCss.style.borderColor = 'red';
        return;
        //we add return so it breaks out of the sequence and we dont have to perform all the actions below.
    }
    //check if passwords match
    checkPasswordMatchAndStyle();
}

const checkPasswordMatchAndStyle = function(){
    if(password1Element.value != password2Element.value){
        passwordsMatch = false;
        password1Element.style.borderColor ='red';
        password2Element.style.borderColor = 'red';
        messageText.textContent = 'The passwords do not match.';
        messageText.style.color = 'red';
        messageContainerCss.style.borderColor = 'red'; 
    }
    else if(password1Element.value === password2Element.value){
        passwordsMatch = true;
        password1Element.style.borderColor ='green';
        password2Element.style.borderColor = 'green';
        messageContainerCss.style.borderColor ='green';
        messageText.textContent = 'Successfully registered';
        messageText.style.color = 'green';
    }
}

const storeFormData = function(){
    //creating a user object
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password1.value
    };
    //store this data in a database or a storage device
    console.log(user);
}
const processFormData = function(event) {
    event.preventDefault();

    //validate form function above
    validateForm();
    if(isValid && passwordsMatch)
    storeFormData();
}

// Add event listener
form.addEventListener('submit', processFormData);