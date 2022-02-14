import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal as ResponsiveModal } from 'react-responsive-modal';
import { Link } from 'react-router-dom';

import { ModalProps } from './types';
import * as Styled from './styled';
import JSUtility from '../../utils/JSUtility';

function GameOverModal({ point, stage, openModal, onCloseModal }: ModalProps) {
  return (
    <ResponsiveModal open={openModal} onClose={onCloseModal} center>
      <Styled.Container>
        <Styled.Title>Game Over</Styled.Title>
        <Styled.ResultContainer>
          <Styled.StageContainer>
            <Styled.Stage>{stage}</Styled.Stage>
            <Styled.StageText>스테이지</Styled.StageText>
          </Styled.StageContainer>
          <Styled.PointContainer>
            <Styled.Point>{JSUtility.includeCommaInNumber(point)}</Styled.Point>
            <Styled.PointText>point</Styled.PointText>
          </Styled.PointContainer>
        </Styled.ResultContainer>
        <Styled.ButtonContainer>
          <Styled.ReplayButton onClick={onCloseModal}>다시하기</Styled.ReplayButton>
          <Link to="/">
            <Styled.HomeButton>홈으로</Styled.HomeButton>
          </Link>
        </Styled.ButtonContainer>
      </Styled.Container>
    </ResponsiveModal>
  );
}

export default React.memo(GameOverModal);
