import { IMG_URL } from 'components/Services/FetchAPI';
import {
  Item,
  Img,
  Title,
  Overview,
  ReleaseData,
  Container,
  Wrapper
} from './SearchList.styled';

export const SearchList = ({ posts }) => {
  return (
    <Container>
      {posts.map(({ id, title, poster_path, overview, release_date }) => (
        <Item key={id} to={`${id}`}>
          <Img
            src={
              poster_path
                ? `${IMG_URL}${poster_path}`
                : 'https://image.shutterstock.com/image-vector/default-avatar-profile-social-media-260nw-1920331226.jpg'
            }
            alt={title}
          />
          <Wrapper>
            <Title>{title}</Title>
            <ReleaseData>{release_date}</ReleaseData>
            <Overview>{overview}</Overview>
          </Wrapper>
        </Item>
      ))}
    </Container>
  );
};
