import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 70px;
  width: 300px;
  height: 360px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 45px;
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const StageContainer = styled.div`
  display: flex;
  align-items: baseline;
  column-gap: 10px;
`;

export const Stage = styled.span`
  font-size: 50px;
`;

export const StageText = styled.span``;

export const PointContainer = styled.div`
  display: flex;
  align-items: baseline;
  column-gap: 10px;
`;

export const Point = styled.span`
  font-size: 40px;
`;

export const PointText = styled.span``;

export const ButtonContainer = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const Button = styled.button`
  color: white;
  font-size: 20px;
  width: 140px;
  height: 50px;
  border: none;
  transition: 0.3s all ease;
`;

export const ReplayButton = styled(Button)`
  background-color: rgba(66, 73, 255, 1);

  :hover {
    background-color: rgba(66, 73, 255, 0.5);
    cursor: pointer;
  }
`;

export const HomeButton = styled(Button)`
  background-color: #4f4f4f;

  :hover {
    background-color: #b3b3b3;
    cursor: pointer;
  }
`;
