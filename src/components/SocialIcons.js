import React from 'react'
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'

import { StyledIcons } from './styled/SocialIcons.styled'
const SocialIcons = () => {
 return (
  <StyledIcons>
   <li><a href="http://twitter.com"><FaTwitter /></a></li>
   <li><a href="http://facebook.com"><FaFacebook /></a></li>
   <li><a href="http://Linkedin.com"><FaLinkedin /></a></li>


  </StyledIcons>
 )
}

export default SocialIcons