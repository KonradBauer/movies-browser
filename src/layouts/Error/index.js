import { Button, MainText, StyledDanger, SubText, Wrapper } from "./styled";

export const Error = () => {
  return (
    <Wrapper>
      <StyledDanger />
      <MainText>Ooops! Something went wrong... </MainText>
      <SubText>Please check your network connection and try again</SubText>
      <Button>Back to home page</Button>
    </Wrapper>
  );
};
