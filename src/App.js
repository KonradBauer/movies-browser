import { ThemeProvider } from "styled-components";
import { theme } from "./common/Theme/theme";
import { Header } from "./layouts/Header/index";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "./features/movies/movie/moviesSlice";
import { Content } from "./layouts/Content/index";
import { fetchPeople } from "./features/peoples/people/peopleSlice";
import { fetchGenres } from "./features/movies/genresSilce";
import { fetchConfiguration } from "./features/configurationSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchConfiguration());
    dispatch(fetchGenres());
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
