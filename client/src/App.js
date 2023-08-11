import { Routes, Route } from 'react-router-dom';
import { useStore } from './store';

import Landing from './pages/Landing';
import Form from './pages/Form';


function App() {
  const { darkMode } = useStore();

  return (
    <main className={darkMode ? 'dark' : ''} >
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/form" element={<Form />} />
      </Routes>



    </main>
  );
}

export default App;