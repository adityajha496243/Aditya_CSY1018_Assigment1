function validateForm(){
  // This section validate the name of the form
  if (document.getElementById("fname").value=="") {
    alert("Enter your name");
    return false;
  }
  // =========================================
  // This section validate the email of the form
  if (document.getElementById("email").value=="") {
    alert("Enter your email address");
    return false;
  }
  // ================================================
  // =========================================
  // This section validate the phone of the form
  if (document.getElementById("phone").value=="") {
    alert("Enter your phone number");
    return false;
  }
  // ================================================
  // =========================================
  // This section validate the subject of the form
  if (document.getElementById("subject").value=="") {
    alert("Enter Subject");
    return false;
  }
  // ================================================
    // =========================================
  // This section validate the message of the form
  if (document.getElementById("message").value=="") {
    alert("Enter Message");
    return false;
  }
  // ================================================


}