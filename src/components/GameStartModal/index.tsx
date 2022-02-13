import { useCallback, useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal as ResponsiveModal } from 'react-responsive-modal';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import store from '../../utils/store';
import { userNameState } from '../../recoil/auth';
import { ModalProps } from './types';
import * as Styled from './styled';

function GameStartModal({ openModal, onCloseModal }: ModalProps) {
  const [nickname, setNickname] = useState<string>('');
  const [error, setError] = useState<string>('');
  const setUserName = useSetRecoilState<string>(userNameState);

  const navigate = useNavigate();

  const onClickStartButton = useCallback(() => {
    if (!nickname) {
      setError('닉네임을 입력해주세요!');
      return;
    }

    navigate('/play');
    setUserName(nickname);
    store.setSessionStorage('userName', nickname);
  }, [navigate, nickname, setUserName]);

  const onChangeNickName = useCallback(event => {
    setNickname(event.target.value);
  }, []);

  return (
    <ResponsiveModal open={openModal} onClose={onCloseModal} center>
      <Styled.Container>
        <Styled.Title>닉네임을 입력해주세요</Styled.Title>
        <Styled.Input value={nickname} onChange={onChangeNickName} />
        <Styled.Error>{error}</Styled.Error>
        <Styled.StartButton onClick={onClickStartButton}>시작하기</Styled.StartButton>
      </Styled.Container>
    </ResponsiveModal>
  );
}

export default GameStartModal;
