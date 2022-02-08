import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import { Home, Play } from './pages';

function App() {
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
