import React from 'react';
import styled from 'styled-components';
import banner from '../assets/images/web banner.png';
import logo from '../assets/images/unitedWayLogoShadow.png';
import {Slider} from '../components';
import {Card} from '../style/styled';
import {Link} from "react-router-dom";



const Wrapper = styled.div`
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  height: 100vh;
  text-align: center
  display: grid;
  min-height:100vh;
  grid-template-columns: repeat(5, 1fr);;
  grid-template-rows: 15% repeat(4, 1fr);
  align-items: stretch;
  place-items: stretch;
  `;


const Banner = styled.img`
grid-column: 2 / span 3;
grid-row: 1 / span 1;
justify-self: stretch;
align-self: stretch;
`;

const Logo = styled.a`
grid-column: 2 / span 1;
grid-row: 1 / span 1;
justify-self: start;
align-self: stretch;
padding-left: 2vh;
object-fit: contain;
z-index:1;
`;

const SlidePos = styled.div`
grid-column: 2 / span 3;
grid-row: 2 / span 2;
justify-self: stretch;
align-self: stretch;
`;

const Desc = styled.div`
grid-column: 2 / span 2;
grid-row: 4 / span 2;
align-self: stretch;
justify-self: stretch;
font-family: 'Capriola', sans-serif;
font-weight:bolder;
color: blue;
`;

const Login = styled.div`
grid-column: 4 / span 1;
grid-row: 4 / span 1;
justify-self: end;
align-self:end;
`;

const Button = styled.button`
background-color:blue;
text-size:1vw;

&:hover{
background-color: rgb(0, 40, 133);
}
`;

const Home = ({user}:{user: any})=>

<Wrapper>

    
      <Banner src={banner}/>

      <Logo href="http://www.unitedwaynela.org/"> <img style={{height:"90%", objectFit: "contain"}} src={logo} /></Logo>

      <SlidePos>
        <Slider/>
      </SlidePos>

      <Desc>
        <Card style={{height: "90%"}}>
          Here is a description of Dollars and $ense, what this app is about, why it was created, and what you will learn.
        </Card>
      </Desc>

      <Login>
        <Link to="/login">
          <Button className="btn">
            To Simulation
          </Button>
        </Link>
      </Login>

</Wrapper>

export default Home;
