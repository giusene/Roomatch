import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Main from './Pages/Main';
import LoginPage from './Pages/LoginPage';


function App() {
  const loginStatus = useSelector(state => state.logged)

  return (
    <>
      <Routes>
        <Route path="*" element={loginStatus ? <Main /> : <LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
