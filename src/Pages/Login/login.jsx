import React, { useState, useRef, useEffect } from "react";
import { Res, IsntEmpty, Alert, Responses } from "../../Components/GlobalComponents";
import axios, { HttpStatusCode } from 'axios';
import './LoginStyles.css';
import Logo from '../PageComponents/Logo.png';
import { useNavigate } from "react-router-dom";


function Login() 
{
    const Navigate = useNavigate();  

    useEffect(() => {
        
         
        const ValidarInicio = async () => {
                
            const UserToken = localStorage.getItem('UserToken');

            if(UserToken)
            {
                axios
                .get('https://localhost:7233/SignIn/Watch',{ headers: { Authorization: `Bearer ${UserToken}` }})
                .then(({ data }) => { 
                                        if(data.success && data.message === "SIC") 
                                        { Navigate('/HomePortal');} 
                                    })
                .catch(( error ) => { if(error.response.status === 401){localStorage.removeItem('UserToken')}  });
            }
        }

        ValidarInicio();

    });

    const User = useRef(null);
    const [FocusUser, SetFocusUser] = useState(false);

    const pass = useRef(null);
    const [FocusPass, SetFocusPass] = useState(false);
    const [PassType, SetPassType] = useState('password')

    const HandlerBlur = (event) => {  event.target.id === 'User' ? SetFocusUser(IsntEmpty(User.current.value)) : SetFocusPass(IsntEmpty(pass.current.value)); }
    const HandlerFocus = (event) => { event.target.id === 'User' ? SetFocusUser(true) : SetFocusPass(true);}
    const HandleCheck = () => { SetPassType(PassType === 'password' ? 'text' : 'password')}

    const [Loading,SetLoading] = useState(false);

    const SignIn = async (event) => {  
        
        event.preventDefault();

        SetLoading(true);

        const UserValue = User.current.value;
        const PassValue = pass.current.value;

        
        if (IsntEmpty(UserValue, PassValue)) 
        {
            axios
            .post('https://localhost:7233/SignIn/Try',{email: UserValue, clave: PassValue})
            .then(({ data }) => { 
                                    if(Responses(data,{...Res,ECI: 'Usuario o contrasena incorrecta', SIC: 'Sesion iniciada correctamente'}))
                                    {localStorage.setItem('UserToken',data.token);  Navigate('/HomePortal'); }
                                  })
            .catch(() => { Alert(Res.EELS,Res.E,2000); });
        } 
        else { Alert(Res.CTC, Res.W, 2000); }

        SetLoading(false);
        
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
                            onFocus={HandlerFocus}
                            onBlur={HandlerBlur}
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
                            type={PassType} 
                            ref={pass}
                            onFocus={HandlerFocus}
                            onBlur={HandlerBlur}
                            onChange={HandlerFocus}
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
                            onClick={HandleCheck} 
                        />

                        <label htmlFor="Visor" className="cp"> Mostrar contraseña </label>

                    </div>

                    <div className="form-item">
                        <button
                            type="submit" 
                            className="login pull-right" 
                            value="Iniciar Sesión" 
                            onClick={SignIn}
                        >
                            <span className={ Loading ? "spinner-border spinner-border-sm" : ""} role="status" aria-hidden="true">Iniciar Sesion</span>
                        </button>    
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Login