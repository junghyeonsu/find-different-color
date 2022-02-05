import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: blue;

  width: ${({ size }: { size: number }) => `${size}px`};
  width: ${({ size }: { size: number }) => `${size}px`};
  box-sizing: border-box;
  border: 0.5px white solid;
`;
