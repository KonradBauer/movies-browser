import { useDispatch } from "react-redux";
import { fetchMovies } from "../../features/movies/movie/moviesSlice";
import { Button, MainText, StyledDanger, SubText, Wrapper } from "./styled";

const Error = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper role="alert">
      <StyledDanger aria-hidden="true" />
      <MainText>Ooops! Something went wrong...</MainText>
      <SubText>Please check your network connection and try again</SubText>
      <Button to={"/popular-movies"} onClick={() => dispatch(fetchMovies())}>
        Back to home page
      </Button>
    </Wrapper>
  );
};

export default Error;
