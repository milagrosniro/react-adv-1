import useProduct from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

import { createContext } from 'react';
import { IProductContextProps, IProductCardProps } from '../interfaces/interfaces';



//Creacion contexto del producto
export const ProductContext = createContext({} as IProductContextProps);
//Proveedor de Info
export const {Provider} = ProductContext;


export const ProductCard = ({children, product}:IProductCardProps) => {

   const {counter, increaseBy} = useProduct()

  return (
    // cada ProductCard va a tener su propio estado independiente
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>

    <div className={styles.productCard}>
      
        {children}
              
    </div>
    </Provider>
  )
}



export default ProductCard