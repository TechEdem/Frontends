import React from 'react'
import styled from 'styled-components'

function Description(props) {
  return (
    <Container>
        <div className='describe'>
            <h2>{props.title}</h2>
            <p>{props.details}</p>
        </div>
    </Container>
  )
}

const Container = styled.div`
.describe{
    line-height: 65px;
    h2{
        font-size: 35px;
        font-weight: 1000;
        font-family: 'Poppins', sans-serif;
        text-align: center;
        color: #F9C91E;
    }
    p{
        font-size: 20px;
        font-weight: 700;
        font-family: 'Poppins', sans-serif;
        text-align: center;
    }
}
`

export default Description
