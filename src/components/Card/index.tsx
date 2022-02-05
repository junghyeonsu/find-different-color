import * as Styled from './styled';
import { Card as CardProps } from './types';

function Card({ size }: CardProps): JSX.Element {
  return <Styled.Card size={size} />;
}

export default Card;
