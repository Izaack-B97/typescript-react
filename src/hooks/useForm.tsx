import { useState } from 'react';

export const useForm = <T extends Object>( initialState: T  ) => {
    
    const [state, setState] = useState( initialState ); 

    const onChange = ( value: string, campo: keyof T ) => {
        setState({
            ...state,
            [campo]: value
        });
    };

    return {
        state,
        onChange
    }
}
