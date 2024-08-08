import React from 'react'
import styled from 'styled-components'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Person1 from '../assets/person1.png'
import Person2 from '../assets/person2.png'


const slideImages = [
  {
    image: Person1,
    name: 'Mavis',
    description: '"I am a full stack developer with a background in web development and a passion for building web applications."',
  },
  {
    image: Person2,
    name: 'Maxwell',
    description: '"I am a full stack developer with a background in web development and a passion for building web applications."',
  },
  
  ];

function Review() {

    const slideProperties = {
        duration: 3500,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: false
      };

  return (
    <Container id='review'>
        <div className='background'>
          <h1>Review</h1>
          <Slide {...slideProperties}>
          {slideImages.map((each, index)=>(
            <div key={index} className='slide'>
              <div className='main_slider'>
                <div className='image_container'>
                  <img src={each.image} alt='testimonial' className='slider'/>
                </div>
                <p>{each.description}</p>
                <h2>{each.name}</h2>
              </div>
            </div>
            ))
          }
          </Slide>
        </div>
        
    </Container>
  )
}
const Container = styled.div`
padding: 5% 0%;
h1{
    font-size: 50px;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    padding: 2% 0%;
    color: #ffffff;
}

.background{
  background-color: #753f12;
}
.slide{
  padding: 2% 8%;
}
.main_slider{
  width: 80%;
  height: 50vh;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  background-color: white;
}
.image_container{
  padding: 3% 45%;
}
.slider{
  width: 100px;
  height: 100px;
  border-radius: 50px;
}
.main_slider h2{
  text-align: center;
}
.main_slider p{
  font-size: 20px;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  padding: 1% 20%;
  line-height: 40px;
}
@media (max-width: 720px){
  .title{
    padding: 20% 1% 3% 1%;
  }
  h1{
    font-size: 31px;
  }
  .slide{
    padding: 2% 3%;
  }
  .image_container{
    padding: 8% 40%;
  }
  .main_slider{
  width: 93%;
  height: 35vh;
}
  .main_slider p{
    padding-left: 13%;
  }
}
`
export default Review