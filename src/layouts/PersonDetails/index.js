import {
  CastContent,
  Content,
  ContentBackground,
  CrewContent,
  List,
  SubdivTitle,
  TileContent,
} from "./styled";
import { Tile } from "../Tile/index";
import { useSelector } from "react-redux";
import { selectPeopleCredits } from "../../features/peoples/peopleDetails/peopleDetailsSlice";
import { selectPosterSizes, selectProfileSizes } from "../../features/configurationSlice";
export const PersonDetails = () => {
  const peopleCredits = useSelector(selectPeopleCredits);
  const profileSizes = useSelector(selectProfileSizes);
  const posterSizes = useSelector(selectPosterSizes);

  return (
    <>
      <ContentBackground>
        <Content>
          <TileContent>
            <Tile personDetails profileSizes={profileSizes} />
          </TileContent>
          <CastContent>
            <SubdivTitle>
              Movies - cast({peopleCredits.cast && peopleCredits.cast.length})
            </SubdivTitle>
            <List>
              {peopleCredits.cast &&
                peopleCredits.cast.map(
                  ({
                    key,
                    id,
                    poster_path,
                    title,
                    release_date,
                    genre_ids,
                    vote_average,
                    vote_count,
                  }) => (
                    <Tile
                      movie
                      posterSizes={posterSizes}
                      key={key}
                      id={id}
                      poster_path={poster_path}
                      title={title}
                      release_date={release_date}
                      genre_ids={genre_ids}
                      vote_average={vote_average}
                      vote_count={vote_count}
                    />
                  )
                )}
            </List>
          </CastContent>
          <CrewContent>
            <SubdivTitle>
              Movies - crew({peopleCredits.crew && peopleCredits.crew.length})
            </SubdivTitle>
            <List>
              {peopleCredits.crew &&
                peopleCredits.crew.map(
                  ({
                    key,
                    id,
                    poster_path,
                    title,
                    release_date,
                    genre_ids,
                    vote_average,
                    vote_count,
                  }) => (
                    <Tile
                      movie
                      posterSizes={posterSizes}
                      key={key}
                      id={id}
                      poster_path={poster_path}
                      title={title}
                      release_date={release_date}
                      genre_ids={genre_ids}
                      vote_average={vote_average}
                      vote_count={vote_count}
                    />
                  )
                )}
            </List>
          </CrewContent>
        </Content>
      </ContentBackground>
    </>
  );
};
