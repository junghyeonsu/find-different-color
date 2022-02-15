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
    const trimNickName = nickname.trim();
    if (!trimNickName) {
      setError('닉네임을 입력해주세요!');
      return;
    }

    if (trimNickName.length > 10) {
      setError('닉네임은 10자 이하로 작성해주세요');
      setNickname('');
      return;
    }

    navigate('/play');
    setUserName(trimNickName);
    store.setSessionStorage('userName', trimNickName);
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
