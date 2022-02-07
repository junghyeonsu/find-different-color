/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO: eslint 지우기
import { useState, useEffect, useCallback } from 'react';
import { Board, Timer, Stage, Point } from '../../components';
import useTimer, { TimerHookProps } from '../../hooks/useTimer';
import * as Styled from './styled';

function Play(): JSX.Element {
  const [point, setPoint] = useState<number>(100000);
  const [stage, setStage] = useState<number>(1);
  const [active, setActive] = useState<boolean>(false);
  const { time, startGame, stopGame, resetTime, minusTime }: TimerHookProps = useTimer();

  const handleAnswerCardClick = useCallback(() => {
    setStage(stage => stage + 1);
    setActive(true);
    resetTime();
    setTimeout(() => {
      setActive(false);
    }, 100);
  }, [resetTime]);

  const handleWrongCardClick = useCallback(() => {
    minusTime();
  }, [minusTime]);

  useEffect(() => {
    startGame();
    return () => stopGame();
  }, [startGame, stopGame]);

  useEffect(() => {
    if (time <= 0) {
      resetTime();
      alert('게임 끝'); // TODO: 게임 끝 구현하기
    }
  }, [resetTime, time]);

  return (
    <Styled.Container>
      <Stage active={active} stage={stage} />
      <Timer time={time} />
      <Board
        handleAnswerCardClick={handleAnswerCardClick}
        handleWrongCardClick={handleWrongCardClick}
        stage={stage}
      />
      <Point point={point} />
    </Styled.Container>
  );
}

export default Play;
