import { useCallback, useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css';

export interface IProductButtonsProps{
  className?: string,
  style?: React.CSSProperties
}

export const ProductButtons = ({className, style}: IProductButtonsProps)  =>{

  //TODO: maxCount, recibir cual es el valor max desde el useProduct
    const {increaseBy, counter, maxCount}= useContext(ProductContext)

    //useCallbanck guarda en la memoria una funcion, que se va a volver a renderizar cuando haya cambios en las dependencias
    //useMemo hace lo mismo que useCallback con la diferencia de que guarda el resultado de una funcion 
    const isMaxReached =useCallback(
        //si maxCount no existe ..
      ()=> !!maxCount && maxCount === counter,
      // () => {
        // if(counter === maxCount){
        //   return true
        // }else{
        //   return false
        // }
      // },
      [counter, maxCount],
    )

    return(
    <div className={`${styles.buttonsContainer} ${className}` } style={style}>
    <button className={styles.buttonMinus} onClick={()=>increaseBy(-1)}>-</button>
<div className={styles.countLabel} > {counter} </div>

<button className={ `${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}  onClick={()=>increaseBy(1)}
disabled={isMaxReached()} >+</button>
</div>

  )
} 

export default ProductButtons