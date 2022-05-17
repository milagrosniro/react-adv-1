import useProduct from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

import { createContext, ReactElement } from 'react';
import { IProductContextProps, IProduct, IOnchangeArgs, IInitialValues } from '../interfaces/interfaces';

//Creacion contexto del producto
export const ProductContext = createContext({} as IProductContextProps);
//Proveedor de Info
export const {Provider} = ProductContext;

export interface IProductCardProps{
  product: IProduct,
  // children?: ReactElement | ReactElement[],
  children: () => JSX.Element,
  className?: string,
  style?: React.CSSProperties,
  onChange?: (args: IOnchangeArgs) => void;
  value1?: number,
  initialValues?: IInitialValues
  
}



export const ProductCard = ({children, product, className, style, onChange, value1, initialValues}:IProductCardProps) => {

   const {counter, increaseBy} = useProduct({onChange, product, value1, initialValues})

  return (
    // cada ProductCard va a tener su propio estado independiente
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
{   /* Extension styles, recibe como param className y se lo agrego en la className del lugar donde quiero q reciba */}
    <div className={`${styles.productCard} ${className}
    `}
    style={style}
    >
      
        {children()}
              
    </div>
    </Provider>
  )
}



export default ProductCard