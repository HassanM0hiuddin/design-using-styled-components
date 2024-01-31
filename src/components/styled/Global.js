import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
    font-family: "Poppins", sans-serif;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.body};
    color: #333;
}

p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 10px;
}

img {
    max-width: 100%;
    height: auto;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
}
`