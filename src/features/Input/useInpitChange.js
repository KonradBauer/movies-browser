import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useRef } from "react";

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
    const debounceTimer = useRef(null);

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
        dispatch(searchSecondTextDispatch(target.value));
    };

    const pushToPath = (pathname, target) => {
        history.push({
            pathname: pathname,
            search: `?${searchQueryParamsName}=${target.value}`,
        });
    };

    const onInputChange = ({ target }) => {
        if (debounceTimer.current) {
            clearTimeout(debounceTimer.current);
        }

        updateSearchParams(target);

        debounceTimer.current = setTimeout(() => {
            if (pathname.includes('/popular-movies')) {
                dispatchesHandler(
                    removeSearchPeople,
                    fetchSearchMovies,
                    setMoviesPageFirst,
                    changePeopleSearchText,
                    changeMoviesSearchText,
                    target,
                );
                pushToPath("/popular-movies/search", target);
            } else if (pathname.includes('/popular-people')) {
                dispatchesHandler(
                    removeSearchMovies,
                    fetchSearchPeople,
                    setPeoplePageFirst,
                    changeMoviesSearchText,
                    changePeopleSearchText,
                    target,
                );
                pushToPath("/popular-people/search", target);
            }
        }, 500);
    };

    return onInputChange;
}