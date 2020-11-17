// Cade Brown
// Function for showing the users password on LOGIN.html and REGISTER.html

// show pass function which makes typed password visible
function showPass() {
  // assigns variable x to the element passwordtxt
  var x = document.getElementById("passwordtxt");
  // if x is of type password then it is changed to text so it's visible
  if (x.type === "password") {
    x.type = "text";
    // otherwise it will be changed back to type password making it unreadable
  } else {
    x.type = "password";
  }
}
