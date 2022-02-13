import { useCallback, useState } from 'react';
import { GameStartModal } from '../../components';
import * as Styled from './styled';

function Home(): JSX.Element {
  const [openModal, setModalOpen] = useState<boolean>(false);

  const onOpenModal = useCallback((): void => {
    setModalOpen(true);
  }, []);

  const onCloseModal = useCallback((): void => {
    setModalOpen(false);
  }, []);

  return (
    <Styled.Container>
      <Styled.Title>다른 색깔 찾기</Styled.Title>
      <Styled.SubTitle>Numble Challenge</Styled.SubTitle>
      <Styled.PlayButton onClick={onOpenModal}>게임 시작</Styled.PlayButton>
      <GameStartModal openModal={openModal} onCloseModal={onCloseModal} />
    </Styled.Container>
  );
}

export default Home;
