import styled from 'styled-components';
import { ProgressProps, ContainerProps } from './types';

export const Container = styled.div`
  animation: ${(props: ContainerProps) =>
    (props.time <= 5 || props.active) && `shake 0.3s infinite linear`};
  position: relative;
  width: 360px;
  height: 30px;

  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
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
