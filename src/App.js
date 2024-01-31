
import { ThemeProvider } from 'styled-components';
import { Container } from './components/styled/Container.styled'
import Header from './components/Header.js';
import { GlobalStyles } from './components/styled/Global.js';
import content from './Content';
import Card from './components/Card.js';
import Footer from './components/Footer.js';


const theme = {
  colors: {
    text: "#2a3041",
    body: "	#fff",
    footer: "#012c2e",
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
          {content.map((item, index) => {
            return <Card key={index} item={item} />
          })}
        </Container>
        <Footer />
      </>
    </ThemeProvider >

  );
}

export default App;
