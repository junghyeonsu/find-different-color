import { useCallback, useRef, useState } from 'react';
import { INITIAL_TIME, ONE_SECOND } from '../constants';

interface TimerHookProps {
  time: number;
  startGame: () => void;
  stopGame: () => void;
  resetTime: () => void;
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

  return { time, startGame, stopGame, resetTime };
}

export default useTimer;
