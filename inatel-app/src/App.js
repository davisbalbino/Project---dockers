import './App.css';
import LoginPage from './pages/login_page/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
