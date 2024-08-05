import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import IntroductionPage from '../components/IntroductionPage'
import About from '../components/About'
import {Fade} from 'react-reveal'
import Explore from '../components/Explore'
import Testimonies from '../components/Review'

function FinalPage() {
  return (
    <Container>
      <Fade>
        <Navbar classname='navigation'/>
        <IntroductionPage />
        <About />
        <Explore />
        <Testimonies />
      </Fade>
    </Container>
  )
}
const Container = styled.div`

.navigation{
  position: fixed;
}
`
export default FinalPage
