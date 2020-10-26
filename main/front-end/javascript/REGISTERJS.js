function showPass() {
  var x = document.getElementById("passwordtxt");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
