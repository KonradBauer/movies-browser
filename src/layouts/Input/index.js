import searchQueryParamsName from "../../features/searchQueryParamName";
import { useQueryParameter } from "../../features/queryParameters";

import { useInputChange } from "../../features/Input/useInpitChange";
import { usePathname } from "../../features/usePathname";

import { StyledInput } from "../Header/styled";

export default () => {
  const query = useQueryParameter(searchQueryParamsName);

  return (
    <StyledInput
      placeholder={`Search for ${usePathname().includes("/popular-movies")
        ? "movies..."
        : usePathname().includes("popular-people")
          ? "people..."
          : ""
        }`}
      value={query || ""}
      onChange={useInputChange()}
    />
  );
};
