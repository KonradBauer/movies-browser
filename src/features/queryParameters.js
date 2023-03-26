import { useHistory, useLocation } from "react-router-dom";

export const useQueryParameter = (key) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(key);
};

export const useReplaceQueryParameter = ({value}) => {
  const location = useLocation();
  const history = useHistory();

  return ({ baseUrl, key, value }) => {
    const searchParams = new URLSearchParams(location.search);

    if (value.trim() === "") {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }
    const newSearch = searchParams.toString();
    history.push(`${baseUrl}?${newSearch}`);
  };
};