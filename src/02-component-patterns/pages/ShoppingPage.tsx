
import { ProductTitle, ProductButtons, ProductCard, ProductImage} from '../components/'

import '../styles/custom-styles.css';
import { IProduct } from '../interfaces/interfaces';
import { useState } from 'react';

const product1 = {
  id:'1',
  title:'Coffe Mug - Card',
  img: './coffee-mug.png'
}

const product2 = {
  id:'2',
  title:'Coffe Mug - Meme',
  img: './coffee-mug2.png'
}
const products : IProduct[] = [product1,product2
]

interface IProductInCart extends IProduct{
count: number
}

const ShoppingPage = () => {
  
                                        //key: string estoy diciendo que el nombre de la propiedad del objeto es un string
  const [shoppingCart, setShoppingCart] = useState<{[key:string] : IProductInCart}>({});

  
  const onProductCountChange = ({product, count}: {count:number, product: IProduct})=>{
    //El product recibe como evento el producto y el count, pq la funcion recibe como arg el prodct y el count
    console.log(count, "COUNT")
      if(count === 0){
        //Eliminar un objeto de un obj desde desestructuracion

        setShoppingCart(oldShoppingCart =>{
          const {[product.id]:toDelete,...rest} = oldShoppingCart
          return rest
         })
        
        //Opcion con delete
        // setShoppingCart(() =>{
        //   const newState = {...shoppingCart}
        //   delete newState[product.id];
        //   return newState;
        // })

      }else{
        setShoppingCart({...shoppingCart, [product.id]:{...product,count}})
      }
  }

  return (
      <div>
          <h1>Shopping</h1>
          <hr/>

          <div style={{
            display:'flex',
            flexWrap:'wrap'
          }} >
        {
          products.map(product =>(
            <ProductCard product={product} className="bg-dark text-white"
            key={product.id}
            onChange={onProductCountChange}
            >

              <ProductCard.Image className="custom-image"/>
              <ProductCard.Title  className="text-bold" />
              <ProductCard.Buttons className="custom-buttons"
               style={{
                 display:'flex',
                 justifyContent:'center'
               }}/>

            </ProductCard>
          ))
        }
          
          </div>

          <div className='shopping-cart'>
            
             {  Object.entries(shoppingCart).length !== 0 && Object.entries(shoppingCart).map(([key, product])=> 
              <ProductCard product={product} className="bg-dark text-white"
              key={key}
              style={{
                width:'100px'
              }}>
  
                <ProductCard.Image className="custom-image"/>
                <ProductCard.Buttons className="custom-buttons"
                style={{
                  display:'flex',
                  justifyContent:'center'
                }} />
  
              </ProductCard>
              )}
            
          </div>
          {/* <div>
            <code>
              {JSON.stringify(shoppingCart, null, 5)}
            </code>
          </div> */}
      </div>
  )
}

export default ShoppingPage