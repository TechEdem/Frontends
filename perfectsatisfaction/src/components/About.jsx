import React from 'react'
import styled from 'styled-components'
import Des1 from '../assets/description_1.png'
import Des2 from '../assets/description_2.png'
import { Fade } from 'react-reveal'
import Description2 from './Description2'

function About() {
  return (
    <Container id="about">
      <div className="des1">
        <Fade left duration={2000}><img src= {Des1} alt="description1" /></Fade>
        <div className="description">
        <h2>We pride ourselves on making real food from the best ingredients.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Interdum et aliquet nulla cursus tellus. 
          Orci pretium viverra ac orci id praesent blandit aenean in. Tempus netus vivamus feugiat 
          rutrum ut nunc quam faucibus. Lacinia eu non interdum libero turpis blandit lacus.
        </p>
        <button>Learn More</button>
        </div>
      </div>

      <div className="des1">
      <div className="description">
        <h2>We make everything by hand with the best possible ingredients.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Interdum et aliquet nulla cursus tellus. 
          Orci pretium viverra ac orci id praesent blandit aenean in. Tempus netus vivamus 
          feugiat rutrum ut nunc quam faucibus. Lacinia eu non interdum libero turpis blandit 
          lacus.
        </p>
        <nav>
          <ul type="arrow">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
        </nav>
        <button>Learn More</button>
      </div>
        <Fade right duration={2000}><img src= {Des2} alt="description1" /></Fade>
      </div>

      <Description2 
        title = 'When a man is satisfied, the best of work production is made' 
        details = 'Lorem ipsum dolor sit amet consectetur.Interdum et aliquet nulla cursus tellus. Orci pretium viverra ac orci id praesent blandit aenean in. Tempus netus vivamus feugiat rutrum ut nunc quam faucibus. Lacinia eu non interdum libero turpis blandit lacus.'
      />
    </Container>
  )
}
const Container = styled.div`
padding: 5% 0%;
   .des1 {
      padding: 5% 3%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .description{
    width: 40%;
    padding: 1% 5%;
    
      h2{
        font-size: 40px;
        font-weight: bolder;
        text-align: left;
        font-family: 'Poppins', sans-serif;
        line-height: 60px;
      }
      p{
        line-height: 40px;
        text-align: justify;
        font-size: 17px;
        padding: 2% 0%;
        font-family: 'Poppins', sans-serif;
        font-weight: lighter;
      }
      button{
        background-color: #FBF2A7;
        text-align: center;
        border: none;
        border-radius: 10px;
        padding: 15px ;
        font-size: 17px;
        font-weight: 700;
        font-family: 'Poppins', sans-serif;
        cursor: pointer;
        width: 200px;
        margin-top: 3%;
        &:hover{
          background-color: #FFFFFF;
          color: #000;
          cursor: pointer;
          transition: 0.3s;
          border: 4px solid #FBF2A7;
        }
      }
      nav{
      padding: 2% 5%;
      }
      nav ul li{
        font-size: 17px;
        line-height: 50px;
        font-weight: lighter;
      }
    }

    @media(max-width: 720px){
    
    }
`
export default About
