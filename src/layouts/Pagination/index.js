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

export const Pagination = ({
  ButtonFirstMobile,
  ButtonPreviousMobile,
  ButtonNextMobile,
  ButtonLastMobile,
}) => {
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
