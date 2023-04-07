import { useSelector } from "react-redux";

import { selectMovieCredits } from "../../../features/movies/movieDetails/movieDetailsAndCreditsSlice";
import { CastContent, List, SubdivTitle } from "../styled";
import { Tile } from "../../Tile";
import { selectProfileSizes } from "../../../features/configurationSlice";

const CreditsList = ({ cast, crew, title }) => {
   const movieCredits = useSelector(selectMovieCredits);
   const profileSizes = useSelector(selectProfileSizes);

   return (
      <CastContent>
         <SubdivTitle>{title}</SubdivTitle>
         <List>
            {cast &&
               movieCredits &&
               movieCredits.cast &&
               movieCredits.cast.map(({ id, profile_path, name, character }) => (
                  <Tile
                     person
                     profileSizes={profileSizes}
                     key={id}
                     id={id}
                     profile_path={profile_path}
                     name={name}
                     character={character}
                  />
               ))}
            {crew &&
               movieCredits &&
               movieCredits.crew &&
               movieCredits.crew.map(({ id, profile_path, name, job }) => (
                  <Tile
                     person
                     profileSizes={profileSizes}
                     key={id}
                     id={id}
                     profile_path={profile_path}
                     name={name}
                     job={job}
                  />
               ))}
         </List>
      </CastContent>
   );
};

export default CreditsList;
