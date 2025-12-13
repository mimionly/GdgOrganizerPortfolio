// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home.jsx';
import NotFound from './Pages/NotFound.jsx';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;