import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import LandingPage from "./Pages/LandingPage";
import Registration from './Pages/Registration'
import Login from './Pages/Login'

function App() {
  const loginStatus = useSelector((state) => state.logged);

  return (
    <>
      <Routes>
        <Route path="*" element={loginStatus ? <Main /> : <LandingPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={loginStatus ? <Main /> : <Login />} />
      </Routes>
    </>
  );
}

export default App;
