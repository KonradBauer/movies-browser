import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  fetchMovies,
  moviesPageDecrement,
  moviesPageFirst,
  moviesPageIncrement,
  moviesPageLast,
} from "../../features/movies/movie/moviesSlice";
import {
  fetchPeople,
  peoplePageIncrement,
  peoplePageDecrement,
  peoplePageFirst,
  peoplePageLast,
} from "../../features/peoples/people/peopleSlice";
import {
  Box,
  ButtonFirst,
  ButtonLast,
  ButtonNext,
  ButtonPrevious,
  Of,
  Page,
  PageNumber,
  Pages,
  PageTotal,
  StyledVectorLeft,
  StyledVectorRight,
} from "./styled";
import {
  fetchSearchMovies,
  searchMoviesPageDecrement,
  searchMoviesPageIncrement,
  setMoviesPageFirst,
  setMoviesPageLast,
} from "../../features/movies/searchMoviesSlice";
import {
  fetchSearchPeople,
  searchPeoplePageDecrement,
  searchPeoplePageIncrement,
  setPeoplePageFirst,
  setPeoplePageLast,
} from "../../features/peoples/searchPeopleSlice";

export const Pagination = ({ page, totalPages }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const location = useLocation();
  const pathname = location.pathname;
  const dispatch = useDispatch();

  const dispatchData = () => {
    switch (true) {
      case pathname.includes("/popular-movies"):
        dispatch(fetchMovies());
        dispatch(fetchSearchMovies());
        break;
      case pathname.includes("/popular-people"):
        dispatch(fetchPeople());
        dispatch(fetchSearchPeople());
        break;
      default:
        return null;
    }
  };

  const dispatchPageDecrement = () => {
    switch (true) {
      case pathname.includes("/popular-movies"):
        dispatch(moviesPageDecrement());
        dispatch(searchMoviesPageDecrement());
        dispatchData();
        break;
      case pathname.includes("/popular-people"):
        dispatch(peoplePageDecrement());
        dispatch(searchPeoplePageDecrement());
        dispatchData();
        break;
      default:
        return null;
    }
  };

  const dispatchPageIncrement = () => {
    switch (true) {
      case pathname.includes("/popular-movies"):
        dispatch(moviesPageIncrement());
        dispatch(searchMoviesPageIncrement());
        dispatchData();
        break;
      case pathname.includes("/popular-people"):
        dispatch(peoplePageIncrement());
        dispatch(searchPeoplePageIncrement());
        dispatchData();
        break;
      default:
        return null;
    }
  };

  const dispatchPageFirst = () => {
    switch (true) {
      case pathname.includes("/popular-movies"):
        dispatch(moviesPageFirst());
        dispatch(setMoviesPageFirst());
        dispatchData();
        break;
      case pathname.includes("/popular-people"):
        dispatch(peoplePageFirst());
        dispatch(setPeoplePageFirst());
        dispatchData();
        break;
      default:
        return null;
    }
  };

  const dispatchPageLast = () => {
    switch (true) {
      case pathname.includes("/popular-movies"):
        dispatch(moviesPageLast());
        dispatch(setMoviesPageLast());
        dispatchData();
        break;
      case pathname.includes("/popular-people"):
        dispatch(peoplePageLast());
        dispatch(setPeoplePageLast());
        dispatchData();
        break;
      default:
        return null;
    }
  };

  return windowWidth < 848 ? (
    <>
      <Box>
        {page === 1 ? (
          <>
            <ButtonFirst buttonDisabled onClick={dispatchPageFirst}>
              <StyledVectorLeft buttonDisabled />
              <StyledVectorLeft buttonDisabled />
            </ButtonFirst>
            <ButtonPrevious buttonDisabled onClick={dispatchPageDecrement}>
              <StyledVectorLeft buttonDisabled />
            </ButtonPrevious>
          </>
        ) : (
          <>
            <ButtonFirst onClick={dispatchPageFirst}>
              <StyledVectorLeft />
              <StyledVectorLeft />
            </ButtonFirst>
            <ButtonPrevious onClick={dispatchPageDecrement}>
              <StyledVectorLeft />
            </ButtonPrevious>
          </>
        )}
        <Pages>
          <Page>Page</Page>
          <PageNumber>{page}</PageNumber>
          <Of>of</Of>
          <PageTotal>{totalPages}</PageTotal>
        </Pages>
        <>
          {page === totalPages ? (
            <>
              <ButtonNext buttonDisabled onClick={dispatchPageIncrement}>
                <StyledVectorRight buttonDisabled />
              </ButtonNext>
              <ButtonLast buttonDisabled onClick={dispatchPageLast}>
                <StyledVectorRight buttonDisabled />
                <StyledVectorRight buttonDisabled />
              </ButtonLast>
            </>
          ) : (
            <>
              <ButtonNext onClick={dispatchPageIncrement}>
                <StyledVectorRight />
              </ButtonNext>
              <ButtonLast onClick={dispatchPageLast}>
                <StyledVectorRight />
                <StyledVectorRight />
              </ButtonLast>
            </>
          )}
        </>
      </Box>
    </>
  ) : (
    <>
      <Box>
        {page === 1 ? (
          <>
            <ButtonFirst buttonDisabled onClick={dispatchPageFirst}>
              <StyledVectorLeft buttonDisabled />
              First
            </ButtonFirst>
            <ButtonPrevious buttonDisabled onClick={dispatchPageDecrement}>
              <StyledVectorLeft buttonDisabled />
              Previous
            </ButtonPrevious>
          </>
        ) : (
          <>
            <ButtonFirst onClick={dispatchPageFirst}>
              <StyledVectorLeft />
              First
            </ButtonFirst>
            <ButtonPrevious onClick={dispatchPageDecrement}>
              <StyledVectorLeft />
              Previous
            </ButtonPrevious>
          </>
        )}
        <Pages>
          <Page>Page</Page>
          <PageNumber>{page}</PageNumber>
          <Of>of</Of>
          <PageTotal>{totalPages}</PageTotal>
        </Pages>
        {page === totalPages ? (
          <>
            <ButtonNext buttonDisabled onClick={dispatchPageIncrement}>
              Next
              <StyledVectorRight buttonDisabled />
            </ButtonNext>
            <ButtonLast buttonDisabled onClick={dispatchPageLast}>
              Last
              <StyledVectorRight buttonDisabled />
            </ButtonLast>
          </>
        ) : (
          <>
            <>
              <ButtonNext onClick={dispatchPageIncrement}>
                Next
                <StyledVectorRight />
              </ButtonNext>
              <ButtonLast onClick={dispatchPageLast}>
                Last
                <StyledVectorRight />
              </ButtonLast>
            </>
          </>
        )}
      </Box>
    </>
  );
};
