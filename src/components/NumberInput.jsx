import {useState} from 'react';
import PropTypes from 'prop-types';
import Resultado from './Resultado';
import { operaciones } from '../helpers/operaciones';


const NumberInput = () => {
    
    const [numeros, setNumero] = useState({
        numero1:0,
        numero2:0,
    })

    const {handleChange, suma,resta,multiplicacion,divicion,numero1,numero2} = operaciones(numeros,setNumero)




    return (
        <div>
            <label className='mx-2'>
                numero 1:{''}<input  name='numero1' value={numero1} onChange={handleChange} type={'number'}/>
            </label>

            <label className='mx-2' >
                numero 2:{''}<input name='numero2' value={numero2} onChange={handleChange} type={'number'}/>
            </label>

            <Resultado operacion={'suma'} calculo={suma()}/>
            <Resultado operacion={'resta'} calculo={resta()}/>
            <Resultado operacion={'multiplicacion'} calculo={multiplicacion()}/>
            <Resultado operacion={'divicion'} calculo={divicion()}/>
        </div>
    );
};


NumberInput.propTypes = {
    name: PropTypes.string,
    calculo: PropTypes.number

};


export default NumberInput;
