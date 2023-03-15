import { ThemeProvider } from "styled-components";
import { theme } from "./common/Theme/theme";
import { Header } from "./layouts/Header/index";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "./features/movies/movie/moviesSlice";
import { Tile } from "./layouts/Tile/index";

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

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Tile movie={"movie"} />
    </ThemeProvider>
  );
}

export default App;
