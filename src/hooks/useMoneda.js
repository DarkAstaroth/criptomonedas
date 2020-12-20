import React, { Fragment , useState } from 'react';

const useMoneda = () => {
    
    // State de nuestro custom hook

    const [state, setState] = useState('');2


    const Seleccionar = () => (
        <Fragment>
            <label htmlFor="moneda">Moneda</label>
            <select name="" id="">
                <option value="MXN">Peso Mexicano</option>
            </select>
        </Fragment>
    );

}
 
export default useMoneda;