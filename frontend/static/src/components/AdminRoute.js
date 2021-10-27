import { Route, Redirect } from 'react-router-dom';

function AdminRoute({isAdmin, ...props}){
    return isAdmin ? <Route {...props} /> : <Redirect to="/login" />
}

export default AdminRoute