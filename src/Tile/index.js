import {
  Container,
  Description,
  Info,
  MobileContent,
  MobileDescription,
  Poster,
  Raiting,
  Rate,
  StarIcon,
  Tag,
  Tags,
  TextTag,
  Title,
  Votes,
  Year,
} from "./styled";

export const Tile = ({ widthContainer, srcImage, widthImage, heightImage }) => {
  return (
    <Container widthContainer={widthContainer}>
      <MobileContent>
        <Poster
          src={srcImage}
          alt=""
          widthImage={widthImage}
          heightImage={heightImage}
        />
        <MobileDescription>
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
                <TextTag>Drama</TextTag>
              </Tag>
              <Tag>
                <TextTag>Adventure</TextTag>
              </Tag>
            </Tags>
          </Description>
          <Raiting>
            <StarIcon alt="" />
            <Rate>7,8</Rate>
            <Votes>35 votes</Votes>
          </Raiting>
        </MobileDescription>
      </MobileContent>
    </Container>
  );
};
