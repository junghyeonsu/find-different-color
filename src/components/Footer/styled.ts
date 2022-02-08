import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 40px;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const Name = styled.a`
  color: rgba(0, 0, 0, 0.3);
  transition: 0.3s color ease;

  :hover {
    color: rgba(66, 73, 255, 1);
  }
`;
