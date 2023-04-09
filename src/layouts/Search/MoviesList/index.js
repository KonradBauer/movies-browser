import { useSelector } from "react-redux";

import Tile from "../../Tile";
import { selectSearchMovies } from "../../../features/movies/searchMoviesSlice";
import { selectPosterSizes } from "../../../features/configurationSlice";

import { MoviesTilesList } from "../styled";

const MoviesList = () => {
    const searchMovie = useSelector(selectSearchMovies);
    const posterSizes = useSelector(selectPosterSizes);

    return (
        <MoviesTilesList>
            {searchMovie.map(({ id, title, release_date, poster_path, genre_ids, vote_average, vote_count }) => (
                <Tile
                    movie
                    id={id}
                    posterSizes={posterSizes}
                    title={title}
                    release_date={release_date}
                    poster_path={poster_path}
                    genre_ids={genre_ids}
                    vote_average={vote_average}
                    vote_count={vote_count}
                />
            ))}
        </MoviesTilesList>
    );
};

export default MoviesList;
