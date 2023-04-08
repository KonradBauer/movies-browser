import { theme } from "../../../common/Theme/theme";
import { useResizeWindowHandler } from "../../../features/useResizeWindowHandler";

import {
  FirstDetails,
  FirstDetailsContent,
  FirstDetailsLabel,
  SecondDetails,
  SecondDetailsContent,
  SecondDetailsLabel,
} from "./styled";

const PersonDetails = ({ birthday, place_of_birth }) => {
  const windowWidth = useResizeWindowHandler();

  return (
    <>
      <FirstDetails personDetails>
        {birthday && (
          <>
            <FirstDetailsLabel personDetails>
              {windowWidth > theme.breakpoints.mobileMax ? "Date of birth:" : "Birth:"}
            </FirstDetailsLabel>
            <FirstDetailsContent>{new Date(birthday).toLocaleDateString()}</FirstDetailsContent>
          </>
        )}
      </FirstDetails>
      <SecondDetails personDetails>
        {place_of_birth && (
          <>
            <SecondDetailsLabel personDetails>Place of birth:</SecondDetailsLabel>
            <SecondDetailsContent>{place_of_birth}</SecondDetailsContent>
          </>
        )}
      </SecondDetails>
    </>
  );
};

export default PersonDetails;
