import React from 'react';
import * as Styled from './styled';
import { TimerProps } from './types';

function Timer({ time, active }: TimerProps): JSX.Element {
  return (
    <Styled.Container time={time} active={active}>
      <Styled.Background>
        <Styled.Time>{time}</Styled.Time>
      </Styled.Background>
      <Styled.Progress time={time} />
    </Styled.Container>
  );
}

export default Timer;
