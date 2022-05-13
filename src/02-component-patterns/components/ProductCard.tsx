import useProduct from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg'
import { ReactElement } from 'react';

interface IProps{
  product: IProduct,
  children?: ReactElement | ReactElement[]
}

interface IProduct{
  id: string;
  title: string;
  img?: string
}

export const ProductImage = ({img = ''}) =>{
  return(
    <img className={styles.productImg} src={img ? img : noImage} alt='Coffee Mug' />
  )
}

export const ProductTitle = ({title}: {title: string}) =>{
  return(
    <span className={styles.productDescription} >{title}</span>
  )
}

interface IProductButtonsProps{
  counter: number;
  increaseBy: (value: number) => void
}

export const ProductButtons = ({counter, increaseBy}: IProductButtonsProps)  =>{
  return(
    <div className={styles.buttonsContainer} >
    <button className={styles.buttonMinus} onClick={()=>increaseBy(-1)}>-</button>
<div className={styles.countLabel} > {counter} </div>

<button className={styles.buttonAdd} onClick={()=>increaseBy(1)}>+</button>
</div>

  )
} 

const ProductCard = ({children, product:{title,img}}: IProps) => {

   const {counter, increaseBy} = useProduct()

  return (
    <div className={styles.productCard}>
        
        {/* <ProductImage img={img}/>
        <ProductTitle title={title}/>
        <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
        {children}



        
    </div>
  )
}

export default ProductCard