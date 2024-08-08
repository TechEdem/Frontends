import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import './index.css';
import Logo from './assets/logo.png'
import { Fade } from 'react-reveal';
import Home from './pages/Home';
import {ClipLoader} from 'react-spinners';

function FinalPage() {

  const [loading, setLoading] = useState();

useEffect(() =>{
    setLoading(true);
    setTimeout(()=>{
        setLoading(false)
    }, 4000)
}, [])

  return (
    <Container>
      {
        loading ?
          <div className="home">
            <div className='logo'>
              <Fade><img src={Logo} alt="logo" /></Fade>
            </div>
            <div className='loader'>
              <ClipLoader color={"#FFF067"} loading={loading} size={40} />
            </div>
            
          </div>
        :

        <Fade>
          <Home />
        </Fade>
      }
    </Container>
  )
}
const Container = styled.div`
   
  .home{
    position: absolute;
    top: 15%;
    left: 35%;
    display: block;
    img{
      width: 400px;
      height: 400px;
      margin-bottom: 10%;
    }
    .loader{
      padding: 0% 45%;
    }
   }
   @media (max-width: 720px){
    .home{
      padding: absolute;
      top: 28%;
      left: 14%;
      img{
        width: 400px;
        height: 400px;
      }
      .loader{
        padding: 30% 45%;
      }
     }
   }
  }
`

export default FinalPage
