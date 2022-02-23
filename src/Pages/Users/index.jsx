import { useEffect, useState } from "react";
import styles from "./Users.module.scss";
import UserCard from "../../components/UserCard";
import { httpPOST } from "../../libs/http";
import { useSelector } from "react-redux";
import CitiesFilter from "./../../components/CitiesFilter";
import PlaceHolder from "../../components/PlaceHolder";

const Users = () => {
  const myData = useSelector(state => state.user);
  const [peopleList, setPeopleList] = useState([]);
  const [result, setResult] = useState(false);
  const [filter, setFilter] = useState({
    city: myData.city,
    town: myData.town,
  });

  useEffect(() => {
    httpPOST("/getusers", myData.roomId.friendlyWith).then(data =>
      setPeopleList(data)
    );
  }, [myData.roomId.friendlyWith]);

  return (
    <div className={styles.main}>
      <div className={styles.filter}>
        <CitiesFilter
          filter={filter}
          setFilter={setFilter}
          setResult={setResult}
          town={myData.roomId.town}
          city={myData.roomId.city}
        />
      </div>
      {peopleList.map(
        user =>
          !myData.roomId.matches.map(item => item.id).includes(user._id) &&
          myData._id !== user._id &&
          user.roomId.roomId === "" &&
          filter.city === user.city && (
            <UserCard setResult={setResult} userInfo={user} key={user._id} />
          )
      )}
      {!result && <PlaceHolder />}
    </div>
  );
};

export default Users;
