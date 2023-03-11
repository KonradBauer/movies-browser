import { StyledTags, Tag, TextTag } from "./styled"

export const TagsComponent = ({movieDetails}) => {
    return (
      <StyledTags movieDetails={movieDetails}>
        <Tag>
          <TextTag movieDetails={movieDetails}>Action</TextTag>
        </Tag>
        <Tag>
          <TextTag movieDetails={movieDetails}>Drama</TextTag>
        </Tag>
        <Tag>
          <TextTag movieDetails={movieDetails}>Adventure</TextTag>
        </Tag>
      </StyledTags>
    );
}