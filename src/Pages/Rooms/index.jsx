import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Rooms.module.scss";
import RoomCard from "../../components/RoomCard/RoomCard";
import { httpPOST } from "../../libs/http";
import CitiesFilter from "./../../components/CitiesFilter";

const Rooms = () => {
  const user = useSelector(state => state.user);
  const [roomsList, setRoomList] = useState([]);
  const [filter, setFilter] = useState({
    city: user.city,
    town: user.town,
  });

  useEffect(() => {
    httpPOST("/getrooms", user.iam).then(data => setRoomList(data));
  }, [user.iam]);

  return (
    <div className={styles.main}>
      <div className={styles.filter}>
        <CitiesFilter
          filter={filter}
          setFilter={setFilter}
          town={user.town}
          city={user.city}
        />
      </div>
      {roomsList.map(
        room =>
          !user.matches.map(item => item.roomId).includes(room._id) &&
          room.roomOwner !== user._id &&
          filter.city === room.city && <RoomCard room={room} key={room._id} />
      )}
    </div>
  );
};

export default Rooms;
