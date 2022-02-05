import React, { useState, useEffect } from 'react';
import AnimatedNumbers from 'react-animated-numbers';

import { Board, Timer, Stage } from '../../components';
import * as Styled from './styled';

function Play(): JSX.Element {
  const [count, setCount] = useState<number>(100000);
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
      setCount(prev => prev + 1);
    }, 1000);
  }, []);

  return (
    <Styled.Container>
      <Stage active={active} stage={stage} />
      <Timer />
      <Board />
      <Styled.Point>
        <AnimatedNumbers includeComma animateToNumber={count} />
      </Styled.Point>
    </Styled.Container>
  );
}

export default Play;
