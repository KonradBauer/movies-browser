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

   return (
      <Box>
         <ButtonFirst buttonDisabled={page === 1} onClick={dispatchPageFirst}>
            <StyledVectorLeft buttonDisabled={page === 1} />
            {windowWidth > mobileMax ? "First" : <StyledVectorLeft buttonDisabled={page === 1} />}
         </ButtonFirst>
         <ButtonPrevious buttonDisabled={page === 1} onClick={dispatchPageDecrement}>
            <StyledVectorLeft buttonDisabled={page === 1} />
            {windowWidth > mobileMax && "Previous"}
         </ButtonPrevious>
         <Pages>
            <Page>Page</Page>
            <PageNumber>{page}</PageNumber>
            <Of>of</Of>
            <PageTotal>{totalPages}</PageTotal>
         </Pages>
         <ButtonNext buttonDisabled={page === totalPages} onClick={dispatchPageIncrement}>
            {windowWidth > mobileMax && "Next"}
            <StyledVectorRight buttonDisabled={page === totalPages} />
         </ButtonNext>
         <ButtonLast buttonDisabled={page === totalPages} onClick={dispatchPageLast}>
            {windowWidth > mobileMax ? "Last" : <StyledVectorRight buttonDisabled={page === totalPages} />}
            <StyledVectorRight buttonDisabled={page === totalPages} />
         </ButtonLast>
      </Box>
   );
};

export default Pagination;
