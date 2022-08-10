
// sendContactMail
const submitBtn = document.getElementById('submitBtn');
const inputName = document.getElementById('input_name');
const inputEmail = document.getElementById('input_email');
const inputDesc = document.getElementById('input_desc');

var x = document.getElementById("toast")
var toastIcon = document.getElementById("toast_icon")
var toastDesc = document.getElementById("toast_desc")


const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

function submitBtnOnClickListner() {

    try {
        console.log("submitting ... ");

        if (inputName.value && inputName.value.trim() && inputEmail.value && inputEmail.value.trim() && inputDesc.value && inputDesc.value.trim()) {


            if (!validateEmail(inputEmail.value.trim())) {
                alert("Not a valid email");
                return;
            }

            fetch("https://formsubmit.co/ajax/parshunikam0612@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    Name: inputName.value,
                    "Email ID": inputEmail.value,
                    Message: inputDesc.value
                })
            }).then(response => response.json())
                .then(data => {
                    console.log(data);
                    alert(data.message)

                    if (data.success) {
                        inputName.value = "";
                        inputEmail.value = "";
                        inputDesc.value = "";
                    }

                })
                .catch(error => console.log(error));

        }
        else {
            alert("No blank data allowed");
        }

        console.log("Done submitted 👍");
    } catch (error) {
        console.log("😟 Failed to submit the form.");
        console.error("Error while submitting form :- " + error);
    }
}

