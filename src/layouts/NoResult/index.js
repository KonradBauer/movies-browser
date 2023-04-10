import { useSelector } from "react-redux";

import { ReactComponent as Picture } from "../../common/svg/noResult.svg";
import { selectSearchMoviesText } from "../../features/movies/searchMoviesSlice";
import { selectPeopleSearchText } from "../../features/peoples/searchPeopleSlice";

import { Disclaimer, PictureWrapper, Wrapper } from "./styled";

const NoResult = () => {
  const moviesQuery = useSelector(selectSearchMoviesText);
  const peopleQuery = useSelector(selectPeopleSearchText);

  return (
    <Wrapper>
      <Disclaimer>Sorry, there are no results for "{moviesQuery !== "" ? moviesQuery : peopleQuery}"</Disclaimer>
      <PictureWrapper>
        <Picture />
      </PictureWrapper>
    </Wrapper>
  );
};

export default NoResult;
