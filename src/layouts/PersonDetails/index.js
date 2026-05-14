import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import CreditsList from "./CreditsList";
import Error from "../Error/index";
import Tile from "../Tile/index";
import { fetchPeopleDetails, selectPeopleDetailsStatus } from "../../features/peoples/peopleDetails/peopleDetailsSlice";
import { getPeopleID } from "../../features/peoples/people/peopleSlice";
import { selectProfileSizes } from "../../features/configurationSlice";

import { Content, TileContent } from "./styled";
import Loading from "../Loading";

const PersonDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const profileSizes = useSelector(selectProfileSizes);
  const personDetailsStatus = useSelector(selectPeopleDetailsStatus);

  useEffect(() => {
    if (id) {
      dispatch(getPeopleID(Number(id)));
      dispatch(fetchPeopleDetails());
    }
  }, [dispatch, id]);

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
