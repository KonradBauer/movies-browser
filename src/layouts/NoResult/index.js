import { Disclaimer, PictureWrapper, Wrapper } from "./styled";
import { ReactComponent as Picture } from "../../common/svg/noResult.svg";
import { useSelector } from "react-redux";
import { selectSearchText } from "../../features/movies/searchMoviesSlice";

export const NoResult = () => {
  const query = useSelector(selectSearchText);

  return (
    <Wrapper>
      <Disclaimer>Sorry, there are no results for "{query}"</Disclaimer>
      <PictureWrapper>
        <Picture />
      </PictureWrapper>
    </Wrapper>
  );
};
