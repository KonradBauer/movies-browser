import { usePathname } from "../usePathname";
import { fetchMovies, moviesPageDecrement, moviesPageFirst, moviesPageIncrement, moviesPageLast } from "../movies/movie/moviesSlice";
import { fetchPeople, peoplePageDecrement, peoplePageFirst, peoplePageIncrement, peoplePageLast } from "../peoples/people/peopleSlice";
import {
   fetchSearchMovies,
   searchMoviesPageDecrement,
   searchMoviesPageIncrement,
   setMoviesPageFirst,
   setMoviesPageLast,
} from "../movies/searchMoviesSlice";
import {
   fetchSearchPeople,
   searchPeoplePageDecrement,
   searchPeoplePageIncrement,
   setPeoplePageFirst,
   setPeoplePageLast,
} from "../peoples/searchPeopleSlice";
import { useEffect } from "react";
import { useIfHandler } from "./useIfHandler";

export const useDispatchHandler = () => {
   const pathname = usePathname();
   const ifHandler = useIfHandler();

   useEffect(() => {
      ifHandler({ useEffect: true });
   }, [pathname]);

   const dispatchData = () => {
      ifHandler({
         dispatches: true,
         moviesDispatch: fetchMovies,
         searchMoviesDispatch: fetchSearchMovies,
         peopleDispatch: fetchPeople,
         searchPeopleDispatch: fetchSearchPeople,
      });
   };

   const dispatchPageDecrement = () => {
      ifHandler({
         dispatches: true,
         moviesDispatch: moviesPageDecrement,
         searchMoviesDispatch: searchMoviesPageDecrement,
         peopleDispatch: peoplePageDecrement,
         searchPeopleDispatch: searchPeoplePageDecrement,
      });
      dispatchData();
   };

   const dispatchPageIncrement = () => {
      ifHandler({
         dispatches: true,
         moviesDispatch: moviesPageIncrement,
         searchMoviesDispatch: searchMoviesPageIncrement,
         peopleDispatch: peoplePageIncrement,
         searchPeopleDispatch: searchPeoplePageIncrement,
      });
      dispatchData();
   };

   const dispatchPageFirst = () => {
      ifHandler({
         dispatches: true,
         moviesDispatch: moviesPageFirst,
         searchMoviesDispatch: setMoviesPageFirst,
         peopleDispatch: peoplePageFirst,
         searchPeopleDispatch: setPeoplePageFirst,
      });
      dispatchData();
   };

   const dispatchPageLast = () => {
      ifHandler({
         dispatches: true,
         moviesDispatch: moviesPageLast,
         searchMoviesDispatch: setMoviesPageLast,
         peopleDispatch: peoplePageLast,
         searchPeopleDispatch: setPeoplePageLast,
      });
      dispatchData();
   };

   return { dispatchPageDecrement, dispatchPageIncrement, dispatchPageFirst, dispatchPageLast };
};
