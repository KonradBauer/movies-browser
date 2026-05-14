import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useRef } from "react";

import searchQueryParamsName from "../searchQueryParamName";
import { changePeopleSearchText, fetchSearchPeople, removeSearchPeople, setPeoplePageFirst, } from "../peoples/searchPeopleSlice";
import { changeMoviesSearchText, fetchSearchMovies, removeSearchMovies, setMoviesPageFirst, } from "../movies/searchMoviesSlice";
import { usePathname } from "../usePathname";

export const useInputChange = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const pathname = usePathname();
    const debounceTimer = useRef(null);

    const navigateToSearch = (searchPath, value) => {
        const destination = {
            pathname: searchPath,
            search: `?${searchQueryParamsName}=${value}`,
        };
        pathname.includes("search")
            ? history.replace(destination)
            : history.push(destination);
    };

    const dispatchesHandler = (removeDispatch, fetchDispatch, firstPageDispatch, searchFirstTextDispatch, searchSecondTextDispatch, value) => {
        dispatch(removeDispatch());
        dispatch(fetchDispatch());
        dispatch(firstPageDispatch());
        dispatch(searchFirstTextDispatch(""));
        dispatch(searchSecondTextDispatch(value));
    };

    const onInputChange = ({ target }) => {
        clearTimeout(debounceTimer.current);

        debounceTimer.current = setTimeout(() => {
            const value = target.value;

            if (pathname.includes("/popular-movies")) {
                if (!value.trim()) {
                    dispatch(removeSearchMovies());
                    dispatch(changeMoviesSearchText(""));
                    history.push("/popular-movies");
                    return;
                }
                dispatchesHandler(
                    removeSearchPeople,
                    fetchSearchMovies,
                    setMoviesPageFirst,
                    changePeopleSearchText,
                    changeMoviesSearchText,
                    value,
                );
                navigateToSearch("/popular-movies/search", value);
            } else if (pathname.includes("/popular-people")) {
                if (!value.trim()) {
                    dispatch(removeSearchPeople());
                    dispatch(changePeopleSearchText(""));
                    history.push("/popular-people");
                    return;
                }
                dispatchesHandler(
                    removeSearchMovies,
                    fetchSearchPeople,
                    setPeoplePageFirst,
                    changeMoviesSearchText,
                    changePeopleSearchText,
                    value,
                );
                navigateToSearch("/popular-people/search", value);
            }
        }, 300);
    };

    return onInputChange;
}
