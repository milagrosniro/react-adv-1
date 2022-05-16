import { useState } from "react"
import { IProduct, IOnchangeArgs } from '../interfaces/interfaces';

interface IUseProductArgs{
    product: IProduct,
    onChange?: (args: IOnchangeArgs) => void
}

export const useProduct = ({product, onChange}: IUseProductArgs) =>{
    const [counter,setCounter] = useState(0)

    const increaseBy = (value: number) =>{
        const newValue = Math.max(counter+value,0)
        setCounter(prev => Math.max(prev+value,0))
       
        onChange && onChange({product, count: newValue});
    }
    return{
        counter,
        increaseBy
    }
}

export default useProduct