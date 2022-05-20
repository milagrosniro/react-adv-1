
import {ProductCard} from '../components/'
import {products} from '../data/products'

const product = products[0]


const ShoppingPage = () => {                               

  return (
      <div>
          <h1>Shopping</h1>
          <hr/>
  
            <ProductCard product={product} 
            key={product.id}
            initialValues={{
              count: 4,
              // maxCount: 10
            }}
            >
              {
                ({count,
                  isMaxCountReached,
                  maxCount,
                  increaseBy,
                  reset})=>(
                  <>
                <ProductCard.Image />
                <ProductCard.Title />
                <ProductCard.Buttons/>
      </>
                  )}

            </ProductCard>
        
     </div>
  )
}

export default ShoppingPage