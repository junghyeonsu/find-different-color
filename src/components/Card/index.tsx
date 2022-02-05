import * as Styled from './styled';
import { Card as CardProps } from './types';

function Card({ size, color, onClick }: CardProps): JSX.Element {
  return <Styled.Card onClick={onClick} color={color} size={size} />;
}

export default Card;
