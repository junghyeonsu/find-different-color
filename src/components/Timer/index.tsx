import React from 'react';
import * as Styled from './styled';

interface TimerProps {
  time: number;
}

function Timer({ time }: TimerProps): JSX.Element {
  return (
    <Styled.Container>
      <Styled.Background>
        <Styled.Time>{time}</Styled.Time>
      </Styled.Background>
      <Styled.Progress time={time} />
    </Styled.Container>
  );
}

export default Timer;
