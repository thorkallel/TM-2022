import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import CartButtons from './CartButtons'

const Nav = () => {
  return (
    <NavContainer>
			<div className='nav-center'>
        <div className='nav-header'>
					<img src={logo} alt='comfy sloth'/>
        </div>
        <CartButtons />
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  .nav-center {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .cart-btn-wrapper {
    max-width: 40%;
  }
  @media (min-width: 992px) {
    .nav-center {
      display: flex;
      justify-content: space-between;
      grid-template-columns: auto 1fr auto;
      padding: 0 20px;
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default Nav
