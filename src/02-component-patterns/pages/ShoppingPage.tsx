
import {ProductCard} from '../components/'
import {products} from '../data/products'
import '../styles/custom-styles.css';
import { useShoppingCart } from '../hooks/useShoppingCart';


const ShoppingPage = () => {                               
const {shoppingCart, onProductCountChange} = useShoppingCart()
  return (
      <div>
          <h1>Shopping</h1>
          <hr/>

          <div style={{
            display:'flex',
            flexWrap:'wrap'
          }} >
            
        {
          //para sincronizar el count de la cart grande con la chica, envio el valor del count de ese producto, y si no hay nada envio 0
          products.map(product =>(
            <ProductCard product={product} className="bg-dark text-white"
            key={product.id}
            value1={shoppingCart[product.id]?.count  || 0 }
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
              }}
              value1={product.count}
              onChange={onProductCountChange}
              >
  
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