import { ThemeProvider } from "styled-components";
import { theme } from "./common/Theme/theme";
import { Header } from "./layouts/Header/index";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { MoviesDetails } from "./layouts/MoviesDetails/index";
import { PeopleContent } from "./layouts/Content";

function App() {
  const dispatch = useDispatch();

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
      <Header />
      <PeopleContent />
    </ThemeProvider>
  );
}

export default App;
