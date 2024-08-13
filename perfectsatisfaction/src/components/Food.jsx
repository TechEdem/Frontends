import React from 'react'
import { Fade } from 'react-reveal'
import styled from 'styled-components'

function Food(props) {
  return (
    <Container>
      <Fade top duration = {2000}>
      <img src={props.image} alt="background" class/>
        <div className='describe1'>
            <h2>{props.title}</h2>
            <p>{props.more}</p>
            <h3>{props.price} <span>{props.price_old}</span></h3>
            <button className='button'>Learn more</button>
        </div>
        
      </Fade>
    </Container>
  )
}
 const Container=styled.div`
    padding: 1% 3%;
    h2{
        font-size: 22px;
        font-weight: bolder;
        text-align: left;
        font-family: 'Poppins', sans-serif;
        line-height: 60px;
        color: rgb(73, 24, 16);
    }
    p{
        font-family: 'Poppins', sans-serif;
    }
    h3{
        font-size: 20px;
        font-weight: bolder;
        text-align: left;
        font-family: 'Poppins', sans-serif;
        line-height: 60px;
        color: rgb(250, 65, 52);
        span{
        color: gray;
        text-decoration: line-through;
        padding-left: 10%;
    }
    
    }
    .button{
        background-color: #FBF2A7;
        border: none;
        border-radius: 10px;
        padding: 15px 40px;
        font-size: 17px;
        font-weight: 700;
        font-family: 'Poppins', sans-serif;
        cursor: pointer;
        width: 200px;
    }
    @media(max-width: 720px){
      img{
        width: 125%;
        height: 500px;
      }
      h2{
        font-size: 42px;
      }
      p{
          font-family: 'Poppins', sans-serif;
          font-size: 18px;
      }
      h3{
          font-size: 20px;
          font-weight: bolder;
          text-align: left;
          font-family: 'Poppins', sans-serif;
          line-height: 60px;
          color: rgb(250, 65, 52);
          span{
          color: gray;
          text-decoration: line-through;
          padding-left: 10%;
      }
      
    }
 `
export default Food
