import {useStore} from './store';

// Pages
import Landing from './pages/Landing';
import Form from './pages/Form';

function App() {
  const {darkMode} = useStore();

  return (
    <main className={darkMode ? 'dark' : ''}>
      <Landing />
      <Form />
    </main>
  );
}

export default App;
