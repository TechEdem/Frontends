import React from 'react'
import styled from 'styled-components'
import Food from './Food'
import LessPepper from '../assets/Cimat Less Pepper Shito.png'
import HotPepper from '../assets/Cimat Hot Pepper Shito.png'
import VeggiePepper from '../assets/Cimat Less Pepper Veggie Shito.png'
import CoatedNut from '../assets/Cimat Coated Nut.png'
import Cake from '../assets/Cimat Cake.png'
import Rolls from '../assets/Cimat Rolls.png'

function Explore() {
  return (
    <Container id='food'>
        <h1>Explore Our Foods</h1>
        <p className='paragraph'>
        Lorem ipsum dolor sit amet consectetur. Facilisis ac nisi mollis et ac. 
        Aliquam leo blandit velit faucibus. Diam montes diam platea eget. 
        Sed sagittis sit sem gravida ornare in parturient.
        </p>
        <div className="food">
            <Food 
                image = {LessPepper} 
                title = 'Cimat Less Pepper Shito' 
                more='Time: 15 - 20 Minutes | Serves: 1'
                price = 'GHȻ 20.50'
                price_old = 'GHȻ 50.50'
            />
            <Food 
                image = {HotPepper} 
                title = 'Cimat Hot Pepper Shito' 
                more='Time: 15 - 20 Minutes | Serves: 1'
                price = 'GHȻ25.00'
                price_old = 'GHȻ 55.00'
                
            />
            <Food 
                image = {VeggiePepper} 
                title = 'Cimat Veggie Shito' 
                more='Time: 15 - 20 Minutes | Serves: 1'
                price = 'GHȻ30.00'
                price_old = 'GHȻ65.00'
            />
            <Food 
                image = {CoatedNut} 
                title = 'Cimat Coated Nut' 
                more='Time: 15 - 20 Minutes | Serves: 1'
                price = 'GHȻ9.00'
                price_old = 'GHȻ15.00'
            />
            <Food 
                image = {Cake} 
                title = 'Cimat Cake' 
                more='Time: 15 - 20 Minutes | Serves: 1'
                price = 'GHȻ150.00'
                price_old = 'GHȻ300.00'
            />
            <Food 
                image = {Rolls} 
                title = 'Cimat Rolls' 
                more='Time: 15 - 20 Minutes | Serves: 1'
                price = 'GHȻ5.00'
                price_old = 'GHȻ10.00'
            />
        </div>
    </Container>
  )
}

const Container = styled.div`
    h1{
        font-size: 50px;
        font-weight: 500;
        font-family: 'Poppins', sans-serif;
        text-align: center;
    }
    .paragraph{
        font-size: 20px;
        font-weight: 500;
        font-family: 'Poppins', sans-serif;
        text-align: center;
        padding: 2% 20%;
        line-height: 40px;
    }
    .food{
        display: flex;
        flex-wrap: wrap;
        padding: 2% 5%;
        justify-content: space-between;
        
        Food{
        padding: 2% 0%;
        }
    }
    
    
`
export default Explore
