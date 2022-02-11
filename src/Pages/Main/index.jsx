import styles from "./Main.module.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./../../components/Header";
import MainNav from "./../../components/MainNav";
import Rooms from "./../Rooms";
import Likes from "../Likes";
import Matches from "../Matches";
import Profile from "../Profile";

const Main = () => {
  return (
    <div className={styles.main}>
      <Header />
      <Routes>
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <MainNav />
    </div>
  );
};

export default Main;
