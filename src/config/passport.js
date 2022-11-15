const passport = require('passport');
const localstrategy = require('passport-local').Strategy; // autenticar

//Importación de modelo usarios
const User = require('../models/user');

//Validación de usuario
passport.use(new localstrategy({
    usernameField: 'user_login',
    passwordField: 'password_login'
}, async (user_login, password_login, done) => {
    //Confirma el correo
    const user = await User.findOne({n_documento: user_login});
    if(!user){
        return done(null, false, {message: 'Usuario no existe'});
    }else{
        //Validación de contraseña
       const match = await user.matchPassword(password_login);
       if(match){
         return done(null, user)
       }else{
        return done(null, false, {message: 'Contraseña incorrecta'});
       }
    }
}));

passport.serializeUser((user, done) =>{
    done(null, user.id);
});

// Permisos de sesión y mantener sesión
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});