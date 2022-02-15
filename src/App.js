import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import LandingPage from "./Pages/LandingPage";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.logged);

  useEffect(() => {
    window.localStorage.getItem("roomatch") &&
      dispatch({
        type: "LOCAL_STORAGE_USER_UPDATE",
        payload: JSON.parse(window.localStorage.getItem("roomatch")),
      });
  }, [dispatch]);

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
