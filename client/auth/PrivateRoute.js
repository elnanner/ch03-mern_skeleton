import React from 'react';
import { Redirect } from 'react-router';
import { auth } from './auth-helper';

const PrivateRoute = ({ component: Component, }) => (
    <Route {...rest} render={props => (
        auth.isAuthenticated() ? (<Component {...props} />) : (<Redirect to={{ pathname: '/signin', state: { from: props.location } }} />)
    )} />
)

export default PrivateRoute