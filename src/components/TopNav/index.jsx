import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./TopNav.module.scss";

import roomatch from "./../../libs/img/logo/roomatch_w.svg";
import roomatchFill from "./../../libs/img/logo/roomatchFill_w.svg";
import {
  BsChatRightDots,
  BsHeart,
  BsPerson,
  BsPersonFill,
  BsHeartFill,
  BsChatRightDotsFill,
} from "react-icons/bs";
import { useEffect, useState } from "react";

const TopNav = () => {
  const user = useSelector(state => state.user);
  const url = useLocation();
  const [notifies, setNotifies] = useState([]);

  useEffect(() => {
    if (Object.keys(user.messages).length > 0) {
      setNotifies(
        Object.keys(user.messages).filter(
          message =>
            !user.messages[message].discussion[
              user.messages[message].discussion.length - 1
            ].read
        )
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.newMatch.length, user.newLike.length, user.messages]);

  // useEffect(() => {
  //   // CheckNewMessages();
  // }, [user.messages, user.newMatch.length, user.newLike.length]);

  return (
    <div className={styles.main}>
      <ul>
        <Link to={"/list"}>
          <li>
            {url.pathname === "/list" ? (
              <img
                src={roomatchFill}
                style={{ height: 24, width: 24 }}
                alt="logo fill"
              />
            ) : (
              <img
                src={roomatch}
                style={{ height: 24, width: 24 }}
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
            {notifies.length + user.newMatch.length > 0 && (
              <span>{notifies.length + user.newMatch.length}</span>
            )}
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

export default TopNav;
