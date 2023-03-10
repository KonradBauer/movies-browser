import { ThemeProvider } from "styled-components";
import { theme } from "./common/Theme/theme";
import { BigPoster } from "./layouts/BigPoster";
import { Header } from "./layouts/Header/index";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <BigPoster />
    </ThemeProvider>
  );
}

export default App;
