
import { IProductButtonsProps } from "../components/ProductButtons";
import { IProductCardProps } from "../components/ProductCard";
import { IPropsProductImage } from "../components/ProductImage";
import { IPropsProductTitle } from '../components/ProductTitle';
  
  export interface IProduct{
    id: string;
    title: string;
    img?: string
  }
  
  export interface IProductContextProps{
    counter: number;
    increaseBy: (value:number) => void;
    product: IProduct
  }

  export interface IProductCardHOCProps{
    ({ children, product, className }: IProductCardProps) : JSX.Element
    Title: (Props: IPropsProductTitle) => JSX.Element,
     Buttons: (Props:IProductButtonsProps ) => JSX.Element,
     Image: (Props:IPropsProductImage) => JSX.Element
  }
  
  export interface IOnchangeArgs{
    product: IProduct,
    count: number
  }