import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import IntroductionPage from '../components/IntroductionPage'
import About from '../components/About'
import {Fade} from 'react-reveal'
import Explore from '../components/Explore'
import Testimonies from '../components/Review'
import Faq from '../components/Faq'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'

function FinalPage() {
  return (
    <Container>
      <Fade>
        <Navbar classname='navigation'/>
        <IntroductionPage />
        <About />
        <Explore />
        <Testimonies />
        <Faq />
        <Subscribe />
        <Footer />
      </Fade>
    </Container>
  )
}
const Container = styled.div`

`
export default FinalPage
