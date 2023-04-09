import { useSelector } from "react-redux";

import CreditsList from "./CreditsList";
import Error from "../Error/index";
import Tile from "../Tile/index";
import { selectPeopleDetailsStatus } from "../../features/peoples/peopleDetails/peopleDetailsSlice";
import { selectProfileSizes } from "../../features/configurationSlice";

import { Content, TileContent } from "./styled";
import Loading from "../Loading";

const PersonDetails = () => {
  const profileSizes = useSelector(selectProfileSizes);
  const personDetailsStatus = useSelector(selectPeopleDetailsStatus);

  return (
    <>
      {personDetailsStatus === "error" && <Error />}
      {personDetailsStatus === "loading" && <Loading />}
      {personDetailsStatus === "success" && (
        <Content>
          <TileContent>
            <Tile personDetails profileSizes={profileSizes} />
          </TileContent>
          <CreditsList cast />
          <CreditsList crew />
        </Content>
      )}
    </>
  );
};

export default PersonDetails;
