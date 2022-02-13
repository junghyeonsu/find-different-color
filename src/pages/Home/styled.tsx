import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 5px;
  width: 100vw;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 50px;
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  color: rgba(0, 0, 0, 0.3);
`;

export const PlayButton = styled.button`
  width: 320px;
  height: 50px;
  background-color: rgba(66, 73, 255, 1);
  border: none;
  color: white;
  font-size: 20px;
  transition: 0.2s all ease;
  margin-top: 30px;

  :hover {
    cursor: pointer;
    background-color: rgba(66, 73, 255, 0.5);
  }
`;

export const RankButton = styled.button`
  width: 320px;
  height: 50px;
  background-color: #fd625c;
  border: none;
  color: white;
  font-size: 20px;
  transition: 0.2s all ease;

  :hover {
    cursor: pointer;
    background-color: #fd625c43;
  }
`;
