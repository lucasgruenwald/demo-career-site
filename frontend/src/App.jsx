import { Routes, Route } from 'react-router'
import LandingPage from './pages/landingPage';
import ConfirmationPage from './pages/confirmationPage';

const App = () => {

  return (
      <Routes>
        <Route path="/confirmation" element={<ConfirmationPage/>} />
        <Route path="*" element={<LandingPage/>} />
      </Routes>
  );
}

export default App;
