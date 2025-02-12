import styled from 'styled-components';
import backgroundimg from "../assets/finance.svg";

//Contains the entire Startpage, sets the gridarea and the background
const Wrapper = styled.div`
  text-align: center;
  display: grid;
  min-height: 100vh;
  grid-template-columns: 16vw 36vw 36vw 12vw;
  grid-template-rows: 10vh 15vh 60vh 5vh auto;
  background: rgb(14, 21, 53);
  background-image : url(${backgroundimg});
  background-repeat:no-repeat;
  background-position:left center;

`;

//Sets the top banner, z-index is 0 so it will go underneath the logo
const Banner = styled.div`
grid-column: 1 / span 4;
grid-row: 1 / span 1;
background-color: rgb(28, 42, 105);
align-self: stretch;
justify-self: stretch;
z-index:0; 
`;

//Sets the logo picture to the top left, z-index is 1 so it will be above the banner
const Logo = styled.a`
grid-column: 1 / span 1;
grid-row: 1 / span 1;
justify-self: end;
align-self: stretch;
object-fit: contain;
z-index:1;
`;



//Sets the desc centered to the left of the login card, also sets the text color and font
//  contains media queries so that it will be stacked above the login card on smaller screens
const Desc = styled.div`
font-family: 'Capriola', sans-serif;
font-weight:bolder;
align-self: center;
justify-self: center;
color: white;
position:relative;
z-index: 4;

${{/*Sizing for ipad and mobile */}}
@media only screen and (max-width : 1024px) {
  grid-column: 2 / span 2;
  grid-row: 2 / span 1;
  }
  
${{/*Sizing for laptop and desktop */}}  
@media only screen  and (min-width : 1024px) {
  grid-column: 2/ span 1;
  grid-row: 3 / span 1;
  padding: 10%;
}
`;

//Sets the position of the login card. Contains media queries to switch underneath the description on smaller screens
const LoginPOS = styled.div`

${{/*Sizing for ipad and mobile */}}
@media only screen and (max-width : 1024px) {
  grid-column: 2 / span 2;
  grid-row: 3 / span 1;
  }
  
${{/*Sizing for laptop and desktop */}}  
@media only screen  and (min-width : 1024px) {
  grid-column-start: 3;
  grid-row-start: 3;
  grid-row-end: 5;
  justify-self: end;
}
`;

const Button = styled.button`
background-color:blue;
text-size:1vw;
&:hover{
background-color: rgb(0, 40, 133);
}
`;

//Sets the bottom banner
const Logoutbutton = styled.div`
grid-column: 3 / span 1;
grid-row: 1 / span 1;
position: relative;
z-index: 5;
align-self: end;
justify-self: end;
color:white
font-family: 'Capriola', sans-serif;
`;

export {Wrapper, Banner, Logo, Desc, LoginPOS, Button, Logoutbutton};