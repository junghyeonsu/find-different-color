import { useEffect, useCallback, useState } from 'react';
import { Board, Timer, Stage, Point } from '../../components';
import useTimer, { TimerHookProps } from '../../hooks/useTimer';
import usePoint, { PointHookProps } from '../../hooks/usePoint';
import useStage, { StageHookProps } from '../../hooks/useStage';
import Modal from '../../components/Modal';
import * as Styled from './styled';

function Play(): JSX.Element {
  const [openModal, setModalOpen] = useState<boolean>(false);

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

  const handleAnswerCardClick = useCallback((): void => {
    clearStage();
    resetTime();
    scorePoint(stage, time);
  }, [clearStage, resetTime, scorePoint, stage, time]);

  const handleWrongCardClick = useCallback((): void => {
    minusTime();
  }, [minusTime]);

  const onOpenModal = useCallback((): void => {
    setModalOpen(true);
  }, []);

  const onCloseModal = useCallback((): void => {
    setModalOpen(false);
    resetStage();
    resetTime();
    resetPoint();
    startGame();
  }, [resetPoint, resetStage, resetTime, startGame]);

  useEffect(() => {
    startGame();
    return () => stopGame();
  }, [startGame, stopGame]);

  useEffect(() => {
    if (time < 0) {
      stopGame();
      onOpenModal();
    }
  }, [onOpenModal, resetTime, stage, stopGame, time]);

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
      <Modal point={point} stage={stage} openModal={openModal} onCloseModal={onCloseModal} />
    </Styled.Container>
  );
}

export default Play;
