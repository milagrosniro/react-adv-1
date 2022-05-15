
import { ProductTitle, ProductButtons, ProductCard, ProductImage} from '../components/'

import '../styles/custom-styles.css';


const product = {
id:'1',
title:'Coffe Mug - Card',
img: './coffee-mug.png'
}

const ShoppingPage = () => {
  
  return (
      <div>
          <h1>Shopping</h1>
          <hr/>

          <div style={{
            display:'flex',
            flexWrap:'wrap'
          }} >
{/* MANERA 1 DE COMPONENT PATTERN */}
<ProductCard product={product}
className="bg-dark text-white "
           >

            <ProductImage img={product.img}
            className="custom-image"
            style={{
              boxShadow: '10px 10px 10px rgba(0,0,0,0,2)'
            }}
            />
            <ProductTitle title={'Titulo 1'} 
            className="text-bold"/>
            <ProductButtons className="custom-buttons" />

            </ProductCard>

            {/* MANERA 2 DE COMPONENT PATTERN */}
            <ProductCard product={product} className="bg-dark text-white"
            style={{
              backgroundColor: '#70D1F8'
            }}
            >

              <ProductCard.Image className="custom-image"
              style={{
                boxShadow: '10px 10px 10px rgba(0,0,0,0,2)'
              }}
              />
              <ProductCard.Title  className="text-bold"
              style={{
                fontWeight: 'bold'
              }} />
              <ProductCard.Buttons className="custom-buttons"
              style={{
                display:'flex',
                justifyContent:'end'
              }} />
            
            </ProductCard>

            <ProductCard product={product} className="bg-dark text-white ">

              <ProductCard.Image className="custom-image"/>
              <ProductCard.Title  className="text-bold" />
              <ProductCard.Buttons className="custom-buttons" />

            </ProductCard>
          </div>
          
      </div>
  )
}

export default ShoppingPage