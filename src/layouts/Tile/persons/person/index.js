import { APIImageUrl } from "../../../../features/getAPI";
import { Information } from "../../Information";
import { Container, Image } from "./styled";
import noProfile from "../../../../common/images/no-person.png";

export const PersonTile = ({ profileSizes, name, profile_path, character, job }) => {
  return (
    <Container person>
      <Image
        person
        source={
          profile_path
            ? `${APIImageUrl}/${profileSizes ? profileSizes[1] : ""}${profile_path}`
            : noProfile
        }
        alt=""
      />
      <Information person name={name} character={character} job={job} />
    </Container>
  );
};
