import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { selectPeopleCredits } from "../../../../features/peoples/peopleDetails/peopleDetailsSlice";

import { FirstInformation, SecondInformation } from "../styled";

const MovieInfo = ({ movieDetails, title, release_date }) => {
  const location = useLocation();
  const pathname = location.pathname;

  const peopleCredits = useSelector(selectPeopleCredits);

  return (
    <>
      <FirstInformation movieDetails={movieDetails}>{title}</FirstInformation>
      <SecondInformation movieDetails={movieDetails}>
        {pathname.includes("/popular-people") && peopleCredits
          ? `${title} ${release_date ? `(${new Date(release_date).getFullYear()})` : ""}`
          : new Date(release_date).getFullYear()}
      </SecondInformation>
    </>
  );
};

export default MovieInfo;
