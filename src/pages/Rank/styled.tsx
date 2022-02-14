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

export const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
`;

export const TitleContaienr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 50px;
`;

export const SubTitle = styled.h2`
  font-size: 18px;
  color: #b3b3b3;
`;

export const HomeButton = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 30px;
  transition: 0.3s all ease;
  object-fit: contain;
  padding: 20px;
  margin-top: 10px;

  :hover {
    cursor: pointer;
    background-color: #eeeeee;
  }
`;

export const Table = styled.table`
  width: 1024px;
  text-align: center;

  @media screen and (max-width: 1024px) {
    width: 100vw;
  }
`;

export const THead = styled.thead`
  background-color: rgba(66, 73, 255, 1);
  color: white;
  font-size: 18px;
  font-weight: bold;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export const THeadRow = styled.tr``;

export const TBody = styled.tbody``;

export const TBodyRow = styled.tr`
  font-size: 18px;
  border: 1px solid #eeeeee;
  transition: 0.3s background-color ease;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }

  :hover {
    background-color: #f8f8f8;
  }
`;

export const Rank = styled.td`
  width: 15%;
  padding: 20px 0px;
`;

export const UserName = styled.td`
  width: 30%;
  padding: 20px 0px;
  border-left: 1px solid #eeeeee;
`;

export const Stage = styled.td`
  width: 15%;
  padding: 20px 0px;
  border-left: 1px solid #eeeeee;
`;

export const Point = styled.td`
  width: 40%;
  padding: 20px 0px;
  border-left: 1px solid #eeeeee;
`;

export const RankerUserName = styled.td`
  width: 30%;
  padding: 30px 0px;
  border-left: 1px solid #eeeeee;
  font-weight: bold;
  font-size: 24px;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

export const RankerPoint = styled.td`
  width: 40%;
  padding: 30px 0px;
  border-left: 1px solid #eeeeee;
  font-weight: bold;
  font-size: 24px;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;
