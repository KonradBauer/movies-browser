import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useQueryParameter, useReplaceQueryParameter} from "../queryParameters";
import searchQueryParamsName from "../searchQueryParamName";
import { fetchSearchMovies, changeSearchText } from "../movies/searchMoviesSlice";
import { StyledInput } from "../../layouts/Header/styled";
import { selectSearchText } from "../movies/searchMoviesSlice";

export default () => {
    const query = useQueryParameter(searchQueryParamsName);
    const replaceQueryParameter = useReplaceQueryParameter();
    const history = useHistory();
    const dispatch = useDispatch();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamsName,
            value: target.value.trim() ? target.value : undefined
        });

        dispatch(fetchSearchMovies());
        dispatch(changeSearchText(target.value));
        
        history.push({pathname: "/movies-search", search: `?search=${target.value}`})
    };

    return (
        <StyledInput
            placeholder="Search for movies"
            value={query || ""}
            onChange={onInputChange}
        />
    );
};
