import React from 'react';
import { StyledHeader, Nav, Logo } from './Header.styled';
import { Container } from "./styled/Container.styled";
import { Button } from './styled/Button.styled';
import { Flex } from './styled/Flex.styled';


const Header = () => {
 return (
  <StyledHeader color='black'>
   <Container>
    <Nav>
     <Logo src="./images/logo.svg" alt="logo"></Logo>
     <Button> Try It For Free </Button>
    </Nav>

    <Flex>
     <div>
      <h1>Buliding a better Community!</h1>
      <p>Unite, Share, Thrive: Your Community Hub for Connection and Collaboration</p>
      <Button bg=""></Button>

     </div>


    </Flex>
   </Container>
  </StyledHeader>
 );
};

export default Header;
