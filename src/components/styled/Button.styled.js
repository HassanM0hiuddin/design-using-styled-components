import styled from "styled-components";

export const Button = styled.button`
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border: 2px solid ${({ bg }) => bg || '#333'};
    border-radius: 10px;
    color: ${({ color }) => color || '#333'};
    background-color: ${({ bg }) => bg || '#fff'};
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;
&:hover {
    background-color: #333;
    color: #ffffff;
    border-color: #333;
}
`