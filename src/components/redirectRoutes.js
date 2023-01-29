import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLogged } from 'redux/selectors';


export const GuestRoute = ({ component: Component, redirectTo = '/register' }) => { 
    const isLoggedIn = useSelector(selectIsLogged);    
    return isLoggedIn ? Component : <Navigate to={redirectTo} />;
}

export const AuthRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(selectIsLogged);   
    return isLoggedIn ? <Navigate to={redirectTo}/> : Component;
}

