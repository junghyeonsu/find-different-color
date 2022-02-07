import { useCallback, useState } from 'react';

export interface PointHookProps {
  point: number;
  resetPoint: () => void;
  scorePoint: (stage: number, time: number) => void;
}

function usePoint(): PointHookProps {
  const [point, setPoint] = useState<number>(0);

  const resetPoint = useCallback(() => {
    setPoint(0);
  }, []);

  const scorePoint = useCallback((stage, time) => {
    const point = stage ** 3 * time;
    setPoint(prevPoint => prevPoint + point);
  }, []);

  return { point, resetPoint, scorePoint };
}

export default usePoint;
