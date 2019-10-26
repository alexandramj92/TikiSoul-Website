$(document).ready(function(){


$("#contact-submit").click(function(event){
    console.log("Submit button clicked");

    var email = $("#email").val();
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var message = $("#contactText").val();
    var statusEl = $(".status");
    statusEl.empty();

    //input validation

    if (email.length>8 && email.includes('@') && email.includes('.')){
    } else{
        event.preventDefault();
        statusEl.append('<div>Email is not valid!</div>');
    }

    if (firstName.length<1){
    statusEl.append("<div>First name is not valid!</div>");
    event.preventDefault();
    } 
    
    if (lastName.length<1){
        statusEl.append("<div>Last name is not valid!</div>");
        event.preventDefault();
    } 
    
    if (message.length<1){
        statusEl.append("<div>Message is not valid!</div>");
        event.preventDefault();
    }


})


function sentConf(){

    $("#contact-cont").empty();
}



});