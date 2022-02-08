import 'react-responsive-modal/styles.css';
import { Modal as ResponsiveModal } from 'react-responsive-modal';
import { ModalProps } from './types';
import * as Styled from './styled';

function Modal({ point, stage, openModal, onCloseModal }: ModalProps) {
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
            <Styled.Point>{point}</Styled.Point>
            <Styled.PointText>point</Styled.PointText>
          </Styled.PointContainer>
        </Styled.ResultContainer>
        <Styled.ButtonContainer>
          <Styled.ReplayButton onClick={onCloseModal}>다시하기</Styled.ReplayButton>
          <Styled.HomeButton>홈으로</Styled.HomeButton>
        </Styled.ButtonContainer>
      </Styled.Container>
    </ResponsiveModal>
  );
}

export default Modal;
