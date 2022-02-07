import { useEffect, useCallback } from 'react';
import { Board, Timer, Stage, Point } from '../../components';
import useTimer, { TimerHookProps } from '../../hooks/useTimer';
import usePoint, { PointHookProps } from '../../hooks/usePoint';
import useStage, { StageHookProps } from '../../hooks/useStage';
import * as Styled from './styled';

function Play(): JSX.Element {
  const {
    stage,
    animationActive: stageAnimationActive,
    clearStage,
    resetStage,
  }: StageHookProps = useStage();
  const {
    time,
    animationActive: timerAnimationActive,
    startGame,
    stopGame,
    resetTime,
    minusTime,
  }: TimerHookProps = useTimer();
  const { point, resetPoint, scorePoint }: PointHookProps = usePoint();

  const handleAnswerCardClick = useCallback(() => {
    clearStage();
    resetTime();
    scorePoint(stage, time);
  }, [clearStage, resetTime, scorePoint, stage, time]);

  const handleWrongCardClick = useCallback(() => {
    minusTime();
  }, [minusTime]);

  useEffect(() => {
    startGame();
    return () => stopGame();
  }, [startGame, stopGame]);

  useEffect(() => {
    if (time < 0) {
      resetStage();
      resetTime();
      resetPoint();
      // eslint-disable-next-line no-alert
      alert(`스테이지: ${stage}, 점수: ${point}`); // TODO: 게임 끝 구현하기
    }
  }, [point, resetPoint, resetStage, resetTime, stage, time]);

  return (
    <Styled.Container>
      <Stage active={stageAnimationActive} stage={stage} />
      <Timer active={timerAnimationActive} time={time} />
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
