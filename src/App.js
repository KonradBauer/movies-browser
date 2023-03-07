import { ThemeProvider } from "styled-components";
import { theme } from "./common/Theme/theme";
import { Tile } from "./Tile";
import poster from "./common/images/poster.png";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Tile widthContainer={324} srcImage={poster} widthImage={292} heightImage={434} />
    </ThemeProvider>
  );
}

export default App;
