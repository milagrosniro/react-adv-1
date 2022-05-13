import { useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css';

interface IProductButtonsProps{
  className?: string
}

export const ProductButtons = ({className}: IProductButtonsProps)  =>{
    const {increaseBy, counter}= useContext(ProductContext)
  return(
    <div className={`${styles.buttonsContainer} ${className}`} >
    <button className={styles.buttonMinus} onClick={()=>increaseBy(-1)}>-</button>
<div className={styles.countLabel} > {counter} </div>

<button className={styles.buttonAdd} onClick={()=>increaseBy(1)}>+</button>
</div>

  )
} 

export default ProductButtons