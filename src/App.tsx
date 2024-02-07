import { GlobalStyle } from "./Styles/Global";
import { Router } from "./Router";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./Styles/themes/default";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
