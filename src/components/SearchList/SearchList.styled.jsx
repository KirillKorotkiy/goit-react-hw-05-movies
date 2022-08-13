import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Item = styled(Link)`
  display: flex;
  flex-basis: 48%;
  margin-bottom: 15px;
  cursor: pointer;
  text-decoration: none;
  color: #000000;
  transition-property: background-color, color;
  transition-duration: 500ms;
  :hover {
    background-color: #000000;
    color: #ffffffff;
  }
`;

export const Img = styled.img`
  margin-right: 15px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;
export const ReleaseData = styled.p`
  font-size: 22px;
  margin-bottom: 30px;
`;

export const Overview = styled.p`
  font-size: 20px;
`;

export const Wrapper = styled.div`
    padding: 10px;
`