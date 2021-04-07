import { useEffect, useRef, useState } from 'react';
import { reqRes } from '../api/reqRes';
import { ReqRespListado, Usuario } from '../interfaces/reqRes';

export const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const paginaRef = useRef(1);

    useEffect(() => {
        cargarUsuaros( paginaRef.current );
    }, [])

    const cargarUsuaros = async ( pagina : number  ) => {

        const res = await reqRes.get<ReqRespListado>(`/users`, {
            params: {
                page: pagina
            }
        });
        
        setUsuarios( res.data.data );

    };

    const paginaSiguiente = () => {
        if ( paginaRef.current < 3 ) {
            paginaRef.current ++;
            cargarUsuaros( paginaRef.current )
        } else {
            alert('Se acabaron los usuarios')
        }        

    };

    const paginaAnterior = () => {
        if ( paginaRef.current > 1 ) {
            paginaRef.current --;
            cargarUsuaros( paginaRef.current );
        }
    };

    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior
    };

}
