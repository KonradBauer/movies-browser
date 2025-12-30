import searchQueryParamsName from "../../../features/searchQueryParamName";
import { useQueryParameter } from "../../../features/queryParameters";

import { useInputChange } from "../../../features/Input/useInpitChange";
import { usePathname } from "../../../features/usePathname";

import { StyledInput } from "../styled";

const SearchInput = () => {
  const query = useQueryParameter(searchQueryParamsName);
  const pathname = usePathname();

  const placeholder = pathname.includes("/popular-movies")
    ? "Search for movies..."
    : pathname.includes("popular-people")
    ? "Search for people..."
    : "";

  return (
    <StyledInput
      placeholder={placeholder}
      value={query || ""}
      onChange={useInputChange()}
    />
  );
};

export default SearchInput;
