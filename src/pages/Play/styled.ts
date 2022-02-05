import styled from 'styled-components';

interface StageProps {
  active: boolean;
}

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const StageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Stage = styled.span`
  animation: ${(props: StageProps) => props.active && `scaleDown 0.4s infinite ease`};
  font-size: 56px;
  font-weight: bold;

  @keyframes scaleDown {
    0% {
      transform: scale(3);
    }
    30% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const StageText = styled.span`
  font-size: 30px;
`;

export const Point = styled.span`
  font-size: 40px;
`;
