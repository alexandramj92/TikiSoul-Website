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
    } else {
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
    } else{
        setTimeout(sentConf, 1000);
    }

})


function sentConf(){

    $("#contact-cont").empty();
    var contactCont = $("#contact-cont");
    var newRow = $("<div>");
    newRow.attr("class","row");
    newRow.attr("id", "thank-you-message");
    contactCont.append(newRow);

    var newCol = $("<div>");
    newCol.attr("class", "col-md-12");
    newRow.append(newCol);

    var newTxt = $("<h1>");
    newTxt.attr("id", "newTxt");
    newTxt.text("Thank you for contacting Tiki Soul!");
    newCol.append(newTxt);

    var img = $("<img>");
    img.attr("id", "ty-img");
    img.attr("src", "images/contact-pine.jpg");
    img.attr("alt", "pineapple with sunglasses");
    newCol.append(img);

}


});