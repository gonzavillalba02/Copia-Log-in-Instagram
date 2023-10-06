import React from "react";
import "./Form.css"

const Form = () => {
    return(<div className="Form">
        <div className="container-form">
            <img className="titulo" src="/Titulo.png" alt="Instagram" />
            <input type="text" placeholder="Teléfono, usuario o correo electrónico"/>
            <input type="password" placeholder="Contraseña"/>
            <button>Entrar</button>
            <img className="linea" src="/Linea.png" alt="Separador" />
            <div className="container-form-facebook">
                <img src="/facebook.png" alt="" />
                <p>Inicia sesión con Facebook</p>
            </div>
            <a href="https://www.instagram.com/accounts/password/reset/">¿Has olvidado la contraseña?</a>
        </div>
        <div className="registrate">
            <p>¿No tienes una cuenta?</p>
            <a href="https://www.instagram.com/accounts/emailsignup/">Regístrate</a>
        </div>
        <p className="Descarga-texto" >Descarga la aplicación.</p>
        <div className="Descargas">
            <img className="Descargas-img-google" src="/Google-play.png" alt="Google play" />
            <img className="Descargas-img-tilde" src="/mcaffe.png" alt="Mcaffe" />
            <img className="Descargas-img-mic" src="/Microsoft.png" alt="Microsoft" />
        </div>
    </div>)
}

export default Form;