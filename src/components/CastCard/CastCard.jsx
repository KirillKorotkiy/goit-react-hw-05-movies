import { ItemLImg, Item, Name, Character } from "./CastCard.styled";
import { IMG_URL } from "components/Services/FetchAPI";

export const CastCard = ({ cast }) => {
  return (
    <>
      {cast.map(({id, profile_path, name, character }) => (
        <Item key={id}>
          <ItemLImg src={ profile_path ?  `${IMG_URL}${profile_path}`: `https://i.stack.imgur.com/dr5qp.jpg`} alt={character} />
          <Name>{name}</Name>
          <Character>{character}</Character>
        </Item>
      )).slice(0, 24)}
    </>
  );
};
