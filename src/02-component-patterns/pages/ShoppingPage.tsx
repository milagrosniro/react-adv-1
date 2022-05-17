
import {ProductCard} from '../components/'
import {products} from '../data/products'
import '../styles/custom-styles.css';

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
                ()=>(
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
                  </>
                )
              }

            </ProductCard>
        
      </div>
  )
}

export default ShoppingPage