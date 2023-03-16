import { ThemeProvider } from "styled-components";
import { theme } from "./common/Theme/theme";
import { Header } from "./layouts/Header/index";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "./features/movies/movie/moviesSlice";
import { Content } from "./layouts/Content/index";
import { fetchPeople } from "./features/peoples/people/peopleSlice";

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
    dispatch(fetchPeople());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Content />
    </ThemeProvider>
  );
}

export default App;
