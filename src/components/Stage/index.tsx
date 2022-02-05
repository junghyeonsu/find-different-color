import React from 'react';
import * as Styled from './styled';
import { Stage as StageProps } from './types';

function Stage({ active, stage }: StageProps): JSX.Element {
  return (
    <Styled.StageContainer>
      <Styled.Stage active={active}>{stage}</Styled.Stage>
      <Styled.StageText>스테이지</Styled.StageText>
    </Styled.StageContainer>
  );
}

export default React.memo(Stage);
