formSession = document.getElementById('formSession');
formSession.addEventListener('submit', validarLogin);

function validarLogin() {
    // Frena el evento: Click
    event.preventDefault();
    // Captura el valor que tienen los controles del formulario
    let correo = document.getElementById('correo').value;
    let pass = document.getElementById('pass').value;
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
    else {
        alert('Los datos son incorrectos');
    }
    
}