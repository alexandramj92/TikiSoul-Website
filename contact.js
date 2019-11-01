$(document).ready(function(){

    loadFields();

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




//event listener to save fields to local storage
$( "#email" ).keyup(function() {
    console.log( "Handler for .keyup() called." );
    email = $("#email").val();
    localStorage.setItem("email", email);
    localStorage.setItem("timeStamp", Date.now());
  });

$("#firstName").keyup(function(){
    firstName = $("#firstName").val();
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("timeStamp", Date.now());

});

$("#lastName").keyup(function(){
    lastName = $("#lastName").val();
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("timeStamp", Date.now());

})

$("#contactText").keyup(function(){
    message = $("#contactText").val();
    localStorage.setItem("message", message);
    localStorage.setItem("timeStamp", Date.now());

})

  //function to load fields from local storage
    function loadFields(){
    var msBeforeClearingStorage = 600000;
    if (Date.now()-localStorage.getItem("timeStamp")>msBeforeClearingStorage){
        localStorage.clear();
        return;
    }
    var email = localStorage.getItem("email");
    $("#email").val(email);

    var firstName = localStorage.getItem("firstName");
    $("#firstName").val(firstName);

    var lastName = localStorage.getItem("lastName");
    $("#lastName").val(lastName);

    var message = localStorage.getItem("message");
    $("#contactText").val(message);
}






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
