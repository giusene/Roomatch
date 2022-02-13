import { useEffect, useState } from "react";
import styles from "./Users.module.scss";
import UserCard from "../../components/UserCard";
import { httpGET } from "../../libs/http";
import { useSelector } from "react-redux";

const Users = () => {
  const myData = useSelector(state => state.user)
  const [peopleList, setPeopleList] = useState([]);

  useEffect(() => {
    httpGET("/users").then((data) => setPeopleList(data));
  }, []);

  return (
    <div className={styles.main}>
      {peopleList.map((user) => (
        myData._id !== user._id && user.roomId.roomId === '' &&
        <UserCard userInfo={user} key={user._id} />
      ))}
    </div>
  );
};

export default Users;
