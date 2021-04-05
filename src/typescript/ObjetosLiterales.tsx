interface Persona {
    nombreCompleto: string,
    edad: number,
    direccion: Direccion
}

interface Direccion {
    pais: string,
    casaNo: number
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Isaac',
        edad: 23,
        direccion: {
            pais: 'Mexico',
            casaNo: 32
        }
    }

    persona.nombreCompleto = '15454545454';

    return (
        <div>
            <h3>Objetos Literales</h3>     
            <code>
                <pre>
                    { JSON.stringify( persona, null, 2 ) }       
                </pre>
            </code>
        </div>
    )
}
