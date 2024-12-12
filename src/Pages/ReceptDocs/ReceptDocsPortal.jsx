import { Header } from '../PageComponents/Header/Header';
import './ReceptDocsPortal.css';


export default function ReceptsDocs(){

    return (
        <> 
            <Header>

                <div className="header1 toggle-sidebar-btn">
                    <input className="checkbox" type="checkbox" id="chk" checked/ >
                
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

                        <li className="nav-item">
                            <a className="nav-link collapsed " data-bs-target="#detcit" data-bs-toggle="collapse">
                                <i className="bi bi-journal-text"></i>
                                <span>ITBIS Recibidos 2024</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link collapsed " data-bs-target="#detcit" data-bs-toggle="collapse">
                                <i className="bi bi-journal-text"></i>
                                <span>ITBIS RECIBIDOS AACTUAL</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link collapsed " data-bs-target="#detcit" data-bs-toggle="collapse">
                                <i className="bi bi-journal-text"></i>
                                <span>ITBIS RECIBIDOS AACTUAL</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link collapsed " data-bs-target="#detcit" data-bs-toggle="collapse">
                                <i className="bi bi-journal-text"></i>
                                <span>ITBIS RECIBIDOS AACTUAL</span>
                            </a>
                        </li>
                    
                </ul>
            </aside>

        </>
    )

}