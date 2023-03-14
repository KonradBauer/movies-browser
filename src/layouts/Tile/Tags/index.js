import { TagsContainer, Tag, TagContent } from "./styled";

export const Tags = ({ movieDetails }) => {
  return (
    <TagsContainer movieDetails={movieDetails}>
      <Tag>
        <TagContent movieDetails={movieDetails}>Action</TagContent>
      </Tag>
      <Tag>
        <TagContent movieDetails={movieDetails}>Drama</TagContent>
      </Tag>
      <Tag>
        <TagContent movieDetails={movieDetails}>Adventure</TagContent>
      </Tag>
    </TagsContainer>
  );
};
