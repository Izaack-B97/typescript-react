import { useCounter } from '../hooks/useCounter';

export const ContadorConHook = () => {
    

    const { count, acumulador } = useCounter( 15 );

    return (
        <>
            <h1>Contador con Hook<small> { count } </small></h1>   
            <button className="btn btn-primary" onClick={ () => acumulador( 1 ) }> +1 </button>
            &nbsp;
            <button className="btn btn-primary" onClick={ () => acumulador( -1 ) }> -1 </button>
        </>
    )
}
