import { ReactElement } from "react";
import { IProductCardProps } from "../components/ProductCard";


  
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
    ({ children, product }: IProductCardProps) : JSX.Element
    Title: ({ title }: {
      title?: string
  }) => JSX.Element,
     Buttons: () => JSX.Element,
     Image: ({ img }: {
    img?: string
}) => JSX.Element
  }