import Information from "../../Information";
import Description from "../../Description";
import Details from "../../Details";
import noPerson from "../../../../common/images/no-person.png";
import { APIImageUrl } from "../../../../features/getAPI";

import { Container, DescriptionContainer, Image } from "./styled";

export const PersonDetailsTile = ({ profileSizes, profile_path, name, birthday, place_of_birth, biography }) => {
  return (
    <Container personDetails>
      <Image
        personDetails
        source={profile_path ? `${APIImageUrl}/${profileSizes ? profileSizes[3] : ""}${profile_path}` : noPerson}
        alt=""
      />
      <DescriptionContainer personDetails>
        <Information personDetails name={name} />
        <Details personDetails birthday={birthday} place_of_birth={place_of_birth} />
      </DescriptionContainer>
      <Description personDetails biography={biography} />
    </Container>
  );
};
