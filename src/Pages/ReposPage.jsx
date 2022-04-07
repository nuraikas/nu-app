import React, { useContext} from 'react'
import Tabs from './Tabs'
import { AuthContext } from "../App";
import { Navigate } from 'react-router-dom'

export function ReposPage() {
    const { state, dispatch } = useContext(AuthContext);
    
    if (!state.isLoggedIn) {
        return <Navigate replace to="/login" />;
    }

    return (
        <>
            <Tabs/>
        </>
    )
}

export default ReposPage;