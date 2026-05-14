import { SkeletonLine, SkeletonPersonCard, SkeletonPersonImage } from "./styled";

const PersonTileSkeleton = () => (
  <SkeletonPersonCard>
    <SkeletonPersonImage />
    <SkeletonLine $width="70%" />
    <SkeletonLine $width="50%" />
  </SkeletonPersonCard>
);

export default PersonTileSkeleton;
