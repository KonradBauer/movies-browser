import { APIImageUrl } from "../../../../features/getAPI";
import { Information } from "../../Information";
import { Container, Image } from "./styled";

export const PersonTile = ({ profileSizes, name, profile_path, role }) => {
  return (
    <Container person>
      <Image person source={`${APIImageUrl}/${profileSizes[1]}${profile_path}`} alt="" />
      <Information person name={name} role={role} />
    </Container>
  );
};
