import React, { useState, useEffect } from 'react';
import { Board, Timer, Stage, Point } from '../../components';
import * as Styled from './styled';

function Play(): JSX.Element {
  const [point, setPoint] = useState<number>(100000);
  const [stage, setStage] = useState<number>(1);
  const [active, setActive] = useState<boolean>(false);

  // const onClickButton = () => {
  //   setStage(stage + 1);
  //   setActive(true);
  //   setTimeout(() => {
  //     setActive(false);
  //   }, 100);
  // };

  useEffect(() => {
    setInterval(() => {
      setPoint(prev => prev + 1);
    }, 1000);
  }, []);

  return (
    <Styled.Container>
      <Stage active={active} stage={stage} />
      <Timer />
      <Board />
      <Point point={point} />
    </Styled.Container>
  );
}

export default Play;
