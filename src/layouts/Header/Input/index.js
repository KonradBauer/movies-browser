import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import searchQueryParamsName from "../../../features/searchQueryParamName";
import { useQueryParameter } from "../../../features/queryParameters";
import { useInputChange } from "../../../features/Input/useInpitChange";
import { usePathname } from "../../../features/usePathname";
import { removeSearchMovies, changeMoviesSearchText } from "../../../features/movies/searchMoviesSlice";
import { removeSearchPeople, changePeopleSearchText } from "../../../features/peoples/searchPeopleSlice";

import { ClearButton, StyledInput } from "../styled";

const SearchInput = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const query = useQueryParameter(searchQueryParamsName);
  const pathname = usePathname();
  const onInputChange = useInputChange();

  const placeholder = pathname.includes("/popular-movies")
    ? "Search for movies..."
    : pathname.includes("popular-people")
    ? "Search for people..."
    : "";

  const handleClear = () => {
    if (pathname.includes("/popular-movies")) {
      dispatch(removeSearchMovies());
      dispatch(changeMoviesSearchText(""));
      history.push("/popular-movies");
    } else if (pathname.includes("/popular-people")) {
      dispatch(removeSearchPeople());
      dispatch(changePeopleSearchText(""));
      history.push("/popular-people");
    }
  };

  return (
    <>
      <StyledInput
        placeholder={placeholder}
        value={query || ""}
        onChange={onInputChange}
        aria-label={placeholder}
      />
      {query && (
        <ClearButton
          type="button"
          onClick={handleClear}
          aria-label="Clear search"
        >
          ×
        </ClearButton>
      )}
    </>
  );
};

export default SearchInput;
