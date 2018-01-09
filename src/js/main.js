
//import styles
import '../style.css';
import '../sass/main.scss';

//import html pages into bundle
import '../index.html';
import '../skills.html';
import '../about.html';
import '../services.html';
import '../portfolio.html';
import '../contact.html';

//
import Vue from 'vue'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

import helloComponent from './components/hello.vue';
Vue.component('hello-component', helloComponent);

import portfolioAtom from './components/portfolio.vue';
Vue.component('portfolio-atom', portfolioAtom);

const app = new Vue({
    el: '#app',
});


/////////////////////////////////////////////////////////////////////////////

var form;
var good_First = false; //Used for final validation
var good_email = false;

form = document.getElementById("contact_form");
form.first_name.addEventListener("blur", check_first); //blur as change doesn't detect if it is left empty
form.email.addEventListener("blur", check_email);
form.addEventListener("submit", validateForm)



function check_first(){ //first name must not be empty and must not contain numbers
    var empty = false;
    console.log("first name checking");
    document.getElementById("first_name_checkmark").style.display = "inline"; //only display tick when interacted with
   
    if (form.first_name.value == ""){ //if empty
        empty = true;
    }
    else{
        empty = false;
    }
    
    if (empty == false){ //If everything is good give green checkmark
        document.getElementById("first_name_checkmark").style.color = "green";
        form.first_name.style.border = "1px solid green";
        form.first_name.style.color = "";
        form.first_name.style.background = "";
        good_First = true;
    }
    else{ //else display checkmark
        document.getElementById("first_name_checkmark").style.display = "none";
        form.first_name.style.border = "1px solid red";
        form.first_name.style.color = "white";
        form.first_name.style.background = "red";
        good_First = false;
    }
}

function check_email(){ //email must not be empty and must include an @ sign
    var empty = false;
    var at = false; //needs an @ symbol
    document.getElementById("email_checkmark").style.display = "inline";
   
    if (form.email.value == ""){ //if empty
        empty = true;
    }
    else{
        empty = false;
    }
    
    for (var i = 0; i < form.email.value.length; i++){ // the string has an @ sign
        if (form.email.value[i] == "@"){ //if the string contains @
            at = true;
            break; //As soon as @ is detected move on
        }
        else{
            at = false;
        }
    }
    
    if (at == true && empty == false){ //If everything is good give a green checkmark
        document.getElementById("email_checkmark").style.color = "green";
        form.email.style.border = "1px solid green";
        form.email.style.color = "";
        form.email.style.background = "";
        good_email = true;
    }
    else{ //else display checkmark
        document.getElementById("email_checkmark").style.display = "none";
        form.email.style.border = "1px solid red";
        form.email.style.color = "white";
        form.email.style.background = "red";
        good_email = false;
    }
}  

function validateForm(event){
    event.preventDefault(); //Prevent submit
    if(good_First == true && good_email == true){ //All forms must be valid to submit
        console.log("Form valid, submit"); //Form has noweher to submit to, but it would submit if this site was full
        document.getElementById("submitted-text").style.display = "inline";
    }
    else{
        check_first(); //Force each check to run to display empty forms
        check_email();
    }
}
