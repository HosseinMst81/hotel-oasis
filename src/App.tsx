import styled from "styled-components";
import DesignTokensTestDashboard from "./components/test/DesignTokensTestDashboard";
import GlobalStyles from "./styles/GlobalStyles";
const H1 = styled.h1`
  font-size: var(--text-4xl);
  color: var(--color-brand-primary);
  font-family: var(--font-base);
`;

const H2 = styled.h2`
  font-size: var(--text-2xl);
  color: var(--color-text-primary);
  font-family: var(--font-primary);
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <H1>The Wild Oasis</H1>
      <H2> Welcome to our hotel!</H2>
      <DesignTokensTestDashboard></DesignTokensTestDashboard>
    </>
  );
}

export default App;
