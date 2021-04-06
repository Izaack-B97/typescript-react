import { useState } from 'react';

export const useCounter = ( initial: number = 10 ) => {

    const [count, setCount] = useState( initial );

    const acumulador = ( numero: number ) => {
        setCount( count + numero );
    };

    return {
        count,
        acumulador
    };
}
