import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import searchQueryParamsName from "../searchQueryParamName";
import { changePeopleSearchText, fetchSearchPeople, removeSearchPeople, setPeoplePageFirst, } from "../peoples/searchPeopleSlice";
import { changeMoviesSearchText, fetchSearchMovies, removeSearchMovies, setMoviesPageFirst, } from "../movies/searchMoviesSlice";
import { usePathname } from "../usePathname";
import { useReplaceQueryParameter } from "../queryParameters";

export const useInputChange = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const pathname = usePathname();
    const replaceQueryParameter = useReplaceQueryParameter();

    const updateSearchParams = (target) => {
        replaceQueryParameter({
            key: searchQueryParamsName,
            value: target.value.trim() ? target.value : undefined,
        });
    };

    const dispatchesHandler = (removeDispatch, fetchDispatch, firstPageDispatch, searchFirstTextDispatch, searchSecondTextDispatch, target) => {
        dispatch(removeDispatch());
        dispatch(fetchDispatch());
        dispatch(firstPageDispatch());
        dispatch(searchFirstTextDispatch(""));
        setTimeout(() => dispatch(searchSecondTextDispatch(target.value)), 1 * 1000);
    };

    const pushToPath = (pathname, target) => {
        setTimeout(
            () => history.push({
                pathname: pathname,
                search: `?${searchQueryParamsName}=${target.value}`,
            }), 1 * 1000);
    };

    const searchMovies = (target) => {
        updateSearchParams(target);

        dispatchesHandler(
            removeSearchPeople,
            fetchSearchMovies,
            setMoviesPageFirst,
            changePeopleSearchText,
            changeMoviesSearchText,
            target,
        );

        pushToPath("/popular-movies/search", target);
    };

    const searchPeople = (target) => {
        updateSearchParams(target);

        dispatchesHandler(
            removeSearchMovies,
            fetchSearchPeople,
            setPeoplePageFirst,
            changeMoviesSearchText,
            changePeopleSearchText,
            target,
        );

        pushToPath("/popular-people/search", target);
    };

    const onInputChange = ({ target }) => {
        if (pathname.includes('/popular-movies')) {
            searchMovies(target);
        } else if (pathname.includes('/popular-people')) {
            searchPeople(target);
        } else {
            return null;
        };
    };


    return onInputChange;
}