import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.png'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

function Navbar() {
  return (
    <Container>
        <img src={Logo} alt='logo' className='logo'/>
        <BrowserRouter>
            <nav>
                <ul>
                    <Link to="#home" className='link' smooth>Home</Link>
                    <Link to="#about" className='link' smooth>About</Link>
                    <Link to="#food" className='link'smooth>Explore Food</Link>
                    <Link to="#review" className='link'smooth>Review</Link>
                    <Link to="#question" className='link'smooth>FAQ</Link>
                </ul>
            </nav>
        </BrowserRouter>
        
        <button className='numberButton'>+233245451287</button>
    </Container>
  )
}
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1% 3%;
    background-color: white;
    font-family: 'Poppins', sans-serif;
.logo{
    width: 100px;
    height: 100px;
}
nav{
    width: 48%;
}
nav ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.link{
    list-style: none;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    color: black;
    &:hover{
        transform: scale(1.1);
        transition: 0.3s;
    }
}
.numberButton{
    background-color: #FFF067;
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    font-size: 15px;
    font-weight: 600;
    color: black;
    width: 180px;
    height: 50px;
}
.numberButton:hover{
    background-color: white;
    border: 4px solid #FFF067; 
    cursor: pointer;
    transition: all 0.3 seconds;
    transform: scale(1.1);
}
`

export default Navbar
