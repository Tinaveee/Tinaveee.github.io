/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/*------------------ CONTACT FORM ---------------------------------------*/

function validateForm() {
  $('#info').html("There were some problems with your form submission:<br>Please fill in ");
  $('#errors').hide();
  
    if ( $('#name').val() == null || $('#name').val() == "") {
        $('#info').append("Name correctly.");
        $('#errors').show();
        return false;
     }else if ( $('#email').val() == null || $('#email').val() == "" || isAValidEmailAddress( $('#email').val() ) == false) {
       $('#info').append("Email correctly.");
       $('#errors').show();
         return false;
     }else if ( $('#enquiry').val() == null || $('#enquiry').val() == "select") {
      $('#info').append("Enquiry correctly.");
      $('#errors').show();
        return false;
     }else if ( $('#message').val() == null || $('#message').val() == "") {
   		$('#info').append("Message correctly.");
        $('#errors').show();
         return false;
     }
  
}


function isAValidEmailAddress(emailAddress){
    return /^[a-z0-9_\-\.]{2,}@[a-z0-9_\-\.]{2,}\.[a-z]{2,}$/i.test(emailAddress);
}

/*------------------ IMAGE DISPLAY ---------------------------------------*/

 
$("figure").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);












