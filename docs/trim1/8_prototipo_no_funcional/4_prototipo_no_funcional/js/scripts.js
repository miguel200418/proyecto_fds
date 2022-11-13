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
    // Validar Contacto
    if (id == "submit-contac") {
        validarContac();
    }
    // Cancelar Contacto
    else if (id == "cancelar-contac") {
        cancelarContac();
    }
    // Validar Login
    else if (id == "submit-login") {
        validarLogin();
    }
    // Cancelar Login
    else if (id == "cancelar-login") {
        cancelarLogin();
    } 
    // Validar Registro
    else if (id == "submit-register") {
        validarRegister();
    }
    // Cancelar Registro
    else if (id == "cancelar-register") {
        cancelarRegister();
    }
    // Validar Olvido Contraseña
    else if (id == "submit-olvido") {
        validarForgot();
    }
    // Cancelar Olvido Contraseña
    else if (id == "cancelar-olvido") {
        cancelarForgot();
    }
}

/* -------------------------------------------------------------------------------- */
/* FUNCIONES ---------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------- */
// Validar Contacto
function validarContac() {
    // Captura el valor que tienen los controles del formulario
    nombres = document.getElementById('nombres').value;
    apellidos = document.getElementById('apellidos').value;
    correo = document.getElementById('correo-cont').value;
    asunto = document.getElementById('asunto').value;
    mensaje = document.getElementById('mensaje').value;
    // Expresiones Regulares para validar controles del formulario
    let textoPatron = /^[ a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙñÑ]+$/;
    let correoPatron = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    // Frena el evento: Click
    event.preventDefault();
    // Nombres: Cuando está vacío
    if (nombres === "") {
        swal({
            title: "Verifique el campo Nombres",
            text: "Los Nombres NO pueden estar vacíos",
            icon: "error",
            button: "Aceptar",
        })
        .then((value) => {
            document.getElementById('nombres').focus();
        });        
    }
    // Nombres: No puede contener números o caracteres especiales
    else if (!textoPatron.test(nombres)) {
        swal({
            title: "Verifique el campo Nombres",
            text: "Los Nombres NO pueden contener números o caracteres especiales",
            icon: "error",
            button: "Aceptar",
        })
        .then((value) => {
            document.getElementById('nombres').focus();
        });	
        
    }
    // Nombres: No puede contener números o caracteres especiales
    else if (nombres.length < 2 || nombres.length > 50) {
        swal({
            title: "Verifique el campo Nombres",
            text: "Los Nombres deben contener entre 2 y 50 caracteres",
            icon: "error",
            button: "Aceptar",
        })
        .then((value) => {
            document.getElementById('nombres').focus();
        });
    }
    // Apellidos: Cuando está vacío
    else if (apellidos === "") {
        alert("Los Apellidos NO pueden estar vacíos");
        document.getElementById('apellidos').focus();
    }
    // Apellidos: No puede contener números o caracteres especiales
    else if (!textoPatron.test(apellidos)) {
        alert("Los Apellidos NO pueden contener números o caracteres especiales");
        document.getElementById('apellidos').focus();
    }
    // Apellidos: No puede contener números o caracteres especiales
    else if (apellidos.length < 2 || apellidos.length > 50) {
        alert("Los Apellidos deben tener entre 2 y 50 caracteres");
        document.getElementById('apellidos').focus();
    }
    // Correo: Cuando está vacío
    else if (correo === "") {
        alert("El Correo NO puede estar vacío");
        document.getElementById('correo-cont').focus();
    }
    // Correo: Es un correo (@, .com, .es, etc)
    else if (!correoPatron.test(correo)) {
        alert("No es un correo válido");
        document.getElementById('correo-cont').focus();
    }
    // Asunto: Cuando está vacío
    else if (asunto === "") {
        alert("Los Asunto NO pueden estar vacíos");
        document.getElementById('asunto').focus();
    }
    // Asunto: No puede contener números o caracteres especiales
    else if (!textoPatron.test(asunto)) {
        alert("Los Asunto NO pueden contener números o caracteres especiales");
        document.getElementById('asunto').focus();
    }
    // Asunto: No puede contener números o caracteres especiales
    else if (asunto.length < 10 || asunto.length > 50) {
        alert("Los Asunto deben tener entre 10 y 50 caracteres");
        document.getElementById('asunto').focus();
    }
    // Mensaje: Cuando está vacío
    else if (mensaje === "") {
        alert("Los Mensaje NO pueden estar vacíos");
        document.getElementById('mensaje').focus();
    }
    // Mensaje: No puede contener números o caracteres especiales
    else if (!textoPatron.test(mensaje)) {
        alert("Los Mensaje NO pueden contener números o caracteres especiales");
        document.getElementById('mensaje').focus();
    }
    // Mensaje: No puede contener números o caracteres especiales
    else if (mensaje.length < 30 || mensaje.length > 300) {
        alert("Los Mensaje deben tener entre 30 y 300 caracteres");
        document.getElementById('mensaje').focus();
    }
    // Se envía el mensaje
    else {
        alert("El mensaje se ha enviado correctamente. En menos de 24 horas el Administrador se comunicará con Usted por medio de su Correo Electrónico");
        document.getElementById('nombres').value = "";
        document.getElementById('apellidos').value = "";
        document.getElementById('correo-cont').value = "";
        document.getElementById('asunto').value = "";
        document.getElementById('mensaje').value = "";
        window.location = 'index.html#contactenos';        
    }
}
// Cancelar Contacto
function cancelarContac() {    
    alert("No se ha guardado ningún dato");
}
// Validar Login
function validarLogin() {
    // Captura el valor que tienen los controles del formulario
    let correo = document.getElementById('correo').value;
    let pass = document.getElementById('pass').value; 
    // Expresiones Regulares para validar controles del formulario
    let TextoPatron = /^[ a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙñÑ]+$/;
    let correoPatron = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    // Frena el evento: Click
    event.preventDefault();
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
        if (correo === "admin@correo.com" && pass == "12345") {
            window.location = '../admin.html';
        }
        // Validar el acceso al Dashboard: Cliente
        else if (correo === "cliente@correo.com" && pass == "12345") {
            window.location = '../customer.html';
        }
        // Validar el acceso al Dashboard: Vendedor
        else if (correo === "vendedor@correo.com" && pass == "12345") {
            window.location = '../seller.html';
        }
        // Datos Incorrectos
        else {
            alert('Los datos son incorrectos');
        }  
    }
      
}
// Cancelar Login
function cancelarLogin() {
    alert("No se ha guardado ningún dato");
}
// Validar Registro
function validarRegister() {
    // Captura el valor que tienen los controles del formulario
    nombres = document.getElementById('nombres-reg').value;
    apellidos = document.getElementById('apellidos-reg').value;
    correo = document.getElementById('correo-reg').value;
    pass = document.getElementById('pass-reg').value;
    passConfirm = document.getElementById('conf-pass-reg').value;
    // Expresiones Regulares para validar controles del formulario
    let textoPatron = /^[ a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙñÑ]+$/;
    let correoPatron = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    // Frena el evento: Click
    event.preventDefault();
    // Nombres: Cuando está vacío
    if (nombres === "") {
        alert("Los Nombres NO pueden estar vacíos");
        document.getElementById('nombres-reg').focus();
    }
    // Nombres: No puede contener números o caracteres especiales
    else if (!textoPatron.test(nombres)) {
        alert("Los Nombres NO pueden contener números o caracteres especiales");
        document.getElementById('nombres-reg').focus();
    }
    // Nombres: No puede contener números o caracteres especiales
    else if (nombres.length < 2 || nombres.length > 50) {
        alert("Los Nombres deben tener entre 2 y 50 caracteres");
        document.getElementById('nombres-reg').focus();
    }
    // Apellidos: Cuando está vacío
    else if (apellidos === "") {
        alert("Los Apellidos NO pueden estar vacíos");
        document.getElementById('apellidos-reg').focus();
    }
    // Apellidos: No puede contener números o caracteres especiales
    else if (!textoPatron.test(apellidos)) {
        alert("Los Apellidos NO pueden contener números o caracteres especiales");
        document.getElementById('apellidos-reg').focus();
    }
    // Apellidos: No puede contener números o caracteres especiales
    else if (apellidos.length < 2 || apellidos.length > 50) {
        alert("Los Apellidos deben tener entre 2 y 50 caracteres");
        document.getElementById('apellidos-reg').focus();
    }
    // Correo: Cuando está vacío
    else if (correo === "") {
        alert("El Correo NO puede estar vacío");
        document.getElementById('correo-reg').focus();
    }
    // Correo: Es un correo (@, .com, .es, etc)
    else if (!correoPatron.test(correo)) {
        alert("No es un correo válido");
        document.getElementById('correo-reg').focus();
    }
    // Password: Cuando esté vacío
    else if (pass === "") {
        alert("La contraseña NO puede estar vacía");
        document.getElementById('pass-reg').focus();
    }
    // Password: Debe contener entre 5 y 8 caracteres
    else if (pass.length < 5 || pass.length > 8) {
        alert("La contraseña debe tener entre 5 y 8 caracteres");
        document.getElementById('pass-reg').focus();
    }
    // Confirmación: Cuando esté vacío
    else if (passConfirm === "") {
        alert("La confirmación de contraseña NO puede estar vacía");
        document.getElementById('conf-pass-reg').focus();
    }
    // Confirmación: Debe contener entre 5 y 8 caracteres
    else if (passConfirm.length < 5 || passConfirm.length > 8) {
        alert("La contraseña debe tener entre 5 y 8 caracteres");
        document.getElementById('conf-pass-reg').focus();
    }
    // Password y Confirmación: Cuando no sean iguales
    else if (pass !== passConfirm) {
        alert("La Contraseña y la Confirmación debe ser iguales");
        document.getElementById('pass-reg').value = "";
        document.getElementById('conf-pass-reg').value = "";
        document.getElementById('pass-reg').focus();
    }
    // Se envía el Registro de Usuario
    else {
        alert("Usuario Creado correctamente. El Administrador se comunicará con Usted por medio de su Correo Electrónico para asignarle el ROL");
        document.getElementById('nombres-reg').value = "";
        document.getElementById('apellidos-reg').value = "";
        document.getElementById('correo-reg').value = "";
        document.getElementById('pass-reg').value = "";
        document.getElementById('conf-pass-reg').value = "";        
        window.location = 'login.html';
    }
}
// Cancelar Registro
function cancelarRegister() {
    alert("No se ha guardado ningún dato");
    window.location = 'login.html';
}
// Validar Olvido Contraseña
function validarForgot() {
    // Captura el valor que tienen los controles del formulario    
    correo = document.getElementById('correo-olv').value;
    // Expresiones Regulares para validar controles del formulario    
    let correoPatron = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    // Frena el evento: Click
    event.preventDefault();
    // Correo: Cuando está vacío
    if (correo === "") {
        alert("El Correo NO puede estar vacío");
        document.getElementById('correo-olv').focus();
    }
    // Correo: Es un correo (@, .com, .es, etc)
    else if (!correoPatron.test(correo)) {
        alert("No es un correo válido");
        document.getElementById('correo-olv').focus();
    }
    // Se envía el correo
    else {
        alert("La contraseña ha sido restaurada. Revise su correo electrónico y siga los pasos sugeridos");        
        document.getElementById('correo-olv').value = "";        
        window.location = 'login.html';
    }

}
// Cancelar Olvido Contraseña
function cancelarForgot() {
    alert("No se ha guardado ningún dato");
    window.location = 'login.html';
}