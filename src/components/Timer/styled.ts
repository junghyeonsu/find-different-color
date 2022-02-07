import styled from 'styled-components';
import { ProgressProps } from './types';

export const Container = styled.div`
  position: relative;
  width: 360px;
  height: 30px;
`;

export const Time = styled.p`
  color: white;
  z-index: 10;
`;

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #b5b5b5;
`;

export const Progress = styled.div`
  transition: 0.3s width ease;
  width: ${(props: ProgressProps) => (props.time / 15) * 100}%;
  height: 100%;
  position: absolute;
  background-color: black;
`;
