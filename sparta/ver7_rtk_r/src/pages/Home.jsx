import React from 'react'
import Header from "../components/Header";
import InputBanner from "../components/InputBanner";
import Cards from "../components/Cards";
import styled from 'styled-components';

const Div = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
`

function Home() {
  return (
    <Div>
        <Header />
        <InputBanner />
        <Cards />
    </Div>
  )
}

export default Home