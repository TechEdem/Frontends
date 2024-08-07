import React from 'react'
import styled from 'styled-components'

function Questions(props) {
  return (
    <Container id='question'>
        <div className='describe3'>
            <h2>{props.title}</h2>
            <p>{props.details}</p>
        </div>
    </Container>
  )
}

const Container = styled.div`
.describe3{
h2{
    font-size: 30px;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    padding: 2% 0%;
    color: rgb(237, 82, 82);
}
p{
    font-size: 18px;
    font-weight: lighter;
    font-family: 'Poppins', sans-serif;
    padding: 0% 0%;
    line-height: 40px;
}
`
export default Questions
