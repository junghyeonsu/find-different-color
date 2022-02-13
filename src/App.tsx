import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { Footer } from './components';
import { Home, Play, Rank } from './pages';
import store from './utils/store';
import { userNameState } from './recoil/auth';
import { USER_NAME } from './constants';
import useFirestore from './hooks/useFirestore';

function App() {
  const setUserName = useSetRecoilState(userNameState);
  const { getRecordsInStore } = useFirestore();

  useEffect(() => {
    const userName = store.getSessionStorage(USER_NAME);
    if (userName) setUserName(userName);

    getRecordsInStore();
  }, [getRecordsInStore, setUserName]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/rank" element={<Rank />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
