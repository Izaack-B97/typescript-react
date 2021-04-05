import { Fragment } from "react"

export const TiposBasicos = () => {
    
    const nombre: string = 'fernando';
    const edad: number = 35;
    const estaActivo: boolean = true;

    const poderes: string[] = [];

    return (
        <Fragment>
            <h3>Tipos basicos</h3>
            { nombre } - { edad } - { estaActivo ? 'activo' : 'no activo' }
            <hr/>
            { poderes.join(',  ') }
        </Fragment>
    )
}
