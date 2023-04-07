import { useSelector } from "react-redux";

import BackgroundImageContent from "./BackgroundImageContent";
import CreditsList from "./CreditsList";
import Error from "../Error/index";
import { Tile } from "../Tile/index";
import { selectMovieDetailsStatus } from "../../features/movies/movieDetails/movieDetailsAndCreditsSlice";
import { selectPosterSizes } from "../../features/configurationSlice";

import { Content, TileContent } from "./styled";

export const MoviesDetails = () => {
   const posterSizes = useSelector(selectPosterSizes);
   const movieDetailsStatus = useSelector(selectMovieDetailsStatus);

   return (
      <>
         {movieDetailsStatus === "error" ? (
            <Error />
         ) : (
            <>
               <BackgroundImageContent />
               <Content>
                  <TileContent>
                     <Tile movieDetails posterSizes={posterSizes} />
                  </TileContent>
                  <CreditsList cast title="Cast" />
                  <CreditsList crew title="Crew" />
               </Content>
            </>
         )}
      </>
   );
};
