import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  margin-bottom: 25px;
`

const H1 = styled.h1`
  text-align: center;
  font-size: 50px;
  font-family: 'LINESeedKR-Bd';
  font-weight: 700;
  font-style: normal;
`

function Header() {
  return (
    <Div>
        <H1>TO DO LIST</H1>
        <H1>REACT</H1>
    </Div>
  )
}

export default Header