import { useEffect, useState } from "react";
import styles from "./Users.module.scss";
import UserCard from "../../components/UserCard";
import { httpPOST } from "../../libs/http";
import { useSelector } from "react-redux";

const Users = () => {
  const myData = useSelector(state => state.user)
  const [peopleList, setPeopleList] = useState([]);

  useEffect(() => {
    httpPOST("/getusers", myData.roomId.friendlyWith).then((data) => setPeopleList(data));
  }, [myData.roomId.friendlyWith]);

  return (
    <div className={styles.main}>
      {peopleList.map(
        (user) => (
          !myData.roomId.matches.map(item => item.id).includes(user._id)
          && myData._id !== user._id
          && user.roomId.roomId === ''
          && <UserCard userInfo={user} key={user._id} />
        ))}
    </div>
  );
};

export default Users;
