import { memo } from "react";
import { useDispatch } from "react-redux";

import Information from "../../Information";
import noProfile from "../../../../common/images/no-person.png";
import { APIImageUrl } from "../../../../features/getAPI";
import { fetchPeopleDetails } from "../../../../features/peoples/peopleDetails/peopleDetailsSlice";
import { getPeopleID } from "../../../../features/peoples/people/peopleSlice";

import { ContainerLink, Image } from "./styled";

const PersonTile = memo(({ profileSizes, id, name, profile_path, character, job }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getPeopleID(id));
    dispatch(fetchPeopleDetails());
  };

  return (
    <ContainerLink to={`/popular-people/${id}`} onClick={handleClick} person>
      <Image
        person
        source={profile_path ? `${APIImageUrl}/${profileSizes && profileSizes[1]}${profile_path}` : noProfile}
        alt={name || "Person profile picture"}
        loading="lazy"
      />
      <Information person name={name} character={character} job={job} />
    </ContainerLink>
  );
});

export default PersonTile;
