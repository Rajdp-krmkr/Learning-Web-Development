const btn = document.getElementById("submitBTN");

function serverFunction(username, email) {
  // storing username in database
}

btn.addEventListener("click", function () {
  let username = document.getElementById("username");
  let usernameValue = username.value;

  let email = document.getElementById("email");
  let emailValue = email.value;

  console.log(
    "username value: " + usernameValue + ", email value: " + emailValue
  );

  serverFunction(usernameValue, emailValue);
});



document.getElementById("username").addEventListener("input", function(event) {
    document.getElementById("displayName").innerText = event.target.value;
})