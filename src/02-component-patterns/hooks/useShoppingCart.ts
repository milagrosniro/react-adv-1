import { useState } from "react";
import { IProduct, IProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () =>{
     //key: string estoy diciendo que el nombre de la propiedad del objeto es un string
  const [shoppingCart, setShoppingCart] = useState<{[key:string] : IProductInCart}>({});

  const onProductCountChange = ({count, product }: {count:number, product: IProduct})=>{
    //El product recibe como evento el producto y el count, pq la funcion recibe como arg el prodct y el count
    
      // if(count === 0){
        //Eliminar un objeto de un obj desde desestructuracion

        // setShoppingCart(oldShoppingCart =>{
        //   const {[product.id]:toDelete,...rest} = oldShoppingCart
        //   return rest
        //  })
        
        //Opcion con delete
        // setShoppingCart(() =>{
        //   const newState = {...shoppingCart}
        //   delete newState[product.id];
        //   return newState;
        // })

      // }else{
      //   setShoppingCart({...shoppingCart, [product.id]:{...product,count}})
      // }

      setShoppingCart(oldShoppingCart => { 

        const productInCart : IProductInCart = oldShoppingCart[product.id] || {...product, count: 0}
        
        //si la suma da un numero mayor a 0
        if(Math.max(productInCart.count + count, 0) > 0){

          productInCart.count += count
          return {
            ...oldShoppingCart,
            [product.id] : productInCart
          }

        }

        //Borrar el producto
            const {[product.id]:toDelete,...rest} = oldShoppingCart
            return rest
     
      })

  }

  return{
    shoppingCart,
    onProductCountChange
    
  }
}