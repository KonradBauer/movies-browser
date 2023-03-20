import { useEffect, useState } from "react";
import { ReactComponent as VectorLeft } from "../../common/svg/vectorLeft.svg";
import { ReactComponent as VectorRight } from "../../common/svg/vectorRight.svg";
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

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth < 848 ? <PaginationMobile /> : <PaginationDesktop />;
};

const PaginationDesktop = () => {
  return (
    <Box>
      <ButtonFirst>
        <VectorLeft />
        First
      </ButtonFirst>
      <ButtonPrevious>
        <VectorLeft />
        Previous
      </ButtonPrevious>
      <Pages>
        <Page>Page</Page>
        <PageNumber>1</PageNumber>
        <Of>of</Of>
        <PageTotal>500</PageTotal>
      </Pages>
      <ButtonNext>
        Next
        <VectorRight />
      </ButtonNext>
      <ButtonLast>
        Last
        <VectorRight />
      </ButtonLast>
    </Box>
  );
};

const PaginationMobile = () => {
  return (
    <Box>
      <ButtonFirst>
        <VectorLeft />
        <VectorLeft />
      </ButtonFirst>
      <ButtonPrevious>
        <VectorLeft />
      </ButtonPrevious>
      <Pages>
        <Page>Page</Page>
        <PageNumber>1</PageNumber>
        <Of>of</Of>
        <PageTotal>500</PageTotal>
      </Pages>
      <ButtonNext>
        <VectorRight />
      </ButtonNext>
      <ButtonLast>
        <VectorRight />
        <VectorRight />
      </ButtonLast>
    </Box>
  );
};