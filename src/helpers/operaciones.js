export  const operaciones = (numeros,setNumero)=>{

    const { numero1, numero2} = numeros;


    const handleChange = (e)=>{
        setNumero(
            {   
                ...numeros,
                [e.target.name]: parseFloat(e.target.value)
            } )
            
    }

    const suma = ()=> numero1 + numero2;
    const resta = ()=> numero1 - numero2;
    const multiplicacion = ()=> numero1 * numero2;
    const divicion = ()=> numero1 / numero2;
    
    return {handleChange, suma,resta,multiplicacion,divicion,numero1,numero2}
}