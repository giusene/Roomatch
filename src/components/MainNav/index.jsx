import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./MainNav.module.scss";

import roomatch from "./../../libs/img/logo/roomatch.svg";
import roomatchFill from "./../../libs/img/logo/roomatchFill.svg";
import {
  BsChatRightDots,
  BsHeart,
  BsPerson,
  BsPersonFill,
  BsHeartFill,
  BsChatRightDotsFill,
} from "react-icons/bs";

const MainNav = () => {
  const user = useSelector((state) => state.user);
  const url = useLocation();

  return (
    <div className={styles.main}>
      <ul>
        <Link to={"/list"}>
          <li>
            {url.pathname === "/list" ? (
              <img
                src={roomatchFill}
                style={{ height: 32, width: 32 }}
                alt="logo fill"
              />
            ) : (
              <img
                src={roomatch}
                style={{ height: 32, width: 32 }}
                alt="logo"
              />
            )}
          </li>
        </Link>
        <Link to={"/likes"}>
          <li>
            {user.newLike.length > 0 && <span>{user.newLike.length}</span>}
            {url.pathname === "/likes" ? <BsHeartFill /> : <BsHeart />}
          </li>
        </Link>
        <Link to={"/matches"}>
          <li>
            {user.newMatch.length > 0 && <span>{user.newMatch.length}</span>}
            {url.pathname === "/matches" ? (
              <BsChatRightDotsFill />
            ) : (
              <BsChatRightDots />
            )}
          </li>
        </Link>

        <Link to={"/profile"}>
          <li>
            {url.pathname === "/profile" ? <BsPersonFill /> : <BsPerson />}
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default MainNav;
