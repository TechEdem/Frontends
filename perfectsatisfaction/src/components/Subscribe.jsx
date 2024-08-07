import React from 'react'
import styled from 'styled-components'

function Subscribe() {
  return (
    <Container>
        <h1>Subscribe our newsletter and get 30% Off</h1>
        <p>Limited promo offer. No credit card required</p>
        <form action="">
          <input type="email" name="email" className='email'/>
          <button className='submit'>Submit</button>
        </form>
      
    </Container>
  )
}
const Container = styled.div`
padding: 2% 0%;
h1{
  font-size: 40px;
  font-weight: bolder;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  padding: 2% 0%;
  color: rgb(73, 24, 16);
}
p{
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  color: grey;
}
form{
  padding: 5% 24% 10% 24%;
  display: flex;
  justify-content: space-between;
  .email{
    width: 600px;
    height: 47px;
    border: 2px solid grey;
    border-radius: 10px 0px 0px 10px;
    padding: 0% 2%;
  }
  .submit{
    width: 150px;
    height: 50px;
    border-radius: 0px 10px 10px 0px;
    border: none;
    background-color: #FFF067;
    font-weight: bolder;
  }
}
`
export default Subscribe
