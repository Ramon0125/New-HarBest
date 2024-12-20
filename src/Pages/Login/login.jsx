import React, { useState, useRef, useEffect } from "react";
import { Res, IsntEmpty, Alert, Responses } from "../../Components/GlobalComponents";
import axios from 'axios';
import './LoginStyles.css';
import Logo from '../PageComponents/Logo.png';
import { useNavigate } from "react-router-dom";


function Login() 
{
    const Navigate = useNavigate();  
    const UserToken = localStorage.getItem('UserToken');

    useEffect(() => {

            if(UserToken)
            {
                axios
                .get('https://localhost:7233/SignIn/Watch',{ headers: { Authorization: `Bearer ${UserToken}` }})
                .then(({ data }) => { 
                                        if(data.success && data.message === "SIC") 
                                        { Navigate('/HomePortal');} 
                                    })
                .catch(( error ) => {   
                                        if(error.response && error.response.status === 401) {localStorage.removeItem('UserToken')}  
                                        else {Alert(Res.EELP,Res.E,2000)} 
                                    });
            }
    });

    const User = useRef(null);
    const [FocusUser, SetFocusUser] = useState(false);

    const pass = useRef(null);
    const [FocusPass, SetFocusPass] = useState(false);

    const [CheckState,SetCheckState] = useState(false);

    const [Loading,SetLoading] = useState(false);

    const SignIn = (event) => {  event.preventDefault(); SetLoading(true);

        const UserValue = User.current.value;
        const PassValue = pass.current.value;

        if (IsntEmpty(UserValue, PassValue)) 
        {
            axios
            .post('https://localhost:7233/SignIn/Try',{email: UserValue, clave: PassValue})
            .then(({ data }) => { 
                                    if(Responses(data,{...Res,ECI: 'Usuario o contrasena incorrecta', SIC: 'Sesion iniciada correctamente'}))
                                    {
                                        const { apellidoUsuario: UserSurName, emailUsuario: UserEmail, nombreUsuario: UserName} = data.userInfo;
                                        
                                        localStorage.setItem('UserToken', data.token);  
                                        localStorage.setItem('UserSurName', UserSurName);
                                        localStorage.setItem('UserEmail', UserEmail);
                                        localStorage.setItem('UserName', UserName);

                                        Navigate('/HomePortal'); 
                                    }

                                    SetLoading(false);
            })
            .catch(() => { Alert(Res.EELS,Res.E,2000); SetLoading(false);});
        }
        else { Alert(Res.CTC, Res.W, 2000); SetLoading(false);}
    }

    return (
        <main>

            <div id="formWrapper" className="shadow-lg">
                <form id="form">
                    <div className="logo">
                        <img src={Logo} id="im" alt="HarBest Cloud" />
                    </div>

                    <div className="form-item a">
                        <label 
                            htmlFor="User" 
                            className={`formLabel ${FocusUser ? 'FormTop' : ''}`}>Usuario</label>
                        
                        <input 
                            id='User'
                            ref={User}
                            onFocus={() => {SetFocusUser(true)}}
                            onBlur={() => {SetFocusUser(IsntEmpty(User.current.value))}}
                            autoComplete="off"
                            className="form-style" 
                            maxLength="50" 
                        />
                    </div>
       
                    <div className="form-item">
                        <label 
                            htmlFor="password" 
                            className={`formLabel ${FocusPass ? 'FormTop' : ''}`}>Contraseña</label>

                        <input 
                            id="password" 
                            type={CheckState ? "text" : "password"} 
                            ref={pass}
                            onFocus={() => {SetFocusPass(true)}}
                            onBlur={() => {SetFocusPass(IsntEmpty(pass.current.value))}}
                            maxLength="20" 
                            className="form-style" 
                            autoComplete="off"
                        />
                    </div>
 
                    <div className="form-check">                       
                        <input 
                            id="Visor" 
                            className="form-check-input" 
                            type="checkbox" 
                            onChange={() => {SetCheckState(!CheckState)}} 
                            checked={CheckState}
                        />

                        <label htmlFor="Visor" className="cp"> Mostrar contraseña </label>

                    </div>

                    <div className="form-item">
                        <button
                            type="submit" 
                            className="login pull-right" 
                            value="Iniciar Sesión" 
                            onClick={SignIn}
                            disabled={Loading}
                        >
                        <span> { !Loading ? "Iniciar Sesion" : "Cargando... ◷" } </span>
                        </button>    
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Login