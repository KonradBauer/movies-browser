import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as VectorLeft } from "../../common/svg/vectorLeft.svg";
import { ReactComponent as VectorRight } from "../../common/svg/vectorRight.svg";
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
              <VectorLeft />
              <VectorLeft />
            </ButtonFirst>
            <ButtonPrevious buttonDisabled onClick={dispatchPageDecrement}>
              <VectorLeft />
            </ButtonPrevious>
          </>
        ) : (
          <>
            <ButtonFirst onClick={dispatchPageFirst}>
              <VectorLeft />
              <VectorLeft />
            </ButtonFirst>
            <ButtonPrevious onClick={dispatchPageDecrement}>
              <VectorLeft />
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
                <VectorRight />
              </ButtonNext>
              <ButtonLast buttonDisabled onClick={dispatchPageLast}>
                <VectorRight />
                <VectorRight />
              </ButtonLast>
            </>
          ) : (
            <>
              <ButtonNext onClick={dispatchPageIncrement}>
                <VectorRight />
              </ButtonNext>
              <ButtonLast onClick={dispatchPageLast}>
                <VectorRight />
                <VectorRight />
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
              <VectorLeft />
              First
            </ButtonFirst>
            <ButtonPrevious buttonDisabled onClick={dispatchPageDecrement}>
              <VectorLeft />
              Previous
            </ButtonPrevious>
          </>
        ) : (
          <>
            <ButtonFirst onClick={dispatchPageFirst}>
              <VectorLeft />
              First
            </ButtonFirst>
            <ButtonPrevious onClick={dispatchPageDecrement}>
              <VectorLeft />
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
              <VectorRight />
            </ButtonNext>
            <ButtonLast buttonDisabled onClick={dispatchPageLast}>
              Last
              <VectorRight />
            </ButtonLast>
          </>
        ) : (
          <>
            <>
              <ButtonNext onClick={dispatchPageIncrement}>
                Next
                <VectorRight />
              </ButtonNext>
              <ButtonLast onClick={dispatchPageLast}>
                Last
                <VectorRight />
              </ButtonLast>
            </>
          </>
        )}
      </Box>
    </>
  );
};
