import { NavLink } from "react-router-dom";

import Input from "./Input";
import { fetchMovies, moviesPageFirst } from "../../features/movies/movie/moviesSlice";
import { fetchPeople, peoplePageFirst } from "../../features/peoples/people/peopleSlice";
import { useDispatchHandler } from "../../features/Header/useDispatchHandler";
import { useOnLoadDispatchData } from "../../features/Header/useOnLoadDispatchData";

import { Box, ButtonsBox, HeadContainer, MoviesButton, PeopleButton, StyledLogo, StyledLoupe } from "./styled";
import { StyledNavLink } from "../../StyledApp";

const Header = () => {
   const dispatchHandlerMovies = useDispatchHandler(fetchMovies, moviesPageFirst);
   const dispatchHandlerPeople = useDispatchHandler(fetchPeople, peoplePageFirst);

   useOnLoadDispatchData();

   return (
      <HeadContainer>
         <NavLink to="/popular-movies">
            <StyledLogo onClick={() => dispatchHandlerMovies()} />
         </NavLink>
         <ButtonsBox>
            <StyledNavLink to="/popular-movies">
               <MoviesButton onClick={() => dispatchHandlerMovies()}>Movies</MoviesButton>
            </StyledNavLink>
            <StyledNavLink to="/popular-people">
               <PeopleButton onClick={() => dispatchHandlerPeople()}>People</PeopleButton>
            </StyledNavLink>
         </ButtonsBox>
         <Box>
            <StyledLoupe />
            <Input />
         </Box>
      </HeadContainer>
   );
};

export default Header;
