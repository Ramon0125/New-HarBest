import { Outlet, Navigate } from "react-router-dom";
import { Alert, Res } from "./GlobalComponents";

const Protected = ({ RedirectionPath = "/" }) => {
    const UserID = localStorage.getItem('UserToken');

    if (!UserID) 
    { 
        Alert('Usted no esta logeado',Res.W,3000);
        return <Navigate to={RedirectionPath} replace />;
    }

    return <Outlet />;
};

export default Protected;
