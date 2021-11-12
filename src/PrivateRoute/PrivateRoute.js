import React from 'react';
import { Route,Redirect } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


function PrivateRoute({ children, ...rest }) {
 const{AllContexts}=useAuth();
 const{user}=AllContexts;
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.displayName ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}


export default PrivateRoute;