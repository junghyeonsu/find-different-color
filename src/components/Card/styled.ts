import styled from 'styled-components';
import { Card as CardProps } from './types';

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: blue;

  width: ${(props: CardProps) => `${360 / (props.cardAmount / 2)}px`};
  height: ${(props: CardProps) => `${360 / (props.cardAmount / 2)}px`};
  box-sizing: border-box;
  border: 0.5px white solid;
`;
