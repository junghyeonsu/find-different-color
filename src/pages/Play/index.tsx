/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import { Board, Timer, Stage, Point } from '../../components';
import useTimer from '../../hooks/useTimer';
import * as Styled from './styled';

function Play(): JSX.Element {
  const [point, setPoint] = useState<number>(100000);
  const [stage, setStage] = useState<number>(1);
  const [active, setActive] = useState<boolean>(false);
  const { time, startGame, stopGame, resetTime } = useTimer();

  // const onClickButton = () => {
  //   setStage(stage + 1);
  //   setActive(true);
  //   setTimeout(() => {
  //     setActive(false);
  //   }, 100);
  // };

  useEffect(() => {
    startGame();
    return () => stopGame();
  }, []);

  useEffect(() => {
    if (time <= 0) resetTime();
  }, [time]);

  return (
    <Styled.Container>
      <Stage active={active} stage={stage} />
      <Timer time={time} />
      <Board />
      <Point point={point} />
    </Styled.Container>
  );
}

export default Play;
