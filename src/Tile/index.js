import {
  Container,
  Description,
  Info,
  Poster,
  Raiting,
  Rate,
  Tag,
  Tags,
  TextTag,
  Title,
  Votes,
  Year,
} from "./styled";
import star from "../common/svg/shape-star.svg";

export const Tile = ({ widthContainer, srcImage, widthImage, heightImage }) => {
  return (
    <Container widthContainer={widthContainer}>
      <Poster
        src={srcImage}
        alt=""
        widthImage={widthImage}
        heightImage={heightImage}
      />
      <Description>
        <Info>
          <Title>Mulan</Title>
          <Year>2020</Year>
        </Info>
        <Tags>
          <Tag>
            <TextTag>Action</TextTag>
          </Tag>
          <Tag>
            <TextTag>Adventure</TextTag>
          </Tag>
          <Tag>
            <TextTag>Drama</TextTag>
          </Tag>
        </Tags>
      </Description>
      <Raiting>
        <img src={star} alt="" />
        <Rate>7,8</Rate>
        <Votes>35 votes</Votes>
      </Raiting>
    </Container>
  );
};
