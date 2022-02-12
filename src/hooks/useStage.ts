import { useCallback, useState } from 'react';

export interface StageHookProps {
  stage: number;
  animationActive: boolean;
  clearStage: () => void;
  resetStage: () => void;
}

function useStage(): StageHookProps {
  const [stage, setStage] = useState<number>(1);
  const [animationActive, setAnimationActive] = useState<boolean>(false);

  const clearStage = useCallback(() => {
    setStage(prevStage => prevStage + 1);
    setAnimationActive(true);
    setTimeout(() => {
      setAnimationActive(false);
    }, 500);
  }, []);

  const resetStage = useCallback(() => {
    setStage(1);
  }, []);

  return { stage, animationActive, clearStage, resetStage };
}

export default useStage;
