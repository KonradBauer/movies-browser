import { Description } from "../../Description";
import { Details } from "../../Details";
import { Information } from "../../Information";
import { Container, DescriptionContainer, Image } from "./styled";
import noPerson from "../../../../common/images/no-person.png";

export const PersonDetailsTile = ({ srcImage, profileSizes }) => {
  return (
    <Container personDetails>
      <Image personDetails src={srcImage ? srcImage : noPerson} alt="" />
      <DescriptionContainer personDetails>
        <Information personDetails />
        <Details personDetails />
      </DescriptionContainer>
      <Description personDetails />
    </Container>
  );
};
