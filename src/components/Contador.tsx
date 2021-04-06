import { useState } from "react";

export const Contador = () => {
    const [count, setCount] = useState( 10 );

    const acumulador = ( numero: number ) => {
        setCount( count + numero );
    };

    return (
        <>
            <h1>Contador <small> { count } </small></h1>   
            <button className="btn btn-primary" onClick={ () => acumulador( 1 ) }> +1 </button>
            &nbsp;
            <button className="btn btn-primary" onClick={ () => acumulador( -1 ) }> -1 </button>
        </>
    )
}
