import React from 'react'
import { IoMdArrowRoundForward } from 'react-icons/io';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import {FiInstagram, FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi';

const Section = styled.section`
background:#E7EEE4;
color: #000;
width: 100%;
min-height: 600px;
padding: 3rem calc((100vw - 1300px) /2);
`;

const Container = styled.div`
height: 100%;
width: 100%;
padding: 2rem;
`;

const FooterTop = styled.div`
display: flex;
flex-direction: row;
padding: 4rem 0rem;

@media screen and (max-width: 768px){
    flex-direction: column;
}
`;

const Quote = styled.div`
flex: 1;
padding: 2rem 0rem;

h3 {
    font-size: clamp(2rem, 8vw, 5rem);
}

h9 {
    font-size: clamp(2rem, 8vw, 5rem);
    color:#CE9991; 
    font-family:'Leckerli One', cursive;
}
`;

const FooterInfo = styled.div`
padding: 2rem;
line-height: 3;
display: flex;
flex-direction: column;

a {
    color: #CE9991;
    text-decoration: none;
}
@media screen and (max-width: 768px){
    padding: 1rem 0rem;
}
`;

const FooterBottom = styled.div`
display: flex;
padding: 2rem 0rem;

@media screen and (max-width: 768px){
    flex-direction: column;
}
`;

const SocialIcons = styled.div`
display: flex;
width: 50%;

@media screen and (max-width: 768px){
    margin-bottom: 2rem;
    width: 100%; 
}
`;

const Icons = css`
font-size: clamp(1rem, 6vw, 2rem);
margin-right: 1.5rem;
color: #CE9991;
`;

const Instagram = styled(FiInstagram)`
${Icons}
`;

const Facebook = styled(FiFacebook)`
${Icons}
`;

const Twitter = styled(FiTwitter)`
${Icons}
`;

const Youtube = styled(FiYoutube)`
${Icons}
`;

const Contact = styled.div`
width: 50%;
display: flex;
justify-content: flex-end;
align-items: center;

@media screen and (max-width:768px){
    width: 100%;
    justify-content: flex-start;
}
`;


const Footer = () => {
    return (
        <Section>
            <Container>
                <FooterTop>
                    <Quote>
                        <h3>Where <h9>pretty </h9> <br /> is our 
                        priority!
                        </h3>
                       
                    </Quote>
                    
                    <FooterInfo>
                        <h4>Contact Us</h4>
                        <Link to="/contact">FAQ</Link>
                        <Link to="/contact">Support</Link> 
                        <Link to="/contact">Questions</Link>
                    </FooterInfo>
                    <FooterInfo>
                        <h4>Locations:</h4>
                        <Link to="/pretty-perks">California</Link>
                        <Link to="/pretty-perks">New York</Link>
                        <Link to="/pretty-perks">Pennsylvania</Link>
                    </FooterInfo>
                </FooterTop>
                <FooterBottom>
                    <SocialIcons>
                        <a href="//www.google.com" rel="noopener noreferrer" target="_blank">
                            <Youtube />
                        </a>
                        <a href="//www.google.com" rel="noopener noreferrer" target="_blank">
                            <Instagram />
                        </a>
                        <a href="//www.google.com" rel="noopener noreferrer" target="_blank">
                            <Facebook /> 
                        </a>
                        <a href="//www.google.com" rel="noopener noreferrer" target="_blank">
                            <Twitter /> 
                        </a>
                    </SocialIcons>
                    <Contact>
                    <Button to='/contact' primary='true'>
                            Let's Chat <IoMdArrowRoundForward />
                        </Button>
                    </Contact>
                </FooterBottom>
            </Container>
        </Section>
    )
}

export default Footer
