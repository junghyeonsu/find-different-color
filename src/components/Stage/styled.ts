import styled from 'styled-components';
import { Stage as StageProps } from './types';

export const StageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Stage = styled.span`
  animation: ${(props: StageProps) => props.active && `bounce 0.3s infinite ease`};
  font-size: 56px;
  font-weight: bold;

  @keyframes bounce {
    0% {
      transform: scale(4);
    }
    40% {
      transform: scale(0.4);
    }
    60% {
      transform: scale(1.3);
    }
    80% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const StageText = styled.span`
  font-size: 30px;
`;
