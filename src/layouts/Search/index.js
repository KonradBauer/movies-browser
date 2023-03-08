import { Disclaimer, SpinnerWrapper, StyledSpinner } from "./styled";

export const Search = () => {
  return (
    <>
      <Disclaimer>Search results for “”</Disclaimer>
      <SpinnerWrapper>
        <StyledSpinner />
      </SpinnerWrapper>
    </>
  );
};
