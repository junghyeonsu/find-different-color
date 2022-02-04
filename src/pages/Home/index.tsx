import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './styled';

function Home(): JSX.Element {
  return (
    <Styled.Container>
      <Styled.Title>다른 색깔 찾기</Styled.Title>
      <Styled.SubTitle>Numble Challenge</Styled.SubTitle>
      <Link to="/play">
        <Styled.PlayButton>게임 시작</Styled.PlayButton>
      </Link>
    </Styled.Container>
  );
}

export default Home;
