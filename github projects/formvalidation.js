var nameerror = document.getElementById('name-error');
var phoneerror = document.getElementById('phone-error');
var emailerror = document.getElementById('email-error');
var messageerror = document.getElementById('message-error');
var submiterror = document.getElementById('submit-error');



function validateName(){
    var name = document.getElementById('contact-name').ariaValueMax;
     

    if(name.length == 0){
        name.error.innerHTML = 'write full name';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameerror.innerHTML = 'write full name';
        return false;
    }
    
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').ariaValueMax;
    if(phone.length == 0){
        phoneerror.innerHtml = 'phone no is required';
        return false;
    }
    if(phone.length !== 10){
        phoneerror.innerHTML = 'phone no should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneerror.innerHTML = 'phone no is required';
        return false;
    }
}

