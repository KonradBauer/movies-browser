import { Disclaimer, PictureWrapper } from "./styled";
import { ReactComponent as Picture } from "../../common/svg/noResult.svg";

export const NoResult = () => {
  return (
    <>
      <Disclaimer>Sorry, there are no results for ""</Disclaimer>
      <PictureWrapper>
        <Picture />
      </PictureWrapper>
    </>
  );
};
