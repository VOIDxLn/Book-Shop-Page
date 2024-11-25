
// ocultar y mostrar contraseña: Pagina registro:

//Contraseña

const pass = document.getElementById("pass");
const icon = document.getElementById("bx-pass");

icon.addEventListener("click", e => {
    if(pass.type === "password"){
        pass.type = "text";
        icon.classList.remove('bx-show-alt')
        icon.classList.add('bx-hide')
    }
    else{
        pass.type = "password";
        icon.classList.add('bx-show-alt')
        icon.classList.remove('bx-hide')
    }
});


// Confirmar Contraseña

const confirmPass = document.getElementById("ConfirmPass");
const conIcon = document.getElementById("confirm-bx");

conIcon.addEventListener("click", e => {
    if(confirmPass.type === "password"){
        confirmPass.type = "text";
        conIcon.classList.remove('bx-show-alt')
        conIcon.classList.add('bx-hide')
    }
    else{
        confirmPass.type = "password";
        conIcon.classList.add('bx-show-alt')
        conIcon.classList.remove('bx-hide')
    }
});


