import React from 'react';
import { Route, Redirect } from 'react-router-dom'; 
import AuthServices from '../services/AuthServices';

function AdminRoute({ component: Component, ...rest }) {

    let isAdmin = AuthServices.isAdmin();

    return (
        <Route
            {...rest}
            render={(props) => isAdmin ? <Component {...props} /> : <Redirect to={{ pathname: '/unathorized', state: { from: props.location } }} />}
        />
    )
}

export default AdminRoute;