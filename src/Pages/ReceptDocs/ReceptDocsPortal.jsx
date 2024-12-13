import { Header } from '../PageComponents/Header/Header';
import './ReceptDocsPortal.css';


export default function ReceptsDocs(){

    return (
        <> 
            <Header>

                <div className="header1 toggle-sidebar-btn">
                    <input className="checkbox" type="checkbox" id="chk" checked />
                
                    <div className="hamburger-lines">
                        <span className="line line1" />
                        <span className="line line2" />
                        <span className="line line3" />
                    </div> 
                </div>

                <div className="input-group">
                    <span className="input-group-text">Direccion</span>
                    <input type="text" className="form-control" />
                    <span className="input-group-text cp"><i className='bi bi-send'></i></span>
                </div>

            </Header>

            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">

                    <li className="nav-heading">Lorem ipsum 2024</li>

                        <li className="nav-item">
                            <a className="nav-link collapsed " data-bs-target="#detcit" data-bs-toggle="collapse">
                                <i className="bi bi-journal-text"></i>
                                <span>Lorem ipsum dolor sit amet</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link collapsed " data-bs-target="#detcit" data-bs-toggle="collapse">
                                <i className="bi bi-journal-text"></i>
                                <span>Lorem ipsum dolor sit amet</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link collapsed " data-bs-target="#detcit" data-bs-toggle="collapse">
                                <i className="bi bi-journal-text"></i>
                                <span>Lorem ipsum dolor sit amet</span>
                            </a>
                        </li> 

                        <hr className='divioer' />


                        <li className="nav-heading">Lorem ipsum 2023</li>

                        <li className="nav-item">
                            <a className="nav-link collapsed " data-bs-target="#detcit" data-bs-toggle="collapse">
                                <i className="bi bi-journal-text"></i>
                                <span>Lorem ipsum dolor sit amet</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link collapsed " data-bs-target="#detcit" data-bs-toggle="collapse">
                                <i className="bi bi-journal-text"></i>
                                <span>Lorem ipsum dolor sit amet</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link collapsed " data-bs-target="#detcit" data-bs-toggle="collapse">
                                <i className="bi bi-journal-text"></i>
                                <span>Lorem ipsum dolor sit amet</span>
                            </a>
                        </li>   

                        <hr className='divioer' />

                        <li className="nav-heading">Lorem ipsum 2022</li>

                        <li className="nav-item">
                            <a className="nav-link collapsed " data-bs-target="#detcit" data-bs-toggle="collapse">
                                <i className="bi bi-journal-text"></i>
                                <span>Lorem ipsum dolor sit amet</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link collapsed " data-bs-target="#detcit" data-bs-toggle="collapse">
                                <i className="bi bi-journal-text"></i>
                                <span>Lorem ipsum dolor sit amet</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link collapsed " data-bs-target="#detcit" data-bs-toggle="collapse">
                                <i className="bi bi-journal-text"></i>
                                <span>Lorem ipsum dolor sit amet</span>
                            </a>
                        </li>   
                </ul>
            </aside>

            <main id="main" className="main">

                <div id='DivOptions'> 
                    
                    <span className='DOHeading'>ITBIS Recibidos 2024</span>

                    <div>
                        <span> MES:&nbsp; </span>
                        
                        <select name="Clientes" id="Sclientes">
                            <option value="" disabled="disabled" selected hidden></option>
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="1">3</option>
                            <option value="1">4</option>
                            <option value="1">5</option>
                            <option value="1">6</option>
                            <option value="1">7</option>
                            <option value="1">8</option>
                            <option value="1">9</option>
                            <option value="1">10</option>
                            <option value="1">11</option>
                            <option value="1">12</option>
                        </select>
                    </div>

                    <div>
                        <span> Estado:&nbsp; </span>

                        <select name="Clientes" id="Sclientes">
                            <option value="" disabled="disabled" selected hidden></option>
                            <option value="1">No rebido</option>
                            <option value="1">Recibido</option>
                        </select>
                    </div>

                    <div id='IG2' className="input-group">

                        <span className="input-group-text">Cliente</span>
                        <input type="text" className="form-control" />

                        <span className="input-group-text cp">
                            <i className='bi bi-arrow-repeat' />
                        </span>
                    </div>

                </div>

                <div className="card info-card sales-card">
                    <table className="table table-hover" id="tabla">
                        <thead>
                            <tr>
                                <th>Cliente</th>
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

                            <tr>
                                <td>Lorem Ipsum</td>
                                <td>✕</td>
                                <td>✕</td>
                                <td>✕</td>
                                <td>✕</td>
                                <td>✕</td>
                                <td>✕</td>
                                <td>✓</td>
                                <td>✓</td>
                                <td>✓</td>
                                <td>✓</td>
                                <td>✓</td>
                                <td>✓</td>
                            </tr>

                            <tr>
                                <td>Lorem Ipsum</td>
                                <td>✓</td>
                                <td>✓</td>
                                <td>✓</td>
                                <td>✓</td>
                                <td>✓</td>
                                <td>✓</td>
                                <td>✕</td>
                                <td>✕</td>
                                <td>✕</td>
                                <td>✕</td>
                                <td>✕</td>
                                <td>✕</td>
                            </tr>

                            <tr>
                                <td>Lorem Ipsum</td>
                                <td>✓</td>
                                <td>✓</td>
                                <td>✓</td>
                                <td>✕</td>
                                <td>✕</td>
                                <td>✕</td>
                                <td>✕</td>
                                <td>✕</td>
                                <td>✕</td>
                                <td>✓</td>
                                <td>✓</td>
                                <td>✓</td>
                            </tr>


                            <tr>
                                <td>Lorem Ipsum</td>
                                <td>✓</td>
                                <td>✓</td>
                                <td>✓</td>
                                <td>✓</td>
                                <td>✓</td>
                                <td>✓</td>
                                <td>✓</td>
                                <td>✓</td>
                                <td>✓</td>
                                <td>✓</td>
                                <td>✓</td>
                                <td>✓</td>
                            </tr>
            
                        </tbody>
                    </table>
                </div>
            </main>

        </>
    )

}