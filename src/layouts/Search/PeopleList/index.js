import { useSelector } from "react-redux";

import Tile from "../../Tile";
import { selectSearchPeople } from "../../../features/peoples/searchPeopleSlice";
import { selectProfileSizes } from "../../../features/configurationSlice";

import { PeopleTilesList } from "../styled";

const PeopleList = () => {
    const searchPeople = useSelector(selectSearchPeople);
    const profileSizes = useSelector(selectProfileSizes);

    return (
        <PeopleTilesList>
            {searchPeople.map(({ id, name, profile_path }) => (
                <Tile
                    person
                    profileSizes={profileSizes}
                    key={id}
                    id={id}
                    name={name}
                    profile_path={profile_path}
                />
            ))}
        </PeopleTilesList>
    );
};

export default PeopleList;
