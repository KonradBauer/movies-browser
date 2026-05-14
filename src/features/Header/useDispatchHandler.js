import { useDispatch } from "react-redux";

export const useDispatchHandler = (fetchData, firstPage, clearSearchText) => {
   const dispatch = useDispatch();

   const dispatchHandler = () => {
      dispatch(fetchData());
      dispatch(firstPage());
      if (clearSearchText) dispatch(clearSearchText(""));
   };

   return dispatchHandler;
};
