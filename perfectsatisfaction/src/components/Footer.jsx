import React from 'react'
import styled from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import Logo from '../assets/logo.png'
import WhatsApp from '../assets/whatsapp.png'
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'
import Twitter from '../assets/X.png'

function Footer() {
  return (
    <Container>
        <img src={Logo} alt='logo' className='logo'/>
       <div className="footer">
        <BrowserRouter>
            <nav className='footer-links'>
                <ul>
                    <Link to="#home" className='link' smooth>Home</Link>
                    <Link to="#about" className='link' smooth>About</Link>
                    <Link to="#food" className='link'smooth>Explore Food</Link>
                    <Link to="#review" className='link'smooth>Review</Link>
                    <Link to="#question" className='link'smooth>FAQ</Link>
                </ul>
            </nav>
        </BrowserRouter>
            <nav>
                <ul>
                    <a href=""><img src={WhatsApp} alt="whatsapp" /></a>
                    <a href=""><img src={Facebook} alt="facebook" /></a>
                    <a href=""><img src={Instagram} alt="instagram" /></a>
                    <a href=""><img src={Twitter} alt="twitter" /></a>
                </ul>
            </nav>
            <h3>&copy; 2024, Perfect Satisfaction. All rights reserved</h3>
       </div>
       
    </Container>
  )
}
 const Container = styled.div`
display: flex;
flex-wrap: wrap;
background-color: #FBF2A7;

.logo{
    width: 70px;
    height: 70px;
    padding: 2% 0%;
    
}

.footer{
width: 35%;
padding: 2% 27%;
}
nav{
padding: 10% 0%;
}
nav ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.link{
    list-style: none;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    text-decoration: none;
    color: black;
    &:hover{
        transform: scale(1.1);
        transition: 0.3s;
    }
}
img{
    width: 40px;
    height: 40px;
}

h3{
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: grey;
}

@media(max-width: 720px){
    .footer-links{
        display: none;
    }
    h3{
        font-size: 12px;
    }
}
 `
export default Footer
