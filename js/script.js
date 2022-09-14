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
    console.log('clicked');
    validateForm();
});

//console.log()

//Functions
function validateForm() {
    if (password1.value != password2.value) {
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
        } else {
            console.log(checkRadio());
            if (checkRadio() == false) {
                errorMessage.innerText = "Please choose a gender";
            } else {
                console.log("Sign up was successful!");
            }
        }
    }
}

function checkRadio() {
    let checked;

    radio.forEach((gender) => {
        console.log(gender.unchecked);

        if (gender.unchecked) {
            checked = false;
        } else {
            checked = true;
        }
        return checked
    })
}


function setError(input, message) {
    const inputParent = input.parentElement;
    const inputIcon = inputParent.querySelector(".fa-exclamation-circle");
    inputIcon.style.visibility = "visible";
    errorMessage.innerText = message;
    errorMessage.style.padding = "0.5rem 1rem";
}