import { ThemeProvider } from "styled-components";
import { theme } from "./common/Theme/theme";
import { Tile } from "./layouts/Tile"
import poster from "./common/images/poster.png";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Tile srcImage={poster} /> */}
      <Tile movieDetails={"movieDetails"} srcImage={poster} />
    </ThemeProvider>
  );
}

export default App;
