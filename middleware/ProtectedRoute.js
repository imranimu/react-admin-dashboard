import React from 'react';
import { Route, Redirect } from 'react-router-dom'; 
import AuthServices from '../services/AuthServices';

function ProtectedRoute({ component: Component, ...rest }) {

    let isAuthenticated =  AuthServices.isAuthenticated();   

    return (
        <Route
            {...rest}
            render={(props) => isAuthenticated ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
        />
    )
}

export default ProtectedRoute;