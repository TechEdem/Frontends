import React from 'react'
import styled from 'styled-components'
import Background from '../assets/final_description.png'

function Description3(props) {
  return (
    <Container>
        <img src={Background} alt="background" />
        <div className='describe1'>
            <h2>{props.title}</h2>
            <button>{props.button}</button>  
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
height: 57.5vh;
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
        padding: 5% 0%;
    }
    button{
        width: 300px;
        height: 60px;
        border-radius: 10px;
        background-color: #FFF067;
        font-size: 20px;
        font-weight: bolder;
    }
}
@media(max-width: 720px){
    img{
    height: 20vh;
    }
   .describe1{
        background-color: rgba(0, 0, 0, 0.623);
        width: 100%;
        height: 20vh;
        text-align: center;
        color: white; 
        h2{
        font-size: 40px;
        }
    }
}
`
export default Description3
