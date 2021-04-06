import { Usuario } from '../interfaces/reqRes';
import { useUsuarios } from '../hooks/useUsuarios';

export const Usuarios = () => {

    const { usuarios, paginaSiguiente, paginaAnterior } = useUsuarios();

    const renderItem = ( usuario: Usuario ) => {
        return (
            <tr key={ usuario.id.toString() }>
                <td>
                    <img src={ usuario.avatar } alt={ usuario.first_name } style={{ width: 50 , borderRadius: 100 }}/>
                </td>
                <td>{ usuario.first_name }</td>
                <td>{ usuario.email }</td>
            </tr>
        )
    }

    return (
        <div>
            <h1>Usuarios</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    { usuarios.map( renderItem ) /* Le estamos pasando el mismo parametro como referencia */ }
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={ paginaAnterior }>Anteriores</button> &nbsp;
            <button className="btn btn-primary" onClick={ paginaSiguiente }>Siguientes</button>
        </div>
    )
}
