import * as Styled from './styled';
import { Card as CardProps } from './types';

function Card({ cardAmount }: CardProps): JSX.Element {
  return <Styled.Card cardAmount={cardAmount}>Card</Styled.Card>;
}

export default Card;
