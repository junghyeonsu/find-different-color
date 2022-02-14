import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  margin: 30px;
  bottom: 0;
  right: 0;
`;

export const Name = styled.a`
  color: rgba(0, 0, 0, 0.3);
  transition: 0.3s color ease;

  :hover {
    color: rgba(66, 73, 255, 1);
  }
`;
