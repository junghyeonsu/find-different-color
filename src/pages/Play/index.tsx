/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO: eslint 지우기
import { useState, useEffect, useCallback } from 'react';
import { Board, Timer, Stage, Point } from '../../components';
import useTimer, { TimerHookProps } from '../../hooks/useTimer';
import usePoint, { PointHookProps } from '../../hooks/usePoint';
import * as Styled from './styled';

function Play(): JSX.Element {
  const [stage, setStage] = useState<number>(1);
  const [active, setActive] = useState<boolean>(false);
  const { time, startGame, stopGame, resetTime, minusTime }: TimerHookProps = useTimer();
  const { point, resetPoint, scorePoint }: PointHookProps = usePoint();

  const handleAnswerCardClick = useCallback(() => {
    setStage(stage => stage + 1);
    setActive(true);
    resetTime();
    scorePoint(stage, time);
    setTimeout(() => {
      setActive(false);
    }, 100);
  }, [resetTime, scorePoint, stage, time]);

  const handleWrongCardClick = useCallback(() => {
    minusTime();
  }, [minusTime]);

  useEffect(() => {
    startGame();
    return () => stopGame();
  }, [startGame, stopGame]);

  useEffect(() => {
    if (time <= 0) {
      setStage(1);
      resetTime();
      resetPoint();
      alert(`스테이지: ${stage}, 점수: ${point}`); // TODO: 게임 끝 구현하기
    }
  }, [point, resetPoint, resetTime, stage, time]);

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
