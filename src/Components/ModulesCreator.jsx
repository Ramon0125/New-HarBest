import axios from "axios";
import { Res, Responses } from "./GlobalComponents";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function ModulesCreator() {
    const [modules, setModules] = useState([]);
    const UserToken = localStorage.getItem('UserToken');
    const Navigate = useNavigate();

    useEffect(() => {
        axios
            .get('https://localhost:7233/Modules/GetModules', { headers: { Authorization: `Bearer ${UserToken}` } })
            .then(({ data }) => { if (!data.success) { return Responses(data, Res); } setModules(data.modulos); })
            .catch((error) => { if (error.response && error.response.status === 401) { localStorage.removeItem('UserToken'); } });
    }, [UserToken]);
    
    return (     
        <>{
            modules.length > 0 ? (             
                modules.map((modulo) => ( 
                    <div key={modulo.idmodulo} className="col-md-4 cp" onClick={() => Navigate(`/${modulo.direccionModulo}`)}>
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <button className="linkButton" onClick={() => Navigate(`/${modulo.direccionModulo}`)}>
                                    <div className="TAC">{modulo.nombreModulo}</div>
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            ): ""
        }</>
    );
}
