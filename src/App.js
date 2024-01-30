import { ThemeProvider } from 'styled-components';
import { Container, TitleContainer } from './components/styled/Container.styled'
import Header from './components/Header.js';
import { GlobalStyles } from './components/styled/Global.js';
const theme = {
  colors: {
    text: "#2a3041",
    body: "#f4f4f4",
    footer: "black",
  }
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <h1>Hello</h1>
          <TitleContainer>My name is Hassan Mohiuddin </TitleContainer>
        </Container>
      </>
    </ThemeProvider>

  );
}

export default App;
