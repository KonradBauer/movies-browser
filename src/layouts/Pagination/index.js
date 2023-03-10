import { ReactComponent as VectorLeft } from "../../common/svg/vectorLeft.svg";
import { ReactComponent as VectorRight } from "../../common/svg/vectorRight.svg";
import {
  Box,
  ButtonFirst,
  ButtonLast,
  ButtonNext,
  ButtonPrevious,
  Page,
  Pages,
  StyledVectorLeft,
} from "./styled";

export const Pagination = () => {
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
