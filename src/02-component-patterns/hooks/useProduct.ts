import { useEffect, useRef, useState } from "react"
import { IProduct, IOnchangeArgs, IInitialValues } from '../interfaces/interfaces';

interface IUseProductArgs{
    product: IProduct,
    onChange?: (args: IOnchangeArgs) => void,
    value1?: number,
    initialValues?: IInitialValues,
    
   
}
                                                //cuando no se envie value1 este valdra 0
export const useProduct = ({product, onChange, value1 = 0, initialValues}: IUseProductArgs) =>{

    const [counter,setCounter] = useState<number>(initialValues?.count || value1)

    //controlar cuando se monta un componente
    /**El useRef permite crear un obj que sobrevive dif renderizaciones del mismo componente.
     * Maneja una variable que me permite manejarla sin que dispare nuevos renderizados
     */
    const isMounted =useRef(false) ;
    const increaseBy = (value: number) =>{
      let newValue = Math.max(counter+value,0)

        if(initialValues?.maxCount){
            
         newValue = Math.min(newValue,initialValues.maxCount)
              
        }
        
        setCounter(newValue)      
        onChange && onChange({count: newValue,product});
    }
   const reset = () =>{
      setCounter(initialValues?.count || value1)
   }
    //cada vez que cambie el value1, se setea el counter con ese value1, de esta manera mantenemos sincronizados el estado de la cart pequeña y el de la grande
    //Esto permite que el useEffect se ejecute cuando se monta por primera vez el componente
    useEffect(() => {
        if(!isMounted.current) return;
        setCounter(value1) 
    }, [value1])

    //cuando se monta el componente por primera vez cambia el valor de isMounted a true
    useEffect(() => {
        isMounted.current = true
    }, [])

    return{
        counter,
        isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        
        increaseBy,
        reset
    }
}

export default useProduct

