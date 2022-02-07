import React, { useCallback, useMemo } from 'react';
import { Card } from '..';
import { Board as BoardProps } from './types';
import * as Styled from './styled';
import { BOARD_SIZE } from '../../constants';

function Board({ stage, handleAnswerCardClick, handleWrongCardClick }: BoardProps): JSX.Element {
  const boardRow = useMemo(() => Math.round((stage + 0.5) / 2) + 1, [stage]);
  const cardAmount = useMemo(() => boardRow ** 2, [boardRow]);
  const cardSize = useMemo(() => BOARD_SIZE / (cardAmount / boardRow), [cardAmount, boardRow]);
  const answerCardIndex = useMemo(
    () => Math.floor(Math.random() * (Math.round((stage + 0.5) / 2) + 1) ** 2),
    [stage],
  );
  const difficulty = useMemo(() => (100 - stage * 2 > 0 ? 100 - stage * 2 : 2), [stage]);

  const pickRandomColor = useCallback(() => Math.floor(Math.random() * 256), []);
  const pickAnswerRedColor = useCallback(
    red => (red > 100 ? red - difficulty : red + difficulty),
    [difficulty],
  );

  const colors = useMemo((): { wrong: string; answer: string } => {
    const red = pickRandomColor();
    const green = pickRandomColor();
    const blue = pickRandomColor();
    const answerRed = pickAnswerRedColor(red);

    return {
      wrong: `rgb(${red}, ${green}, ${blue})`,
      answer: `rgb(${answerRed}, ${green}, ${blue})`,
    };
  }, [pickRandomColor, pickAnswerRedColor]);

  const cards = useMemo(
    () =>
      Array.from(Array(cardAmount), (_, index) =>
        answerCardIndex === index ? (
          <Card
            onClick={handleAnswerCardClick}
            color={`${colors.answer}`}
            size={cardSize}
            key={index}
          />
        ) : (
          <Card
            onClick={handleWrongCardClick}
            color={`${colors.wrong}`}
            size={cardSize}
            key={index}
          />
        ),
      ),
    [
      cardAmount,
      answerCardIndex,
      handleAnswerCardClick,
      colors.answer,
      colors.wrong,
      cardSize,
      handleWrongCardClick,
    ],
  );

  return <Styled.Board>{cards}</Styled.Board>;
}

export default React.memo(Board);
