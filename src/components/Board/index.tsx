import React, { useMemo } from 'react';
import { Card } from '..';
import { Board as BoardProps } from './types';
import * as Styled from './styled';

function Board({ stage }: BoardProps): JSX.Element {
  const cardAmount = useMemo(() => (Math.round((stage + 0.5) / 2) + 1) ** 2, [stage]);
  const cards = useMemo(
    () => Array.from(Array(cardAmount), (_, i) => <Card cardAmount={cardAmount} key={i} />),
    [cardAmount],
  );

  return <Styled.Board>{cards}</Styled.Board>;
}

export default React.memo(Board);
