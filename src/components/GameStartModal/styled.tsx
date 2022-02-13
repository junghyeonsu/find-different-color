import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 300px;
  height: 270px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 30px;
`;

export const Input = styled.input`
  width: 90%;
  height: 30px;
`;

export const Error = styled.span`
  color: #fa4b4b;
`;

export const Button = styled.button`
  color: white;
  font-size: 20px;
  width: 92%;
  height: 50px;
  border: none;
  transition: 0.3s all ease;
`;

export const StartButton = styled(Button)`
  background-color: rgba(66, 73, 255, 1);

  :hover {
    background-color: rgba(66, 73, 255, 0.5);
    cursor: pointer;
  }
`;
