import React from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';

const Boton = styled.input`
    margin-top : 20px;
    font-weight : bold;
    font-size : 20px;
    padding : 10px;
    background-color : #66a2fe;
    border : none;
    width : 100%;
    border-radius : 10px;
    color : #fff;
    transition : background-color .3s ease;

    &::hover{
        background-color : #326AC0;
        cursor: pointer;
    }
`

const Formulario = () => {

    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de estados unidos' },
        { codigo: 'MXN', nombre: 'Peso Mexicano' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'BOB', nombre: 'Peso Boliviano' }
        
    ]
    
    // Utilizar Moneda

    const [moneda, SelectMonedas] = useMoneda('Elige tu moneda','',MONEDAS);

    return ( 
        <form action="">
            <SelectMonedas/>
            <Boton
                type="submit"
                value="Calcular"
            />
        </form>
     );
}
 
export default Formulario;