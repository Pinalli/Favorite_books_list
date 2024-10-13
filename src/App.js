import Header from "./components/Header";
import Search from "./components/Search";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #F26705 10%, #024059 70%);
`
function App() {
  return (
    <AppContainer>
      <Header />
      <Search/>
    </AppContainer>
  );
}

export default App;
