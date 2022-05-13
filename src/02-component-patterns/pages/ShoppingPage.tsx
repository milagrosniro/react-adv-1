
import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components/ProductCard'
import useProduct from '../hooks/useProduct'

const product = {
id:'1',
title:'Coffe Mug - Card',
img: './coffee-mug.png'
}

const ShoppingPage = () => {
  const {counter, increaseBy} = useProduct()
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
            <ProductTitle title={product.title} />
            <ProductButtons counter={counter} increaseBy={increaseBy} />
            </ProductCard>

            {/* MANERA 2 DE COMPONENT PATTERN */}
            <ProductCard product={product}>

              <ProductCard.Image/>
              <ProductCard.Title title={'titulo'}/>
              <ProductCard.Buttons increaseBy={increaseBy} counter={counter} />
            
            </ProductCard>
      </div>
  )
}

export default ShoppingPage