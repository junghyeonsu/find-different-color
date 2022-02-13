import { useEffect, useCallback, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { Board, Timer, Stage, Point, GameOverModal } from '../../components';
import useTimer, { TimerHookProps } from '../../hooks/useTimer';
import usePoint, { PointHookProps } from '../../hooks/usePoint';
import useStage, { StageHookProps } from '../../hooks/useStage';
import useFirestore, { FirestoreHookProps } from '../../hooks/useFirestore';
import { userNameState } from '../../recoil/auth';
import * as Styled from './styled';

function Play(): JSX.Element {
  const [openModal, setModalOpen] = useState<boolean>(false);
  const userName = useRecoilValue<string>(userNameState);
  const { addRecordInStore }: FirestoreHookProps = useFirestore();

  const {
    stage,
    animationActive: stageAnimationActive,
    clearStage,
    resetStage,
  }: StageHookProps = useStage();
  const {
    time,
    animationActive: timerAnimationActive,
    startTimer,
    stopTimer,
    resetTimer,
    minusTime,
  }: TimerHookProps = useTimer();
  const { point, resetPoint, scorePoint }: PointHookProps = usePoint();

  const handleAnswerCardClick = useCallback((): void => {
    clearStage();
    resetTimer();
    scorePoint(stage, time);
  }, [clearStage, resetTimer, scorePoint, stage, time]);

  const handleWrongCardClick = useCallback((): void => {
    minusTime();
  }, [minusTime]);

  const onOpenModal = useCallback((): void => {
    setModalOpen(true);
  }, []);

  const onCloseModal = useCallback((): void => {
    setModalOpen(false);
    resetStage();
    resetTimer();
    resetPoint();
    startTimer();
  }, [resetPoint, resetStage, resetTimer, startTimer]);

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [startTimer, stopTimer]);

  useEffect(() => {
    if (time < 0) {
      stopTimer();
      onOpenModal();
      addRecordInStore(stage, point);
    }
  }, [addRecordInStore, onOpenModal, point, stage, stopTimer, time]);

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
      <Styled.UserName>
        {userName}님
        <br />
        기록되고 있습니다!
      </Styled.UserName>
      <GameOverModal
        point={point}
        stage={stage}
        openModal={openModal}
        onCloseModal={onCloseModal}
      />
    </Styled.Container>
  );
}

export default Play;
