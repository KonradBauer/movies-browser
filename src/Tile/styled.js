import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 16px;
  border-radius: 5px;
  margin: 10px auto;
  max-width: ${(props) => props.widthContainer}px;
  height: 650px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
`;

export const Poster = styled.img`
  border-radius: 5px;
  width: ${(props) => props.widthImage}px;
  height: ${(props) => props.heightImage}px;
`;

export const Description = styled.div`
  margin: 16px 0 39px 0;
`;

export const Info = styled.div`
  display: block;
  gap: 8px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.color.black};
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin: 0;
`;

export const Year = styled.div`
  color: ${({ theme }) => theme.color.waterloo};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;

export const Tags = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 8px;
  margin-top: 8px;
  width: 279px;
`;

export const Tag = styled.div`
  background: ${({ theme }) => theme.color.mystic};
  border-radius: 5px;
  padding: 8px 16px;
`;

export const TextTag = styled.div`
  color: ${({ theme }) => theme.color.black};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;
`;

export const Raiting = styled.div`
  display: flex;
  gap: 12px;
  position: absolute;
  bottom: 16px;
`;

export const Rate = styled.div`
  color: ${({ theme }) => theme.color.black};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
`;

export const Votes = styled.div`
  color: ${({ theme }) => theme.color.waterloo};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;
