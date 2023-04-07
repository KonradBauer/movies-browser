import { useSelector } from "react-redux";

import { APIImageUrl } from "../../../features/getAPI";
import { selectBackdropSizes } from "../../../features/configurationSlice";
import { selectMovieDetails } from "../../../features/movies/movieDetails/movieDetailsAndCreditsSlice";

import {
   Background,
   MainInfo,
   Poster,
   Raiting,
   RaitingCap,
   RaitingNumber,
   RaitingWrapper,
   StyledStar,
   Title,
   Votes,
   Wrapper,
} from "../styled";

const BackgroundImageContent = () => {
   const movieDetails = useSelector(selectMovieDetails);
   const backdropSizes = useSelector(selectBackdropSizes);

   return (
      <>
         {movieDetails && movieDetails.backdrop_path ? (
            <Background>
               <Wrapper>
                  <Poster
                     source={`${APIImageUrl}/${backdropSizes ? backdropSizes[3] : ""}${movieDetails.backdrop_path}`}
                     alt="movie poster"
                  />
                  <MainInfo>
                     <Title>{movieDetails.title}</Title>
                     <RaitingWrapper>
                        <Raiting>
                           <StyledStar />
                           <RaitingNumber>
                              {movieDetails.vote_average?.toFixed(1)}
                              <RaitingCap>/10</RaitingCap>
                           </RaitingNumber>
                        </Raiting>
                        <Votes>{movieDetails.vote_count} votes</Votes>
                     </RaitingWrapper>
                  </MainInfo>
               </Wrapper>
            </Background>
         ) : null}
      </>
   );
};

export default BackgroundImageContent;
