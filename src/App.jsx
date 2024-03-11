import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 2rem;
  border: none;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-brand-600);
  color: var(--color-brand-50);
  margin: 20px;
  box-shadow: var() (--shadow-sm);
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.5rem;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The Hotel</H1>
        Hello world
        <Button onClick={() => alert("hello")}>Spin</Button>
        <Button onClick={() => alert("hello")}>Me </Button>
        <Button onClick={() => alert("hello")}>bro</Button>
        <Input type="number" placeholder="Number of guest" />
      </StyledApp>
    </>
  );
};

export default App;
