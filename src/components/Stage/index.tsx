import React from 'react';
import * as Styled from './styled';

interface StageProps {
  active: boolean;
  stage: number;
}

function Stage({ active, stage }: StageProps): JSX.Element {
  return (
    <Styled.StageContainer>
      <Styled.Stage active={active}>{stage}</Styled.Stage>
      <Styled.StageText>스테이지</Styled.StageText>
    </Styled.StageContainer>
  );
}

export default Stage;
