import { ThemeProvider } from "styled-components";
import { theme } from "./common/Theme/theme";
import { Tile } from "./layouts/Tile";
import poster from "./common/images/poster.png";
import person from "./common/images/person.png";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Tile movie={"movie"} srcImage={poster} />
      <Tile movieDetails={"movieDetails"} srcImage={poster} /> */}
      <Tile person={"person"} role={"Mulan"} srcImage={person} />
      <Tile person={"person"} role={"Komandor Tung"} srcImage={person} />
      <Tile person={"person"} srcImage={person} />
    </ThemeProvider>
  );
}

export default App;
