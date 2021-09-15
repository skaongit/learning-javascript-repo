//Get submit button
let submitButton = document.querySelector(`#submit`);

function clickListener(event){
    //Create error message
    let errormessage = "Please fill out all fields";

   //Get name input and validation
    let nameInput = document.querySelector(`#name`);
    let nameValue = document.querySelector(`#name`).value;

    if(nameValue == ""){
        errormessage += "<br>&middot;Name";
}
    //Get job input and validation
    let jobInput = document.querySelector(`#job`);
    let jobValue = document.querySelector(`#job`).value;

    if(jobValue == ""){
        errormessage += "<br>&middot;Job Title";
}
    //Get email input and validation
    let emailInput = document.querySelector(`#email`);
    let emailValue = document.querySelector(`#email`).value;

    if(emailValue == ""){
        errormessage += "<br>&middot;Email";
}
    document.getElementById(`error`).innerHTML =errormessage;
}
//Add event listener to listen for a click, then call the function.
submitButton.addEventListener(`click` ,clickListener);   