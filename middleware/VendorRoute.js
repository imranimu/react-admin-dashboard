import React from 'react';
import { Route, Redirect } from 'react-router-dom'; 
import AuthServices from '../services/AuthServices';


function VendorRoute({ component: Component, ...rest }) {

    let isVendor =  AuthServices.isVendor();

    return (
        <Route
            {...rest}
            render={(props) => isVendor ? <Component {...props} /> : <Redirect to={{ pathname: '/unathorized', state: { from: props.location } }} />}
        />
    )
}

export default VendorRoute;