   // Validación de solo números
   function soloNumeros(e) {
    var key = e.charCode;
    return key >= 48 && key <= 57;
}

//Solo números en usuario
let input_user = document.getElementById('user_login');
input_user.addEventListener('keypress', function (e) {
    if (!soloNumeros(event)) {
        e.preventDefault();
    }
});

// Solo número en password
let input_password = document.getElementById('password_login');
input_password.addEventListener('keypress', function (e) {
    if (!soloNumeros(event)) {
        e.preventDefault();
    }
});

// Mostrar contraseña
let eyepass = document.getElementById('eye-pass');
let eyepasshd = document.getElementById('eye-pass-hidden');
eyepass.addEventListener('click', function () {
    eyepass.style.display = "none";
    eyepasshd.style.display = "inline";

    // input del password
    input_password.setAttribute('type', 'text');

});
eyepasshd.addEventListener('click', function () {
    eyepass.style.display = "inline-block";
    eyepasshd.style.display = "none";

    //input del password
    input_password.setAttribute("type", "password");
});