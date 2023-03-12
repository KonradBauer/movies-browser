import { ThemeProvider } from "styled-components";
import { theme } from "./common/Theme/theme";
import { Tile } from "./layouts/Tile";
import poster from "./common/images/poster.png";
import person from "./common/images/person.png";
import personMobileAndDetails from "./common/images/personMobileAndDetails.png";
import { useEffect, useState } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Tile movie={"movie"} srcImage={poster} />
      <Tile movieDetails={"movieDetails"} srcImage={poster} />
      <Tile
        person={"person"}
        role={"Mulan"}
        srcImage={windowWidth > 830 ? person : personMobileAndDetails}
      />
      <Tile person={"person"} srcImage={person} />
      <Tile personDetails={"personDetails"} srcImage={personMobileAndDetails} />
    </ThemeProvider>
  );
}

export default App;
