import { useEffect, useReducer } from "react";


interface AuthState {
    validando: boolean,
    token: string | null,
    username: string,
    nombre: string
};

const initialState : AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
};

type LoginPayload = {
    username: string,
    nombre: string
};

type AuthAction = { type: 'logout' } | { type: 'login', payload: LoginPayload };

const authReducer = ( state: AuthState, action: AuthAction ) : AuthState => {

    switch ( action.type ) {
        case 'logout':
            return {
                validando: false,
                token: null,
                username: '',
                nombre: ''
            }; 
        case 'login':
            return {
                validando: false,
                token: '8fd85f7dsa7f8ds7f8d7sf8ds8fd7827834783#$#"$3"432432',
                username: action.payload.username,
                nombre: action.payload.nombre
            }
        default:
            return state;
    }

}


export const Login = () => {
    
    const [{ validando, token, nombre }, dispatch] = useReducer( authReducer , initialState )

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' })
        }, 1500);
    }, [])

    if ( validando ) {
        return (
            <>
                <h1>Login</h1>
                <div className="alert alert-primary">Validando . . .</div>
            </>
        );        
    }

    const handleLogin = (username: string, nombre: string) => {
        dispatch({
            type: 'login',
            payload: {
                username: username,
                nombre: nombre
            }
        });
    }

    const handleLogout = () => {
        dispatch({ type: 'logout' });
    };

    return (
        <>
            <h1>Login</h1>   
            
            {
                token 
                    ? <div className="alert alert-success">Autenticado como: { nombre }</div>
                    : <div className="alert alert-danger">No autenticado</div>
            }

            {
                ( token )
                    ? <button className="btn btn-danger" onClick={ handleLogout }>Logout</button> 
                    : <button className="btn btn-primary" onClick={ () => handleLogin('izaack97', 'Isaac Bustamante') }>Login</button>
            }


        </>
    )
}
