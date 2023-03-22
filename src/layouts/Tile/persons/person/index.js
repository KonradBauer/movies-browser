import { APIImageUrl } from "../../../../features/getAPI";
import { Information } from "../../Information";
import { Container, Image } from "./styled";
import noProfile from "../../../../common/images/no-person.png";
import { useDispatch } from "react-redux";
import { getPeopleID } from "../../../../features/peoples/people/peopleSlice";
import { fetchPeopleDetails } from "../../../../features/peoples/peopleDetails/peopleDetailsSlice";

export const PersonTile = ({ profileSizes, id, name, profile_path, character, job }) => {
  const dispatch = useDispatch();

  const dispatchHandler = () => {
    dispatch(getPeopleID(id));
    dispatch(fetchPeopleDetails());
  };

  return (
    <Container onClick={dispatchHandler} person>
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
