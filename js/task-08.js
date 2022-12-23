const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit)

function onFormSubmit (event) {
event.preventDefault ()
    
const {
elements : {email,password},
} = event.currentTarget;

if (email.value === "" || password.value === "") {
  return console.log("Всі поля повинні бути заповнені");
} else {
    console.log(`Email: ${email.value}, Password: ${password.value} `);
}
 event.currentTarget.reset()
}
