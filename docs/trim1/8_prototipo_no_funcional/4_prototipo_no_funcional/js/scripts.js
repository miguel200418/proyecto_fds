/* -------------------------------------------------------------------------------- */
/* DOM: CAPTURADOR DE CLICK Y ID (CLASES) ----------------------------------------- */
/* -------------------------------------------------------------------------------- */
const capturaId = document.querySelectorAll(".captura-id");
// Captura el Id
capturaId.forEach(captura => {
    captura.addEventListener("click", mainIndex);
});
// Método Principal
function mainIndex() {
    id = event.target.getAttribute("id");
    if (id == "submint_login") {
        validarLogin();
    }
}

/* -------------------------------------------------------------------------------- */
/* FUNCIONES ---------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------- */
function validarLogin() {
    // Frena el evento: Click
    event.preventDefault();
    // Captura el valor que tienen los controles del formulario
    let correoPatron = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let correo = document.getElementById('correo').value;
    let pass = document.getElementById('pass').value; 
    // Correo: Cuando está vacío
    if (correo === "") {
        alert("El Correo NO puede estar vacío");
        document.getElementById('correo').focus();
    }
    // Correo: Es un correo (@, .com, .es, etc)
    else if (!correoPatron.test(correo)) {
        alert("No es un correo válido");
        document.getElementById('correo').focus();
    }
    // Password: Cuando esté vacío
    else if (pass === "") {
        alert("La contraseña NO puede estar vacía");
        document.getElementById('pass').focus();
    }
    // Password: Debe contener entre 5 y 8 caracteres
    else if (pass.length < 5 || pass.length > 8) {
        alert("La contraseña debe tener entre 5 y 8 caracteres");
        document.getElementById('pass').focus();
    }
    else {
        // Validar el acceso al Dashboard: Administrador
        if (correo == "admin@correo.com" && pass == "12345") {
            window.location = '../admin.html';
        }
        // Validar el acceso al Dashboard: Cliente
        else if (correo == "cliente@correo.com" && pass == "12345") {
            window.location = '../customer.html';
        }
        // Validar el acceso al Dashboard: Vendedor
        else if (correo == "vendedor@correo.com" && pass == "12345") {
            window.location = '../seller.html';
        }
        // Datos Incorrectos
        else {
            alert('Los datos son incorrectos');
        }  
    }
      
}