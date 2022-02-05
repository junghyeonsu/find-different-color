import styled from 'styled-components';
import { Card as CardProps } from './types';

export const Card = styled.div<CardProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${({ color }: { color: string }) => `${color}`};

  width: ${({ size }: { size: number }) => `${size}px`};
  height: ${({ size }: { size: number }) => `${size}px`};
  box-sizing: border-box;
  border: 0.5px white solid;

  :hover {
    cursor: pointer;
  }
`;
