import styled from "styled-components";


export const StyledHeader = styled.header`
  background: linear-gradient(to right, lightblue, magenta);
  padding: 40px ;
  color: ${({ theme }) => theme.colors.text};

// color: ${(props) => props.color};//passed color props to change the color of the header
//Also can be done as below without using the prop 
//color : ${({ color }) => color})} 

`