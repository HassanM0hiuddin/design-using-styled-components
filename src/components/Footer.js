import React from 'react'
import SocialIcons from './SocialIcons'

import { Container } from './styled/Container.styled'
import { Flex } from './styled/Flex.styled'

import { StyledFooter } from './styled/Footer.styled'


const Footer = () => {
 return (
  <StyledFooter>
   <Container>
    <img src="./images/logo_white.svg" alt="no logo" />

    <Flex>
     <ul>
      <li>Footer of a website what do you expect it to have </li>
      <li>Dont Contact Me</li>
      <li>Fake Email @ gmail.com</li>
     </ul>


     <ul>
      <li>About Us</li>
      <li>Contact</li>
      <li>Privacy Policy</li>
     </ul>

     <ul>
      <li>Services</li>
      <li>FAQs</li>
      <li>Terms of Service</li>
     </ul>

     <SocialIcons />
    </Flex>
    <p> &copy 2024 Huddle , All rights reserved</p>

   </Container>
  </StyledFooter>
 )
}

export default Footer