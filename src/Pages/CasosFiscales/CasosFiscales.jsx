import "./CasosFiscales.css";
import { Header } from "../PageComponents/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";

export function CasosFiscales()
{
    const UserName = localStorage.getItem("UserName");
    const UserSurName = localStorage.getItem("UserSurName");
    const UserToken = localStorage.getItem("UserToken");

    const [IsChecked,SetIsChecked] = useState(true);

    const [CasosInc,SetCasosInc] = useState([]);

    useEffect(()=> {
        axios
        .get('https://localhost:7233/CasosFiscales/GetCasosFiscales', { headers: { Authorization: `Bearer ${UserToken}`}})
        .then(({data}) => { data.forEach((Casos,index) => {SetCasosInc((CasosAnt) => ({...CasosAnt, [index]: Casos}))}) })
        .catch(({error}) => {console.log(error);});     
    },[UserToken]);


    return (<>
        <Header>
            <div className="header1 toggle-sidebar-btn" onClick={() => {SetIsChecked(!IsChecked)}}>
                <input className="checkbox" type="checkbox" id="chk" checked={IsChecked} readOnly/>
                
                <div className="hamburger-lines">
                    <span className="line line1" />
                    <span className="line line2" />
                    <span className="line line3" />
                </div> 
            </div>

            <div id="User" className="d-flex">
                <a> 
                    <i className="bi bi-person-circle rounded-circl"></i>
                    {`${UserName+" "+UserSurName}`}
                </a>
            </div>
        </Header>

        <aside id="sidebar" className={`sidebar ${!IsChecked ? "SidebarHide" : ""}`}>
            <ul className="sidebar-nav" id="sidebar-nav">                    
                <li className="nav-heading">Consulta de casos</li>
                
                <hr className='divioer' />
            </ul>
        </aside>

        <main id="main" className={`main  ${!IsChecked ? "SidebarHide" : ""}`}>
            <div id='DivOptions'> 
                            
                <span className='DOHeading'>Casos Actuales</span>
        
                <span className="input-group-text cp">
                    <i className='bi bi-arrow-down' />
                </span>
                                      
                <div className="input-group ">
                    <span className="input-group-text">Cliente</span>
                    <input type="text" className="form-control" name='FilterCliente'/>
                </div>
            </div>
        
            <div>
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>CODIGO</th>
                            <th>CLIENTE</th>
                            <th>FECHA INICIO</th>
                            <th>FECHA VENCIMIENTO</th>
                            <th>OBSERVACIONES</th>
                            <th>DETALLES</th>
                        </tr>
                    </thead>

                    <tbody>
                        <>{
                            Object.entries(CasosInc).map(element => {
                              
                                return (
                                    <tr>
                                        <th>{element[1].codigo}</th>
                                        <th>{element[1].cliente}</th>
                                        <th>{element[1].fechaInicio}</th>
                                        <th>{element[1].fechaVencimiento}</th>
                                        <th>LOREN IMPSUM</th>
                                        <th><a href="./">VER DETALLES</a></th>
                                    </tr>
                                )  
                            })

                        }</>
                    </tbody> 
                </table>
            </div>
        </main>   
    </>)
}