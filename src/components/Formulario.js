import React, { useEffect , useState  } from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomonedas';
import axios from 'axios';

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

    // state del listado de criptomonedas

    const [listacripto, setListacripto] = useState([]);

    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de estados unidos' },
        { codigo: 'MXN', nombre: 'Peso Mexicano' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'BOB', nombre: 'Peso Boliviano' }
        
    ]
    
    // Utilizar Moneda
    const [moneda, SelectMonedas] = useMoneda('Elige tu moneda', '', MONEDAS);
    
    // Utilizar Criptomonedas
    const [criptomoneda, SelectCripto] = useCriptomoneda('Elige tu Criptomoneda', '' , listacripto);
    
    //Ejecutar llamado a la API
    useEffect(() => {

        const consultarAPI = async () => { 
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
            const resultado = await axios.get(url);
            setListacripto(resultado.data.Data);
        }

        consultarAPI();
    
    }, []);

    return ( 
        <form action="">
            <SelectMonedas />
            <SelectCripto/>
            <Boton
                type="submit"
                value="Calcular"
            />
        </form>
     );
}
 
export default Formulario;