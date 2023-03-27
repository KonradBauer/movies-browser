import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  pageDecrement,
  pageFirst,
  pageIncrement,
  pageLast,
  selectPages,
} from "../../features/movies/movie/moviesSlice";
import { fetchPeople } from "../../features/peoples/people/peopleSlice";
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

export const Pagination = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const moviesPage = useSelector(selectPages);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dispatch = useDispatch();

  const dispatchData = () => {
    dispatch(fetchMovies());
    dispatch(fetchPeople());
  };

  const dispatchPageDecrement = () => {
    dispatch(pageDecrement());
    dispatchData();
  };

  const dispatchPageIncrement = () => {
    dispatch(pageIncrement());
    dispatchData();
  };

  const dispatchPageFirst = () => {
    dispatch(pageFirst());
    dispatchData();
  };

  const dispatchPageLast = () => {
    dispatch(pageLast());
    dispatchData();
  };

  return windowWidth < 848 ? (
    <>
      <Box>
        {moviesPage === 1 ? (
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
          <PageNumber>{moviesPage}</PageNumber>
          <Of>of</Of>
          <PageTotal>500</PageTotal>
        </Pages>
        <>
          {moviesPage === 500 ? (
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
        {moviesPage === 1 ? (
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
          <PageNumber>{moviesPage}</PageNumber>
          <Of>of</Of>
          <PageTotal>500</PageTotal>
        </Pages>
        {moviesPage === 500 ? (
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
