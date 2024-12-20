import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Alert, Res } from "./GlobalComponents";
import axios from "axios";

const ProtectedPage = () => {
    const [isValid, setIsValid] = useState();
    const UserToken = localStorage.getItem('UserToken');

    useEffect(() => {
        
        if (!UserToken) {
            Alert('Usted no está logeado', Res.W, 3000);
            setIsValid(false);
            return;
        }

        axios
            .get('https://localhost:7233/SignIn/Watch', {
                headers: { Authorization: `Bearer ${UserToken}` },
            })
            .then(({ data }) => { if (!data.success || data.message != "True") { setIsValid(false); } })
            .catch((error) => {

                if (error.response && error.response.status === 401) 
                { Alert('Token invalido', Res.W, 3000); localStorage.removeItem('UserToken'); } 

                else { Alert(Res.EELP, Res.E, 2000); }

                setIsValid(false);

            });
    }, [UserToken]);


    if (isValid === false) { return <Navigate to="/" replace />; }


    return <Outlet />;
};

export default ProtectedPage;