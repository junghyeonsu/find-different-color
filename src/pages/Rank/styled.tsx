import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
  width: 100vw;
`;

export const Title = styled.h1`
  font-size: 50px;
`;

export const HomeButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 55px;
  border: none;
  background-color: rgba(66, 73, 255, 0.1);
  color: rgba(66, 73, 255, 1);
  font-size: 20px;
  transition: 0.2s all ease;

  :hover {
    cursor: pointer;
    background-color: rgba(66, 73, 255, 1);
    border: 5px solid rgba(66, 73, 255, 1);
    color: white;
  }
`;

export const RankContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  row-gap: 10px;
`;

export const Row = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const Rank = styled.div``;

export const UserName = styled.div``;

export const Point = styled.div``;

export const Stage = styled.div``;
