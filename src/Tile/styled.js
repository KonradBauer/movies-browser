import styled from "styled-components";
import {ReactComponent as Star} from "../common/svg/shape-star.svg";

export const Container = styled.div`
  position: relative;
  padding: 16px;
  border-radius: 5px;
  margin: 10px auto;
  max-width: fit-content;
  height: 650px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 288px;
    height: 201px;
  }
`;

export const MobileContent = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: flex;
    gap: 16px;
  }
`;

export const MobileDescription = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
  }
`;

export const Poster = styled.img`
  border-radius: 5px;
  width: ${(props) => props.widthImage}px;
  height: ${(props) => props.heightImage}px;

  @media (max-width: 767px) {
    width: 114px;
    height: 169px;
  }
`;

export const Description = styled.div`
  margin: 16px 0 39px 0;

  @media (max-width: ${({theme})=>theme.breakpoints.mobileMax}px) {
    margin: 0 0 8px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.color.black};
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;

export const Year = styled.div`
  color: ${({ theme }) => theme.color.waterloo};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
    margin-top: 4px;
  }
`;

export const Tags = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
  width: 279px;

  @media (max-width: ${({theme})=>theme.breakpoints.mobileMax}px) {
    max-width: 107px;
    flex-wrap: wrap;
  }
`;

export const Tag = styled.div`
  background: ${({ theme }) => theme.color.mystic};
  border-radius: 5px;
  padding: 8px 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 4px 8px;
  }
`;

export const TextTag = styled.div`
  color: ${({ theme }) => theme.color.black};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 10px;
    line-height: 1.1;
  }
`;

export const Raiting = styled.div`
  display: flex;
  gap: 12px;
  position: absolute;
  bottom: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    position: inherit;
    gap: 8px;
  }
`;

export const StarIcon = styled(Star)`
  @media (max-width: ${({theme})=>theme.breakpoints.mobileMax}px) {
    width: 16px;
    height: 16px;
  }
`;

export const Rate = styled.div`
  color: ${({ theme }) => theme.color.black};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
    line-height: 1.3;
  }
`;

export const Votes = styled.div`
  color: ${({ theme }) => theme.color.waterloo};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
    line-height: 1.3;
    margin-left: -1px;
  }
`;
