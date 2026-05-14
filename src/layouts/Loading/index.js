import { SpinnerWrapper, StyledSpinner } from "./styled";

const Loading = () => {
  return (
    <SpinnerWrapper role="status" aria-label="Loading content">
      <StyledSpinner aria-hidden="true" />
    </SpinnerWrapper>
  );
};

export default Loading;
