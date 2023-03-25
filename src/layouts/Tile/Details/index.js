import { useEffect, useState } from "react";
import {
  DetailsContainer,
  FirstDetails,
  FirstDetailsContent,
  FirstDetailsLabel,
  SecondDetails,
  SecondDetailsContent,
  SecondDetailsLabel,
} from "./styled";
import { theme } from "../../../common/Theme/theme";

export const Details = ({
  movieDetails,
  personDetails,
  production_countries,
  release_date,
  birthday,
  place_of_birth,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <DetailsContainer personDetails={personDetails}>
      {movieDetails ? (
        <>
          <FirstDetails>
            <FirstDetailsLabel>Production:</FirstDetailsLabel>
            {production_countries
              ? production_countries.map(({ name }) => (
                  <FirstDetailsContent>{name},</FirstDetailsContent>
                ))
              : ""}
          </FirstDetails>
          <SecondDetails>
            <SecondDetailsLabel>Release date:</SecondDetailsLabel>
            <SecondDetailsContent>
              {new Date(release_date).toLocaleDateString()}
            </SecondDetailsContent>
          </SecondDetails>
        </>
      ) : (
        ""
      )}
      {personDetails ? (
        <>
          <FirstDetails personDetails={personDetails}>
            {birthday ? (
              <>
                <FirstDetailsLabel personDetails={personDetails}>
                  {windowWidth > theme.breakpoints.mobileMax ? "Date of birth:" : "Birth:"}
                </FirstDetailsLabel>
                <FirstDetailsContent>{birthday}</FirstDetailsContent>
              </>
            ) : (
              ""
            )}
          </FirstDetails>
          <SecondDetails personDetails={personDetails}>
            {place_of_birth ? (
              <>
                <SecondDetailsLabel personDetails={personDetails}>
                  Place of birth:
                </SecondDetailsLabel>
                <SecondDetailsContent>{place_of_birth}</SecondDetailsContent>
              </>
            ) : (
              ""
            )}
          </SecondDetails>
        </>
      ) : (
        ""
      )}
    </DetailsContainer>
  );
};
