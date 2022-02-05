import React from 'react';
import * as Styled from './styled';

interface TimerProps {
  time: number;
}

function Timer({ time }: TimerProps): JSX.Element {
  return <Styled.Container>{time}</Styled.Container>;
}

export default Timer;
