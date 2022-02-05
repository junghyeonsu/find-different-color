import React from 'react';
import AnimatedNumbers from 'react-animated-numbers';
import * as Styled from './styled';

interface PointProps {
  point: number;
}

function Point({ point }: PointProps): JSX.Element {
  return (
    <Styled.Point>
      <AnimatedNumbers includeComma animateToNumber={point} />
    </Styled.Point>
  );
}

export default Point;
