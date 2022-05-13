import {ProductCard as ProductCardHOC} from './ProductCard';
import { ProductTitle } from './ProductTitle';
import {ProductButtons} from './ProductButtons';
import {ProductImage} from './ProductImage';
import { IProductCardHOCProps } from '../interfaces/interfaces';
export {ProductButtons} from './ProductButtons';
export {ProductImage} from './ProductImage';
export  {ProductTitle} from './ProductTitle';


export const ProductCard : IProductCardHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Buttons: ProductButtons,
    Image: ProductImage
})

export default ProductCard;