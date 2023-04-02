import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters";
import searchQueryParamsName from "../searchQueryParamName";
import {
  fetchSearchMovies,
  changeMoviesSearchText,
  removeSearchMovies,
  setMoviesPageFirst,
} from "../movies/searchMoviesSlice";
import { StyledInput } from "../../layouts/Header/styled";
import {
  changePeopleSearchText,
  fetchSearchPeople,
  removeSearchPeople,
  setPeoplePageFirst,
} from "../peoples/searchPeopleSlice";

export default () => {
  const query = useQueryParameter(searchQueryParamsName);
  const replaceQueryParameter = useReplaceQueryParameter();
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const pathname = location.pathname;

  const searchMovies = (target) => {
    replaceQueryParameter({
      key: searchQueryParamsName,
      value: target.value.trim() ? target.value : undefined,
    });
    dispatch(changePeopleSearchText(""));
    dispatch(removeSearchPeople());
    dispatch(fetchSearchMovies());
    dispatch(setMoviesPageFirst());
    dispatch(changeMoviesSearchText(target.value));

    history.push({
      pathname: "/popular-movies/search",
      search: `?${searchQueryParamsName}=${target.value}`,
    });
  };

  const searchPeople = (target) => {
    replaceQueryParameter({
      key: searchQueryParamsName,
      value: target.value.trim() ? target.value : undefined,
    });

    dispatch(changeMoviesSearchText(""));
    dispatch(removeSearchMovies());
    dispatch(fetchSearchPeople());
    dispatch(setPeoplePageFirst());
    dispatch(changePeopleSearchText(target.value));

    history.push({
      pathname: "/popular-people/search",
      search: `?${searchQueryParamsName}=${target.value}`,
    });
  };

  const onInputChange = ({ target }) => {
    pathname.includes("/popular-movies") ? (
      searchMovies(target)
    ) : pathname.includes("/popular-people") ? (
      searchPeople(target)
    ) : (
      <></>
    );
  };

  return (
    <StyledInput
      placeholder={`Search for ${
        pathname.includes("/popular-movies")
          ? "movies..."
          : pathname.includes("popular-people")
          ? "people..."
          : ""
      }`}
      value={query || ""}
      onChange={onInputChange}
    />
  );
};