import { useForm } from '../hooks/useForm';

export const Formularios = () => {
    
    const { state , onChange } = useForm({
        email: 'isaac@example.com',
        password: '123456'
    });

    return (
        <>
            <h3>Formularios</h3>   
            <input type="text" className="form-control" placeholder="email" value={ state.email } onChange={ ({ target }) => onChange( target.value, 'email' ) } />
            <input type="text" className="form-control mt-2" placeholder="password" value={ state.password }  onChange={ ({ target }) => onChange( target.value, 'password' ) } />
            <code>
                <pre>
                    { JSON.stringify( state, null, 2 ) }
                </pre>
            </code>
        </>
    )
}
