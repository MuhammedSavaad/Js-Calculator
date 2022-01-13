var popup = document.getElementById("popup");

let formValidated = localStorage.getItem("FormValidated");
console.log(formValidated);

function FormValidation(){
    localStorage.setItem("FormValidated", true)
}

if(localStorage.getItem("FormValidated")=="true"){
    popup.classList.add("hide");
}

// localStorage.removeItem("FormValidated");