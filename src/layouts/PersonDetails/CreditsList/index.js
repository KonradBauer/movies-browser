import { useSelector } from "react-redux";

import { Tile } from "../../Tile";
import { selectPeopleCredits } from "../../../features/peoples/peopleDetails/peopleDetailsSlice";
import { selectPosterSizes } from "../../../features/configurationSlice";

import { CastContent, List, SubdivTitle } from "../styled";

const CreditsList = ({ cast, crew }) => {
   const peopleCredits = useSelector(selectPeopleCredits);
   const posterSizes = useSelector(selectPosterSizes);

   return (
      <CastContent>
         <SubdivTitle>
            {cast && `Movies - cast(${peopleCredits.cast && peopleCredits.cast.length})`}
            {crew && `Movies - crew(${peopleCredits.crew && peopleCredits.crew.length})`}
         </SubdivTitle>
         <List>
            {cast &&
               peopleCredits &&
               peopleCredits.cast &&
               peopleCredits.cast.map(({ id, poster_path, title, release_date, genre_ids, vote_average, vote_count }) => (
                  <Tile
                     movie
                     posterSizes={posterSizes}
                     key={id}
                     id={id}
                     poster_path={poster_path}
                     title={title}
                     release_date={release_date}
                     genre_ids={genre_ids}
                     vote_average={vote_average}
                     vote_count={vote_count}
                  />
               ))}
            {crew &&
               peopleCredits &&
               peopleCredits.crew &&
               peopleCredits.crew.map(({ id, poster_path, title, release_date, genre_ids, vote_average, vote_count }) => (
                  <Tile
                     movie
                     posterSizes={posterSizes}
                     key={id}
                     id={id}
                     poster_path={poster_path}
                     title={title}
                     release_date={release_date}
                     genre_ids={genre_ids}
                     vote_average={vote_average}
                     vote_count={vote_count}
                  />
               ))}
         </List>
      </CastContent>
   );
};

export default CreditsList;
