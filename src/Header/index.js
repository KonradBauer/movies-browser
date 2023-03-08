import {
  HeadContainer,
  Box,
  MoviesButton,
  PeopleButton,
  StyledLogo,
  StyledLoupe,
  Input,
} from "./styled";

export const Header = () => {
  return (
    <HeadContainer>
      <StyledLogo />
      <MoviesButton autoFocus>Movies</MoviesButton>
      <PeopleButton>People</PeopleButton>
      <Box>
        <StyledLoupe />
        <Input placeholder="Search for movies..."></Input>
      </Box>
    </HeadContainer>
  );
};
