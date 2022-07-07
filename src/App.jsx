import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import './App.css';
import './assets/css/typography.css';
import './assets/css/spacing.css';
import Home from './pages/home';

/* Refactor route to separate file */
const App = () =>
  useRoutes([
    {
      path: '/',
      element: <Home />,
    },
  ]);

function AppWrapper() {
  return (
    <Router>
      <main>
        <App />
      </main>
    </Router>
  );
}

export default AppWrapper;
