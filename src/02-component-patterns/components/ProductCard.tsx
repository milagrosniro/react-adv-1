import useProduct from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg'
import { createContext, ReactElement, useContext } from 'react';

interface IProps{
  product: IProduct,
  children?: ReactElement | ReactElement[]
}

interface IProduct{
  id: string;
  title: string;
  img?: string
}

interface IProductContextProps{
  counter: number;
  increaseBy: (value:number) => void;
  product: IProduct
}

//Creacion contexto del producto
const ProductContext = createContext({} as IProductContextProps);
//Proveedor de Info
const {Provider} = ProductContext;

export const ProductImage = ({img = ''}) =>{

  const {product} =useContext(ProductContext)
  let imgToShow: string

  if(img){
    imgToShow = img
  }else if(product.img){
    imgToShow = product.img
  }else{
    imgToShow = noImage
  }

  return(
    <img className={styles.productImg} src={imgToShow} alt='Coffee Mug' />
  )
}

export const ProductTitle = ({title = ''}) =>{

  const {product} =useContext(ProductContext)
  
  return(
    <span className={styles.productDescription} >{title ? title : product.title}</span>
  )
}



export const ProductButtons = ( )  =>{
    const {increaseBy, counter}= useContext(ProductContext)
  return(
    <div className={styles.buttonsContainer} >
    <button className={styles.buttonMinus} onClick={()=>increaseBy(-1)}>-</button>
<div className={styles.countLabel} > {counter} </div>

<button className={styles.buttonAdd} onClick={()=>increaseBy(1)}>+</button>
</div>

  )
} 

const ProductCard = ({children, product}:IProps) => {

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

{/* MANERA 2 */}
ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons
export default ProductCard