import { useSelector } from "react-redux";

import Error from "../../Error";
import Pagination from "../../Pagination";
import Tile from "../../Tile";
import PersonTileSkeleton from "../../Skeleton/PersonTileSkeleton";
import { selectPeople, selectPeoplePages, selectPeopleStatus } from "../../../features/peoples/people/peopleSlice";
import { selectProfileSizes } from "../../../features/configurationSlice";

import { BoxTitle, MainBox, PersonTilesList, Section } from "../styled";

const SKELETON_COUNT = 20;

const PeopleListContent = () => {
  const people = useSelector(selectPeople);
  const peoplePages = useSelector(selectPeoplePages);
  const peopleStatus = useSelector(selectPeopleStatus);
  const profileSizes = useSelector(selectProfileSizes);

  return (
    <>
      {peopleStatus === "error" && <Error />}
      {peopleStatus === "loading" && (
        <MainBox>
          <Section>
            <BoxTitle>Popular people</BoxTitle>
            <PersonTilesList>
              {Array.from({ length: SKELETON_COUNT }, (_, i) => (
                <PersonTileSkeleton key={i} />
              ))}
            </PersonTilesList>
          </Section>
        </MainBox>
      )}
      {peopleStatus === "success" && (
        <MainBox>
          <Section>
            <BoxTitle>Popular people</BoxTitle>
            <PersonTilesList>
              {people.map(({ id, name, profile_path }) => (
                <Tile person profileSizes={profileSizes} key={id} id={id} name={name} profile_path={profile_path} />
              ))}
            </PersonTilesList>
          </Section>
          <Pagination page={peoplePages} totalPages={500} />
        </MainBox>
      )}
    </>
  );
};

export default PeopleListContent;
