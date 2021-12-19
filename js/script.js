(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

const email = document.querySelector("#email");
const failed = document.querySelector(".failed");
const success = document.querySelector(".success");
const btn = document.querySelector(".btn-primary");
btn.style.display = "none";
let cwb = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
function check() {

    if (email.value.match(cwb)) {
        email.style.borderColor = "#27ae60";
        email.style.background = "#eafaf1";
        failed.style.display = "none";
        success.style.display = "block";
        btn.style.display = "block";
    } else {

        email.style.borderColor = "#e74c3c";
        email.style.background = "#fceae9";
        failed.style.display = "block";
        success.style.display = "none";
        btn.style.display = "none";
    }

    if (email.value == "") {
        email.style.borderColor = "lightgrey";
        email.style.background = "#fff";
        failed.style.display = "none";
        success.style.display = "none";
        btn.style.display = "none";
    }

}