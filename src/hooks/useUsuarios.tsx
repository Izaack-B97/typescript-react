import { useEffect, useRef, useState } from 'react';
import { reqRes } from '../api/reqRes';
import { ReqRespListado, Usuario } from '../interfaces/reqRes';

export const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const paginaRef = useRef(1);

    useEffect(() => {
        cargarUsuaros();
    }, [])

    const cargarUsuaros = async () => {

        const res = await reqRes.get<ReqRespListado>(`/users`, {
            params: {
                page: paginaRef.current
            }
        });
        
        setUsuarios( res.data.data );

    };

    const paginaSiguiente = () => {

    };

    const paginaAnterior = () => {

    };

    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior
    };

}
