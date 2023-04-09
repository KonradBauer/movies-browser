import { useDispatch } from "react-redux";

import Information from "../../Information";
import noProfile from "../../../../common/images/no-person.png";
import { APIImageUrl } from "../../../../features/getAPI";
import { fetchPeopleDetails } from "../../../../features/peoples/peopleDetails/peopleDetailsSlice";
import { getPeopleID } from "../../../../features/peoples/people/peopleSlice";

import { ContainerLink, Image } from "./styled";

export const PersonTile = ({ profileSizes, id, name, profile_path, character, job }) => {
  const dispatch = useDispatch();

  const dispatchPersonDetailsHandler = () => {
    dispatch(getPeopleID(id));
    dispatch(fetchPeopleDetails());
  };

  return (
    <ContainerLink to={`/popular-people/${id}`} onClick={dispatchPersonDetailsHandler} person>
      <Image
        person
        source={profile_path ? `${APIImageUrl}/${profileSizes && profileSizes[1]}${profile_path}` : noProfile}
        alt="profile picture"
      />
      <Information person name={name} character={character} job={job} />
    </ContainerLink>
  );
};
