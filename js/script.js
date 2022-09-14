//Variable Declarations

const myForm = document.forms["form"],
    userName = myForm["username"],
    phoneNumber = myForm["number"],
    radio = myForm["radio"],
    password1 = myForm["password1"],
    password2 = myForm["password2"],
    submit = myForm["submit"],
    errorMessage = document.querySelector("#error-msg");


//EventListeners

myForm.addEventListener('submit', function(event){
    event.preventDefault();
    validateForm();
});



//Functions

// This function validates our form
function validateForm() {
    beforeValidate();

    if (password1.value.length < 7 || password2.value.length < 7) {
        setError(password1, "Password cannot have less than 7 digits");
    } else if (password1.value != password2.value) {
        setError(password2, "Passwords do not match");
    } else {
        if (userName.value === " ") {
            setError(userName, "Username cannot be blank");
        } else if (userName.value.length >= 13) {
            setError(userName, "Username cannot have more than 12 characters");
        } else if (userName.value.indexOf(" ") > -1) {
            setError(userName, "Username cannot have spaces");
        } else if (phoneNumber.value === " ") {
            setError(phoneNumber, "Phone cannot be blank");
        } else if (phoneNumber.value.indexOf(" ") > -1) {
           setError(phoneNumber, "Phone cannot have spaces");
        } else if (phoneNumber.value.length >= 15) {
            setError(phoneNumber, "Phone cannot have more than 12 characters");
        } else if (isNaN(phoneNumber.value)) {
            setError(phoneNumber, "Phone cannot have letters or symbols");
        } else {
            let checked, gender;

            if (document.getElementById('male_gender').checked) {
                gender = document.getElementById('male_gender').value;
                checked = true;
            } else if (document.getElementById('female_gender').checked) {
                gender = document.getElementById('female_gender').value;
                checked = true;
            } else {
                checked = false;
            }

            if (checked == false) {
                errorMessage.innerText = "Please choose a gender";
            } else {
                errorMessage.innerText = "Successfully validated!";
                errorMessage.style.color = "rgba(0, 231, 0, 0.80)";
                alert(
                `Validation successful!

                username: ${userName.value}, phone number: ${phoneNumber.value},
                gender: ${gender}, password: ${password2.value}`
                )
            }
        }
    }
}

// This functions resets our DOM for new validation
function beforeValidate() {
    errorMessage.style.color = "rgba(255, 0, 0, 0.9)";
    const errorIcons = document.querySelectorAll(".fa-exclamation-circle");
    errorIcons.forEach((icon)=>{icon.style.visibility = "hidden"});
}

// This function make errors changes to the DOM
function setError(input, message) {
    const inputParent = input.parentElement;
    const errorIcon = inputParent.querySelector(".fa-exclamation-circle");
    errorIcon.style.visibility = "visible";
    errorMessage.innerText = message;
    errorMessage.style.padding = "0.5rem 1rem";
    errorMessage.style.color = "rgba(255, 0, 0, 0.9)";
}