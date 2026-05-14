import {
  SkeletonLine,
  SkeletonMovieCard,
  SkeletonMovieContent,
  SkeletonMovieImage,
  SkeletonTagsRow,
} from "./styled";

const MovieTileSkeleton = () => (
  <SkeletonMovieCard>
    <SkeletonMovieImage />
    <SkeletonMovieContent>
      <SkeletonLine $width="75%" />
      <SkeletonLine $width="40%" />
      <SkeletonTagsRow>
        <SkeletonLine $width="60px" />
        <SkeletonLine $width="80px" />
      </SkeletonTagsRow>
      <SkeletonLine $width="50%" />
    </SkeletonMovieContent>
  </SkeletonMovieCard>
);

export default MovieTileSkeleton;
