import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/css/typography.css';
import './assets/css/spacing.css';
import Home from './pages/home';
import SimpleColorPicker from './pages/simple-color-picker';
import ImagesContainer from './pages/images-container';
import NumberToText from './pages/number-to-text';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simple-color-picker" element={<SimpleColorPicker />} />
        <Route path="/images-container" element={<ImagesContainer />} />
        <Route path="/number-to-text" element={<NumberToText />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
