import styles from "./Main.module.scss";
import { Routes, Route } from "react-router-dom";
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
import { useState } from "react";

const Main = () => {
  const user = useSelector(state => state.user);
  const [visible, setVisible] = useState(true);

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.mainContainer}>
        <Routes>
          <Route
            path="/list"
            element={user.roomId.roomId === "" ? <Rooms /> : <Users />}
          />
          <Route
            path="/"
            element={user.roomId.roomId === "" ? <Rooms /> : <Users />}
          />
          {/* <Route path="/rooms" element={<Rooms />} /> */}
          <Route path="/likes" element={<Likes />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<Users />} />
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
