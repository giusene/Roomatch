import styles from "./Main.module.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./../../components/Header";
import MainNav from "./../../components/MainNav";
import Rooms from "./../Rooms";
import Likes from "../Likes";
import Matches from "../Matches";
import Profile from "../Profile";
import Users from "../Users";
import RoomDetails from "../RoomDetails";
import UserDetails from "../UserDetails";
import { useSelector } from "react-redux";
import NewRoom from "../NewRoom";
import Messages from "../Messages";
import EditRoom from "../EditRoom";
import { useState, useRef, useEffect } from "react";

const Main = () => {
  const user = useSelector(state => state.user);
  const [visible, setVisible] = useState(true);
  const container = useRef();
  const path = useLocation();

  useEffect(() => {
    container.current.scrollTo(0, 0);
  }, [path]);

  return (
    <div className={styles.main}>
      <Header />
      <div ref={container} className={styles.mainContainer}>
        <Routes>
          <Route
            path="/list"
            element={user.roomId.roomId === "" ? <Rooms /> : <Users />}
          />
          <Route
            path="/"
            element={user.roomId.roomId === "" ? <Rooms /> : <Users />}
          />
          <Route path="/likes" element={<Likes />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<Users />} />
          <Route path="/editroom" element={<EditRoom />} />
          <Route path="/roomdetails" element={<RoomDetails />} />
          <Route path="/userdetails" element={<UserDetails />} />
          <Route path="/addroom" element={<NewRoom />} />
          <Route
            path="/messages"
            element={<Messages setVisible={setVisible} />}
          />
        </Routes>
      </div>
      <MainNav visible={visible} />
    </div>
  );
};

export default Main;
