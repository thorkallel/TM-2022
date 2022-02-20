import React, { useState, useEffect } from 'react'
import { useCartContext } from '../context/cart_context'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import AmountButtons from './AmountButtons'

const Product = ({ image_medium_url, name, price, id }) => {
  const [amount, setAmount] = useState(1)
  const [priceProduct, setPriceproduct] = useState(0)

  useEffect(() => {
    newPrice()
  }, [amount])

  const {
    addToCart
  } = useCartContext()

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1
      return tempAmount
    })
  }
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1
      if (tempAmount < 0) {
        tempAmount = 0
      }
      return tempAmount
    })
  }

  const newPrice = () => {
    setPriceproduct(() => {
      let tempPrice = price * amount
      return tempPrice;
    })
  }

  return (
    <Wrapper>
      <div className='container' id={id}>
        <img src={image_medium_url} alt={name} />
      </div>
      <footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
      <div className='counter'>
        <AmountButtons
            amount={amount}
            increase={increase}
            decrease={decrease}
          />
        <p>{formatPrice(priceProduct)}</p>
      </div>
      <div>
      <a
        className='btn'
        onClick={() => addToCart(id, amount, name, price)}
      >
        add to cart
      </a>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
    cursor: pointer;
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .counter {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem auto;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }
  footer p, .counter p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
  .counter p {
    color: var(--clr-black);
  }
`
export default Product
