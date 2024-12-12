import React from "react";
import Logo from './favicon.png';
import './Header.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Alert } from "../../../Components/GlobalComponents";

 export const Header = ({ children }) => {

    const Navigate = useNavigate();

    const CerrarSesion = () => 
    {
        Swal.fire({
        showCancelButton: true,
        icon: "warning",
        text: "¿Está seguro de que desea cerrar sesión?",
        confirmButtonColor: '#28a745',
        cancelButtonColor: '#dc3545',
        confirmButtonText: 'Si',
        cancelButtonText: 'Cancelar',
        preConfirm: () => { 
                            localStorage.removeItem('UserToken'); 
                            Alert('Sesion cerrada correctamente','success',2000); 
                            Navigate('/'); 
                          }});
    }

    return (
        <header id="header" className="header fixed-top d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-between">
                <a className="logo2 d-flex align-items-center">
                    <img src={Logo} id="im" alt="HarBest Cloud" />
                    <span className="d-none d-lg-block">HarBest Cloud</span>
                </a>
            </div>

            {children}

            <div id="Div2" className="cp d-flex align-items-center justify-content-between">
                <a onClick={CerrarSesion}> <i className="bi bi-box-arrow-right"></i>&nbsp; Cerrar Sesión &nbsp;</a>
            </div>
        </header>
    );
};