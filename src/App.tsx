import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Play from './pages/Play';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/play" element={<Play />} />
    </Routes>
  );
}

export default App;
