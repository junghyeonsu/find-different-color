import { useCallback, useRef, useState } from 'react';
import { INITIAL_TIME, ONE_SECOND } from '../constants';

export interface TimerHookProps {
  time: number;
  startGame: () => void;
  stopGame: () => void;
  resetTime: () => void;
  minusTime: () => void;
}

function useTimer(): TimerHookProps {
  const [time, setTime] = useState<number>(INITIAL_TIME);
  const intervalRef: { current: NodeJS.Timeout | null } = useRef(null);

  const startGame = useCallback(() => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setTime(time => time - 1);
    }, ONE_SECOND);
  }, []);

  const stopGame = useCallback(() => {
    if (intervalRef.current === null) return;

    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  const resetTime = useCallback(() => {
    setTime(INITIAL_TIME);
  }, []);

  const minusTime = useCallback(() => {
    setTime(time - 3);
  }, [time]);

  return { time, startGame, stopGame, resetTime, minusTime };
}

export default useTimer;
