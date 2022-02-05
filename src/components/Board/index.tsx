import React, { useMemo } from 'react';
import { Card } from '..';
import { Board as BoardProps } from './types';
import * as Styled from './styled';
import { BOARD_SIZE } from '../../constants';

function Board({ stage }: BoardProps): JSX.Element {
  const boardRow = useMemo(() => Math.round((stage + 0.5) / 2) + 1, [stage]);
  const cardAmount = useMemo(() => boardRow ** 2, [boardRow]);
  const cardSize = useMemo(() => BOARD_SIZE / (cardAmount / boardRow), [cardAmount, boardRow]);
  const answerCardIndex = useMemo(() => Math.floor(Math.random() * cardAmount), [cardAmount]);

  const cards = useMemo(
    () =>
      Array.from(Array(cardAmount), (_, index) =>
        answerCardIndex === index ? (
          <Card size={cardSize} key={index} />
        ) : (
          <Card size={cardSize} key={index} />
        ),
      ),
    [cardAmount, cardSize, answerCardIndex],
  );

  return <Styled.Board>{cards}</Styled.Board>;
}

export default React.memo(Board);
