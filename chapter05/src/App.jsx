import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './components/routing/Router';
import { AppProvider } from './components/providers/AppProvider';

const App = () => {
  return (
    <div className="App">
      <AppProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AppProvider>
    </div>
  );
};

export default App;
