import React from 'react'
import styled from 'styled-components'
import Background from '../assets/background_1.png'

function Description2(props) {
  return (
    <Container>
        <img src={Background} alt="background" />
        <div className='describe1'>
            <h2>{props.title}</h2>
            <p>{props.details}</p>
        </div>
    </Container>
  )
}

const Container = styled.div`
padding: 5% 0%;
img{
position: absolute;
z-index: -3;
width: 100%;
min-height: 57.5vh;
}
.describe1{
background-color: rgba(0, 0, 0, 0.623);
width: 100%;
height: 57.5vh;
text-align: center;
color: white;
h2{
    font-size: 50px;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    padding: 2% 20%;
}
p{
    font-size: 16px;
    font-weight: lighter;
    font-family: 'Poppins', sans-serif;
    padding: 0% 20%;
    line-height: 30px;
}
}
`

export default Description2
