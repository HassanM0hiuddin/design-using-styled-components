import { ThemeProvider } from 'styled-components';
import { Container, TitleContainer } from './components/styled/Container.styled'
import Header from './components/Header.js';
import { GlobalStyles } from './components/styled/Global.js';
const theme = {
  colors: {
    text: "#2a3041",
    body: "	#fff",
    footer: "black",
  },
  mobile: '768px',

}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          Hello World
        </Container>
      </>
    </ThemeProvider>

  );
}

export default App;
