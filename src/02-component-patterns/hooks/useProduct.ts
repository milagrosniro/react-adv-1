import { useEffect, useState } from "react"
import { IProduct, IOnchangeArgs } from '../interfaces/interfaces';

interface IUseProductArgs{
    product: IProduct,
    onChange?: (args: IOnchangeArgs) => void,
    value1?: number
}
                                                //cuando no se envie value1 este valdra 0
export const useProduct = ({product, onChange, value1 = 0}: IUseProductArgs) =>{
    const [counter,setCounter] = useState(value1)

    const increaseBy = (value: number) =>{
        
        const newValue = Math.max(counter+value,0)
        setCounter(prev => Math.max(prev+value,0))
       
        onChange && onChange({product, count: newValue});
    }

    //cada vez que cambie el value1, se setea el counter con ese value1, de esta manera mantenemos sincronizados el estado de la cart pequeña y el de la grande
    useEffect(() => {
      
      setCounter(value1)

      
    }, [value1])
    
    return{
        counter,
        increaseBy
    }
}

export default useProduct