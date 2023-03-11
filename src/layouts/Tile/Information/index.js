import { Info, Title, Year } from "./styled";

export const Information = ({ movieDetails, person, role }) => {
  return (
    <Info person={person}>
      <Title movieDetails={movieDetails} person={person}>
        {person ? "Donnie Yen" : "Mulan"}
      </Title>
      <Year movieDetails={movieDetails} person={person} role={role}>
        {person ? role : "2020"}
      </Year>
    </Info>
  );
};
