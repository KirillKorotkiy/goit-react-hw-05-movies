import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

export const Overview = styled.p`
    font-size: 22px;
`

export const MovieDescription = styled.div`
    display: flex;
    justify-content: space-between;
`
export const DescriptionInfo = styled.div`
    padding-top: 20px;
    flex-basis: 70%;
`
export const Poster = styled.img`
  margin-right: 50px;
  width: 350px
`

export const Title = styled.h1`
  margin-bottom: 30px;
`
export const UserScore = styled.p`
  margin-bottom: 30px;
  font-size: 24px;
`
export const OverviewTitle = styled.p`
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 700;
`
export const GoBackButton =  styled.button`
  margin-top: 80px;
  height: 30px;
  margin-bottom: 30px;
  background-image: url('https://www.svgrepo.com/show/345453/arrow-go-back.svg');
  background-repeat: no-repeat;
  background-size: contain;
  width: 50px;
  border: none;
  background-color: #ffffff;
  cursor: pointer;
  `;

 