import styles from "./Main.module.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./../../components/Header";
import MainNav from "./../../components/MainNav";
import Rooms from "./../Rooms";
import Likes from "../Likes";
import Matches from "../Matches";
import Profile from "../Profile";
import Users from "../Users";
import RoomDetails from '../RoomDetails'
import { useSelector } from "react-redux";
import NewRoom from '../NewRoom'
import Messages from '../Messages'

const Main = () => {
  const user = useSelector(state => state.user)

  return (
    <div className={styles.main}>
      <Header />
      <Routes>
        <Route path="/list" element={user.roomId.roomId === '' ? <Rooms /> : <Users />} />
        {/* <Route path="/rooms" element={<Rooms />} /> */}
        <Route path="/likes" element={<Likes />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/users" element={<Users />} />
        <Route path="/roomdetails" element={<RoomDetails />} />
        <Route path="/addroom" element={<NewRoom />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
      <MainNav />
    </div>
  );
};

export default Main;

