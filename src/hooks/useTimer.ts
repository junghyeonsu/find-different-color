import { useCallback, useRef, useState } from 'react';
import { INITIAL_TIME, ONE_SECOND } from '../constants';

export interface TimerHookProps {
  time: number;
  animationActive: boolean;
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: () => void;
  minusTime: () => void;
}

function useTimer(): TimerHookProps {
  const [time, setTime] = useState<number>(INITIAL_TIME);
  const [animationActive, setAnimationActive] = useState<boolean>(false);
  const intervalRef: { current: NodeJS.Timeout | null } = useRef(null);

  const startTimer = useCallback(() => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setTime(time => time - 1);
    }, ONE_SECOND);
  }, []);

  const stopTimer = useCallback(() => {
    if (intervalRef.current === null) return;

    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  const resetTimer = useCallback(() => {
    setTime(INITIAL_TIME);
  }, []);

  const minusTime = useCallback(() => {
    setTime(time - 3);
    setAnimationActive(true);
    setTimeout(() => {
      setAnimationActive(false);
    }, 100);
  }, [time]);

  return { time, animationActive, startTimer, stopTimer, resetTimer, minusTime };
}

export default useTimer;
