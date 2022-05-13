
import { ProductTitle, ProductButtons, ProductCard, ProductImage} from '../components/'

import '../styles/custom-styles.css';


const product = {
id:'1',
title:'Coffe Mug - Card',
img: './coffee-mug.png'
}

const ShoppingPage = () => {
  
  return (
      <div >
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
            />
            <ProductTitle title={'Titulo 1'} 
            className="text-bold"/>
            <ProductButtons className="custom-buttons" />

            </ProductCard>

            {/* MANERA 2 DE COMPONENT PATTERN */}
            <ProductCard product={product}>

              <ProductCard.Image/>
              <ProductCard.Title />
              <ProductCard.Buttons  />
            
            </ProductCard>
          </div>
          
      </div>
  )
}

export default ShoppingPage