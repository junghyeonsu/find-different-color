import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { Footer } from './components';
import { Home, Play } from './pages';
import store from './utils/store';
import { userNameState } from './recoil/auth';

function App() {
  const setUserName = useSetRecoilState(userNameState);

  useEffect(() => {
    const userName = store.getSessionStorage('userName');
    if (userName) setUserName(userName);
  }, [setUserName]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
