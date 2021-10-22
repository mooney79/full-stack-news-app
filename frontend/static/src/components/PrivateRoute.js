import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({isStaff, ...props}){
    return isStaff ? <Route {...props} /> : <Redirect to="/login" />
}

export default PrivateRoute