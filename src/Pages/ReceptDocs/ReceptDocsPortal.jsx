import { useEffect, useRef, useState } from 'react';
import { Header } from '../PageComponents/Header/Header';
import './ReceptDocsPortal.css';
import axios from 'axios'
import { Alert,IsntEmpty,Res } from '../../Components/GlobalComponents';
import { ExportarExcel } from '../../Components/ExportarExcel';

export default function ReceptsDocs(){

    const UserToken = localStorage.getItem("UserToken");
    const [IsChecked,SetIsChecked] = useState(true);

    const [SidebarItems,SetSidebarItems] = useState([]);
    
    const [IActual,SetIActual] = useState();

    const [DocsClientes,SetDocsClientes] = useState({});

    const SelectAActual = useRef(null);
    const [AActual,SetAActual] = useState(2024);
    const HandleAActual = () => { SetAActual(SelectAActual.current.value)  }

    const ClienteEspec = useRef(null);
    const [ClienteFil,SetClienteFil] = useState();
    const [FilterClient,SetFilterClient] = useState();

    const HandlerFilter = () => { 

        SetFilterClient(IsntEmpty(ClienteEspec.current.value)); 
        SetClienteFil(ClienteEspec.current.value)
    };

    useEffect(() => {
        
        Promise.all([
            axios.get('https://localhost:7233/DocsRecepts/GetSidebarItems', {headers: { Authorization: `Bearer ${UserToken}` },}),
            axios.get('https://localhost:7233/DocsRecepts/GetDocsRecepts', {headers: { Authorization: `Bearer ${UserToken}` },})
        ])
        .then(([SidebarResponse,DocsRecResponse]) => {
          
            const { success: sidebarSuccess, sidebarItems } = SidebarResponse.data;
            const { success: DocsReceptsSuccess, docsRecepts } = DocsRecResponse.data;     

            if(!sidebarSuccess || !sidebarItems || !DocsReceptsSuccess || !docsRecepts)
            { return Alert(Res.EELP, Res.E, 2000); }
            
            SetSidebarItems(sidebarItems);      

            if(sidebarItems[0]){ SetIActual(sidebarItems[0]) }

            docsRecepts.forEach((Item) => { SetDocsClientes((Docs) => ({ ...Docs, [Item.nombreCliente]: JSON.parse(Item.docsRecibidos) })); });
        })
        .catch((error) => {

            if (error.response && error.response.status === 401) { Alert('Token invalido', Res.W, 3000); localStorage.removeItem('UserToken'); } 
            else { Alert(Res.EELP, Res.E, 2000); }
        });
    },[UserToken]);

    return (
        <> 
            <Header>

                <div className="header1 toggle-sidebar-btn" onClick={() => {SetIsChecked(!IsChecked)}}>
                    <input className="checkbox" type="checkbox" id="chk" checked={IsChecked} readOnly/>
                
                    <div className="hamburger-lines">
                        <span className="line line1" />
                        <span className="line line2" />
                        <span className="line line3" />
                    </div> 
                </div>

                <div className="input-group input-group-head">
                    <span className="input-group-text">Direccion</span>
                    <input type="text" className="form-control" />
                    <span className="input-group-text cp"><i className='bi bi-send'></i></span>
                </div>

            </Header>


            <aside id="sidebar" className={`sidebar ${!IsChecked ? "SidebarHide" : ""}`}>
                <ul className="sidebar-nav" id="sidebar-nav">                    
                    <li className="nav-heading">IMPUESTOS RECIBIDOS</li>
                        <>{
                            SidebarItems.map((Item,index) => {                   
                            
                                return( 
                                    <li className="nav-item" key={index}>
                                        <a className="nav-link collapsed" onClick={() => {SetIActual(Item)}}>
                                            <i className="bi bi-journal-text"></i>
                                            <span>{Item} Recibidos</span>
                                        </a>
                                    </li>
                                )
                            })
                        }</>
                    <hr className='divioer' />
                </ul>
            </aside>

            <main id="main" className={`main  ${!IsChecked ? "SidebarHide" : ""}`}>
                <div id='DivOptions'> 
                    
                    <span className='DOHeading'>{`${IActual ?? 'DOCS'}`} RECIBIDOS</span>
                
                    <div>
                        <span> Año: </span>
                        
                        <select name='SelectAActual' ref={SelectAActual} defaultValue={2024} onChange={() => {HandleAActual()}}>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                        </select>
                    </div>

                    <span className="input-group-text cp" onClick={() => {ExportarExcel(DocsClientes,AActual,IActual,FilterClient,ClienteFil)}}>
                        <i className='bi bi-arrow-down' />
                    </span>
                              
                    <div className="input-group ">
                        <span className="input-group-text">Cliente</span>
                        <input type="text" className="form-control" name='FilterCliente' ref={ClienteEspec} onChange={() => {HandlerFilter()}}/>
                    </div>
                </div>

                <div>
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>CLIENTES</th>
                                <th>Ene.</th>
                                <th>Feb.</th>
                                <th>Mar.</th>
                                <th>Abr.</th>
                                <th>May.</th>
                                <th>Jun.</th>
                                <th>Jul.</th>
                                <th>Ago.</th>
                                <th>Sep.</th>
                                <th>Oct.</th>
                                <th>Nov.</th>
                                <th>Dic.</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                Object.entries(DocsClientes).map((element, index) => {
                                
                                    const docs = element[1][AActual]?.[IActual];

                                    if(!FilterClient)
                                    {
                                        return (
                                            <tr key={element[0]}>
                                                <th>{element[0]}</th>
                                                {Array.from({ length: 12 }).map((_, i) => (
                                                    <th key={`${index,i}`} className='TAC'>{docs && docs.includes(i) ? "✓" : "✕"}</th>
                                                ))}
                                            </tr>
                                        );
                                    }
                                    else 
                                    {
                                        if(new RegExp(ClienteFil, "i").test(element[0]))
                                        {
                                            return (
                                            <tr key={element[0]}>
                                                <th>{element[0]}</th>
                                                {Array.from({ length: 12 }).map((_, i) => (
                                                    <th key={`${element[0],i}`} className='TAC'>{docs && docs.includes(i) ? "✓" : "✕"}</th>
                                                ))  
                                                }
                                            </tr>
                                            );
                                        }
                                   
                                        return null;
                                    }

                                })
                            }
                        </tbody>

                    </table>
                </div>
            </main>

        </>
    )

}
