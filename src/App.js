import { ThemeProvider } from "styled-components";
import { theme } from "./common/Theme/theme";
import { Header } from "./layouts/Header/index";
import { Pagination } from "./layouts/Pagination/index";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Pagination />
    </ThemeProvider>
  );
}

export default App;
