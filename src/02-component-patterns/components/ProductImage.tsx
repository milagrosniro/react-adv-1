import { useContext } from "react";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { ProductContext } from "./ProductCard";

export interface IPropsProductImage{
  className?: string,
  img?: string,
  style?: React.CSSProperties
}

export const ProductImage = ({img, className, style}: IPropsProductImage) =>{

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
      <img className={`${styles.productImg} ${className}` } style={style} src={imgToShow} alt='Coffee Mug' />
    )
  }

  export default ProductImage


