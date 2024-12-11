import axios from "axios";

/* import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom"; */

export default function Ver() {
const UserToken = localStorage.getItem('UserToken');

if(UserToken)
{
    axios
    .get('https://localhost:7233/Modules/GetModules',{ headers: { Authorization: `Bearer ${UserToken}` }})
    .then(({ data }) => { console.log(data); })
    .catch(( error ) => { if(error.response.status === 401){localStorage.removeItem('UserToken')}  });
}
/* 
const decoded = jwtDecode(UserToken);

// Accede a los datos de los claims
const role = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
const email = decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"];
const name = decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
const userId = decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
const surname = decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname"];

console.log("Role:", role); // "ADMIN"
console.log("Email:", email); // "prueba1@gmail.com"
console.log("Name:", name); // "PRUEBA"
console.log("User ID:", userId); // "3b238a9c-f3a4-4921-9571-640251e6b0fe"
console.log("Surname:", surname); // "1" */

/* return(
        <div className="col-md-4 cp">
            <div className="panel panel-default">
                <div className="panel-body">
                    <button className="linkButton">
                        <div className='TAC'>Recepcion de documentos</div>
                    </button>
                </div>
            </div>
        </div>
) */

}