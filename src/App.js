import { ThemeProvider } from "styled-components";
import { theme } from "./common/Theme/theme";
import { Header } from "./layouts/Header/index";
import { Content } from "./layouts/Content/index";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Content />
    </ThemeProvider>
  );
}

export default App;
