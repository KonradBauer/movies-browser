import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import BackgroundImageContent from "./BackgroundImageContent";
import CreditsList from "./CreditsList";
import Error from "../Error/index";
import Loading from "../Loading";
import Tile from "../Tile/index";
import { fetchMovieDetailsAndCredits, selectMovieDetailsStatus } from "../../features/movies/movieDetails/movieDetailsAndCreditsSlice";
import { getMovieID } from "../../features/movies/movie/moviesSlice";
import { selectPosterSizes } from "../../features/configurationSlice";

import { Content, TileContent } from "./styled";

const MoviesDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const posterSizes = useSelector(selectPosterSizes);
  const movieDetailsStatus = useSelector(selectMovieDetailsStatus);

  useEffect(() => {
    if (id) {
      dispatch(getMovieID(Number(id)));
      dispatch(fetchMovieDetailsAndCredits());
    }
  }, [dispatch, id]);

  return (
    <>
      {movieDetailsStatus === "error" && <Error />}
      {movieDetailsStatus === "loading" && <Loading />}
      {movieDetailsStatus === "success" && (
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

export default MoviesDetails;
