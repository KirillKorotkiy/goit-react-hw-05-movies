import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled(Link)`
  flex-basis: 25%;
  text-align: center;
  margin-bottom: 15px;
  cursor: pointer;
  text-decoration: none;
  color: #000000;
  transition-property: transform;
  transition-duration: 300ms;
  :hover {
    transform: scale(1.05);
  }
`;

export const Img = styled.img`
  width: 260px;
  margin-bottom: 8px;
  transition-duration: 1500ms;
`;

export const TrendingMovies = styled.h1`
  padding-top: 80px;
`;

export const Title = styled.p`
  font-size: 22px;
`;




