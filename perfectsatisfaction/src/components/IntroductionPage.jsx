import React from 'react'
import styled from 'styled-components'
import IntroImage from '../assets/Intro_pic.png'
import ShopCart from '../assets/shopping-cart.png'
import Arrow from '../assets/arrow.png'
import { Fade } from 'react-reveal'
import Description from './Description'


function IntroductionPage() {
  return (
    <Container id='home'>

      <div className='description-main'>
        <div className="description">
          <h1><span>Perfect</span> Satisfaction</h1>
          <p>
          Lorem ipsum dolor sit amet consectetur. Interdum et aliquet nulla cursus tellus. 
          Orci pretium viverra ac orci id praesent blandit aenean in. Tempus netus vivamus feugiat 
          rutrum ut nunc quam faucibus. Lacinia eu non interdum libero turpis blandit lacus.
          </p>

          <div className="description-image" id='one'>
          <Fade top duration={2000} ><img src={IntroImage} alt='introimage' /></Fade>
        </div>

          <div className='buttons'>
              <button >Get Started <img src={ShopCart} alt='shopcart' /></button>
              <button className='button1'>Learn More <img src={Arrow} alt='shopcart' /></button>
          </div>
        </div>

        <div className="description-image" id='two'>
          <Fade top duration={2000} ><img src={IntroImage} alt='introimage' /></Fade>
        </div>
      </div>

      <div className='describe-main'>
        <Description title='+1265' details='Savings'/>
        <Description title='+1035' details='Photos'/>
        <Description title='+1465' details='Rockets'/>
        <Description title='+1375' details='Globes'/>
      </div>
      
    </Container>
  )
}

const Container = styled.div`
  .description-main{
    display: flex;
    flex-wrap: wrap;
    padding: 1% 3%;
    .description{
        flex: 1;
        text-align: center;
        padding: 7% 0;
        h1{
            font-size: 60px;
            font-weight: 700;
            font-family: 'Poppins', sans-serif;
            span{
                color: #FFF067;
            }
        }
        p{
            font-size: 17px;
            font-weight: lighter;
            padding: 0% 16%;
            font-family: 'Poppins', sans-serif;
            line-height: 35px;
            text-align: justify;

        }
        .buttons{
            display: flex;
            width: 58%;
            justify-content: space-between;
            padding: 5% 20%;
            
            button{
                display: flex;
                justify-content: space-between;
                background-color: #FBF2A7;
                border: none;
                border-radius: 10px;
                padding: 15px 40px;
                font-size: 17px;
                font-weight: 700;
                font-family: 'Poppins', sans-serif;
                cursor: pointer;
                transition: 0.3s;
                width: 200px;
                &:hover{
                    background-color: #FFF067;
                    color: #000;
                    cursor: pointer;
                    transition: 0.3s;
                }
                
                img{
                    width: 20px;
                    height: 20px;
                }
                
            }
            .button1{
               background: white;
               box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.108);     
            }
        }
    }
    
  }
  .describe-main{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 4% 20%;
    background-color: #FBF2A7;
  }
  #one{
    display: none;
  }
  @media(max-width: 720px){
  #one{
    display: block;
  }
  #two{
    display: none;
  }
  }
`
export default IntroductionPage
