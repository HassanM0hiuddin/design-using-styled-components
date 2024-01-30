import styled from "styled-components";


export const StyledHeader = styled.header`
  background:${({ theme }) => theme.colors.body};
  padding: 40px ;
  color: ${({ theme }) => theme.colors.text};

// color: ${(props) => props.color};//passed color props to change the color of the header
//Also can be done as below without using the prop 
//color : ${({ color }) => color})} 

`

export const Nav = styled.nav`
   display:flex;
   align-items:center;
   justify-content:space-between;
   margin-bottom:40px;
`

export const Logo = styled.img`

`