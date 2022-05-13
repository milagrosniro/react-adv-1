
import { ProductTitle, ProductButtons, ProductCard, ProductImage} from '../components/'


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

          </div>
          {/* MANERA 1 DE COMPONENT PATTERN */}
          <ProductCard product={product}>

            <ProductImage img={product.img}/>
            <ProductTitle title={'Titulo 1'} />
            <ProductButtons  />

            </ProductCard>

            {/* MANERA 2 DE COMPONENT PATTERN */}
            <ProductCard product={product}>

              <ProductCard.Image/>
              <ProductCard.Title />
              <ProductCard.Buttons  />
            
            </ProductCard>
      </div>
  )
}

export default ShoppingPage