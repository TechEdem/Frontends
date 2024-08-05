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
    description: 'I am a full stack developer with a background in web development and a passion for building web applications.',
  },
  {
    image: Person2,
    name: 'Maxwell',
    description: 'I am a full stack developer with a background in web development and a passion for building web applications.',
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
                <h2>{each.name}</h2>
                <p>{each.description}</p>
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
padding: 10% 0%;
h1{
    font-size: 40px;
    text-align: center;
    padding: 2% 0%;
    color: #ffffff;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
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
  padding: 3% 40%;
}
.slider{
  width: 200px;
  height: 200px;
  border-radius: 20px;
}
.main_slider h2{
  text-align: center;
}
.main_slider p{
  padding: 2%;
  text-align: center;
}
@media (max-width: 760px){
  .title{
    padding: 20% 1% 3% 1%;
  }
  h1{
    font-size: 31px;
  }
  .typed{
    font-size: 31px;
    padding-left: 13%;
  }
  .slide{
    padding: 2% 3%; 
  }
  .image_container{
    padding: 8% 27%;
  }
  .main_slider{
    width: 93%;
  }
  .main_slider p{
    padding-left: 13%;
  }
}
`
export default Review