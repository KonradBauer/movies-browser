import { Disclaimer, SpinnerWrapper } from "./styled";
import { ReactComponent as Spinner } from "../../common/svg/spinner.svg";

export const Search = () => {
  return (
    <>
      <Disclaimer>Search results for “”</Disclaimer>
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    </>
  );
};
