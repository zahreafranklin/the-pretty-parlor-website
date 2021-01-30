import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import ImageOne from '../images/pp9.png';


const Section = styled.section`
background: #E7EEE4;
padding: 12rem 0rem;
flex-direction: column;
justify-content: center;
`;

const Container = styled.div`
background: #fff;
padding: 3rem 2rem;
position: relative;

`;

const Wrap = styled.div`
max-width: 1200px;
margin: 0 auto;
`;

const ColumnLeft = styled.div`
display: flex;
flex-wrap: wrap;
margin: 0px -15px;
justify-content: flex-start;
padding: 1rem;
`;

const Content = styled.div`
flex: 0 0 50%;

@media screen and (max-width: 768px){
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 250px;
}

h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
}

p {
    margin-bottom: 1rem;
    line-height: 1.5;
}
`;


const ColumnRight = styled.div`
position: absolute;
top: -80px;
right: 0;
max-width: 850px;
height: 140%;
width: 45%;
padding-left: 1rem;

@media screen and (max-width: 768px){
    height: 320px;
    top: -65px;
    width: 80%;
    margin: 0 auto;
    left: 0;
}
`;

const Image = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`;


const Features = () => {
    return (
        <Section>
            <Container>
                <Wrap>
                    <ColumnLeft>
                    <Content
                        data-aos='fade-right'
                        data-aos-duration='1200'
                        data-aos-delay='300'
                        data-aos-once='true'
                        data-aos-anchor-placement='center bottom'
                    >
                        <h1>First Time Visiting Us?</h1>
                        <p>The Pretty Parlor has something pretty for our first time visitors. Sign up to be apart of the pretty posse and get 15% off your first visit and many more perks</p>
                        <p>
                            <h3> PRETTY PERKS INCLUDE :</h3>
                            <br/>
                                <ul> <li>15% off first time visit for any service done </li></ul><br/>
                                <ul> <li>Annual complimentary birthday gift from our store </li></ul><br/>
                                <ul><li>Priority for scheduling appointment dates and time</li></ul><br/>
                                <ul><li>One free service for every two visits (per month) </li> </ul>
                            <br/>
                        </p>

                        <Button to='/' primary='true'>Sign Up </Button>
                    </Content>
                    </ColumnLeft>
                    <ColumnRight>
                    <Image src={ImageOne} 
                     data-aos='fade-left'
                     data-aos-duration='1200'
                     data-aos-once='true'
                     data-aos-anchor-placement='center bottom'
                    />
                    
                    </ColumnRight>
                </Wrap>
            </Container>
        </Section>
    )
}

export default Features
