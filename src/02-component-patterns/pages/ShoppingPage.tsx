
import {ProductCard} from '../components/'
import {products} from '../data/products'
import '../styles/custom-styles.css';
import { IProductCardHandlers } from '../interfaces/interfaces';

const product = products[0]


const ShoppingPage = () => {                               

  return (
      <div>
          <h1>Shopping</h1>
          <hr/>
  
            <ProductCard product={product} className="bg-dark text-white"
            key={product.id}
            initialValues={{
              count: 4,
              maxCount: 10
            }}
            >
              {
                ({count,
                  isMaxCountReached,
                  maxCount,
                  increaseBy,
                  reset})=>(
                  <>
                  <ProductCard.Image className="custom-image"
              style={{
                boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
              }}/>
              <ProductCard.Title  className="text-bold" />
              <ProductCard.Buttons className="custom-buttons"
               style={{
                 display:'flex',
                 justifyContent:'center'
               }}/>
              <button onClick={reset}>RESET</button>
               <button onClick={()=>increaseBy(-2)}>-2</button>
               {/* Si  llega al maxCount ocultar, sino mostrar */}
               {
                //si no se llego al valor maximo que muestre el btn
                !isMaxCountReached &&
                 <button onClick={()=>increaseBy(2)}>+2</button>
               }
               
               <span>{count} - {maxCount}</span>
                  </>
                )
              }

            </ProductCard>
        
      </div>
  )
}

export default ShoppingPage