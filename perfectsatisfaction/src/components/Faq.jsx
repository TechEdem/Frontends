import React from 'react'
import styled from 'styled-components'
import Questions from './Questions'
import { Fade } from 'react-reveal'
import Description3 from './Description3'

function Faq() {
  return (
    <Container>
        <h1>Frequently Asked Questions</h1>
        <p></p>
        <div className="questions">

            <div className="question">
                <Fade left duration={2000}>
                    <Questions 
                        title = 
                        "Is Perfect Satisfaction stews and foods taste delicious?"
                        details = 
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Perferendis, officiis voluptas harum aut facere nostrum officia maiores rem numquam. "
                    />
                </Fade>
            </div>

            <div className="question">
                <Fade right duration={2000}>
                    <Questions 
                        title = 
                        "Is Perfect Satisfaction stews and foods taste delicious?"
                        details = 
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Perferendis, officiis voluptas harum aut facere nostrum officia maiores rem numquam. "
                    />
                </Fade>
            </div>

            <div className="question">
                <Fade left duration={2000}>
                    <Questions 
                        title = 
                        "Is Perfect Satisfaction stews and foods taste delicious?"
                        details = 
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Perferendis, officiis voluptas harum aut facere nostrum officia maiores rem numquam. "
                    />
                </Fade>
            </div>

            <div className="question">
                <Fade right duration={2000}>
                    <Questions 
                        title = 
                        "Is Perfect Satisfaction stews and foods taste delicious?"
                        details = 
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Perferendis, officiis voluptas harum aut facere nostrum officia maiores rem numquam. "
                    />
                </Fade>
            </div>

        </div>

        <Description3 title = "Prepared fresh daily by Caterers with passion" button="Learn More"/>
    </Container>
  )
}

const Container = styled.div`
h1{
    font-size: 50px;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    padding: 2% 0%;v 
}
.questions{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.question{
    width: 40%;
    padding: 2% 4%;
}
@media(max-width: 720px){
    .questions{
        display: block;
    }
    .question{
        width: 100%;
        padding: 5%;
    }
}
`
export default Faq
