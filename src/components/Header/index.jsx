import styles from "./Header.module.scss";
import TopNav from "./../TopNav";
import { Link } from "react-router-dom";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { updateAction } from "../../store/actions";

const Header = () => {
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const updateUser = setInterval(() => {
  //     dispatch(
  //       updateAction({
  //         myId: user._id,
  //         token: user.token,
  //       })
  //     );
  //   }, 2000);

  //   return () => clearInterval(updateUser);
  // }, [dispatch, user._id, user.token]);

  return (
    <div className={styles.main}>
      <div className={styles.headerContainer}>
        <Link to={"/list"}>
          <h1 className={styles.logo}>ROOMATCH</h1>
        </Link>
        <TopNav />
      </div>
    </div>
  );
};

export default Header;
