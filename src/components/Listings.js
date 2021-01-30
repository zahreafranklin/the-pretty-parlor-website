import React from 'react';
import { IoMdArrowRoundForward } from 'react-icons/io';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import Facials from '../images/pp3.png';
import Massage from '../images/pp2.png';
import Haircare from '../images/pp6.png';
import Nails from '../images/pp5.png';

const Section = styled.section`
width: 100%;
height: 100%;
padding: 1rem calc((100vw - 1300px) /2);
`;

const Container = styled.div`
height: 100%;
width: 100%;
padding: 2rem 1rem;
`;

const Heading = styled.div`
font-size: 1.5rem;
padding: 2rem 1rem;
margin-bottom: 5px;

@media screen and (max-width: 768px){
    text-align: start;
}
`;

const Subheading = styled.div`
font-size: 17px;
padding: 0rem 1rem;
margin-bottom: 15px;

@media screen and (max-width: 768px){
    text-align: start;
}
`;

const InfoRow = styled.div`
display: flex;
flex-direction: row;
padding: 1rem 0rem;

@media screen and (max-width: 760px){
    flex-direction: column;
}
`;

const InfoWrap = styled.div`
padding: 0rem 1rem;
min-height: 550px;
height: 100%;

h2 {
    margin-bottom: 1rem;
    font-weight: 400;
}

@media screen and (max-width: 768px){
    margin-bottom: 1rem;
}
`;

const Image = styled.img`
width: 100%;
height: 100%;
max-height: 600px;
object-fit: cover;
margin-bottom: 1rem;
`;

const InfoLink = styled(Link)`
display: flex;
align-items: center;
text-direction: none;
color: #000;
width: 140px;
transition: 0.3s;

&:hover {
    transform: translateY(-2px);
}
`;

const Arrow = styled(IoMdArrowRoundForward)`
margin-left: 10px;
`;

const Listings = () => {
    return (
        <Section>
            <Container>
                <Heading>
                    <h1
                    data-aos='fade-right'
                    data-aos-duration='1000'
                    data-aos-once="true"
                    data-aos-anchor-placement='center bottom'
                    > 
                    Services & Ammenities Offered:
                    </h1>
                </Heading>
                <Subheading>
                <p>Take a look at our extensive list of services offered in a beautiful spacious salon with a relaxing setting and friendly, personable staff. </p>
                </Subheading>
            <InfoRow>
                <InfoWrap
                data-aos='zoom-out-up'
                data-aos-duration='1200'
                data-aos-once='true'
                data-aos-anchor-placement='center'
                >
                <Image src={Facials} alt="Facials and Scrubs" css={`margin-top:`} />
                <h2>Facials & Dermaplaning </h2>
                <p>Look your prettiest with our facials. From a variety of brightening masks, chemical peels and more </p>
                    <br/>
                <InfoLink to="/services">
                    <p> Book Now</p>
                    <Arrow />
                    </InfoLink>
                </InfoWrap>
                <InfoWrap
                data-aos='zoom-out-up'
                data-aos-duration='1000'
                data-aos-once='true'
                data-aos-anchor-placement='center bottom'
                >

                <Image 
                src={Massage} 
                alt="Deep Tissue Massage"  />
                <h2> Massages & Acupuncture</h2>
                <p>Relieve tension, anxiety and pain from the deepest layers with your choice from Hot Stone Massages, Aromatherapy or the popular Deep Tissue Massages</p>
                <br/>
                <InfoLink to="/services">
                    <p> Book Now</p>
                    <Arrow />
                    </InfoLink>
                </InfoWrap>
            </InfoRow>
        <InfoRow>
        <InfoWrap
        data-aos='zoom-out-up'
        data-aos-duration='1200'
        data-aos-once='true'
        data-aos-anchor-placement='center'
        >
        <Image src={Haircare} alt="Haircare" css={`margin-top:`} />
        <h2>Hair Care & Treatments </h2>
        <p>Treat your tresses with the best team. We have treatments available for coloring, texture changing, installations and more </p>
            <br/>
        <InfoLink to="/services">
            <p> Book Now</p>
            <Arrow />
            </InfoLink>
        </InfoWrap>

        <InfoWrap
        data-aos='zoom-out-up'
        data-aos-duration='1200'
        data-aos-once='true'
        data-aos-anchor-placement='center'
        >
        <Image src={Nails} alt="Nail Care " css={`margin-top:`} />
        <h2>Nail & Hand Care</h2>
        <p> When it comes to nails, we at The Pretty Parlor nailed it. Whether it be gel, acrylic or shallac for a pedicure or manicure, we have you covered.  </p>
            <br/>
        <InfoLink to="/services">
            <p> Book Now</p>
            <Arrow />
            </InfoLink>
        </InfoWrap>
    </InfoRow>
        </Container>
    </Section>
    );
};

export default Listings
