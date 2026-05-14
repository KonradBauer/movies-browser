import { theme } from "../../common/Theme/theme";
import { useDispatchHandler } from "../../features/Pagination/useDispatchHandler";
import { useResizeWindowHandler } from "../../features/useResizeWindowHandler";

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

const Pagination = ({ page, totalPages }) => {
   const windowWidth = useResizeWindowHandler();
   const mobileMax = theme.breakpoints.mobileMax;

   const dispatchHandler = useDispatchHandler();
   const dispatchPageDecrement = dispatchHandler.dispatchPageDecrement;
   const dispatchPageIncrement = dispatchHandler.dispatchPageIncrement;
   const dispatchPageFirst = dispatchHandler.dispatchPageFirst;
   const dispatchPageLast = dispatchHandler.dispatchPageLast;

   const isFirst = page === 1;
   const isLast = page === totalPages;

   return (
      <Box>
         <ButtonFirst
            type="button"
            buttonDisabled={isFirst}
            disabled={isFirst}
            onClick={dispatchPageFirst}
            aria-label="First page"
         >
            <StyledVectorLeft buttonDisabled={isFirst} />
            {windowWidth > mobileMax ? "First" : <StyledVectorLeft buttonDisabled={isFirst} />}
         </ButtonFirst>
         <ButtonPrevious
            type="button"
            buttonDisabled={isFirst}
            disabled={isFirst}
            onClick={dispatchPageDecrement}
            aria-label="Previous page"
         >
            <StyledVectorLeft buttonDisabled={isFirst} />
            {windowWidth > mobileMax && "Previous"}
         </ButtonPrevious>
         <Pages aria-live="polite" aria-atomic="true">
            <Page>Page</Page>
            <PageNumber>{page}</PageNumber>
            <Of>of</Of>
            <PageTotal>{totalPages}</PageTotal>
         </Pages>
         <ButtonNext
            type="button"
            buttonDisabled={isLast}
            disabled={isLast}
            onClick={dispatchPageIncrement}
            aria-label="Next page"
         >
            {windowWidth > mobileMax && "Next"}
            <StyledVectorRight buttonDisabled={isLast} />
         </ButtonNext>
         <ButtonLast
            type="button"
            buttonDisabled={isLast}
            disabled={isLast}
            onClick={dispatchPageLast}
            aria-label="Last page"
         >
            {windowWidth > mobileMax ? "Last" : <StyledVectorRight buttonDisabled={isLast} />}
            <StyledVectorRight buttonDisabled={isLast} />
         </ButtonLast>
      </Box>
   );
};

export default Pagination;
