import { memo, useState } from "react";
import { useDispatch } from "react-redux";

import Information from "../../Information";
import noProfile from "../../../../common/images/no-person.png";
import { APIImageUrl } from "../../../../features/getAPI";
import { fetchPeopleDetails } from "../../../../features/peoples/peopleDetails/peopleDetailsSlice";
import { getPeopleID } from "../../../../features/peoples/people/peopleSlice";

import { ContainerLink, Image, ImageWrapper } from "./styled";

const PersonTile = memo(({ profileSizes, id, name, profile_path, character, job }) => {
  const dispatch = useDispatch();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleClick = () => {
    dispatch(getPeopleID(id));
    dispatch(fetchPeopleDetails());
  };

  return (
    <ContainerLink to={`/popular-people/${id}`} onClick={handleClick} person>
      <ImageWrapper>
        <Image
          person
          source={profile_path ? `${APIImageUrl}/${profileSizes && profileSizes[1]}${profile_path}` : noProfile}
          alt={name || "Person profile picture"}
          onLoad={() => setImageLoaded(true)}
          style={{ opacity: imageLoaded ? 1 : 0 }}
        />
      </ImageWrapper>
      <Information person name={name} character={character} job={job} />
    </ContainerLink>
  );
});

export default PersonTile;
