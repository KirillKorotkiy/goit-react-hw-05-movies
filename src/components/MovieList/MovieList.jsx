import { ListItems, Item, Img, Title } from './MovieList.styled';
import { IMG_URL } from 'components/Services/FetchAPI';

const MovieList = ({ items }) => {
  return (
    <ListItems>
      {items.map(({ id, title, poster_path }) => (
        <Item key={id} to={`movies/${id}`}>
          <Img src={`${IMG_URL}${poster_path}`} alt={title} />
          <Title>{title}</Title>
        </Item>
      ))}
    </ListItems>
  );
};

export default MovieList;
