import React from 'react'
import { useProductsContext } from '../context/products_context'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    products,
  } = useProductsContext()

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }

  return (
    <Wrapper className='section'>
      <div className='title'>
        <h2>Productos</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center featured'>
        {products.slice(0, 10).map((product) => {
          return <Product key={product.id} {...product} {...product.attributes}/>
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      max-width: var(--max-width);
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default FeaturedProducts
