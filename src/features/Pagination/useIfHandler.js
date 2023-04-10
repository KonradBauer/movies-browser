import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { usePathname } from "../usePathname";
import { selectMoviesPages } from "../movies/movie/moviesSlice";
import { selectPeoplePages } from "../peoples/people/peopleSlice";
import { selectSearchMoviesPage, selectSearchMoviesText } from "../movies/searchMoviesSlice";
import { selectPeopleSearchText, selectSearchPeoplePage } from "../peoples/searchPeopleSlice";

export const useIfHandler = () => {
   const dispatch = useDispatch();
   const history = useHistory();

   const pathname = usePathname();

   const moviesPage = useSelector(selectMoviesPages);
   const peoplePage = useSelector(selectPeoplePages);
   const searchMoviesPage = useSelector(selectSearchMoviesPage);
   const searchMoviesText = useSelector(selectSearchMoviesText);
   const searchPeoplePage = useSelector(selectSearchPeoplePage);
   const searchPeopleText = useSelector(selectPeopleSearchText);

   const ifHandler = ({
      paggination = false,
      pageNumber = "",
      useEffect = false,
      dispatches = false,
      moviesDispatch = "",
      searchMoviesDispatch = "",
      peopleDispatch = "",
      searchPeopleDispatch = "",
   }) => {
      if (pathname.includes("/popular-movies")) {
         if (pathname.includes("search")) {
            paggination && history.push(`?search=${searchMoviesText}&page=${pageNumber}`);
            useEffect && paginationPageSet(searchMoviesPage);
            dispatches && dispatch(searchMoviesDispatch());
         } else {
            paggination && history.push(`?page=${pageNumber}`);
            useEffect && paginationPageSet(moviesPage);
            dispatches && dispatch(moviesDispatch());
         }
      } else if (pathname.includes("/popular-people")) {
         if (pathname.includes("search")) {
            paggination && history.push(`?search=${searchPeopleText}&page=${pageNumber}`);
            useEffect && paginationPageSet(searchPeoplePage);
            dispatches && dispatch(searchPeopleDispatch());
         } else {
            paggination && history.push(`?page=${pageNumber}`);
            useEffect && paginationPageSet(peoplePage);
            dispatches && dispatch(peopleDispatch());
         }
      } else {
         return null;
      }
   };

   const paginationPageSet = (pageNumber) => {
      ifHandler({ paggination: true, pageNumber: pageNumber });
   };

   return ifHandler;
};
