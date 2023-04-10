import { useSelector } from "react-redux";

import Error from "../../Error";
import Loading from "../../Loading";
import Pagination from "../../Pagination";
import Tile from "../../Tile";
import { selectPeople, selectPeoplePages, selectPeopleStatus } from "../../../features/peoples/people/peopleSlice";
import { selectProfileSizes } from "../../../features/configurationSlice";

import { BoxTitle, MainBox, PersonTilesList, Section } from "../styled";

const PeopleListContent = () => {
  const people = useSelector(selectPeople);
  const peoplePages = useSelector(selectPeoplePages);
  const peopleStatus = useSelector(selectPeopleStatus);
  const profileSizes = useSelector(selectProfileSizes);

  return (
    <>
      {peopleStatus === "error" && <Error />}
      {peopleStatus === "loading" && <Loading />}
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
