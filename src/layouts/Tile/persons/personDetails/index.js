import { useState } from "react";

import Information from "../../Information";
import Description from "../../Description";
import Details from "../../Details";
import noPerson from "../../../../common/images/no-person.png";
import { APIImageUrl } from "../../../../features/getAPI";

import { Container, DescriptionContainer, Image, ImageWrapper } from "./styled";

const PersonDetailsTile = ({ profileSizes, profile_path, name, birthday, place_of_birth, biography }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Container personDetails>
      <ImageWrapper>
        <Image
          personDetails
          source={profile_path ? `${APIImageUrl}/${profileSizes ? profileSizes[3] : ""}${profile_path}` : noPerson}
          alt={name || "Person profile picture"}
          onLoad={() => setImageLoaded(true)}
          style={{ opacity: imageLoaded ? 1 : 0 }}
        />
      </ImageWrapper>
      <DescriptionContainer personDetails>
        <Information personDetails name={name} />
        <Details personDetails birthday={birthday} place_of_birth={place_of_birth} />
      </DescriptionContainer>
      <Description personDetails biography={biography} />
    </Container>
  );
};

export default PersonDetailsTile;
