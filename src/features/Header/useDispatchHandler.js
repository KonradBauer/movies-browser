import { useDispatch } from "react-redux";
import { changeMoviesSearchText } from "../movies/searchMoviesSlice";

export const useDispatchHandler = (fetchData, firstPage) => {
   const dispatch = useDispatch();

   const dispatchHandler = () => {
      dispatch(fetchData());
      dispatch(firstPage());
      dispatch(changeMoviesSearchText(""));
   };

   return dispatchHandler;
};
