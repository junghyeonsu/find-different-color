import styled from 'styled-components';
import { BOARD_SIZE } from '../../constants';

export const Board = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: ${`${BOARD_SIZE}px`};
  height: ${`${BOARD_SIZE}px`};
  background-color: gray;
`;
