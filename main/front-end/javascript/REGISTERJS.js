function showPass() {
  var x = document.getElementById("passwordtxt");
  if (x.type === "password") {
    x.type = "text";
    document.body.style.color = "purple";
  } else {
    x.type = "password";
  }
}
