// Validación de números
function solonumeros(e){
    let key = e.charCode;
    return key >= 48 && key <= 57;
}

//Restricción de letras en nro de documento
let nrodocumento = document.getElementById('wm_signup_cedula');
nrodocumento.addEventListener('keypress', function(e){
    if(!solonumeros(event)){
        e.preventDefault();
    };
});


//Restricción de letras en telefono
let telefono = document.getElementById('wm_signup_telefono');
telefono.addEventListener('keypress', function(e){
    if(!solonumeros(event)){
        e.preventDefault();
    };
});


//Restricción de letras en password
let password = document.getElementById('wm_signup_password');
password.addEventListener('keypress', function(e){
    if(!solonumeros(event)){
        e.preventDefault();
    };
});


//Restricción de letras en confirmar password
let confirmpassword = document.getElementById('wm_signup_confirmpass');
confirmpassword.addEventListener('keypress', function(e){
    if(!solonumeros(event)){
        e.preventDefault();
    };
});
