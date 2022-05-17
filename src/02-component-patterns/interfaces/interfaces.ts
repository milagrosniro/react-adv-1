
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
    maxCount?: number,
    product: IProduct,
    isMaxCountReached? : boolean,
    reset: () => void
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

  export interface IProductInCart extends IProduct{
    count: number
    }
  
  export interface IInitialValues{
      count?: number,
      maxCount?: number
    }
  
  export interface IProductCardHandlers{
    count: number,
    isMaxCountReached: boolean,
    maxCount?: number,
    product: IProduct,

    increaseBy:(value:number) => void,
    reset: () => void

  }