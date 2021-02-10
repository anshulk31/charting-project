import React from 'react'
import styled from 'styled-components'

const Toolbar = styled.div`
  margin: 0;
  padding: 0;
  align-items: center;
  display: block;
  height: 100%;
  list-style-type: none;

  @media (min-width: 500px) {
    flex-flow: row;
    display: flex;
  }
`
const Brand = styled.p`
  color: beige;
  font-weight: 700;
  font-size: 40px;
`

const Header = () => {
  return (
    <>
      <Toolbar>
        <Brand>Charts</Brand>
      </Toolbar>
    </>
  )
}

export default Header