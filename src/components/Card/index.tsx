import * as Styled from './styled';
import { Card as CardProps } from './types';

function Card({ size, color }: CardProps): JSX.Element {
  return <Styled.Card color={color} size={size} />;
}

export default Card;
