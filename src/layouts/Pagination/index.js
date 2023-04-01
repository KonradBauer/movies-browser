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
    switch (pathname) {
      case "/popular-movies":
        dispatch(fetchMovies());
        break;
      case "/popular-people":
        dispatch(fetchPeople());
        break;
      default:
        return null;
    }
  };

  const dispatchPageDecrement = () => {
    switch (pathname) {
      case "/popular-movies":
        dispatch(moviesPageDecrement());
        dispatchData();
        break;
      case "/popular-people":
        dispatch(peoplePageDecrement());
        dispatchData();
        break;
      default:
        return null;
    }
  };

  const dispatchPageIncrement = () => {
    switch (pathname) {
      case "/popular-movies":
        dispatch(moviesPageIncrement());
        dispatchData();
        break;
      case "/popular-people":
        dispatch(peoplePageIncrement());
        dispatchData();
        break;
      default:
        return null;
    }
  };

  const dispatchPageFirst = () => {
    switch (pathname) {
      case "/popular-movies":
        dispatch(moviesPageFirst());
        dispatchData();
        break;
      case "/popular-people":
        dispatch(peoplePageFirst());
        dispatchData();
        break;
      default:
        return null;
    }
  };

  const dispatchPageLast = () => {
    switch (pathname) {
      case "/popular-movies":
        dispatch(moviesPageLast());
        dispatchData();
        break;
      case "/popular-people":
        dispatch(peoplePageLast());
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
              <StyledVectorLeft buttonDisabled disabled />
              <StyledVectorLeft buttonDisabled disabled />
            </ButtonFirst>
            <ButtonPrevious buttonDisabled disabled onClick={dispatchPageDecrement}>
              <StyledVectorLeft buttonDisabled disabled />
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
