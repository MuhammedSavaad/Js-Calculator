// * ========= POP UP FUNCTIONS =======
var popup = document.getElementById("popup");
var body = document.body;

let formValidated = localStorage.getItem("FormValidated");
console.log(formValidated);

function FormValidation(){
    localStorage.setItem("FormValidated", true)
}

if(localStorage.getItem("FormValidated")==null){
    body.classList.add("hide");
}

if(localStorage.getItem("FormValidated")=="true"){
    body.classList.remove("hide");
    popup.classList.add("hide");
}


// localStorage.removeItem("FormValidated");